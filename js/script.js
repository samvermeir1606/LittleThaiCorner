document.addEventListener('DOMContentLoaded', () => {
    // Image mapping
    const imageMap = {
        "1": "assets/img_4_dfc79a4bdf256883447c658253e5cd16_400x400.jpg",
        "2": "assets/img_5_73b39be3ace708ac3adf60df90a36656_400x400.jpg",
        "3": "assets/img_6_a454bfd2f9675903eb649c7f07eae15f_400x400.jpg",
        "4": "assets/img_7_bd54b1efdf38ef80186ddbb5e2cfd35f_400x400.jpg",
        "5": "assets/img_8_c957bd4ac95379467610be7a58083844_400x400.jpg",
        "6": "assets/img_9_5fa976c6f507e3ec83d7a828cc5f9a74_400x400.jpg",
        "7": "assets/img_10_c258da1f62d95d76dc5327ff9c1765a9_400x400.jpg",
        "8": "assets/img_11_9891853d68f7bf1617ee89fcd5f2c14d_400x400.jpg",
        "9": "assets/img_12_271f3d335c3c90ebc8ef4cff47de600d_400x400.jpg",
        "10": "assets/img_13_390aedfaa2c58365e09fa15a45bd5f33_400x400.jpg",
        "11": "assets/img_15_7716f084a8a0ca124a552a85aeece9ae_400x400.jpg",
        "12": "assets/img_16_fb68e5066a9542c9889ad4ef9fe736e2_400x400.jpg",
        "13": "assets/img_18_19a434b7002fb80466e7e907bd5c222c_400x400.jpg",
        "14": "assets/img_19_67cdaea63c89687590e8f7864463249d_400x400.jpg",
        "15": "assets/img_20_e1041bda0ad6122ae99c897972b63780_400x400.jpg",
        "16": "assets/img_21_257733efa2b525d586b86b6166170f16_400x400.jpg",
        "17": "assets/img_22_2c63dac808612a10faeabc467c5b3053_400x400.jpg",
        "18": "assets/img_23_c4c1eb1b0b755d1ed665ff1a580215b4_400x400.jpg",
        "20": "assets/img_24_d0d909bdf5ec5c4a17e43ccdd27edd3e_400x400.jpg",
        "33": "assets/img_25_7caa4ceb3ad4fd0c11146578a2fd4d7f_400x400.jpg",
        "34": "assets/img_26_6a17a87fd54dd78f3c00db70228c1dbc_400x400.jpg",
        "35": "assets/img_27_ca2868eb23e5345a89f3c7d4762843ec_400x400.jpg",
        "36": "assets/img_28_94ea9b422ca0e6d80bbf855fcb58f94a_400x400.jpg",
        "39": "assets/img_29_84e109c2d3aa2784ffc054aa58942b54_400x400.jpg",
        "40": "assets/img_30_b657d03c7634ac2289665535c97af54e_400x400.jpg",
        "41": "assets/img_31_230ffd96509dbecfabbbb3cf512144a2_400x400.jpg",
        "44": "assets/img_32_6a46767f5efe79c5720d09380e206016_400x400.jpg"
    };

    const menuData = {
        "STARTERS": {
            "note": "Inclusief chillisausje",
            "items": [
                {"id": "1", "name": "Pho Pia Kai", "price": "7.00 €", "description": "Huisgemaakte loempia met kip, soja, worteltjes, kool en Thaise kruiden 5pcs"},
                {"id": "2", "name": "Pho Pia Vegan", "price": "7.00 €", "description": "Mini loempia met soja, worteltjes, kool en Thaise kruiden 6pcs"},
                {"id": "3", "name": "Kai Sate", "price": "8.00 €", "description": "Huis gemaakte kipspiesje in curry marinade 5pcs"},
                {"id": "4", "name": "Kung Hom Pha", "price": "8.00 €", "description": "Huisgemaakte scampi-rolletje 5pcs"},
                {"id": "5", "name": "Scampi Tempura", "price": "8.00 €", "description": "Huisgemaakte scampi-rolletje met tempura 5pcs"},
                {"id": "6", "name": "Thod Man Kai", "price": "8.00 €", "description": "Zelfbereide Thaise koekjes met kip, rode curry, groene boontjes, limoenblad en eieren 5pcs"},
                {"id": "7", "name": "Thod Man Kung", "price": "9.00 €", "description": "Zelfbereide garnaal koekjes met Thaise kruiden, tempura, look koriander en peper 5pcs"},
                {"id": "8", "name": "Kha Nom Jeep", "price": "8.00 €", "description": "Thai Dim Sum 6 pcs"},
                {"id": "9", "name": "Thai Vegan Samosas", "price": "7.00 €", "description": "Driehoek flapjes met aardappel, kool, ui, curry, chilli, look en gember 8 pcs"},
                {"id": "10", "name": "Starter Mix", "price": "15.00 €", "description": "10 stuks - Loempia, scampirol, scampi tempura, garnaalkoekjes en kipspiesjes"}
            ]
        },
        "SOEPEN": {
            "note": "Inclusief rijst",
            "items": [
                {"id": "11", "name": "Tom Ka Kai", "price": "14.00 €", "description": "Soep met kip, kokosmelk, champignons, galangawortel, koriander & citroengras"},
                {"id": "12", "name": "Tom Yam Kung", "price": "16.00 €", "description": "Pittige soep met scampis, citroengras, limoen, champignons, koriander, galanga en ui"}
            ]
        },
        "CURRY SCHOTELS": {
            "note": "Inclusief Thai Jasmin rijst",
            "items": [
                {"id": "13", "name": "Panaeng Moo", "price": "16.00 €", "description": "Varkensvlees in rode curry met kokosmelk, paprika, bamboescheuten, citroenblad en Thaise kruiden"},
                {"id": "14", "name": "Panaeng Kung", "price": "18.00 €", "description": "Scampis in rode curry met kokosmelk, paprika, bamboescheuten, citroenblad Thaise kruiden"},
                {"id": "15", "name": "Kaeng Kheaw Waan Nua", "price": "17.00 €", "description": "Rundsvlees in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "16", "name": "Kaeng Kheaw Waan Kai", "price": "16.00 €", "description": "Kip in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "17", "name": "Kaeng Massaman Nua", "price": "17.00 €", "description": "Rundsvlees in kokosmelk met Massaman curry, aardappel, uien, pinda's en Thaise kruiden"},
                {"id": "18", "name": "Kaeng Massaman Moo", "price": "16.00 €", "description": "Varkensvlees in kokosmelk met Massaman curry, aardappel, uien, pinda's en Thaise kruiden"},
                {"id": "19", "name": "Kung Phad Pong Karee", "price": "18.00 €", "description": "Scampis in gele curry met selder, rode paprika, jonge uitjes, kokosmelk, ei en Thaise chilli pasta"}
            ]
        },
        "THAI WOK": {
            "note": "Inclusief Thai Jasmin rijst",
            "items": [
                {"id": "20", "name": "Phad Krapouw Kai", "price": "16.00 €", "description": "Wokgerecht met kip in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "21", "name": "Phad Krapouw Nua", "price": "17.00 €", "description": "Wokgerecht met rundsvlees in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "22", "name": "Phad Krapouw Kung", "price": "18.00 €", "description": "Wokgerecht met scampis in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "23", "name": "Phad Krapouw Moo", "price": "16.00 €", "description": "Wokgerecht met varkensvlees in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "24", "name": "Nua Phad King", "price": "17.00 €", "description": "Groentenwok met oestersaus, rundslees, gember, rode en groene paprika en ajuin"},
                {"id": "25", "name": "Moo Phad King", "price": "16.00 €", "description": "Groentenwok met oestersaus, varkensvlees, gember, rode en groene paprika en ajuin"},
                {"id": "26", "name": "Kai Phad King", "price": "16.00 €", "description": "Groentenwok met oestersaus, kip, gember, rode en groene paprika en ajuin"},
                {"id": "27", "name": "Kai Phad Kratiam", "price": "16.00 €", "description": "Wok met kip, look, soja, boontjes, rode paprika, korianderwortel, peper en vissaus"},
                {"id": "28", "name": "Phad Pak Kung", "price": "18.00 €", "description": "Groentenwok met scampis, brocolli, bloemkool, boontjes, wortel en courget"},
                {"id": "29", "name": "Phad Pak Moo", "price": "16.00 €", "description": "Groentenwok met varkensvlees, brocolli, bloemkool, boontjes, wortel en courget"},
                {"id": "30", "name": "Kung Phad Pit Pauw", "price": "18.00 €", "description": "Wokgerecht met scampi, lente-ui, koriander en Thaise sweet chili pasta, basilicum"},
                {"id": "31", "name": "Phad Prieuw Waan Moo", "price": "16.00 €", "description": "Zoetzuur wokgerecht met varken, komkommer, annanas, tomaten, paprika, lente uitjes en brocolli"},
                {"id": "32", "name": "Phad Prieuw Waan Kai", "price": "16.00 €", "description": "Zoetzuur wokgerecht met kip, komkommer, annanas, tomaten, paprika, lente uitjes en brocolli"},
                {"id": "33", "name": "Phad Prieuw Waan Kung", "price": "18.00 €", "description": "Zoetzuur wokgerecht met scampis, komkommer, annanas, tomaten, paprika, lente uitjes en brocolli"},
                {"id": "34", "name": "Nua Phad Prik Thai Dum", "price": "17.00 €", "description": "Gewokte groente met rundsvlees, paprika, lente ui, zwarte peper en oestersaus"}
            ]
        },
        "NOEDELGERECHTEN": {
            "items": [
                {"id": "35", "name": "Phad Thai Kai", "price": "15.00 €", "description": "Roergebakken rijstnoedel met kip, tofu, soja, pindas, ei en tamarine"},
                {"id": "36", "name": "Phad Thai Kung", "price": "17.00 €", "description": "Roergebakken rijstnoedel met scampi, tofu, soja, pindas, ei en tamarine"}
            ]
        },
        "VEGAN": {
            "items": [
                {"id": "37", "name": "Phad Thai Vegan", "price": "14.00 €", "description": "Roergebakken rijstnoedel met tofu, soja, pindas, ei en tamarine"},
                {"id": "38", "name": "Phad Pak Ruam Mit", "price": "15.00 €", "description": "Groentenwok met oestersaus, peulerwtjes, champignons, brocoli, rode en groene paprika. *Alle gerechten met kip kan je ook verkrijgen met Tofu"}
            ]
        },
        "THAISE GEBAKKEN RIJSTGERECHTEN": {
            "items": [
                {"id": "39", "name": "Khao Phad Moo / Kai", "price": "15.00 €", "description": "Thaise gebakken rijst met varkensvlees of kip, ei, lente ui en wortel"},
                {"id": "40", "name": "Khao Phad Kung", "price": "17.00 €", "description": "Thaise gebakken rijst met scampis, ei, lente ui en wortel"}
            ]
        },
        "SALADES": {
            "note": "Inclusief Thai Jasmin rijst",
            "items": [
                {"id": "41", "name": "Laab Kai", "price": "15.00 €", "description": "Pittige Thaise salade met gemalen kip, lemon, munt en Thaise kruiden"},
                {"id": "42", "name": "Laab Moo", "price": "16.00 €", "description": "Pittige Thaise salade met gemalen varkensvlees, lemon, munt en Thaise kruiden"},
                {"id": "43", "name": "Laab Nua", "price": "17.00 €", "description": "Pittige Thaise salade met gemalen rundsvlees, lemon, munt en Thaise kruiden"},
                {"id": "44", "name": "Nam Tok Nua", "price": "17.00 €", "description": "Gesneden rundsvlees met rode ui, Thaise kruiden en limoensap"}
            ]
        },
        "THAISE BIEREN & EXTRA": {
            "items": [
                {"id": "45", "name": "Chang of Singha in blik 33cl", "price": "2.75 €", "description": ""},
                {"id": "46", "name": "Extra Thai Jasmin rijst", "price": "3.00 €", "description": ""},
                {"id": "47", "name": "Noedels ter vervanging van Thai jasmin rijst", "price": "5.00 €", "description": ""},
                {"id": "48", "name": "extra chillisaus", "price": "1.00 €", "description": ""}
            ]
        }
    };

    const container = document.getElementById('menu-container');
    const tabsContainer = document.getElementById('menu-tabs');
    const categoryNote = document.getElementById('category-note');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let activeCategory = Object.keys(menuData)[0];

    function renderTabs() {
        tabsContainer.innerHTML = '';
        Object.keys(menuData).forEach(category => {
            const button = document.createElement('button');
            button.className = `px-6 py-2 rounded-sm font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeCategory === category ? 'bg-amber-600 text-white' : 'bg-stone-900 text-stone-200 border border-stone-800 hover:border-amber-600'}`;
            button.textContent = category;
            button.onclick = () => {
                activeCategory = category;
                renderTabs();
                renderMenu();
            };
            tabsContainer.appendChild(button);
        });
    }

    function renderMenu() {
        container.innerHTML = '';
        
        // Handle category note
        if (menuData[activeCategory].note) {
            categoryNote.textContent = menuData[activeCategory].note;
            categoryNote.classList.remove('hidden');
        } else {
            categoryNote.classList.add('hidden');
        }

        menuData[activeCategory].items.forEach(item => {
            const itemImage = imageMap[item.id] ? `<img src="${imageMap[item.id]}" alt="${item.name}" loading="lazy" class="w-20 h-20 object-cover rounded shadow-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition" onclick="openLightbox('${imageMap[item.id]}')">` : '<div class="w-20"></div>';
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'bg-stone-900 p-4 rounded border border-stone-800 flex items-center gap-4 hover:border-amber-700 transition-all';
            
            itemDiv.innerHTML = `
                ${itemImage}
                <div class="flex-grow">
                    <div class="flex justify-between items-baseline mb-1">
                        <h4 class="font-bold text-lg text-stone-100"><span class="text-amber-600 mr-2">${item.id}.</span>${item.name}</h4>
                        <span class="font-semibold text-stone-300 whitespace-nowrap">${item.price}</span>
                    </div>
                    <p class="text-sm text-stone-500 italic">${item.description}</p>
                </div>
            `;
            container.appendChild(itemDiv);
        });
    }

    // Lightbox function exposed to window
    window.openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
    };

    renderTabs();
    renderMenu();
});
