document.addEventListener('DOMContentLoaded', () => {
    // Every dish has its own photo; dishes that come with a choice of meat (e.g. Kung / Ped)
    // are listed as separate cards with the same number so each one can show its own photo.
    // "spicy": true shows a pepper next to the name.
    const IMG = 'assets/menu/';

    const menuData = {
        "STARTERS": {
            "note": "Inclusief chilisausje",
            "items": [
                {"id": "1", "name": "Pho Pia Kai", "price": "8.50 €", "image": "assets/img_4_dfc79a4bdf256883447c658253e5cd16_400x400.jpg", "description": "Huisgemaakte loempia met kip, soja, worteltjes, kool en Thaise kruiden 5 pcs"},
                {"id": "2", "name": "Pho Pia Vegan", "price": "8.00 €", "image": IMG + "2.jpg", "description": "Mini loempia met soja, worteltjes, kool en kruiden 10 pcs"},
                {"id": "3", "name": "Kai Sate", "price": "8.00 €", "image": IMG + "3-sate.jpg", "description": "Huisgemaakte kipspiesjes in curry marinade 3 pcs"},
                {"id": "3", "name": "Kai Yakitori", "price": "8.00 €", "image": IMG + "3-yakitori.jpg", "description": "Kip teriyaki 7 pcs"},
                {"id": "4", "name": "Kung Hom Pha", "price": "9.00 €", "image": IMG + "4.jpg", "description": "Huisgemaakte scampi-rolletjes in bladerdeeg 5 pcs"},
                {"id": "5", "name": "Scampi Tempura", "price": "8.50 €", "image": IMG + "5.jpg", "description": "Scampi-rolletjes in tempuradeeg 6 pcs"},
                {"id": "6", "name": "Thod Man Kai", "price": "9.00 €", "image": IMG + "6.jpg", "description": "Zelfbereide Thaise koekjes met kip, rode curry, groene boontjes, limoenblad en eieren 5 pcs"},
                {"id": "7", "name": "Thod Man Kung", "price": "9.50 €", "image": IMG + "7.jpg", "description": "Zelfbereide garnaalkoekjes met Thaise kruiden, tempura, look, koriander en peper 5 pcs"},
                {"id": "8", "name": "Kha Nom Jeep", "price": "8.00 €", "image": IMG + "8.jpg", "description": "Thaise dumplings gevuld met kip, vlees en garnaal, gestoomd in een bamboestomer 6 pcs"},
                {"id": "9", "name": "Thai Vegan Samosas", "price": "8.00 €", "image": IMG + "9.jpg", "description": "Driehoekige flapjes gevuld met aardappel, ui, chili, look en gember 10 pcs"},
                {"id": "10", "name": "Starter Mix", "price": "17.00 €", "image": IMG + "10.jpg", "description": "10 stuks: loempia, scampirol, scampi tempura, garnaalkoekjes, kipkoekjes en kipspiesjes"},
                {"id": "10a", "name": "Starter Mix XL", "price": "24.00 €", "image": IMG + "10a.jpg", "description": "15 stuks: loempia, scampirol, scampi tempura, garnaalkoekjes, kipkoekjes en kipspiesjes"}
            ]
        },
        "SOEPEN": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "11", "name": "Tom Ka Kai / Vegan", "price": "17.00 €", "image": "assets/img_15_7716f084a8a0ca124a552a85aeece9ae_400x400.jpg", "description": "Soep met kip, kokosmelk, champignons, galanga, koriander & citroengras, of naar keuze met tofu indien vegan"},
                {"id": "12", "name": "Tom Yam Kung", "price": "18.00 €", "image": IMG + "12.jpg", "spicy": true, "description": "Pittige soep met scampi's, citroengras, limoen, champignons, koriander, galanga en ui"}
            ]
        },
        "CURRY SCHOTELS": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "13", "name": "Panaeng Moo / Kai", "price": "18.00 €", "image": IMG + "13.jpg", "spicy": true, "description": "Varkensvlees of kip in een romige, mild pittige variant van rode curry, met kokosmelk, paprika, bamboescheuten, limoen en Thaise kruiden"},
                {"id": "14", "name": "Panaeng Kung", "price": "19.00 €", "image": IMG + "14-kung.jpg", "spicy": true, "description": "Scampi's in een romige, mild pittige variant van rode curry, met kokosmelk, paprika, bamboescheuten, citroenblad en Thaise kruiden"},
                {"id": "14", "name": "Panaeng Ped", "price": "19.00 €", "image": IMG + "14-ped.jpg", "spicy": true, "description": "Eend in een romige, mild pittige variant van rode curry, met kokosmelk, paprika, bamboescheuten, citroenblad en Thaise kruiden"},
                {"id": "15", "name": "Kaeng Kheaw Waan Ped", "price": "19.00 €", "image": IMG + "15.jpg", "spicy": true, "description": "Eend in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "16", "name": "Kaeng Kheaw Waan Kai / Moo", "price": "18.00 €", "image": IMG + "16.jpg", "spicy": true, "description": "Kip of varkensvlees in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "17", "name": "Kaeng Massaman Nua", "price": "20.00 €", "image": IMG + "17.jpg", "description": "Rundsvlees in kokosmelk met massaman curry, aardappel, uien, pinda's en Thaise kruiden. Ook met eend (19.00 €)"},
                {"id": "18", "name": "Kaeng Massaman Moo / Kai", "price": "18.00 €", "image": IMG + "18.jpg", "description": "Varkensvlees of kip in kokosmelk met massaman curry, aardappel, uien, pinda's en Thaise kruiden"},
                {"id": "19", "name": "Kai Phad Pong Karee", "price": "18.00 €", "image": IMG + "19-kai.jpg", "description": "Kip in gele curry met selder, rode paprika, lente-uitjes, kokosmelk, ei en Thaise chilipasta"},
                {"id": "19", "name": "Kung Phad Pong Karee", "price": "19.00 €", "image": IMG + "19-kung.jpg", "description": "Scampi's in gele curry met selder, rode paprika, lente-uitjes, kokosmelk, ei en Thaise chilipasta"},
                {"id": "19", "name": "Talay Phad Pong Karee", "price": "22.00 €", "image": IMG + "19-talay.jpg", "description": "Zeevruchten in gele curry met selder, rode paprika, lente-uitjes, kokosmelk, ei en Thaise chilipasta"}
            ]
        },
        "THAI WOK": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "20", "name": "Phad Krapouw Moo / Kai", "price": "18.00 €", "image": IMG + "20.jpg", "spicy": true, "description": "Wokgerecht met varkensvlees of kip in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "21", "name": "Phad Krapouw Nua", "price": "20.00 €", "image": IMG + "21.jpg", "spicy": true, "description": "Wokgerecht met rund in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "22", "name": "Phad Krapouw Talay", "price": "22.00 €", "image": IMG + "22.jpg", "spicy": true, "description": "Wok van zeevruchten in een pikante mengeling van Thaise holy basil, chili en look. Met scampi's: 19.00 €"},
                {"id": "23", "name": "Moo Tot Kratiem Prik Thai", "price": "18.00 €", "image": IMG + "23.jpg", "spicy": true, "description": "Pittig kruidig wokgerecht met varkensvlees of kip, sojasaus, oestersaus, zwarte peper en look"},
                {"id": "24", "name": "Nua Phad King", "price": "20.00 €", "image": IMG + "24.jpg", "description": "Groentewok met oestersaus, rundsvlees, gember, rode en groene paprika en ajuin"},
                {"id": "25", "name": "Kung Phad King", "price": "19.00 €", "image": IMG + "25-kung.jpg", "description": "Groentewok met oestersaus, scampi, gember, rode en groene paprika en ajuin"},
                {"id": "25", "name": "Ped Phad King", "price": "19.00 €", "image": IMG + "25-ped.jpg", "description": "Groentewok met oestersaus, eend, gember, rode en groene paprika en ajuin"},
                {"id": "26", "name": "Kai / Moo Phad King", "price": "18.00 €", "image": IMG + "26.jpg", "description": "Groentewok met oestersaus, kip of varkensvlees, gember, rode en groene paprika en ajuin"},
                {"id": "27", "name": "Kai / Moo Phad Kratiam", "price": "18.00 €", "image": IMG + "27.jpg", "description": "Wok met kip of varkensvlees, look, soja, groene en rode paprika, courgette, korianderwortel, peper en vissaus. Ook mogelijk met eend (19.00 €)"},
                {"id": "28", "name": "Phad Pak Kung / Ped", "price": "19.00 €", "image": IMG + "28.jpg", "description": "Groentewok met scampi of eend, broccoli, bloemkool, boontjes, wortel en courgette. Ook mogelijk met rundsvlees (20.00 €)"},
                {"id": "29", "name": "Phad Pak Moo / Kai", "price": "18.00 €", "image": IMG + "29.jpg", "description": "Groentewok met varkensvlees of kip, broccoli, bloemkool, boontjes, wortel en courgette. Ook mogelijk met rundsvlees of eend (19.00 €)"},
                {"id": "30", "name": "Kung Phad Pit Pauw", "price": "19.00 €", "image": IMG + "30-kung.jpg", "description": "Wokgerecht met scampi, lente-ui, koriander, Thaise sweet chilipasta en basilicum. Ook mogelijk met rundsvlees (20.00 €), varkensvlees of kip (18.00 €)"},
                {"id": "30", "name": "Ped Phad Pit Pauw", "price": "19.00 €", "image": IMG + "30-ped.jpg", "description": "Wokgerecht met eend, lente-ui, koriander, Thaise sweet chilipasta en basilicum. Ook mogelijk met rundsvlees (20.00 €), varkensvlees of kip (18.00 €)"},
                {"id": "31", "name": "Phad Prieuw Waan Ped / Kung", "price": "19.00 €", "image": IMG + "31.jpg", "description": "Zoetzuur wokgerecht met eend of scampi's, komkommer, ananas, tomaten, paprika, lente-uitjes en broccoli"},
                {"id": "32", "name": "Phad Prieuw Waan Moo / Kai", "price": "18.00 €", "image": IMG + "32.jpg", "description": "Zoetzuur wokgerecht met varkensvlees of kip, komkommer, ananas, tomaten, paprika, lente-uitjes en broccoli"},
                {"id": "33", "name": "Kai Phad Med Mamuang", "price": "18.00 €", "image": IMG + "33.jpg", "description": "Wokgerecht met kip, look, lente-ui en geroosterde noten. Ook mogelijk met varkensvlees"},
                {"id": "34", "name": "Nua Phad Prik Thai Dum", "price": "20.00 €", "image": IMG + "34.jpg", "description": "Gewokte groenten met rundsvlees, paprika, lente-ui, zwarte peper en oestersaus. Ook mogelijk met kip, varkensvlees (18.00 €) of eend (19.00 €)"}
            ]
        },
        "NOEDELGERECHTEN": {
            "items": [
                {"id": "35", "name": "Phad Thai Kai / Moo", "price": "17.00 €", "image": IMG + "35.jpg", "description": "Roergebakken rijstnoedels met kip of varkensvlees, lente-ui, soja, pinda's, ei en tamarinde"},
                {"id": "36", "name": "Phad Thai Kung", "price": "18.00 €", "image": IMG + "36-kung.jpg", "description": "Roergebakken rijstnoedels met scampi, lente-ui, tofu, soja, pinda's, ei en tamarinde"},
                {"id": "36", "name": "Phad Thai Ped", "price": "18.00 €", "image": IMG + "36-ped.jpg", "description": "Roergebakken rijstnoedels met eend, lente-ui, tofu, soja, pinda's, ei en tamarinde"},
                {"id": "37", "name": "Phad Thai Vegan", "price": "17.00 €", "image": IMG + "37.jpg", "description": "Roergebakken rijstnoedels met tofu, lente-ui, soja, pinda's en tamarinde"},
                {"id": "38", "name": "Bami met kip", "price": "17.00 €", "image": IMG + "38.jpg", "description": "Roergebakken eiernoedels met kip, lente-ui, soja, wortel en ajuin"}
            ]
        },
        "GEBAKKEN RIJSTGERECHTEN": {
            "items": [
                {"id": "39", "name": "Khao Phad Moo / Kai", "price": "18.00 €", "image": IMG + "39.jpg", "description": "Thaise gebakken rijst met varkensvlees of kip, ei, lente-ui en wortel"},
                {"id": "40", "name": "Khao Phad Kung", "price": "19.00 €", "image": IMG + "40-kung.jpg", "description": "Thaise gebakken rijst met scampi's, ei, lente-ui en wortel. Ook mogelijk met zeevruchten of rund (20.00 €)"},
                {"id": "40", "name": "Khao Phad Ped", "price": "19.00 €", "image": IMG + "40-ped.jpg", "description": "Thaise gebakken rijst met eend, ei, lente-ui en wortel. Ook mogelijk met zeevruchten of rund (20.00 €)"}
            ]
        },
        "SALADES": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "41", "name": "Laab Ped", "price": "19.00 €", "image": IMG + "41.jpg", "spicy": true, "description": "Pittige Thaise salade met gehakte eend, lemon, munt en Thaise kruiden"},
                {"id": "42", "name": "Laab Moo / Kai", "price": "18.00 €", "image": IMG + "42.jpg", "spicy": true, "description": "Pittige Thaise salade met gehakt varkensvlees of kip, lemon, munt en Thaise kruiden"},
                {"id": "43", "name": "Laab Nua", "price": "20.00 €", "image": IMG + "43.jpg", "spicy": true, "description": "Pittige Thaise salade met gehakt rundsvlees, lemon, munt en Thaise kruiden"},
                {"id": "44", "name": "Nam Tok Nua", "price": "20.00 €", "image": IMG + "44.jpg", "description": "In fijne reepjes gesneden rundsvlees met rode ui, Thaise kruiden en limoensap"}
            ]
        },
        "VEGAN & EXTRA": {
            "note": "Op uw vraag kan je alle gerechten met kip uit dit menu vervangen door tofu",
            "items": [
                {"id": "45", "name": "Phad Pak Ruam Mit Tofu", "price": "17.00 €", "image": IMG + "45.jpg", "description": "Groentewok met tofu, broccoli, bloemkool, boontjes, wortel en courgette"},
                {"id": "46", "name": "Extra Thai jasmijnrijst", "price": "3.00 €", "image": IMG + "46.jpg", "description": "Extra portie Thai jasmijnrijst (500 cc). Ook mogelijk: pindanotensaus of chilisaus à 1.00 €"},
                {"id": "47", "name": "Rijst vervangen door gebakken rijst", "price": "7.00 €", "image": IMG + "47-rijst.jpg", "description": "Ter vervanging van de rijst bij uw gerecht, enkel als dubbele portie (1000 cc). Niet ter vervanging (extra): 10.00 €"},
                {"id": "47", "name": "Rijst vervangen door noedels", "price": "7.00 €", "image": IMG + "47-noedels.jpg", "description": "Ter vervanging van de rijst bij uw gerecht, enkel als dubbele portie (1000 cc). Niet ter vervanging (extra): 10.00 €"}
            ]
        }
    };

    // Menu carousel: one long horizontal track with every dish of every category.
    // Swiping past the last dish of a category continues into the next one, and the
    // category bar on top follows along. Tapping a category jumps to its first dish.
    const tabsContainer = document.getElementById('menu-tabs');
    const track = document.getElementById('menu-track');
    const categoryNote = document.getElementById('category-note');
    const counter = document.getElementById('menu-counter');
    const prevButton = document.getElementById('menu-prev');
    const nextButton = document.getElementById('menu-next');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    const TAB_BASE = 'flex-shrink-0 px-4 py-2 rounded-sm font-semibold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 whitespace-nowrap';
    const TAB_ACTIVE = 'bg-amber-600 text-white';
    const TAB_INACTIVE = 'bg-stone-900 text-stone-200 border border-stone-800 hover:border-amber-600';

    const categories = Object.keys(menuData);
    const tabButtons = {};
    const cards = [];
    let activeCategory = null;
    let suppressScrollSyncUntil = 0;

    function renderTabs() {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `${TAB_BASE} ${TAB_INACTIVE}`;
            button.textContent = category;
            button.onclick = () => scrollToCategory(category);
            tabsContainer.appendChild(button);
            tabButtons[category] = button;
        });
    }

    function renderCards() {
        categories.forEach(category => {
            const items = menuData[category].items;
            items.forEach((item, index) => {
                const image = item.image
                    ? `<img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover cursor-zoom-in" onclick="openLightbox('${item.image}')">`
                    : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
                           <span class="font-display text-7xl text-amber-600/40">${item.id}</span>
                       </div>`;

                const card = document.createElement('article');
                card.className = 'flex-shrink-0 basis-[85%] sm:basis-[46%] lg:basis-[31%] snap-start bg-stone-900 rounded border border-stone-800 overflow-hidden flex flex-col';
                card.dataset.category = category;
                card.dataset.position = `${index + 1} / ${items.length}`;
                card.innerHTML = `
                    <div class="aspect-[4/3] sm:aspect-square">${image}</div>
                    <div class="p-5 flex flex-col flex-grow">
                        <p class="text-xs uppercase tracking-widest text-stone-500 mb-2">${category}</p>
                        <div class="flex justify-between items-baseline gap-3 mb-2">
                            <h3 class="font-bold text-xl text-stone-100"><span class="text-amber-600 mr-2">${item.id}.</span>${item.name}${item.spicy ? ' <span title="Pikant" aria-label="Pikant">🌶️</span>' : ''}</h3>
                            <span class="font-semibold text-amber-500 whitespace-nowrap">${item.price}</span>
                        </div>
                        <p class="text-sm text-stone-400 italic">${item.description}</p>
                    </div>
                `;
                track.appendChild(card);
                cards.push(card);
            });
        });
    }

    function setActiveCategory(category) {
        if (category === activeCategory) return;
        activeCategory = category;

        categories.forEach(c => {
            tabButtons[c].className = `${TAB_BASE} ${c === category ? TAB_ACTIVE : TAB_INACTIVE}`;
        });

        // Keep the active category centred in the bar; the browser clamps this at both ends
        const button = tabButtons[category];
        tabsContainer.scrollTo({
            left: button.offsetLeft - (tabsContainer.clientWidth - button.offsetWidth) / 2,
            behavior: 'smooth'
        });

        const note = menuData[category].note;
        categoryNote.textContent = note || '';
        categoryNote.classList.toggle('invisible', !note);
    }

    // The current dish is the first card whose middle is past the left edge of the track
    function currentCardIndex() {
        const left = track.scrollLeft;
        const index = cards.findIndex(card => card.offsetLeft + card.offsetWidth / 2 > left);
        return index === -1 ? cards.length - 1 : index;
    }

    function syncWithScroll() {
        const index = currentCardIndex();
        const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
        const card = atEnd ? cards[cards.length - 1] : cards[index];

        counter.textContent = `${cards[index].dataset.category.toLowerCase()} · ${cards[index].dataset.position}`;
        prevButton.disabled = track.scrollLeft <= 2;
        nextButton.disabled = atEnd;

        if (Date.now() >= suppressScrollSyncUntil) {
            setActiveCategory(card.dataset.category);
        }
    }

    function scrollToCard(card) {
        track.scrollTo({ left: card.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft), behavior: 'smooth' });
    }

    function scrollToCategory(category) {
        // Avoid flashing every category in between while the track scrolls past them
        suppressScrollSyncUntil = Date.now() + 700;
        setActiveCategory(category);
        scrollToCard(cards.find(card => card.dataset.category === category));
    }

    function step(direction) {
        const target = cards[Math.min(Math.max(currentCardIndex() + direction, 0), cards.length - 1)];
        scrollToCard(target);
    }

    // Let mouse users drag the horizontal scrollers like on a phone. Touch already
    // scrolls natively, so only mouse pointers are handled here.
    function enableDragScroll(scroller, onRelease) {
        let dragging = false;
        let moved = false;
        let startX = 0;
        let startScroll = 0;

        scroller.addEventListener('pointerdown', event => {
            if (event.pointerType !== 'mouse' || event.button !== 0) return;
            dragging = true;
            moved = false;
            startX = event.clientX;
            startScroll = scroller.scrollLeft;
        });

        scroller.addEventListener('pointermove', event => {
            if (!dragging) return;
            const distance = event.clientX - startX;
            if (!moved) {
                if (Math.abs(distance) < 5) return;
                moved = true;
                scroller.setPointerCapture(event.pointerId);
                // Snapping fights a manual drag, so switch it off until release
                scroller.style.scrollSnapType = 'none';
                scroller.classList.add('cursor-grabbing');
            }
            scroller.scrollLeft = startScroll - distance;
        });

        const endDrag = event => {
            if (!dragging) return;
            dragging = false;
            if (!moved) return;
            scroller.classList.remove('cursor-grabbing');
            if (onRelease) onRelease(event.clientX - startX);
            // Give the smooth scroll time to land before snapping takes over again
            setTimeout(() => {
                if (!dragging) scroller.style.scrollSnapType = '';
            }, 600);
        };
        scroller.addEventListener('pointerup', endDrag);
        scroller.addEventListener('pointercancel', endDrag);

        // A drag shouldn't also count as a click on a category or a dish photo
        scroller.addEventListener('click', event => {
            if (moved) {
                event.preventDefault();
                event.stopPropagation();
                moved = false;
            }
        }, true);
        scroller.addEventListener('dragstart', event => event.preventDefault());
    }

    // After a drag, land on the dish coming into view in the direction of the drag
    function snapTrackAfterDrag(distance) {
        const padding = parseFloat(getComputedStyle(track).paddingLeft);
        const position = track.scrollLeft;
        const lefts = cards.map(card => card.offsetLeft - padding);
        let index;
        if (distance < -40) {
            index = lefts.findIndex(left => left > position);
        } else if (distance > 40) {
            index = lefts.findLastIndex(left => left < position);
        } else {
            index = lefts.reduce((best, left, i) => Math.abs(left - position) < Math.abs(lefts[best] - position) ? i : best, 0);
        }
        if (index === -1) index = distance < 0 ? cards.length - 1 : 0;
        scrollToCard(cards[index]);
    }

    enableDragScroll(track, snapTrackAfterDrag);
    enableDragScroll(tabsContainer);

    let scrollFrame = null;
    track.addEventListener('scroll', () => {
        if (scrollFrame) return;
        scrollFrame = requestAnimationFrame(() => {
            scrollFrame = null;
            syncWithScroll();
        });
    }, { passive: true });

    prevButton.onclick = () => step(-1);
    nextButton.onclick = () => step(1);
    track.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    });
    window.addEventListener('resize', syncWithScroll);

    // Lightbox function exposed to window
    window.openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
    };

    renderTabs();
    renderCards();
    syncWithScroll();
});
