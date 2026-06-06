// Language translations for the entire site
const translations = {
    // === NAVBAR ===
    'nav.home': { sk: 'Domov', en: 'Home' },
    'nav.projects': { sk: 'Projekty', en: 'Projects' },
    'nav.about': { sk: 'O nas', en: 'About' },
    'nav.contact': { sk: 'Kontakt', en: 'Contact' },
    'nav.cta': { sk: 'Napiste nam', en: 'Write to us' },

    // === FOOTER ===
    'footer.tagline': { sk: 'Digitalne riesenia na mieru.', en: 'Custom digital solutions.' },
    'footer.nav': { sk: 'Navigacia', en: 'Navigation' },
    'footer.contact': { sk: 'Kontakt', en: 'Contact' },
    'footer.rights': { sk: '2026 AI xSolutions. Vsetky prava vyhradene.', en: '2026 AI xSolutions. All rights reserved.' },

    // === INDEX ===
    'hero.subtitle': { sk: 'Co robime', en: 'What we do' },
    'hero.title': { sk: 'Automatizacia & Inovacie', en: 'Automation & Innovation' },
    'hero.dynamic.prefix': { sk: 'Nedavno sme napriklad: ', en: 'Recently we have: ' },
    'hero.desc': { sk: 'Tvorime digitalne nastroje na mieru kazdej firme, ktore setria cas a zjednodusuju pracu.', en: 'We create custom digital tools for every company that save time and simplify work.' },
    'card.apps.title': { sk: 'MINI APPS', en: 'MINI APPS' },
    'card.apps.desc': { sk: 'Produktivitne mini aplikacie na mieru.', en: 'Custom productivity mini apps.' },
    'card.ai.title': { sk: 'AI RIESENIA', en: 'AI SOLUTIONS' },
    'card.ai.desc': { sk: 'Automatizacia a inteligentne spracovanie dat.', en: 'Automation and intelligent data processing.' },
    'card.web.title': { sk: 'WEBOVE STRANKY', en: 'WEBSITES' },
    'card.web.desc': { sk: 'Moderne weby a webove aplikacie.', en: 'Modern websites and web applications.' },
    'marquee.title': { sk: 'Technologie, ktore pouzivame', en: 'Technologies we use' },
    'testimonials.subtitle': { sk: 'Co hovoria klienti', en: 'What clients say' },

    // === CONTACT ===
    'contact.subtitle': { sk: 'Spolupraca', en: 'Collaboration' },
    'contact.title': { sk: 'Opisate nam vas problem', en: 'Describe your problem to us' },
    'contact.desc': { sk: 'Povedzte nam, co vas vo firme zdrzuje, a my vam navrhneme riesenie.', en: 'Tell us what slows you down, and we will propose a solution.' },
    'contact.name': { sk: 'Meno a priezvisko', en: 'Full name' },
    'contact.name.placeholder': { sk: 'Vas kontakt...', en: 'Your name...' },
    'contact.email': { sk: 'E-mail', en: 'E-mail' },
    'contact.email.placeholder': { sk: 'vas@email.sk', en: 'your@email.com' },
    'contact.message': { sk: 'Popis vasho problemu', en: 'Describe your problem' },
    'contact.send': { sk: 'Odoslat spravu', en: 'Send message' },
    'contact.flow.title': { sk: 'Ako to funguje', en: 'How it works' },
    'contact.flow.step1.title': { sk: 'Opisete problem', en: 'Describe the problem' },
    'contact.flow.step1.desc': { sk: 'Povedzte nam, co vas vo firme zdrzuje alebo kde stracate cas na manualnej praci.', en: 'Tell us what slows you down or where you lose time on manual work.' },
    'contact.flow.step2.title': { sk: 'Analyzujeme moznosti', en: 'We analyze options' },
    'contact.flow.step2.desc': { sk: 'Pozrieme sa na vase procesy a navrhneme prakticke riesenie na mieru.', en: 'We look at your processes and design a practical custom solution.' },
    'contact.flow.step3.title': { sk: 'Posleme cenovu ponuku', en: 'We send a quote' },
    'contact.flow.step3.desc': { sk: 'Dostanete presnu cenovu ponuku s popisom riesenia. Bez zavazkov.', en: 'You receive an exact quote with a solution description. No obligations.' },
    'contact.info.title': { sk: 'Kontaktne udaje', en: 'Contact details' },
    'contact.info.address.label': { sk: 'Sidlo spolocnosti', en: 'Company address' },
    'contact.info.billing.label': { sk: 'Fakturacne udaje', en: 'Billing details' },
    'contact.info.contact.label': { sk: 'Kontakt', en: 'Contact' },

    // === ABOUT ===
    'about.subtitle': { sk: 'O nas', en: 'About us' },
    'about.title': { sk: 'O nas', en: 'About us' },
    'about.headline': { sk: 'Kazda firma je jedinecna. Najdeme jedinecne riesenie aj pre vas.', en: 'Every company is unique. We will find a unique solution for you too.' },
    'about.intro': { sk: 'Pomahame firmam setrit cas tam, kde ho dnes zbytocne stracaju na manualnej praci. Vytvarame prakticke interne nastroje, mini aplikacie a AI riesenia, ktore zrychluju firemne procesy, znizuju pocet chyb a davaju zamestnancom viac priestoru na pracu s vyssou hodnotou.', en: 'We help companies save time where they waste it on manual work. We create practical internal tools, mini apps, and AI solutions that speed up processes, reduce errors, and give employees more room for high-value work.' },

    // === PROJECTS ===
    'projects.subtitle': { sk: 'Nase prace', en: 'Our work' },
    'projects.title': { sk: 'Realizacie & Projekty', en: 'Case Studies & Projects' },
    'projects.desc': { sk: 'Pozrite si, co sme vytvorili pre nasich klientov.', en: 'See what we have built for our clients.' },
    'projects.detail': { sk: 'Zobrazit detail', en: 'View detail' },

    // === 404 ===
    '404.title': { sk: 'Stranka sa nenasla', en: 'Page not found' },
    '404.desc': { sk: 'Tato stranka este neexistuje alebo bola premiestnena.', en: 'This page does not exist yet or has been moved.' },
    '404.back': { sk: 'Spat na hlavnu stranku', en: 'Back to homepage' },
};

// 50 rotating prompt suggestions for contact page
const promptSuggestions = {
    sk: [
        'Kazdy mesiac rucne prepisujem data z faktur do tabulky...',
        'Potrebujem automaticky generovat reporty z Excelu...',
        'Chcem prepojit uctovny system s e-shopom...',
        'Zamestnanci stracaju cas hladanim informacii v emailoch...',
        'Mame vela PDF dokumentov, ktore treba manualne kontrolovat...',
        'Potrebujem nastroj na automaticke triedenie objednavok...',
        'Chcem zautomatizovat pripravu faktur pre POHODA...',
        'Kazdy den manualne kopirujem data medzi systemami...',
        'Potrebujem OCR riesenie na spracovanie blockov...',
        'Chcem mini aplikaciu na evidenciu dochadzky...',
        'Mame problem s duplicitnymi zaznamami v databaze...',
        'Potrebujem automatizovat odosielanie ponuk klientom...',
        'Zamestnanec travi 3 hodiny denne formatovanim tabuliek...',
        'Chcem AI chatbota pre internu znalostnu bazu...',
        'Potrebujem nastroj na porovnavanie cien od dodavatelov...',
        'Mame zlozity proces schvalovania objednavok...',
        'Chcem automatizovat spracovanie prichodzich emailov...',
        'Potrebujem dashboard na sledovanie KPI...',
        'Kazdy tyzden manualne vytvaram reporty pre manazment...',
        'Chcem prepojit CRM s fakturacnym systemom...',
        'Mame problem so sledovanim stavu zakaziek...',
        'Potrebujem nastroj na automaticku kontrolu kvality dat...',
        'Chcem digitalizovat papierove formulare...',
        'Kazdy mesiac manualne pocitam provizne odmeny...',
        'Potrebujem riesenie na automaticky mailing...',
        'Chcem mini aplikaciu na spracovanie reklamacii...',
        'Mame zlozity proces onboardingu novych zamestnancov...',
        'Potrebujem nastroj na sledovanie zasob a skladu...',
        'Chcem automatizovat pripravu danavych priznani...',
        'Kazdy den kontrolujem desiatky dokumentov manualne...',
        'Potrebujem riesenie na extrakciu dat z PDF...',
        'Chcem AI nastroj na sumarizaciu dlhych dokumentov...',
        'Mame problem s nejednotnymi datami v roznych systemoch...',
        'Potrebujem automatizovat generovanie zmluvnych dokumentov...',
        'Chcem nastroj na inteligentne triedenie poziadaviek...',
        'Kazdy mesiac stracam cas na manualnom parovani platieb...',
        'Potrebujem mini aplikaciu na evidenciu firemneho majetku...',
        'Chcem zefektivnit proces spracovania danovych dokladov...',
        'Mame tisice suborov, ktore treba pretridit a organizovat...',
        'Potrebujem automaticky system na kontrolu termínov...',
        'Chcem AI riesenie na analyzu spatnej vazby od zakaznikov...',
        'Kazdy tyzden manualne aktualizujem cennik pre klientov...',
        'Potrebujem nastroj na automaticke parsovanie CV...',
        'Chcem prepojit webovy formular s internym systemom...',
        'Mame problem s manualnym zadavanim objednavok...',
        'Potrebujem riesenie na automaticky preklad dokumentov...',
        'Chcem mini aplikaciu na sledovanie projektoveho casu...',
        'Kazdy den exportujem data z jedneho systemu do druheho...',
        'Potrebujem nastroj na inteligentnu klasifikaciu emailov...',
        'Chcem zautomatizovat proces generovania ponuk...',
    ],
    en: [
        'Every month I manually copy invoice data into spreadsheets...',
        'I need to automatically generate reports from Excel...',
        'I want to connect our accounting system with the e-shop...',
        'Employees waste time searching for info in emails...',
        'We have many PDF documents that need manual review...',
        'I need a tool for automatic order sorting...',
        'I want to automate invoice preparation for POHODA...',
        'Every day I manually copy data between systems...',
        'I need an OCR solution for processing receipts...',
        'I want a mini app for attendance tracking...',
        'We have a problem with duplicate records in the database...',
        'I need to automate sending quotes to clients...',
        'An employee spends 3 hours daily formatting spreadsheets...',
        'I want an AI chatbot for our internal knowledge base...',
        'I need a tool for comparing supplier prices...',
        'We have a complex order approval process...',
        'I want to automate processing of incoming emails...',
        'I need a dashboard for tracking KPIs...',
        'Every week I manually create reports for management...',
        'I want to connect CRM with our invoicing system...',
        'We have trouble tracking order status...',
        'I need a tool for automatic data quality checks...',
        'I want to digitize paper forms...',
        'Every month I manually calculate commission payments...',
        'I need an automated mailing solution...',
        'I want a mini app for handling complaints...',
        'We have a complex onboarding process for new employees...',
        'I need a tool for inventory and warehouse tracking...',
        'I want to automate tax return preparation...',
        'Every day I check dozens of documents manually...',
        'I need a solution for extracting data from PDFs...',
        'I want an AI tool for summarizing long documents...',
        'We have inconsistent data across different systems...',
        'I need to automate contract document generation...',
        'I want a tool for intelligent request sorting...',
        'Every month I waste time manually matching payments...',
        'I need a mini app for company asset tracking...',
        'I want to streamline tax document processing...',
        'We have thousands of files that need sorting...',
        'I need an automatic deadline monitoring system...',
        'I want AI analysis of customer feedback...',
        'Every week I manually update price lists for clients...',
        'I need a tool for automatic CV parsing...',
        'I want to connect web forms with our internal system...',
        'We have problems with manual order entry...',
        'I need a solution for automatic document translation...',
        'I want a mini app for project time tracking...',
        'Every day I export data from one system to another...',
        'I need a tool for intelligent email classification...',
        'I want to automate the quote generation process...',
    ]
};

// Initialize language system
(function() {
    const currentLang = localStorage.getItem('lang') || 'sk';

    function setLang(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset['i18nPlaceholder'];
            if (translations[key] && translations[key][lang]) {
                el.placeholder = translations[key][lang];
            }
        });

        // Update lang toggle button
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.textContent = lang === 'sk' ? 'EN' : 'SK';
        }
    }

    // Apply on load
    document.addEventListener('DOMContentLoaded', () => {
        setLang(currentLang);

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const current = localStorage.getItem('lang') || 'sk';
                setLang(current === 'sk' ? 'en' : 'sk');
            });
        }
    });

    // Expose for other scripts
    window.siteTranslations = translations;
    window.promptSuggestions = promptSuggestions;
    window.getCurrentLang = () => localStorage.getItem('lang') || 'sk';
    window.setLang = setLang;
})();

window.heroSuggestions = {
    sk: [
        'zautomatizovali peciatkovanie PDF udajov.',
        'vytvorili tvorbu XML faktur pre Pohoda (cez 100 naraz).',
        'zrychlili parovanie OCR blockov o 80%.',
        'vytvorili AI bota na triedenie emailov.',
        'zautomatizovali reporting z Excelu.',
        'naprogramovali nastroj na kontrolu zmluv.',
        'prepojili eshop priamo s uctovnictvom.',
        'vytvorili custom CRM pre malu firmu.',
        'zautomatizovali cenotvorbu a sledovanie konkurencie.'
    ],
    en: [
        'automated PDF data stamping.',
        'built XML invoice generation for Pohoda (over 100 at once).',
        'sped up OCR receipt matching by 80%.',
        'created an AI bot for sorting emails.',
        'automated Excel reporting.',
        'programmed a tool for contract review.',
        'connected an e-shop directly with accounting.',
        'built a custom CRM for a small business.',
        'automated pricing and competitor tracking.'
    ]
};
