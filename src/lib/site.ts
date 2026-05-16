export const site = {
  brand: "Fresia",
  productName: "Fresia Mono 12",
  eyebrow: "Monobloková klimatizácia bez vonkajšej jednotky",
  phone: "+421 915 973 154",
  email: "info@fresia.sk",
  domain: "fresia.sk",
  ctaEmailSubject: "Dopyt – monobloková klimatizácia Fresia Mono 12",
  hero: {
    title: "Klimatizácia do bytu bez vonkajšej jednotky.",
    subtitle:
      "Elegantné riešenie pre byty, kancelárie, apartmány a objekty, kde nie je možné alebo vhodné montovať klasickú vonkajšiu jednotku na fasádu.",
    note: "Chladenie, kúrenie, odvlhčovanie a Wi‑Fi ovládanie v jednom kompaktnom zariadení."
  },
  product: {
    cooling: "3,5 kW",
    heating: "2,8 kW",
    space: "do 30 m²",
    noise: "od 39 dB",
    energyCooling: "A",
    energyHeating: "A+",
    airflow: "520 m³/h",
    refrigerant: "R290 / R32*",
    holes: "2 × 180 mm",
    depth: "20,5 cm",
    wifi: "Smart Life / Tuya",
    warranty: "24 mesiacov"
  },
  disclaimer:
    "*Parametre sú pripravené ako obchodný základ podľa segmentu. Pred ostrým spustením prepíšte hodnoty podľa finálneho datasheetu, energetického štítku, DoC a EPREL registrácie vášho dodávateľa."
};

export const benefits = [
  {
    title: "Bez vonkajšej jednotky",
    description:
      "Vhodné tam, kde správca, pamiatkový úrad alebo technické riešenie neumožňuje klasickú split klimatizáciu."
  },
  {
    title: "Chladenie aj kúrenie",
    description:
      "Jedno zariadenie vie ochladiť miestnosť v lete a prikúriť počas prechodného obdobia."
  },
  {
    title: "Čistý vzhľad fasády",
    description:
      "Z exteriéru ostávajú viditeľné len dve diskrétne mriežky namiesto veľkej vonkajšej jednotky."
  },
  {
    title: "Wi‑Fi ovládanie",
    description:
      "Teplotu, režimy a časovač možno ovládať cez aplikáciu alebo klasickým diaľkovým ovládačom."
  }
];

export const useCases = [
  "Byty bez balkóna alebo technickej možnosti pre vonkajšiu jednotku",
  "Historické budovy a fasády s obmedzeniami",
  "Kancelárie, prevádzky a apartmány na krátkodobý prenájom",
  "Miestnosti, kde mobilná klimatizácia s hadicou nestačí"
];

export const specs = [
  ["Chladiaci výkon", site.product.cooling],
  ["Tepelný výkon", site.product.heating],
  ["Odporúčaný priestor", site.product.space],
  ["Hlučnosť", site.product.noise],
  ["Energetická trieda – chladenie", site.product.energyCooling],
  ["Energetická trieda – kúrenie", site.product.energyHeating],
  ["Vzduchový výkon", site.product.airflow],
  ["Chladivo", site.product.refrigerant],
  ["Priestupy cez stenu", site.product.holes],
  ["Hĺbka jednotky", site.product.depth],
  ["Wi‑Fi", site.product.wifi],
  ["Záruka", site.product.warranty]
];

export const installationSteps = [
  {
    step: "01",
    title: "Zameranie miestnosti",
    text: "Overí sa plocha, orientácia miestnosti, typ steny, napájanie a vhodná výška osadenia."
  },
  {
    step: "02",
    title: "Dva prestupy cez stenu",
    text: "Monoblok potrebuje nasávanie a výfuk vzduchu cez stenu. Z exteriéru sú prekryté fasádnymi mriežkami."
  },
  {
    step: "03",
    title: "Montáž jednotky",
    text: "Zariadenie sa osadí na konzolu, napojí sa odvod kondenzátu a skontroluje sa tesnosť priestupov."
  },
  {
    step: "04",
    title: "Spustenie a zaškolenie",
    text: "Nastaví sa diaľkové ovládanie, Wi‑Fi aplikácia, časovač a základná údržba filtrov."
  }
];

export const faqs = [
  {
    question: "Je to plnohodnotná klimatizácia alebo mobilná klimatizácia?",
    answer:
      "Je to nástenná monobloková klimatizácia. Nejde o mobilnú jednotku s hadicou do okna ani o klasickú split klimatizáciu s vonkajšou jednotkou."
  },
  {
    question: "Treba stavebný zásah?",
    answer:
      "Áno. Zariadenie vyžaduje dva kruhové priestupy cez obvodovú stenu a správny odvod kondenzátu. Presný postup závisí od skladby steny a objektu."
  },
  {
    question: "Je vhodná do spálne?",
    answer:
      "Závisí od citlivosti používateľa a finálnej hlučnosti konkrétneho modelu. Pre spálne odporúčame overiť režim nízkej hlučnosti a umiestnenie mimo čela postele."
  },
  {
    question: "Môže sa použiť aj na kúrenie?",
    answer:
      "Áno, typicky funguje aj ako tepelné čerpadlo vzduch–vzduch. V mrazoch však nemusí nahrádzať hlavný zdroj vykurovania."
  }
];
