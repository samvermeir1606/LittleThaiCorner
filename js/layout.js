// Shared header, footer and mobile call button for every page.
// Each page sets <body data-page="..."> so the active nav link can be highlighted.
(() => {
    const PHONE = '0470965435';
    const PHONE_LABEL = '0470 96 54 35';
    const FACEBOOK = 'https://www.facebook.com/profile.php?id=100067801089031';

    const pages = [
        { id: 'home', href: 'index.html', label: 'Home' },
        { id: 'menu', href: 'menu.html', label: 'Menu' },
        { id: 'about', href: 'over-ons.html', label: 'Ons Verhaal' },
        { id: 'truck', href: 'foodtruck.html', label: 'Foodtruck' }
    ];
    const current = document.body.dataset.page;

    const navLinks = pages.map(p => {
        const active = p.id === current;
        return `<a href="${p.href}" class="whitespace-nowrap ${active ? 'text-amber-500' : 'hover:text-amber-500'}"${active ? ' aria-current="page"' : ''}>${p.label}</a>`;
    }).join('');

    const header = document.getElementById('site-header');
    header.className = 'sticky top-0 z-40';
    header.innerHTML = `
        <div class="px-4 py-3 md:px-8 md:py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-3 bg-stone-900 border-b border-stone-800">
            <a href="index.html" class="text-2xl md:text-3xl font-bold text-stone-100 tracking-tight font-display text-center md:text-left">Little Thai Corner</a>
            <nav class="flex items-center justify-center gap-5 md:gap-6 text-xs md:text-sm font-semibold uppercase tracking-widest overflow-x-auto no-scrollbar">
                ${navLinks}
                <a href="tel:${PHONE}" class="hidden md:inline-block bg-amber-600 text-white px-5 py-2 rounded-sm hover:bg-amber-700">Bel: ${PHONE_LABEL}</a>
            </nav>
        </div>`;

    // Other sticky bars (like the menu categories) sit right below the header
    const updateHeaderHeight = () => document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    updateHeaderHeight();
    new ResizeObserver(updateHeaderHeight).observe(header);

    document.getElementById('site-footer').innerHTML = `
        <div class="py-12 pb-28 md:pb-12 bg-stone-950 text-stone-500 text-center border-t border-stone-800">
            <p class="text-lg font-bold text-stone-300 mb-2">Little Thai Corner</p>
            <p>Koning Boudewijnlaan 13, 9200 Dendermonde</p>
            <p><a href="tel:${PHONE}" class="hover:text-amber-500">${PHONE_LABEL}</a></p>
            <p class="my-4"><a href="${FACEBOOK}" target="_blank" rel="noopener" class="hover:text-amber-500">Volg ons op Facebook</a></p>
        </div>
        <a href="tel:${PHONE}" class="md:hidden fixed bottom-4 left-4 right-4 bg-amber-600 text-white text-center py-4 rounded-full font-bold shadow-2xl z-40">
            Bel om te bestellen
        </a>`;
})();
