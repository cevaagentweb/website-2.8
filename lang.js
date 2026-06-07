// Language translations for the entire site
const translations = {
    // === NAVBAR ===
    'nav.home': { sk: 'Domov', en: 'Home' },
    'nav.projects': { sk: 'Projekty', en: 'Projects' },
    'nav.about': { sk: 'O nás', en: 'About' },
    'nav.contact': { sk: 'Kontakt', en: 'Contact' },
    'nav.security': { sk: 'Bezpečnosť', en: 'Security' },
    'nav.cta': { sk: 'Napíšte nám', en: 'Write to us' },

    // === FOOTER ===
    'footer.tagline': { sk: 'Digitálne riešenia na mieru.', en: 'Custom digital solutions.' },
    'footer.nav': { sk: 'Navigácia', en: 'Navigation' },
    'footer.contact': { sk: 'Kontakt', en: 'Contact' },
    'footer.rights': { sk: '© 2026 AI xSolutions. Všetky práva vyhradené.', en: '© 2026 AI xSolutions. All rights reserved.' },

    // === INDEX ===
    'hero.subtitle': { sk: 'Čo robíme', en: 'What we do' },
    'hero.title1': { sk: 'Automatizácia & Inovácie', en: 'Automation & Innovation' },
    'hero.title2': { sk: 'Úspora Času & Produktivita', en: 'Time Saving & Productivity' },
    'hero.title3': { sk: 'Umelá Inteligencia & Ľudia', en: 'Artificial Intelligence & People' },
    'hero.title4': { sk: 'Vaša Vízia & Naša Realizácia', en: 'Your Vision & Our Execution' },
    'hero.dynamic.prefix': { sk: '', en: '' },
    'hero.desc1': { sk: 'Máte nápad? Vy viete, čo vaša firma potrebuje. Nechajte nás vašu víziu zrealizovať za vás.', en: 'Have an idea? You know what your company needs. Let us turn your vision into reality for you.' },
    'hero.desc2': { sk: 'Tvoríme digitálne nástroje na mieru každej firme, ktoré šetria čas a zjednodušujú prácu.', en: 'We create custom digital tools for every company that save time and simplify work.' },
    'card.apps.title': { sk: 'APLIKÁCIE', en: 'APPLICATIONS' },
    'card.apps.desc': { sk: 'Produktívne aplikácie na mieru.', en: 'Custom productivity applications.' },
    'card.ai.title': { sk: 'AI RIEŠENIA', en: 'AI SOLUTIONS' },
    'card.ai.desc': { sk: 'Umelá inteligencia, ktorá funguje pre vás.', en: 'Artificial intelligence that works for you.' },
    'card.web.title': { sk: 'WEBSTRÁNKY', en: 'WEBSITES' },
    'card.web.desc': { sk: 'Webstránky podľa vašej predstavy.', en: 'Websites according to your vision.' },
    'marquee.title': { sk: 'Technológie, ktoré používame', en: 'Technologies we use' },
    'testimonials.subtitle': { sk: 'Čo hovoria klienti', en: 'What clients say' },

    // === CONTACT ===
    'contact.subtitle': { sk: 'Kontakt', en: 'Contact' },
    'contact.title': { sk: 'Ako vám môžeme pomôcť?', en: 'How can we help you?' },
    'contact.desc': { sk: 'Nechajte si vypracovať nezáväznú cenovú ponuku.', en: 'Get a non-binding custom price quote.' },
    'contact.form.name': { sk: 'Meno a priezvisko', en: 'Full name' },
    'contact.form.company': { sk: 'Firma / Spoločnosť', en: 'Company' },
    'contact.form.position': { sk: 'Pozícia vo firme', en: 'Position in company' },
    'contact.form.pos.ceo': { sk: 'CEO / Majiteľ', en: 'CEO / Owner' },
    'contact.form.pos.marketing': { sk: 'Marketing / Obchod', en: 'Marketing / Sales' },
    'contact.form.pos.finance': { sk: 'Ekonomika / Účtovníctvo', en: 'Finance / Accounting' },
    'contact.form.pos.it': { sk: 'IT / Vývoj', en: 'IT / Development' },
    'contact.form.pos.other': { sk: 'Iné', en: 'Other' },
    'contact.form.phone': { sk: 'Telefónne číslo', en: 'Phone number' },
    'contact.form.email': { sk: 'E-mail', en: 'E-mail' },
    'contact.form.message': { sk: 'Napíšte nám o vašej vízii', en: 'Tell us about your vision' },
    'contact.form.submit': { sk: 'Odoslať správu', en: 'Send message' },
    'contact.flow.title': { sk: 'Ako to funguje', en: 'How it works' },
    'contact.flow.step1.title': { sk: 'Opíšete problém', en: 'Describe the problem' },
    'contact.flow.step1.desc': { sk: 'Povedzte nám, čo vás vo firme zdržuje alebo kde strácate čas na manuálnej práci.', en: 'Tell us what slows you down or where you lose time on manual work.' },
    'contact.flow.step2.title': { sk: 'Analyzujeme možnosti', en: 'We analyze options' },
    'contact.flow.step2.desc': { sk: 'Pozrieme sa na vaše procesy a navrhneme praktické riešenie na mieru.', en: 'We look at your processes and propose a practical custom solution.' },
    'contact.flow.step3.title': { sk: 'Pošleme cenovú ponuku', en: 'We send a price offer' },
    'contact.flow.step3.desc': { sk: 'Dostanete presnú cenovú ponuku s popisom riešenia. Bez záväzkov.', en: 'You receive an exact price offer with a description of the solution. No strings attached.' },
    'contact.flow.subtitle': { sk: 'Priebeh spolupráce', en: 'Collaboration Process' },
    'contact.flow.headline1': { sk: 'Nechajte si navrhnúť riešenie na mieru', en: 'Let us propose a custom solution' },
    'contact.flow.headline2': { sk: 'Zistite, ako vám môžeme pomôcť rásť', en: 'Find out how we can help you grow' },
    'contact.flow.headline3': { sk: 'Premeňte svoj nápad na skutočnosť', en: 'Turn your idea into reality' },
    'contact.info.title': { sk: 'Kontaktné údaje', en: 'Contact details' },
    'contact.info.address.label': { sk: 'Sídlo spoločnosti', en: 'Company address' },
    'contact.info.billing.label': { sk: 'Fakturačné údaje', en: 'Billing details' },
    'contact.info.contact.label': { sk: 'Kontakt', en: 'Contact' },
    'contact.info.payment.label': { sk: 'Platobné podmienky', en: 'Payment Terms' },
    'contact.info.payment.desc': { sk: '100% spokojnosť. Platba až po dodaní a schválení.', en: '100% satisfaction. Payment only after delivery and approval.' },

    // === ABOUT ===
    'about.subtitle': { sk: 'O nás', en: 'About us' },
    'about.title': { sk: 'O nás', en: 'About us' },
    'about.headline': { sk: 'Každá firma je jedinečná. Nájdeme jedinečné riešenie aj pre vás.', en: 'Every company is unique. We will find a unique solution for you too.' },
    'about.intro': { sk: 'Pomáhame firmám šetriť čas tam, kde ho dnes zbytočne strácajú na manuálnej práci. Vytvárame praktické interné nástroje, mini aplikácie a AI riešenia, ktoré zrýchľujú firemné procesy, znižujú počet chýb a dávajú zamestnancom viac priestoru na prácu s vyššou hodnotou.', en: 'We help companies save time where they waste it on manual work. We create practical internal tools, mini apps, and AI solutions that speed up processes, reduce errors, and give employees more room for high-value work.' },

    // === SECURITY ===
    'security.subtitle': { sk: 'Bezpečnosť', en: 'Security' },
    'security.title': { sk: 'Vaše dáta sú u nás v bezpečí', en: 'Your data is safe with us' },
    'security.desc1': { sk: 'Všetky naše produkty sú plne bezpečné a navrhnuté s ohľadom na maximálnu ochranu vášho know-how. K vašim dátam máte prístup výhradne vy.', en: 'All our products are fully secure and designed with maximum protection of your know-how in mind. Only you have access to your data.' },
    'security.desc2': { sk: 'Vyvinuté mini aplikácie a riešenia vám patria navždy. Žiadne skryté poplatky ani povinné mesačné predplatné (subscriptions). Platíte len raz za funkčné riešenie.', en: 'The developed mini apps and solutions belong to you forever. No hidden fees or mandatory monthly subscriptions. You only pay once for a working solution.' },

    // === SECURITY PAGE ===
    'security.page.title': { sk: 'Bezpečnosť', en: 'Security' },
    'security.page.headline': { sk: 'Vaše údaje. Vaše know-how. V bezpečí.', en: 'Your data. Your know-how. Secured.' },
    'security.page.intro': { sk: 'V AI xSolutions vieme, že vo svete umelej inteligencie a automatizácie je dôvernosť údajov absolútnou prioritou. Preto každé naše riešenie navrhujeme tak, aby vaša firma nestratila kontrolu nad žiadnym citlivým údajom.', en: 'At AI xSolutions, we know that in the world of AI and automation, data confidentiality is an absolute priority. That is why we design every solution so that your company never loses control over any sensitive data.' },
    'security.p1.title': { sk: 'Dáta patria iba vám', en: 'Data belongs only to you' },
    'security.p1.desc': { sk: 'Riešenia budujeme v oddelených, plne zabezpečených prostrediach. Nikdy nevyužívame vaše firemné dáta na trénovanie verejných AI modelov.', en: 'We build solutions in isolated, fully secure environments. We never use your corporate data to train public AI models.' },
    'security.p2.title': { sk: 'Nezávislé a vlastnené vami', en: 'Independent and owned by you' },
    'security.p2.desc': { sk: 'Vyvinuté mini aplikácie a nástroje vám patria navždy. Vďaka tomu nie ste odkázaní na povinné predplatné a nemusíte sa báť skrytých poplatkov za licencie.', en: 'The developed mini apps and tools belong to you forever. Thanks to this, you do not depend on mandatory subscriptions and do not have to worry about hidden license fees.' },
    'security.p3.title': { sk: 'Šifrovanie a ochrana', en: 'Encryption and protection' },
    'security.p3.desc': { sk: 'Používame najmodernejšie štandardy šifrovania prenosu dát a zabezpečenia.', en: 'We use the most modern standards for data transmission encryption and security.' },

    // === PROJECTS ===
    'projects.subtitle': { sk: 'Naše práce', en: 'Our work' },
    'projects.title': { sk: 'Realizácie & Projekty', en: 'Case Studies & Projects' },
    'projects.desc': { sk: 'Pozrite si, čo sme vytvorili pre našich klientov.', en: 'See what we have built for our clients.' },
    'projects.detail': { sk: 'Zobraziť detail', en: 'View detail' },

    // === 404 ===
    '404.title': { sk: 'Stránka sa nenašla', en: 'Page not found' },
    '404.desc': { sk: 'Táto stránka ešte neexistuje alebo bola premiestnená.', en: 'This page does not exist yet or has been moved.' },
    '404.back': { sk: 'Späť na hlavnú stránku', en: 'Back to homepage' },

    // === COOKIES ===
    'cookie.title': { sk: 'Rešpektujeme vaše súkromie', en: 'We respect your privacy' },
    'cookie.desc': { sk: 'Tento web používa nevyhnutné súbory cookie pre správne fungovanie a analytické súbory cookie pre zlepšenie používateľského zážitku.', en: 'This website uses essential cookies for proper functioning and analytical cookies to improve user experience.' },
    'cookie.accept': { sk: 'Prijať všetky', en: 'Accept all' },
    'cookie.reject': { sk: 'Iba nevyhnutné', en: 'Essential only' },

    // === GALLERY ===
    'projects.gallery.title': { sk: 'Ukážky softvéru', en: 'Software UI Previews' },
    'projects.gallery.desc': { sk: 'Prezrite si rozhrania našich aplikácií v akcii.', en: 'Check out the interfaces of our applications in action.' }
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
        'Automatické OCR čítanie bločkov a ich export priamo do účtovníctva.',
        'Pravidelný týždenný report o vydaných stavebných povoleniach.',
        'Zber stoviek e-mailových kontaktov pre efektívny cold e-mailing.',
        'Aplikácia na automatické spracovanie a triedenie stoviek PDF dokumentov.',
        'Tvorba unikátnej webstránky presne podľa vášho firemného brandingu.',
        'Nástroj, ktorý jedným klikom opečiatkuje stovky interných PDF dokladov.',
        'Automatické párovanie prichádzajúcich platieb s bločkami a faktúrami.',
        'AI systém, ktorý sám roztriedi PDF dokumenty pomocou čítania textu.',
        'Konverzia zložitého technického exportu na prehľadný Excel súbor pre klienta.',
        'Nástroj pre hromadné generovanie stoviek PDF dokumentov z jednej tabuľky.',
        'Inteligentný asistent na triedenie a vyhodnocovanie stoviek životopisov.',
        'Zautomatizovanie zložitej cenotvorby energií na pár sekúnd práce.'
    ],
    en: [
        'Automatic OCR receipt scanning and direct export to accounting software.',
        'Regular weekly reports on issued building permits.',
        'Collection of hundreds of targeted email contacts for effective cold emailing.',
        'Application for automated processing and sorting of hundreds of PDF documents.',
        'Development of unique websites tailored exactly to your corporate branding.',
        'A tool that automatically stamps hundreds of internal PDF documents in one click.',
        'Automated matching of incoming bank payments with receipts and invoices.',
        'AI system that automatically sorts PDF documents using text recognition.',
        'Conversion of complex technical data exports into clean, client-ready Excel files.',
        'A tool for mass generation of hundreds of custom PDF documents from a single spreadsheet.',
        'Intelligent assistant for sorting and evaluating hundreds of resumes.',
        'Automation of complex energy pricing models down to seconds of work.'
    ]
};

window.projectsTypewriter = {
    sk: [
        { role: 'Účtovníčka: ', text: 'Spravili sme automatickú čítačku bločkov do Pohody bez nutnosti ručného nahadzovania údajov.' },
        { role: 'Ekonómka: ', text: 'Vytvorili sme automatické generovanie XML faktúr pre Pohodu podľa interného podkladu firmy.' },
        { role: 'Stavebná firma: ', text: 'Klient nás požiadal o každotýždenný report zo stavebných úradov v ich okolí ohľadom udelených stavebných povolení a príslušných developerov a investorov.' },
        { role: 'Firma: ', text: 'Poskytli sme databázu e-mailových kontaktov firiem, ktoré spadajú do ich klientskej kategórie, na účely cold e-mailingu.' },
        { role: 'Firma: ', text: 'Vytvorili sme webstránku podľa zadania a firemného brandingu.' },
        { role: 'Administratívny pracovník: ', text: 'Požiadal nás o automatický pečiatkovač interných PDF dokladov.' },
        { role: 'Ekonómka: ', text: 'Vytvorili sme mini aplikáciu, ktorá spracováva platby z bankového výpisu a páruje ich s bločkami.' },
        { role: 'Manažér: ', text: 'Vytvorili sme automatickú triedičku s OCR na rozdeľovanie vážnych lístkov zo stavby.' },
        { role: 'Manažér: ', text: 'Vytvorili sme VBA Excel, ktorý premení CSV export z interného systému TRUCKSCALE na čistý Excel súbor pripravený na odoslanie zákazníkovi.' },
        { role: 'Firma: ', text: 'Poskytli sme podporu ohľadom toho, ako efektívne využívať AI nástroje vo firme.' },
        { role: 'Manažér: ', text: 'Vytvorili sme Excel VBA nástroj, ktorý na základe vyplnených polí dokáže hromadne vytvoriť stovky unikátnych PDF interných dokumentov podľa pripraveného podkladu.' },
        { role: 'Personálna agentúra: ', text: 'Vytvorili sme aplikáciu na triedenie kandidátov podľa pozície, skúseností a zručností.' },
        { role: 'Energetik: ', text: 'Vytvorili sme Excel makro, ktoré z uvedených hodnôt dokáže hromadne pripraviť stovky podkladov pre účtovníčku ohľadom ceny energie, unikátne pre každého klienta.' },
        { role: 'Firma: ', text: 'Nastavili sme firme paušálnu administratívnu podporu pre zamestnancov, v rámci ktorej riešime ich operatívne administratívne požiadavky do 24 hodín.' }
    ],
    en: [
        { role: 'Accountant: ', text: 'Built an automatic receipt reader for Pohoda without manual data entry.' },
        { role: 'Economist: ', text: 'Created automatic XML invoice generation for Pohoda based on internal data.' },
        { role: 'Construction firm: ', text: 'Client requested a weekly report from local building authorities regarding issued permits and respective developers/investors.' },
        { role: 'Company: ', text: 'Provided a database of email contacts for companies in their client category for cold emailing.' },
        { role: 'Company: ', text: 'Created a website according to specifications and corporate branding.' },
        { role: 'Admin worker: ', text: 'Requested an automatic stamper for internal PDF documents.' },
        { role: 'Economist: ', text: 'Created a mini app that processes bank statement payments and matches them with receipts.' },
        { role: 'Manager: ', text: 'Created an automatic OCR sorter for dividing weight tickets from a construction site.' },
        { role: 'Manager: ', text: 'Created an Excel VBA tool to convert CSV exports from TRUCKSCALE into clean Excel files ready for customers.' },
        { role: 'Company: ', text: 'Provided support on how to effectively use AI tools in the company.' },
        { role: 'Manager: ', text: 'Created an Excel VBA tool that generates hundreds of unique internal PDF documents based on filled fields.' },
        { role: 'HR Agency: ', text: 'Created an application to sort candidates by position, experience, and skills.' },
        { role: 'Energy specialist: ', text: 'Created an Excel macro to prepare hundreds of energy price documents for accounting, unique for each client.' },
        { role: 'Company: ', text: 'We set up flat-rate administrative support for employees, handling their operational administrative requests within 24 hours.' }
    ]
};

window.contactTypewriter = {
    sk: [
        'Nechajte si vypracovať nezáväznú cenovú ponuku.',
        'Zistite, ako vám dokážeme ušetriť desiatky hodín práce.',
        'Navrhneme vám digitálne riešenie presne na mieru.',
        'Premeňte svoj nápad na skutočnosť a predbehnite konkurenciu.'
    ],
    en: [
        'Get a non-binding custom price quote.',
        'Find out how we can save you dozens of hours of work.',
        'We will design a digital solution exactly tailored to you.',
        'Turn your idea into reality and stay ahead of the competition.'
    ]
};

