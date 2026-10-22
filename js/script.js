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
            "note": "Inclusief chilisausje",
            "items": [
                {"id": "1", "name": "Pho Pia Kai", "price": "8.50 €", "description": "Huisgemaakte loempia met kip, soja, worteltjes, kool en Thaise kruiden 5 pcs"},
                {"id": "2", "name": "Pho Pia Vegan", "price": "8.00 €", "description": "Mini loempia met soja, worteltjes, kool en kruiden 10 pcs"},
                {"id": "3", "name": "Kai Sate / Yakitori", "price": "8.00 €", "description": "Huisgemaakte kipspiesjes in curry marinade 3 pcs, of kip teriyaki 7 pcs"},
                {"id": "4", "name": "Kung Hom Pha", "price": "9.00 €", "description": "Huisgemaakte scampi-rolletjes in bladerdeeg 5 pcs"},
                {"id": "5", "name": "Scampi Tempura", "price": "8.50 €", "description": "Scampi-rolletjes in tempuradeeg 6 pcs"},
                {"id": "6", "name": "Thod Man Kai", "price": "9.00 €", "description": "Zelfbereide Thaise koekjes met kip, rode curry, groene boontjes, limoenblad en eieren 5 pcs"},
                {"id": "7", "name": "Thod Man Kung", "price": "9.50 €", "description": "Zelfbereide garnaalkoekjes met Thaise kruiden, tempura, look, koriander en peper 5 pcs"},
                {"id": "8", "name": "Kha Nom Jeep", "price": "8.00 €", "description": "Thaise dumplings gevuld met kip, vlees en garnaal, gestoomd in een bamboestomer 6 pcs"},
                {"id": "9", "name": "Thai Vegan Samosas", "price": "8.00 €", "description": "Driehoekige flapjes gevuld met aardappel, ui, chili, look en gember 10 pcs"},
                {"id": "10", "name": "Starter Mix", "price": "17.00 €", "description": "10 stuks: loempia, scampirol, scampi tempura, garnaalkoekjes, kipkoekjes en kipspiesjes"},
                {"id": "10a", "name": "Starter Mix XL", "price": "24.00 €", "description": "15 stuks: loempia, scampirol, scampi tempura, garnaalkoekjes, kipkoekjes en kipspiesjes"}
            ]
        },
        "SOEPEN": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "11", "name": "Tom Ka Kai / Vegan", "price": "17.00 €", "description": "Soep met kip of tofu, kokosmelk, champignons, galanga, koriander & citroengras"},
                {"id": "12", "name": "Tom Yam Kung", "price": "18.00 €", "description": "Pittige soep met scampi's, citroengras, limoen, champignons, koriander, galanga en ui"}
            ]
        },
        "CURRY SCHOTELS": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "13", "name": "Panaeng Moo / Kai", "price": "18.00 €", "description": "Varkensvlees of kip in een romige, mild pittige variant van rode curry, met kokosmelk, paprika, bamboescheuten, limoen en Thaise kruiden"},
                {"id": "14", "name": "Panaeng Kung / Ped", "price": "19.00 €", "description": "Scampi's of eend in een romige, mild pittige variant van rode curry, met kokosmelk, paprika, bamboescheuten, citroenblad en Thaise kruiden"},
                {"id": "15", "name": "Kaeng Kheaw Waan Ped", "price": "19.00 €", "description": "Eend in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "16", "name": "Kaeng Kheaw Waan Kai / Moo", "price": "18.00 €", "description": "Kip of varkensvlees in kokosmelk met pittige groene curry, bamboe, paprika, eierplant & Thaise basilicum"},
                {"id": "17", "name": "Kaeng Massaman Nua", "price": "20.00 €", "description": "Rundsvlees in kokosmelk met massaman curry, aardappel, uien, pinda's en Thaise kruiden. Ook met eend (19.00 €)"},
                {"id": "18", "name": "Kaeng Massaman Moo / Kai", "price": "18.00 €", "description": "Varkensvlees of kip in kokosmelk met massaman curry, aardappel, uien, pinda's en Thaise kruiden"},
                {"id": "19", "name": "Kai Phad Pong Karee", "price": "18.00 €", "description": "Kip in gele curry met selder, rode paprika, lente-uitjes, kokosmelk, ei en Thaise chilipasta. Ook mogelijk met eend of scampi (19.00 €)"}
            ]
        },
        "THAI WOK": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "20", "name": "Phad Krapouw Moo / Kai", "price": "18.00 €", "description": "Wokgerecht met varkensvlees of kip in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "21", "name": "Phad Krapouw Nua", "price": "20.00 €", "description": "Wokgerecht met rund in een pikante mengeling van Thaise holy basil, chili en look"},
                {"id": "22", "name": "Phad Krapouw Talay", "price": "22.00 €", "description": "Wok van zeevruchten in een pikante mengeling van Thaise holy basil, chili en look. Met scampi's: 19.00 €"},
                {"id": "23", "name": "Moo Tot Kratiem Prik Thai", "price": "18.00 €", "description": "Pittig kruidig wokgerecht met varkensvlees of kip, sojasaus, oestersaus, zwarte peper en look"},
                {"id": "24", "name": "Nua Phad King", "price": "20.00 €", "description": "Groentewok met oestersaus, rundsvlees, gember, rode en groene paprika en ajuin"},
                {"id": "25", "name": "Ped / Kung Phad King", "price": "19.00 €", "description": "Groentewok met oestersaus, eend of scampi, gember, rode en groene paprika en ajuin"},
                {"id": "26", "name": "Kai / Moo Phad King", "price": "18.00 €", "description": "Groentewok met oestersaus, kip of varkensvlees, gember, rode en groene paprika en ajuin"},
                {"id": "27", "name": "Kai / Moo Phad Kratiam", "price": "18.00 €", "description": "Wok met kip of varkensvlees, look, soja, groene en rode paprika, courgette, korianderwortel, peper en vissaus. Ook mogelijk met eend (19.00 €)"},
                {"id": "28", "name": "Phad Pak Kung / Ped", "price": "19.00 €", "description": "Groentewok met scampi of eend, broccoli, bloemkool, boontjes, wortel en courgette. Ook mogelijk met rundsvlees (20.00 €)"},
                {"id": "29", "name": "Phad Pak Moo / Kai", "price": "18.00 €", "description": "Groentewok met varkensvlees of kip, broccoli, bloemkool, boontjes, wortel en courgette. Ook mogelijk met rundsvlees of eend (19.00 €)"},
                {"id": "30", "name": "Kung / Ped Phad Pit Pauw", "price": "19.00 €", "description": "Wokgerecht met scampi of eend, lente-ui, koriander, Thaise sweet chilipasta en basilicum. Ook mogelijk met rundsvlees (20.00 €), varkensvlees of kip (18.00 €)"},
                {"id": "31", "name": "Phad Prieuw Waan Ped / Kung", "price": "19.00 €", "description": "Zoetzuur wokgerecht met eend of scampi's, komkommer, ananas, tomaten, paprika, lente-uitjes en broccoli"},
                {"id": "32", "name": "Phad Prieuw Waan Moo / Kai", "price": "18.00 €", "description": "Zoetzuur wokgerecht met varkensvlees of kip, komkommer, ananas, tomaten, paprika, lente-uitjes en broccoli"},
                {"id": "33", "name": "Kai Phad Med Mamuang", "price": "18.00 €", "description": "Wokgerecht met kip, look, lente-ui en geroosterde noten. Ook mogelijk met varkensvlees"},
                {"id": "34", "name": "Nua Phad Prik Thai Dum", "price": "20.00 €", "description": "Gewokte groenten met rundsvlees, paprika, lente-ui, zwarte peper en oestersaus. Ook mogelijk met kip, varkensvlees (18.00 €) of eend (19.00 €)"}
            ]
        },
        "NOEDELGERECHTEN": {
            "items": [
                {"id": "35", "name": "Phad Thai Kai / Moo", "price": "17.00 €", "description": "Roergebakken rijstnoedels met kip of varkensvlees, lente-ui, soja, pinda's, ei en tamarinde"},
                {"id": "36", "name": "Phad Thai Kung / Ped", "price": "18.00 €", "description": "Roergebakken rijstnoedels met scampi of eend, lente-ui, tofu, soja, pinda's, ei en tamarinde"},
                {"id": "37", "name": "Phad Thai Vegan", "price": "17.00 €", "description": "Roergebakken rijstnoedels met tofu, lente-ui, soja, pinda's en tamarinde"},
                {"id": "38", "name": "Bami met kip", "price": "17.00 €", "description": "Roergebakken eiernoedels met kip, lente-ui, soja, wortel en ajuin"}
            ]
        },
        "GEBAKKEN RIJSTGERECHTEN": {
            "items": [
                {"id": "39", "name": "Khao Phad Moo / Kai", "price": "18.00 €", "description": "Thaise gebakken rijst met varkensvlees of kip, ei, lente-ui en wortel"},
                {"id": "40", "name": "Khao Phad Ped / Kung", "price": "19.00 €", "description": "Thaise gebakken rijst met eend of scampi's, ei, lente-ui en wortel. Ook mogelijk met zeevruchten of rund (20.00 €)"}
            ]
        },
        "SALADES": {
            "note": "Inclusief Thai jasmijnrijst (500 cc)",
            "items": [
                {"id": "41", "name": "Laab Ped", "price": "19.00 €", "description": "Pittige Thaise salade met gehakte eend, lemon, munt en Thaise kruiden"},
                {"id": "42", "name": "Laab Moo / Kai", "price": "18.00 €", "description": "Pittige Thaise salade met gehakt varkensvlees of kip, lemon, munt en Thaise kruiden"},
                {"id": "43", "name": "Laab Nua", "price": "20.00 €", "description": "Pittige Thaise salade met gehakt rundsvlees, lemon, munt en Thaise kruiden"},
                {"id": "44", "name": "Nam Tok Nua", "price": "20.00 €", "description": "In fijne reepjes gesneden rundsvlees met rode ui, Thaise kruiden en limoensap"}
            ]
        },
        "VEGAN & EXTRA": {
            "note": "Op uw vraag kan je alle gerechten met kip uit dit menu vervangen door tofu",
            "items": [
                {"id": "45", "name": "Phad Pak Ruam Mit Tofu", "price": "17.00 €", "description": "Groentewok met tofu, broccoli, bloemkool, boontjes, wortel en courgette"},
                {"id": "46", "name": "Extra Thai jasmijnrijst", "price": "3.00 €", "description": "Extra portie Thai jasmijnrijst (500 cc). Ook mogelijk: pindanotensaus of chilisaus à 1.00 €"},
                {"id": "47", "name": "Rijst vervangen door noedels / gebakken rijst", "price": "7.00 €", "description": "Ter vervanging van de rijst bij uw gerecht, enkel als dubbele portie (1000 cc). Niet ter vervanging (extra): 10.00 €"}
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
