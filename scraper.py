import os
import json
import time
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

class RestaurantVisualScraper:
    def __init__(self, start_url, output_dir="restaurant_data"):
        self.start_url = start_url
        self.domain = urlparse(start_url).netloc
        self.output_dir = output_dir
        self.assets_dir = os.path.join(output_dir, "scraped_assets")
        
        self.visited_urls = set()
        self.urls_to_crawl = [start_url]
        
        self.master_data = {
            "restaurant_name": "",
            "base_domain": self.domain,
            "pages": {}
        }
        
        os.makedirs(self.assets_dir, exist_ok=True)

    def is_internal_url(self, url):
        parsed_url = urlparse(url)
        return parsed_url.netloc == self.domain or parsed_url.netloc == ""

    def clean_url(self, url):
        return urlparse(url)._replace(fragment="").geturl()

    def crawl_site(self):
        print(f"[*] Launching browser context for domain crawl: {self.start_url}")
        
        with sync_playwright() as p:
            # Launch headless browser
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1440, "height": 900})
            page = context.new_page()
            
            img_counter = 0
            page_counter = 0

            while self.urls_to_crawl:
                current_url = self.clean_url(self.urls_to_crawl.pop(0))
                
                if current_url in self.visited_urls:
                    continue
                    
                print(f" -> Processing & Visualizing Page: {current_url}")
                self.visited_urls.add(current_url)

                try:
                    # Navigate via browser engine
                    page.goto(current_url, wait_until="networkidle", timeout=20000)
                    html_content = page.content()
                except Exception as e:
                    print(f" [!] Error rendering page frame via browser {current_url}: {e}")
                    continue

                soup = BeautifulSoup(html_content, 'html.parser')
                
                if not self.master_data["restaurant_name"] and soup.title:
                    self.master_data["restaurant_name"] = soup.title.string.strip()

                page_path = urlparse(current_url).path or "/"
                safe_page_name = page_path.replace("/", "_").strip("_") or "home"
                
                # Take Full-Page Layout Screenshot
                screenshot_filename = f"layout_snap_{safe_page_name}.png"
                screenshot_filepath = os.path.join(self.assets_dir, screenshot_filename)
                
                try:
                    page.screenshot(path=screenshot_filepath, full_page=True)
                    print(f"   [+] Layout screenshot captured: {screenshot_filename}")
                except Exception as ss_e:
                    print(f"   [!] Failed to snap screenshot: {ss_e}")

                page_info = {
                    "url": current_url,
                    "layout_screenshot": f"./scraped_assets/{screenshot_filename}",
                    "headings": [],
                    "paragraphs": [],
                    "extracted_images": []
                }

                # 1. Text Parsing
                for heading in soup.find_all(['h1', 'h2', 'h3', 'h4']):
                    text = heading.get_text(strip=True)
                    if text:
                        page_info["headings"].append({"tag": heading.name, "text": text})

                for p_tag in soup.find_all('p'):
                    text = p_tag.get_text(strip=True)
                    if text and len(text) > 10:
                        page_info["paragraphs"].append(text)

                # 2. Image Asset Download Pipeline 
                for img in soup.find_all('img'):
                    src = img.get('src')
                    if not src:
                        continue
                    
                    img_url = urljoin(current_url, src)
                    alt_text = img.get('alt', '').strip() or f"asset"
                    
                    parsed_img_url = urlparse(img_url)
                    base_name = os.path.basename(parsed_img_url.path)
                    if not base_name or '.' not in base_name:
                        base_name = "asset.jpg"

                    local_filename = f"img_{img_counter}_{base_name}"
                    local_filepath = os.path.join(self.assets_dir, local_filename)

                    # Download binary file via browser content requests safely
                    try:
                        with context.expect_page() as _:
                            img_page = context.new_page()
                            img_response = img_page.request.get(img_url)
                            if img_response.status == 200:
                                with open(local_filepath, 'wb') as f:
                                    f.write(img_response.body())
                                page_info["extracted_images"].append({
                                    "original_url": img_url,
                                    "local_path": f"./scraped_assets/{local_filename}",
                                    "alt_text": alt_text
                                })
                                img_counter += 1
                            img_page.close()
                    except:
                        pass

                self.master_data["pages"][page_path] = page_info

                # 3. Discover links for recursive domain traversal
                for link in soup.find_all('a'):
                    href = link.get('href')
                    if not href:
                        continue
                    
                    absolute_link = urljoin(current_url, href)
                    cleaned_link = self.clean_url(absolute_link)

                    if self.is_internal_url(cleaned_link) and cleaned_link not in self.visited_urls:
                        if cleaned_link not in self.urls_to_crawl:
                            self.urls_to_crawl.append(cleaned_link)

                page_counter += 1
                time.sleep(1) # Graceful pacing execution

            browser.close()

        # Save configuration index tree
        json_path = os.path.join(self.output_dir, "scraped_data.json")
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(self.master_data, f, indent=4, ensure_ascii=False)

        print(f"\n[+] Processing Completed! Pages Evaluated: {page_counter}")
        print(f"[+] Look at '{self.assets_dir}' for your site layout png snapshots and design cues.")

if __name__ == "__main__":
    # Update with your restaurant web address link
    TARGET_SITE = "https://www.little-thai-corner.be/"
    
    scraper = RestaurantVisualScraper(TARGET_SITE)
    scraper.crawl_site()