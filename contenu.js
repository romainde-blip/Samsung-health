'use strict';
/* =====================================================================
   CONTENU DE LA TROUSSE HONOR
   Repris de Trousse-HONOR.html (contenus vérifiés au 16 octobre 2026).
   Les fiches vendeur HONOR (one-pagers, revérifiées le 08/10/2026) priment
   en cas de doute : les écarts sont listés dans « contradictions ».
   Les conseils « En magasin » absents de la trousse ont été ajoutés : gestes
   et questions uniquement, sans donnée produit nouvelle.
   Statuts : 'verified' = Vérifié, 'confirm' = À confirmer, 'announced' = Annoncé.
   Un champ absent ou à null s'affiche « À reprendre ».
   ===================================================================== */

const CHECKED = "16 octobre 2026";
const ADMIN_PIN = "4826";
const ENSEIGNES = ["Fnac","Darty","Boulanger","Orange","SFR","Bouygues Telecom","Free","Autre"];

const UNIVERS = [
 {
  "id": "smartphones",
  "name": "Smartphones",
  "short": "Mobiles",
  "families": "Magic · Magic V · Série N · Série X",
  "intro": "Les pliables Magic V, les haut de gamme Magic, la série numérique (600, 400) et l'entrée de gamme.",
  "count": 16,
  "phare": "magic-v6"
 },
 {
  "id": "tablettes",
  "name": "Tablettes",
  "short": "Tablettes",
  "families": "MagicPad · Pad",
  "intro": "La MagicPad4 pour le cinéma et le travail, les Pad pour la famille et les études.",
  "count": 8,
  "phare": "magicpad4"
 },
 {
  "id": "ordinateurs",
  "name": "Ordinateurs",
  "short": "PC",
  "families": "MagicBook",
  "intro": "Des portables Windows qui travaillent avec les smartphones et tablettes HONOR.",
  "count": 4,
  "phare": "magicbook16"
 },
 {
  "id": "montres",
  "name": "Montres et bracelets",
  "short": "Montres",
  "families": "Watch · Band",
  "intro": "Autonomie longue, suivi sport et bien-être, compatibles Android et iPhone.",
  "count": 5,
  "phare": "watch6"
 },
 {
  "id": "audio",
  "name": "Audio",
  "short": "Audio",
  "families": "Earbuds · HONOR CHOICE",
  "intro": "Écouteurs HONOR et gamme partenaire HONOR CHOICE.",
  "count": 8,
  "phare": "earbuds4"
 },
 {
  "id": "services",
  "name": "Services",
  "short": "Services",
  "families": "MagicOS · IA · Transfert · Garantie",
  "intro": "Tout ce qui rassure le client au moment de changer : transfert des données, compatibilité, IA, garantie.",
  "count": 6,
  "phare": "services"
 }
];

const UNIVERS_ALERTS = {
 "smartphones": "Série X : les X9d, X8d et X7d n'apparaissent pas sur honor.com/fr (seulement sur des sites HONOR d'autres pays). Ne les présentez pas comme vendus en France sans confirmation de votre enseigne.",
 "audio": "HONOR CHOICE est une gamme partenaire : achetée ailleurs que sur honor.com, son service après-vente passe par le revendeur, pas par HONOR."
};

const KITS_RAW = [
 {
  "id": "magic-v6",
  "name": "HONOR Magic V6",
  "univers": "smartphones",
  "family": "Série Magic V · pliable",
  "type": "fold",
  "img": "visuels/magic-v6.webp",
  "imgAr": 0.773,
  "status": "verified",
  "flag": true,
  "tagline": "Un smartphone fin qui s'ouvre sur un écran de tablette.",
  "price": "2 299,90 €",
  "priceStatus": "verified",
  "launch": "En vente en France depuis le 2 juillet 2026 · 16 Go + 512 Go",
  "hook": "Le grand écran sans le poids d'une tablette.",
  "hookSub": "Plié, il se manie comme un smartphone. Déplié, le client lit, compare et travaille sur 7,95 pouces.",
  "figures": [
   {
    "value": 8.75,
    "unit": "mm",
    "label": "d'épaisseur plié (modèle blanc)"
   },
   {
    "value": 219,
    "unit": "g",
    "label": "sur la balance (modèle blanc)"
   },
   {
    "value": 6660,
    "unit": "mAh",
    "label": "de batterie silicium-carbone"
   },
   {
    "value": 500000,
    "unit": "",
    "label": "pliages testés par SGS"
   }
  ],
  "points": [
   {
    "title": "Le format d'un smartphone, l'écran d'une tablette",
    "text": "8,75 mm plié, 4,0 mm déplié, 219 g pour le modèle blanc. Écran intérieur de 7,95 pouces, écran extérieur de 6,52 pouces."
   },
   {
    "title": "Une journée complète, même écran ouvert",
    "text": "Batterie de 6 660 mAh, 24 heures d'usage certifiées par TÜV Rheinland. Recharge 80 W filaire et 66 W sans fil, chargeurs vendus à part."
   },
   {
    "title": "Pensé pour durer",
    "text": "Charnière en acier testée sur 500 000 pliages, écran prévu pour un usage sans film (protection NanoCrystal Shield), certifications IP68 et IP69."
   },
   {
    "title": "Il fonctionne avec Apple",
    "text": "Partage de fichiers avec iPhone et Mac, notifications de l'iPhone et de l'Apple Watch, AirPods, iCloud. Certaines fonctions arrivent par mise à jour."
   },
   {
    "title": "L'IA s'ouvre avec l'écran",
    "text": "HONOR Fast-Flex lance l'agent IA ou deux applis en écran partagé dès le dépliage. Gemini intégré."
   }
  ],
  "alerts": [
   "Prix public : 2 299,90 €. Jusqu'au 2 novembre 2026, honor.com ajoute un coupon de 600 € et un pack cadeaux. Vérifiez l'offre de votre enseigne avant d'annoncer un prix.",
   "Ne dites jamais « étanche ». HONOR précise que l'appareil résiste à l'eau et à la poussière en conditions de test, et que les dégâts liés aux liquides annulent la garantie.",
   "Offre Google AI Pro : les fiches vendeur l’ont écartée, car le stockage et la date de fin diffèrent selon les pages HONOR. N’en parlez pas sans avoir vérifié l’offre du jour."
  ],
  "modules": [
   {
    "id": "magic-v6-m1",
    "title": "Découvrir le Magic V6",
    "goal": "Présenter le produit en deux minutes, par l'usage.",
    "time": "4 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui veut un grand écran sans porter une tablette",
      "text": "Lecture, vidéos, documents, réunions en déplacement : tout ce qui gagne à avoir deux fois plus de surface.",
      "tip": "Posez la question : « Vous lisez ou travaillez souvent sur votre téléphone ? »"
     },
     {
      "kicker": "Le format",
      "title": "8,75 mm plié, 219 g",
      "text": "Plié, il se manie comme un smartphone. Déplié, il fait 4,0 mm d'épaisseur et affiche 7,95 pouces.",
      "tip": "Faites-le tenir fermé au client avant de l'ouvrir."
     },
     {
      "kicker": "L'autonomie",
      "title": "6 660 mAh dans un pliable fin",
      "text": "24 heures d'usage certifiées par TÜV Rheinland, écran intérieur compris. Recharge 80 W filaire et 66 W sans fil.",
      "tip": "Rappelez que les chargeurs sont vendus séparément."
     },
     {
      "kicker": "La solidité",
      "title": "500 000 pliages, IP68 et IP69",
      "text": "Charnière en acier haute résistance, protection d'écran NanoCrystal Shield prévue pour un usage sans film.",
      "tip": "Dépliez et repliez plusieurs fois devant le client."
     },
     {
      "kicker": "L'écosystème",
      "title": "Compatible Apple et HONOR",
      "text": "Notifications de l'iPhone et de l'Apple Watch, AirPods, iCloud, Mac. Côté HONOR : MagicPad4, MagicBook 16, montres.",
      "tip": "Demandez quel téléphone le client utilise aujourd'hui."
     }
    ]
   },
   {
    "id": "magic-v6-m2",
    "title": "Réussir la démo et conclure",
    "goal": "Enchaîner les gestes qui déclenchent l'achat.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Ouvrir",
      "title": "Commencez fermé",
      "text": "Le premier effet, c'est la finesse. Le client le prend en main plié et cherche où est le pliable.",
      "tip": "Tendez-le plié, écran extérieur allumé, et laissez le client chercher la charnière avant de dire un mot."
     },
     {
      "kicker": "Montrer",
      "title": "Deux applis côte à côte",
      "text": "Une vidéo d'un côté, des notes de l'autre : le bénéfice se voit en cinq secondes.",
      "tip": "Préparez l'écran partagé avant l'arrivée du client."
     },
     {
      "kicker": "Rassurer",
      "title": "La question de la solidité arrive toujours",
      "text": "Répondez par les preuves : 500 000 pliages testés par SGS, IP68 et IP69, écran prévu pour un usage sans film.",
      "tip": "Laissez le client poser la question lui-même, puis répondez en dépliant et repliant devant lui."
     },
     {
      "kicker": "Accompagner",
      "title": "Changer de téléphone est simple",
      "text": "Device Clone transfère les données d'un iPhone ou d'un Android en scannant un QR code, sans câble.",
      "tip": "Proposez de lancer le transfert ensemble en magasin : le client part avec un téléphone prêt."
     },
     {
      "kicker": "Conclure",
      "title": "Résumez en trois mots",
      "text": "Fin, endurant, solide. Puis présentez l'offre en cours dans votre enseigne.",
      "tip": "Ne donnez un prix qu'après avoir vérifié l'offre du jour."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "La finesse en main",
    "accroche": "Prenez-le fermé. Vous diriez que c'est un pliable ?",
    "preuve": "8,75 mm plié et 219 g pour le modèle blanc, d'après HONOR.",
    "benefice": "Le client garde le confort d'un smartphone classique dans la poche.",
    "action": "Tendez l'appareil fermé, écran extérieur allumé. Laissez le client le soupeser avant de parler."
   },
   {
    "title": "Le grand écran en un geste",
    "accroche": "Maintenant, ouvrez-le.",
    "preuve": "Écran intérieur de 7,95 pouces, de 1 à 120 Hz, qui ne reflète que 1,5 % de la lumière.",
    "benefice": "Lire un article, regarder une série ou consulter un plan sans zoomer.",
    "action": "Laissez le client le déplier lui-même. Affichez une photo ou une page web en plein écran."
   },
   {
    "title": "Deux tâches à la fois",
    "accroche": "Vous avez déjà dû lire un document tout en répondant à un message ?",
    "preuve": "HONOR Fast-Flex ouvre l'écran partagé et l'agent IA au dépliage. Plusieurs fenêtres s'affichent sur le grand écran.",
    "benefice": "Le client compare, copie et répond sans jongler entre les applis.",
    "action": "Ouvrez Notes à gauche et le navigateur à droite, puis glissez un texte d'un côté à l'autre."
   },
   {
    "title": "La journée sans chargeur",
    "accroche": "Combien de fois rechargez-vous votre téléphone par jour ?",
    "preuve": "6 660 mAh et 24 heures d'usage certifiées par TÜV Rheinland. Recharge 80 W filaire, 66 W sans fil.",
    "benefice": "Pas d'inquiétude pour la batterie, même avec le grand écran.",
    "action": "Montrez Paramètres > Batterie. Précisez que les chargeurs HONOR SuperCharge sont vendus séparément."
   },
   {
    "title": "Solide et compatible",
    "accroche": "Vous avez un iPhone ou des AirPods ? Ils restent utiles.",
    "preuve": "Charnière testée 500 000 fois par SGS, IP68 et IP69. Partage avec iPhone, Mac, AirPods et Apple Watch.",
    "benefice": "Le client change de téléphone sans abandonner ses appareils.",
    "action": "Repliez et dépliez plusieurs fois, puis ouvrez Device Clone pour montrer le QR code du transfert."
   }
  ],
  "pitch": {
   "text": "Vous cherchez un grand écran sans porter une tablette ? Le HONOR Magic V6 fait 8,75 millimètres plié, comme un smartphone. Vous l'ouvrez et vous avez 7,95 pouces pour lire, regarder ou travailler sur deux applis en même temps. Sa batterie de 6 660 mAh tient une journée complète, même écran ouvert. Sa charnière a été testée 500 000 fois, il résiste à l'eau et à la poussière, et il fonctionne avec votre iPhone, vos AirPods et votre Mac. Vous voulez l'ouvrir vous-même ?",
   "keywords": [
    "HONOR Magic V6",
    "Vous voulez l'ouvrir vous-même ?"
   ]
  },
  "objections": [
   {
    "id": "magic-v6-o1",
    "q": "C'est trop cher.",
    "reponse": "Comparez-le à ce qu'il remplace : un smartphone haut de gamme et une petite tablette. Le prix public est de 2 299,90 €, et des offres existent selon la période et l'enseigne.",
    "montrer": "Vérifiez l'offre du jour avant de donner un chiffre."
   },
   {
    "id": "magic-v6-o2",
    "q": "Un pliable, ça casse.",
    "reponse": "La charnière en acier a passé 500 000 pliages en test SGS, soit plus de 130 ouvertures par jour pendant dix ans. L'écran est prévu pour être utilisé sans film.",
    "montrer": "Dépliez et repliez devant le client."
   },
   {
    "id": "magic-v6-o3",
    "q": "On voit le pli.",
    "reponse": "HONOR met en avant un pli très discret. Le plus convaincant reste de laisser le client regarder l'écran sous la lumière.",
    "montrer": "Inclinez l'écran déplié sous l'éclairage du magasin."
   },
   {
    "id": "magic-v6-o4",
    "q": "Ce sera épais et lourd.",
    "reponse": "Plié, il fait 8,75 mm et 219 g pour le modèle blanc.",
    "montrer": "Mettez-le fermé dans la main du client."
   },
   {
    "id": "magic-v6-o5",
    "q": "J'ai tout chez Apple.",
    "reponse": "Il partage des fichiers avec l'iPhone et le Mac, affiche les notifications de l'iPhone et de l'Apple Watch, et se connecte aux AirPods. Certaines fonctions arrivent par mise à jour.",
    "montrer": "Montrez l'appli HONOR Connect, disponible sur l'App Store."
   },
   {
    "id": "magic-v6-o6",
    "q": "Et s'il prend l'eau ?",
    "reponse": "Il est certifié IP68 et IP69 : immersion testée jusqu'à 1,5 m pendant 30 minutes. La protection n'est pas permanente, et les dégâts liés aux liquides ne sont pas couverts par la garantie.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Quelle est l'épaisseur du Magic V6 plié (modèle blanc) ?",
    "options": [
     "7,2 mm",
     "8,75 mm",
     "9,9 mm",
     "11,4 mm"
    ],
    "answer": 1,
    "explain": "8,75 mm plié et 4,0 mm déplié, selon HONOR."
   },
   {
    "q": "Quelle est la capacité de sa batterie ?",
    "options": [
     "5 820 mAh",
     "6 270 mAh",
     "6 660 mAh",
     "7 500 mAh"
    ],
    "answer": 2,
    "explain": "6 660 mAh. Le Magic V5 avait 5 820 mAh."
   },
   {
    "q": "Combien de pliages la charnière a-t-elle passés en test SGS ?",
    "options": [
     "100 000",
     "250 000",
     "400 000",
     "500 000"
    ],
    "answer": 3,
    "explain": "500 000 cycles de pliage selon le protocole SGS."
   },
   {
    "q": "Quelles certifications eau et poussière ?",
    "options": [
     "IP54",
     "IP58 et IP59",
     "IP68 et IP69",
     "Aucune"
    ],
    "answer": 2,
    "explain": "IP68 et IP69. Le V5 était certifié IP58 et IP59."
   },
   {
    "q": "Quelle phrase pouvez-vous dire au client ?",
    "options": [
     "« Vous pouvez nager avec. »",
     "« Il résiste à l'eau et à la poussière, mais les dégâts liés aux liquides ne sont pas couverts par la garantie. »",
     "« L'eau est couverte par la garantie. »",
     "« Il ne craint rien. »"
    ],
    "answer": 1,
    "explain": "HONOR précise que la résistance à l'eau est testée en laboratoire et que les dégâts liés aux liquides annulent la garantie."
   }
  ],
  "faq": [
   {
    "id": "magic-v6-f1",
    "q": "Quand est-il sorti en France ?",
    "a": "Le 2 juillet 2026."
   },
   {
    "id": "magic-v6-f2",
    "q": "Quel est son prix ?",
    "a": "2 299,90 € sur le site officiel HONOR France, en version unique 16 Go + 512 Go. Le prix final dépend des offres en cours."
   },
   {
    "id": "magic-v6-f3",
    "q": "Quelles couleurs ?",
    "a": "Rouge, or, blanc et noir."
   },
   {
    "id": "magic-v6-f4",
    "q": "Le chargeur est-il fourni ?",
    "a": "Non. Les 80 W filaires et 66 W sans fil demandent les chargeurs HONOR SuperCharge d'origine, vendus séparément."
   },
   {
    "id": "magic-v6-f5",
    "q": "Accepte-t-il l'eSIM ?",
    "a": "Oui : deux SIM physiques, une SIM et une eSIM, ou deux eSIM. La prise en charge dépend de l'opérateur."
   },
   {
    "id": "magic-v6-f6",
    "q": "Peut-on utiliser un stylet ?",
    "a": "Oui, les deux écrans sont compatibles. Le HONOR Magic-Pen est vendu séparément."
   },
   {
    "id": "magic-v6-f7",
    "q": "Qu'est-ce qui change par rapport au Magic V5 ?",
    "a": "Batterie plus grande (6 660 contre 5 820 mAh), recharge plus rapide (80 et 66 W contre 66 et 50 W), IP68 et IP69 au lieu d'IP58 et IP59, processeur plus récent et MagicOS 10."
   },
   {
    "id": "magic-v6-f8",
    "q": "Faut-il poser un film de protection ?",
    "a": "HONOR indique que l'écran est conçu pour être utilisé sans film, grâce à la protection NanoCrystal Shield."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur plié / déplié",
      "value": "8,75 mm / 4,0 mm (blanc) ; 9,0 mm plié pour les autres coloris",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "219 g (blanc) ; 224 g pour les autres coloris",
      "status": "verified"
     },
     {
      "label": "Couleurs",
      "value": "Red, Gold, White, Black",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP68 et IP69 (immersion 1,5 m, 30 min)",
      "status": "verified"
     },
     {
      "label": "Charnière",
      "value": "Acier 2 800 MPa, 500 000 pliages SGS",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écrans",
    "rows": [
     {
      "label": "Intérieur",
      "value": "7,95\" OLED LTPO, 1 à 120 Hz, 5 000 nits",
      "status": "verified"
     },
     {
      "label": "Extérieur",
      "value": "6,52\" OLED LTPO, 1 à 120 Hz, 6 000 nits",
      "status": "verified"
     },
     {
      "label": "Gradation PWM",
      "value": "4 320 Hz",
      "status": "verified"
     },
     {
      "label": "Réflexion",
      "value": "1,5 %",
      "status": "verified"
     },
     {
      "label": "Stylet",
      "value": "Compatible, vendu séparément",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 8 Elite Gen 5, 3 nm, jusqu'à 4,6 GHz",
      "status": "verified"
     },
     {
      "label": "Mémoire",
      "value": "16 Go + 512 Go",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     },
     {
      "label": "SIM",
      "value": "SIM + SIM, SIM + eSIM, eSIM + eSIM",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "6 660 mAh typique, 6 510 mAh nominale",
      "status": "verified"
     },
     {
      "label": "Recharge filaire",
      "value": "80 W HONOR SuperCharge",
      "status": "verified"
     },
     {
      "label": "Recharge sans fil",
      "value": "66 W HONOR SuperCharge",
      "status": "verified"
     },
     {
      "label": "Autonomie",
      "value": "24 h certifiées TÜV Rheinland",
      "status": "verified"
     },
     {
      "label": "Étiquette énergie UE",
      "value": "Classe B, 57 h 39 par charge, 1 200 cycles, réparabilité C",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Grand-angle",
      "value": "50 MP, f/1.6, stabilisation optique",
      "status": "verified"
     },
     {
      "label": "Ultra grand-angle",
      "value": "50 MP, f/2.2",
      "status": "verified"
     },
     {
      "label": "Téléobjectif périscopique",
      "value": "64 Mpx f/2,5, zoom optique 3x, stabilisation optique",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "20 Mpx f/2,2 sur chaque écran",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix public",
      "value": "2 299,90 €",
      "status": "verified"
     },
     {
      "label": "Lancement France",
      "value": "2 juillet 2026",
      "status": "verified"
     },
     {
      "label": "Offre honor.com",
      "value": "Coupon de 600 € et pack cadeaux jusqu'au 2 novembre 2026",
      "status": "confirm"
     },
     {
      "label": "Prix affiché sur honor.com/fr",
      "value": "Après coupon à partir de 1 699,90 € (16/10/2026)",
      "status": "verified"
     },
     {
      "label": "Bouygues Telecom",
      "value": "1 799 € sans forfait (septembre 2026)",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Stockage Google AI Pro : un encadré de la page honor.com/fr affiche « 5TB », alors que le texte de la même page et le guide d'achat officiel indiquent 2 To. Retenez 2 To.",
   "Prix chez les opérateurs : Bouygues Telecom affichait 1 799 € sans forfait en septembre 2026, contre 2 299,90 € de prix public HONOR. Les remises varient selon l'enseigne et la période.",
   "Offre Google AI Pro : la trousse annonce 3 mois offerts jusqu’au 25 novembre 2026 ; les fiches vendeur du 08/10/2026 l’ont retirée (stockage et date de fin incohérents entre pages HONOR). Les fiches vendeur priment : offre à confirmer."
  ],
  "sources": [
   {
    "label": "Fiche HONOR Magic V6",
    "url": "https://www.honor.com/fr/phones/honor-magic-v6/"
   },
   {
    "label": "Guide d'achat officiel Magic V6",
    "url": "https://www.honor.com/fr/shop/buying-guide/introducing-honor-magic-v6/"
   },
   {
    "label": "Phonandroid, lancement en France",
    "url": "https://www.phonandroid.com/honor-lance-le-magic-v6-en-france-un-smartphone-pliable-sans-compromis.html"
   },
   {
    "label": "Meilleure-innovation, prix et offre de lancement",
    "url": "https://meilleure-innovation.com/high-tech/smartphone/honor-magic-v6-lancement/"
   },
   {
    "label": "Bbox-Mag, Magic V6 chez Bouygues Telecom",
    "url": "https://www.bbox-mag.fr/mobiles/honor-magic-v6/47548349"
   },
   {
    "label": "Spirit Gamer, offre jusqu'au 2 novembre",
    "url": "https://spiritgamer.fr/honor-magic-v6-un-pliable-qui-parle-iphone/"
   }
  ],
  "videos": [
   {
    "id": "magic-v6-v1",
    "title": "HONOR Magic V6 | New Standard of Foldable Excellence",
    "url": "https://www.youtube.com/watch?v=JOyVmf8NlkE",
    "channel": "HONOR Malaysia · chaîne liée depuis honor.com/my · en anglais"
   },
   {
    "id": "magic-v6-v2",
    "title": "HONOR Magic V6 Official Launch (direct du 4 juin 2026)",
    "url": "https://www.youtube.com/watch?v=rPqwUUQN6vQ",
    "channel": "HONOR Malaysia · chaîne liée depuis honor.com/my · en anglais"
   }
  ]
 },
 {
  "id": "magic8-pro",
  "name": "HONOR Magic8 Pro",
  "univers": "smartphones",
  "family": "Série Magic · photo",
  "type": "phone",
  "variant": "pro",
  "img": "visuels/magic8-pro.webp",
  "imgAr": 0.47,
  "status": "verified",
  "flag": false,
  "tagline": "Le zoom qui garde les visages nets, même quand la lumière baisse.",
  "price": "À partir de 1 299,90 €",
  "priceStatus": "verified",
  "launch": "Annoncé en Europe le 8 janvier 2026 · prix relevé sur honor.com/fr le 16 octobre 2026",
  "hook": "Des photos nettes depuis le fond de la salle.",
  "hookSub": "Pour le client qui photographie ses enfants au spectacle, un concert ou un match : il zoome loin et la photo reste exploitable, même de nuit.",
  "figures": [
   {
    "value": 200,
    "unit": "Mpx",
    "label": "téléobjectif Ultra Night, zoom optique 3,7x"
   },
   {
    "value": 6270,
    "unit": "mAh",
    "label": "batterie silicium-carbone (Europe)"
   },
   {
    "value": 100,
    "unit": "W",
    "label": "de charge filaire, 80 W sans fil"
   },
   {
    "value": 6000,
    "unit": "nits",
    "label": "en pic HDR sur l'écran 6,71\""
   }
  ],
  "points": [
   {
    "title": "Le zoom qui fait la différence",
    "text": "Téléobjectif 200 Mpx Ultra Night stabilisé, zoom optique 3,7x. Le moteur AiMAGE Ultra Night permet un temps de pose réglable quand la lumière baisse."
   },
   {
    "title": "Un bouton dédié à l'IA",
    "text": "Double appui : l'appareil photo s'ouvre, même écran verrouillé. Appui long : les fonctions IA."
   },
   {
    "title": "Une batterie qui suit",
    "text": "6 270 mAh en Europe, silicium-carbone. Recharge 100 W filaire et 80 W sans fil, chargeur vendu à part."
   },
   {
    "title": "Résistant",
    "text": "IP68, IP69 et IP69K contre l'eau, la poussière et les jets haute pression. Verre NanoCrystal Shield certifié SGS 5 étoiles contre les chutes."
   },
   {
    "title": "L'IA qui protège",
    "text": "Détection des deepfakes et des voix clonées pendant les appels vidéo, pour limiter les arnaques."
   }
  ],
  "alerts": [
   "Batterie : annoncez 6 270 mAh. Les chiffres de 7 100 ou 7 200 mAh vus en ligne concernent d'autres pays.",
   "Coloris France : Sunrise Gold, Sky Cyan et noir. Le blanc visible sur certains visuels n'est pas listé en France."
  ],
  "modules": [
   {
    "id": "magic8-pro-m1",
    "title": "Découvrir le Magic8 Pro",
    "goal": "Vendre la photo par l'usage : zoom, nuit, rapidité.",
    "time": "4 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui photographie ce qu'il ne peut pas approcher",
      "text": "Spectacle de fin d'année, concert, match, animaux : le sujet est loin et la lumière souvent faible.",
      "tip": "Demandez : « Vous prenez souvent des photos de loin ? »"
     },
     {
      "kicker": "Le zoom",
      "title": "200 Mpx, zoom optique 3,7x",
      "text": "Le téléobjectif garde du détail là où un zoom numérique devient flou.",
      "tip": "Zoomez sur une affiche au fond du magasin."
     },
     {
      "kicker": "La nuit",
      "title": "Moteur AiMAGE Ultra Night",
      "text": "Temps de pose réglable pour des photos nettes quand la lumière baisse.",
      "tip": "Faites une photo dans une zone peu éclairée du rayon."
     },
     {
      "kicker": "Le geste",
      "title": "La touche IA",
      "text": "Double appui : l'appareil photo s'ouvre, même verrouillé. On ne rate plus l'instant.",
      "tip": "Faites le geste devant le client, écran verrouillé."
     },
     {
      "kicker": "L'endurance",
      "title": "6 270 mAh, 100 W et 80 W sans fil",
      "text": "La batterie suit une journée de photos, et se recharge vite avec le chargeur HONOR vendu à part.",
      "tip": "Demandez à quelle heure son téléphone actuel est à plat. Rappelez que le chargeur se vend à part."
     }
    ]
   },
   {
    "id": "magic8-pro-m2",
    "title": "Les fonctions IA à montrer",
    "goal": "Trois démonstrations IA courtes et concrètes.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Retouche",
      "title": "Assistant photo IA",
      "text": "Gommer un passant, agrandir un cadrage, détourer un sujet, d'un geste ou à la voix.",
      "tip": "Photographiez le client devant le rayon, puis gommez un élément derrière lui sous ses yeux."
     },
     {
      "kicker": "Couleurs",
      "title": "Magic Color",
      "text": "L'IA applique à vos photos la palette d'une image de référence que vous aimez.",
      "tip": "Demandez au client de choisir une photo qu’il aime dans sa galerie et appliquez sa palette."
     },
     {
      "kicker": "Lecture d'écran",
      "title": "Suggestions intelligentes",
      "text": "Résumé d'un texte ou floutage des données sensibles, proposés au bon moment.",
      "tip": "Ouvrez un long texte sur le téléphone de démo et lancez le résumé devant le client."
     },
     {
      "kicker": "Sécurité",
      "title": "Deepfakes et voix clonées",
      "text": "Une alerte pendant les appels vidéo quand l'IA détecte un faux visage ou une fausse voix.",
      "tip": "Certaines fonctions IA arrivent par mise à jour : précisez-le."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "Le zoom à distance",
    "accroche": "Vous voyez l'affiche au fond du magasin ? On va la lire d'ici.",
    "preuve": "Téléobjectif 200 Mpx Ultra Night, zoom optique 3,7x, stabilisé.",
    "benefice": "Au spectacle ou au stade, le visage reste net même de loin.",
    "action": "Ouvrez l'appareil photo, passez en 3,7x puis plus loin, et montrez le détail à l'écran."
   },
   {
    "title": "La photo de nuit",
    "accroche": "Et quand la lumière baisse ?",
    "preuve": "Moteur AiMAGE Ultra Night avec temps de pose réglable.",
    "benefice": "Des photos de soirée exploitables, sans flash.",
    "action": "Placez-vous dans une zone sombre du magasin et prenez la même photo avec un autre téléphone si possible."
   },
   {
    "title": "La touche IA",
    "accroche": "Il est verrouillé dans votre poche, la photo se présente : combien de temps pour la prendre ?",
    "preuve": "Double appui sur la touche IA : l'appareil photo s'ouvre même écran verrouillé.",
    "benefice": "On ne rate plus l'instant.",
    "action": "Verrouillez, puis double appui sur la touche IA et déclenchez."
   },
   {
    "title": "La retouche IA",
    "accroche": "Un passant gâche votre photo de vacances ?",
    "preuve": "Assistant photo IA : gommer, agrandir, détourer, d'un geste ou à la voix.",
    "benefice": "La photo est sauvée en quelques secondes.",
    "action": "Ouvrez une photo de démonstration avec un élément gênant et effacez-le."
   },
   {
    "title": "Solide au quotidien",
    "accroche": "Il tombe ou prend la pluie, il tient ?",
    "preuve": "IP68, IP69 et IP69K, verre NanoCrystal Shield certifié SGS 5 étoiles contre les chutes.",
    "benefice": "Moins de crainte pour un téléphone haut de gamme.",
    "action": "Montrez la fiche des certifications. Ne dites jamais « étanche »."
   }
  ],
  "pitch": {
   "text": "Vous prenez souvent des photos de loin, au spectacle ou au stade ? Le HONOR Magic8 Pro a un téléobjectif de 200 Mpx avec un zoom optique 3,7x : le visage reste net depuis le fond de la salle, même quand la lumière baisse. Un double appui sur la touche IA ouvre l'appareil photo, même verrouillé. Sa batterie de 6 270 mAh se recharge en 100 W, et il résiste à l'eau et aux chutes. On zoome sur l'affiche du fond ?",
   "keywords": [
    "HONOR Magic8 Pro",
    "On zoome sur l'affiche du fond ?"
   ]
  },
  "objections": [
   {
    "id": "magic8-pro-o1",
    "q": "C'est cher pour un téléphone.",
    "reponse": "Partez de l'usage : si le client photographie souvent de loin, le téléobjectif 200 Mpx et le mode nuit font la différence que ne fait pas un modèle d'entrée de gamme. Vérifiez l'offre en cours avant de donner un prix.",
    "montrer": null
   },
   {
    "id": "magic8-pro-o2",
    "q": "Mon téléphone actuel prend déjà de bonnes photos.",
    "reponse": "Faites la comparaison sur le zoom : en 3,7x optique et au-delà, l'écart se voit tout de suite.",
    "montrer": "Zoomez sur le même sujet avec les deux téléphones."
   },
   {
    "id": "magic8-pro-o3",
    "q": "Et la batterie, vraiment ?",
    "reponse": "6 270 mAh en Europe, silicium-carbone, recharge 100 W filaire et 80 W sans fil. Le chargeur est vendu à part.",
    "montrer": null
   },
   {
    "id": "magic8-pro-o4",
    "q": "Je crains les arnaques au téléphone.",
    "reponse": "Le Magic8 Pro alerte pendant les appels vidéo s'il détecte un deepfake ou une voix clonée.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Quel zoom optique pour le téléobjectif ?",
    "options": [
     "2x",
     "3x",
     "3,7x",
     "5x"
    ],
    "answer": 2,
    "explain": "Téléobjectif 200 Mpx, zoom optique 3,7x."
   },
   {
    "q": "Quelle batterie annoncer en France ?",
    "options": [
     "6 090 mAh",
     "6 270 mAh",
     "7 100 mAh",
     "7 200 mAh"
    ],
    "answer": 1,
    "explain": "6 270 mAh typique en Europe. 7 100 et 7 200 mAh concernent d'autres pays."
   },
   {
    "q": "Que fait un double appui sur la touche IA ?",
    "options": [
     "Lance Gemini",
     "Ouvre l'appareil photo, même verrouillé",
     "Coupe le son",
     "Active le mode avion"
    ],
    "answer": 1,
    "explain": "Double appui : l'appareil photo. Appui long : les fonctions IA."
   },
   {
    "q": "Quelles certifications eau et poussière ?",
    "options": [
     "IP54",
     "IP68 seulement",
     "IP68, IP69 et IP69K",
     "IPX4"
    ],
    "answer": 2,
    "explain": "IP68, IP69 et IP69K."
   },
   {
    "q": "Quelles puissances de charge ?",
    "options": [
     "66 W et 50 W",
     "80 W et 66 W",
     "100 W filaire et 80 W sans fil",
     "120 W filaire"
    ],
    "answer": 2,
    "explain": "100 W filaire, 80 W sans fil, chargeur vendu séparément."
   }
  ],
  "faq": [
   {
    "id": "magic8-pro-f1",
    "q": "Quel est le prix ?",
    "a": "À partir de 1 299,90 € sur honor.com/fr au 16 octobre 2026. Le prix peut varier selon les offres et l'enseigne."
   },
   {
    "id": "magic8-pro-f2",
    "q": "Quels coloris en France ?",
    "a": "Sunrise Gold, Sky Cyan et noir."
   },
   {
    "id": "magic8-pro-f3",
    "q": "Quel processeur ?",
    "a": "Le Snapdragon 8 Elite Gen 5, sous MagicOS 10 et Android 16."
   },
   {
    "id": "magic8-pro-f4",
    "q": "Le chargeur est-il fourni ?",
    "a": "Non, il est vendu séparément."
   },
   {
    "id": "magic8-pro-f5",
    "q": "Quel écran ?",
    "a": "6,71 pouces OLED LTPO de 1 à 120 Hz, jusqu'à 6 000 nits en pic HDR."
   },
   {
    "id": "magic8-pro-f6",
    "q": "Comment se déverrouille-t-il ?",
    "a": "Reconnaissance du visage en 3D et capteur d'empreinte à ultrasons."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Poids",
      "value": "219 g",
      "status": "verified"
     },
     {
      "label": "Épaisseur",
      "value": "8,4 mm",
      "status": "verified"
     },
     {
      "label": "Coloris France",
      "value": "Sunrise Gold, Sky Cyan, noir",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP68, IP69, IP69K",
      "status": "verified"
     },
     {
      "label": "Verre",
      "value": "NanoCrystal Shield, SGS 5 étoiles contre les chutes",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "6,71\" OLED LTPO, 1 à 120 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "6 000 nits en pic HDR, 1 800 nits en pic global",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 8 Elite Gen 5",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     },
     {
      "label": "Déverrouillage",
      "value": "Visage 3D, empreinte à ultrasons",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Téléobjectif",
      "value": "200 Mpx f/2,6, capteur 1/1,4\", zoom optique 3,7x, OIS",
      "status": "verified"
     },
     {
      "label": "Principal",
      "value": "50 Mpx f/1,6, capteur 1/1,3\", OIS",
      "status": "verified"
     },
     {
      "label": "Ultra grand-angle",
      "value": "50 Mpx f/2,0, 122°",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "50 Mpx, caméra de profondeur 3D",
      "status": "verified"
     },
     {
      "label": "Stabilisation CIPA",
      "value": "6,5 stops sur honor.com/fr, 5,5 dans un communiqué",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "6 270 mAh typique (6 090 mAh nominale), Europe",
      "status": "verified"
     },
     {
      "label": "Charge filaire",
      "value": "100 W",
      "status": "verified"
     },
     {
      "label": "Charge sans fil",
      "value": "80 W, chargeur vendu séparément",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix honor.com/fr",
      "value": "À partir de 1 299,90 € (16/10/2026)",
      "status": "verified"
     },
     {
      "label": "Annonce Europe",
      "value": "8 janvier 2026",
      "status": "verified"
     }
    ]
   }
  ],
  "contradictions": [
   "Épaisseur : 8,4 mm sur la page Caractéristiques de honor.com/fr, 8,3 mm dans la presse. Retenez 8,4 mm.",
   "Stabilisation : 6,5 stops CIPA sur honor.com/fr contre 5,5 dans le communiqué UK. Chiffre non utilisé en argumentaire.",
   "Batterie : 6 270 mAh en Europe, 7 100 mAh à l'international et 7 200 mAh en Chine."
  ],
  "sources": [
   {
    "label": "Fiche HONOR Magic8 Pro sur honor.com/fr",
    "url": "https://www.honor.com/fr/phones/honor-magic8-pro/"
   },
   {
    "label": "Gamme et prix sur honor.com/fr (relevé du 16/10/2026)",
    "url": "https://www.honor.com/fr/phones/"
   },
   {
    "label": "GSMArena, Magic8 Pro disponible en Europe",
    "url": "https://m.gsmarena.com/honor_magic8_pro_is_finally_available_in_europe-amp-71019.php"
   },
   {
    "label": "Lesmobiles, lancement du Magic8 Pro en France",
    "url": "https://www.lesmobiles.com/actualite/honor-magic8-pro-lance-ce-matin-en-france-le-nouveau-roi-de-la-photo-et-de-l-autonomie"
   },
   {
    "label": "Clubic, fiche Magic8 Pro",
    "url": "https://www.clubic.com/582970-honor-magic-8-pro.html"
   }
  ],
  "videos": [],
  "note": "Contenu repris des one-pagers vendeur HONOR (octobre 2026), revérifiés sur la page Caractéristiques de honor.com/fr le 08/10/2026."
 },
 {
  "id": "magic8-lite",
  "name": "HONOR Magic8 Lite",
  "univers": "smartphones",
  "family": "Série Magic · endurance",
  "type": "phone",
  "variant": "lite",
  "img": "visuels/magic8-lite.webp",
  "imgAr": 0.475,
  "status": "verified",
  "flag": false,
  "tagline": "Un week-end sans chercher de prise, et un téléphone qui encaisse les chutes.",
  "price": "À partir de 349,90 €",
  "priceStatus": "verified",
  "launch": "En vente en France depuis le 15 janvier 2026 · prix relevé sur honor.com/fr le 16 octobre 2026",
  "hook": "Le téléphone qu'on oublie de recharger.",
  "hookSub": "Pour le client qui vit dehors, sur un chantier, en déplacement ou avec des enfants : une très grosse batterie et une résistance aux chocs testée.",
  "figures": [
   {
    "value": 7500,
    "unit": "mAh",
    "label": "batterie silicium-carbone"
   },
   {
    "value": 2.5,
    "unit": "m",
    "label": "de chute testée sur granit lisse"
   },
   {
    "value": 108,
    "unit": "Mpx",
    "label": "photo stabilisée"
   },
   {
    "value": 189,
    "unit": "g",
    "label": "pour 7,76 mm d'épaisseur"
   }
  ],
  "points": [
   {
    "title": "Jusqu'à 3 jours selon HONOR",
    "text": "7 500 mAh silicium-carbone dans 7,76 mm et 189 g. Recharge 66 W, pas de charge sans fil."
   },
   {
    "title": "Il encaisse",
    "text": "Chute de 2,5 m testée sur granit lisse en laboratoire HONOR. Certifié SGS 5 étoiles fiabilité complète."
   },
   {
    "title": "Pluie, poussière, jets d'eau",
    "text": "IP66, IP68, IP69 et IP69K. Fonctionne de -30 °C à 55 °C selon HONOR."
   },
   {
    "title": "Un grand écran confortable",
    "text": "AMOLED 6,79 pouces 1,5K à 120 Hz, gradation PWM 3 840 Hz."
   },
   {
    "title": "Photo 108 Mpx stabilisée",
    "text": "Principal 108 Mpx avec stabilisation optique, outils photo IA pour corriger après coup."
   }
  ],
  "alerts": [
   "Pas de charge sans fil : dites-le si le client en a l'habitude.",
   "L'ultra grand-angle fait 5 Mpx : ne le mettez pas en avant, parlez du 108 Mpx principal.",
   "Il tourne sous MagicOS 9 et Android 15, pas MagicOS 10."
  ],
  "modules": [
   {
    "id": "magic8-lite-m1",
    "title": "Découvrir le Magic8 Lite",
    "goal": "Vendre l'endurance et la solidité.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui use ses téléphones",
      "text": "Il travaille dehors, voyage, ou cherche un téléphone pour un ado : batterie et solidité avant tout.",
      "tip": "Demandez : « Votre téléphone actuel tient combien de temps ? »"
     },
     {
      "kicker": "La batterie",
      "title": "7 500 mAh, jusqu'à 3 jours selon HONOR",
      "text": "Un week-end sans chargeur. Recharge 66 W avec le chargeur HONOR.",
      "tip": "Posez la question : « Vous partez souvent un week-end sans chargeur ? »"
     },
     {
      "kicker": "La solidité",
      "title": "2,5 m de chute testée",
      "text": "Sur granit lisse, en laboratoire HONOR. Certification SGS 5 étoiles fiabilité complète.",
      "tip": "Demandez au client s’il a déjà cassé un écran. Sa réponse vous donne l’argument."
     },
     {
      "kicker": "L'eau",
      "title": "IP66, IP68, IP69, IP69K",
      "text": "Pluie, immersion, jets haute pression. Ne dites jamais « étanche ».",
      "tip": "Dites « certifié IP68, IP69 et IP69K », puis précisez que la protection n’est pas permanente."
     },
     {
      "kicker": "L'écran",
      "title": "6,79 pouces AMOLED 120 Hz",
      "text": "Jusqu'à 6 000 nits en pic HDR en vidéo plein écran, gradation PWM 3 840 Hz.",
      "tip": "Lancez une vidéo en plein écran et montrez-la sous l’éclairage le plus fort du magasin."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "La batterie",
    "accroche": "Vous rechargez votre téléphone tous les soirs ?",
    "preuve": "7 500 mAh silicium-carbone, jusqu'à 3 jours selon HONOR (volume 8, écran à 150 nits, usage mixte).",
    "benefice": "Un week-end sans chercher de prise.",
    "action": "Montrez Paramètres > Batterie, puis tendez le téléphone pour montrer qu'il reste fin (7,76 mm)."
   },
   {
    "title": "La solidité",
    "accroche": "Il vous est déjà tombé des mains sur le carrelage ?",
    "preuve": "Chute de 2,5 m testée sur granit lisse, SGS 5 étoiles fiabilité complète.",
    "benefice": "Moins de casse, moins de réparations.",
    "action": "Ne faites pas tomber l'appareil : montrez la fiche et laissez le client le prendre en main."
   },
   {
    "title": "La pluie",
    "accroche": "Sous la pluie ou sur un chantier, il tient ?",
    "preuve": "IP66, IP68, IP69 et IP69K.",
    "benefice": "Pas de panique au moindre jet d'eau.",
    "action": "Montrez les certifications à l'écran. Rappelez que la protection n'est pas permanente."
   },
   {
    "title": "La retouche IA",
    "accroche": "Un reflet sur une vitre ou un passant en trop ?",
    "preuve": "Outils photo IA : gomme, anti-reflets, détourage.",
    "benefice": "La photo est corrigée après coup.",
    "action": "Ouvrez une photo de démonstration et effacez un élément."
   }
  ],
  "pitch": {
   "text": "Votre téléphone ne tient pas la journée ? Le HONOR Magic8 Lite a une batterie de 7 500 mAh : jusqu'à trois jours selon HONOR, et il ne fait que 7,76 millimètres. Il a été testé en chute à 2,5 mètres, résiste à la pluie et aux jets d'eau, et son grand écran de 6,79 pouces reste lisible dehors. Avec un appareil photo 108 Mpx stabilisé. Un week-end sans chercher de prise, ça vous parle ?",
   "keywords": [
    "HONOR Magic8 Lite",
    "Un week-end sans chercher de prise, ça vous parle ?"
   ]
  },
  "objections": [
   {
    "id": "magic8-lite-o1",
    "q": "Pas de charge sans fil ?",
    "reponse": "Non. En contrepartie, la batterie de 7 500 mAh se recharge en 66 W avec le chargeur HONOR.",
    "montrer": null
   },
   {
    "id": "magic8-lite-o2",
    "q": "Un téléphone solide, c'est épais.",
    "reponse": "Il fait 7,76 mm et 189 g malgré ses 7 500 mAh.",
    "montrer": "Mettez-le dans la main du client."
   },
   {
    "id": "magic8-lite-o3",
    "q": "Les photos seront moyennes.",
    "reponse": "Le capteur principal fait 108 Mpx avec stabilisation optique, même de nuit, et les outils IA corrigent après coup.",
    "montrer": null
   },
   {
    "id": "magic8-lite-o4",
    "q": "Est-il à jour ?",
    "reponse": "Il est sous MagicOS 9 et Android 15. Vérifiez la politique de mise à jour sur la fiche officielle avant de répondre sur la durée.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Capacité de la batterie ?",
    "options": [
     "5 000 mAh",
     "6 400 mAh",
     "7 500 mAh",
     "8 000 mAh"
    ],
    "answer": 2,
    "explain": "7 500 mAh typique, silicium-carbone."
   },
   {
    "q": "Hauteur de chute testée ?",
    "options": [
     "1 m",
     "1,5 m",
     "2,5 m",
     "4 m"
    ],
    "answer": 2,
    "explain": "2,5 m sur granit lisse, laboratoire HONOR."
   },
   {
    "q": "A-t-il la charge sans fil ?",
    "options": [
     "Oui, 50 W",
     "Oui, 15 W",
     "Non"
    ],
    "answer": 2,
    "explain": "Pas de charge sans fil. Charge filaire 66 W."
   },
   {
    "q": "Quel argument photo mettre en avant ?",
    "options": [
     "Ultra grand-angle 5 Mpx",
     "Principal 108 Mpx stabilisé",
     "Téléobjectif 200 Mpx"
    ],
    "answer": 1,
    "explain": "Le 108 Mpx avec stabilisation optique."
   }
  ],
  "faq": [
   {
    "id": "magic8-lite-f1",
    "q": "Quel est le prix ?",
    "a": "À partir de 349,90 € sur honor.com/fr au 16 octobre 2026."
   },
   {
    "id": "magic8-lite-f2",
    "q": "Depuis quand est-il vendu en France ?",
    "a": "Depuis le 15 janvier 2026, après son annonce au Royaume-Uni le 8 décembre 2025."
   },
   {
    "id": "magic8-lite-f3",
    "q": "Quels coloris ?",
    "a": "Forest Green, Midnight Black et Reddish Brown. Le Reddish Brown serait exclusif à honor.com selon un média : à confirmer."
   },
   {
    "id": "magic8-lite-f4",
    "q": "Quel processeur ?",
    "a": "Le Snapdragon 6 Gen 4."
   },
   {
    "id": "magic8-lite-f5",
    "q": "L'écran est-il lisible dehors ?",
    "a": "800 nits en usage normal, 1 800 nits en mode haute luminosité, jusqu'à 6 000 nits en pic HDR en vidéo plein écran."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur",
      "value": "7,76 mm",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "189 g",
      "status": "verified"
     },
     {
      "label": "Coloris",
      "value": "Forest Green, Midnight Black, Reddish Brown",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP66, IP68, IP69, IP69K",
      "status": "verified"
     },
     {
      "label": "Chute",
      "value": "2,5 m sur granit lisse (laboratoire HONOR)",
      "status": "verified"
     },
     {
      "label": "Fiabilité",
      "value": "SGS 5 étoiles fiabilité complète",
      "status": "verified"
     },
     {
      "label": "Température d'usage",
      "value": "-30 °C à 55 °C selon HONOR",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "6,79\" AMOLED 1,5K, 120 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "800 nits typique, 1 800 nits HBM, 6 000 nits en pic HDR",
      "status": "verified"
     },
     {
      "label": "Gradation PWM",
      "value": "3 840 Hz",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 6 Gen 4",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 9, Android 15",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Principal",
      "value": "108 Mpx f/1,75, OIS",
      "status": "verified"
     },
     {
      "label": "Ultra grand-angle",
      "value": "5 Mpx f/2,2",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "16 Mpx f/2,45",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "7 500 mAh typique (7 330 mAh nominale)",
      "status": "verified"
     },
     {
      "label": "Autonomie",
      "value": "Jusqu'à 3 jours selon HONOR (volume 8, écran 150 nits, usage mixte)",
      "status": "verified"
     },
     {
      "label": "Charge filaire",
      "value": "66 W",
      "status": "verified"
     },
     {
      "label": "Charge sans fil",
      "value": "Non",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Son",
    "rows": [
     {
      "label": "Haut-parleur",
      "value": "« 400 % plus puissant » selon HONOR",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix honor.com/fr",
      "value": "À partir de 349,90 € (16/10/2026)",
      "status": "verified"
     },
     {
      "label": "Vente en France",
      "value": "Depuis le 15 janvier 2026",
      "status": "verified"
     },
     {
      "label": "Reddish Brown",
      "value": "Exclusif honor.com selon un seul média",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Résistance : une première version des supports indiquait seulement IP68 et IP69K. La page Caractéristiques de honor.com/fr liste IP66, IP68, IP69 et IP69K.",
   "Autonomie « 69 heures en usage mixte » : une seule source, non reprise."
  ],
  "sources": [
   {
    "label": "Fiche HONOR Magic8 Lite sur honor.com/fr",
    "url": "https://www.honor.com/fr/phones/honor-magic8-lite/"
   },
   {
    "label": "Gamme et prix sur honor.com/fr (relevé du 16/10/2026)",
    "url": "https://www.honor.com/fr/phones/"
   },
   {
    "label": "Lesmobiles, Magic8 Lite",
    "url": "https://www.lesmobiles.com/actualite/magic8-lite-le-nouveau-smartphone-honor-ultra-endurant-et-ultra-resistant"
   },
   {
    "label": "Phonandroid, Magic8 Lite et sa batterie de 7 500 mAh",
    "url": "https://www.phonandroid.com/40-honor-magic-8-lite-enorme-batterie-7-500-mah-difficile-pas-craquer.html"
   }
  ],
  "videos": [],
  "note": "Contenu repris des one-pagers vendeur HONOR (octobre 2026), revérifiés sur la page Caractéristiques de honor.com/fr le 08/10/2026."
 },
 {
  "id": "honor-600-pro",
  "name": "HONOR 600 Pro",
  "univers": "smartphones",
  "family": "Série HONOR 600 · photo et zoom",
  "type": "phone",
  "variant": "n",
  "img": "visuels/600-pro.webp",
  "imgAr": 0.482,
  "status": "verified",
  "flag": false,
  "tagline": "Le zoom d'un photophone et un écran lisible en plein soleil, dans 7,8 mm.",
  "price": "799,90 €",
  "priceStatus": "confirm",
  "launch": "Lancé en France au printemps 2026 · prix relevé sur honor.com/fr le 16 octobre 2026",
  "hook": "Le haut de gamme photo, sans le poids.",
  "hookSub": "Pour le client qui veut un vrai zoom et une puce haut de gamme dans un téléphone fin et léger.",
  "figures": [
   {
    "value": 200,
    "unit": "Mpx",
    "label": "capteur principal Ultra Night"
   },
   {
    "value": 3.5,
    "unit": "x",
    "label": "de zoom optique, téléobjectif 50 Mpx"
   },
   {
    "value": 8000,
    "unit": "nits",
    "label": "en pic HDR sur l'écran 6,57\""
   },
   {
    "value": 6400,
    "unit": "mAh",
    "label": "de batterie (Europe)"
   }
  ],
  "points": [
   {
    "title": "Photo 200 Mpx et vrai téléobjectif",
    "text": "Principal 200 Mpx Ultra Night stabilisé, téléobjectif périscopique 50 Mpx zoom optique 3,5x."
   },
   {
    "title": "Lisible en plein soleil",
    "text": "AMOLED 6,57 pouces 120 Hz, pic à 8 000 nits en HDR, gradation PWM 3 840 Hz."
   },
   {
    "title": "Puce haut de gamme",
    "text": "Snapdragon 8 Elite : jeux, photo et IA sans attente."
   },
   {
    "title": "Batterie et charge",
    "text": "6 400 mAh en Europe. 80 W filaire et 50 W sans fil, chargeur vendu à part."
   },
   {
    "title": "Fin et résistant",
    "text": "7,8 mm et 195 g. IP68, IP69 et IP69K, SGS 5 étoiles chutes et écrasement."
   }
  ],
  "alerts": [
   "Prix : la liste honor.com/fr affiche 799,90 € pour le 600 Pro, mais un bandeau de la même page indique « à partir de 499,90 € » sous son nom. Vérifiez le prix de votre enseigne.",
   "Batterie : annoncez 6 400 mAh. Les 7 000 mAh vus sur Google ou sur des vidéos concernent la version hors Europe.",
   "AI Image to Video 2.0 : service en ligne avec 10 utilisations par mois, payant au-delà."
  ],
  "modules": [
   {
    "id": "honor-600-pro-m1",
    "title": "Découvrir le 600 Pro",
    "goal": "Le positionner face au 600 et au Magic8 Pro.",
    "time": "4 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui zoome et qui veut de la puissance",
      "text": "Photos de voyage, concerts, jeux : il veut un téléphone complet sans payer un très haut de gamme.",
      "tip": "Demandez : « Vous prenez souvent des photos de loin, en voyage ou en concert ? »"
     },
     {
      "kicker": "Le zoom",
      "title": "Téléobjectif 50 Mpx, 3,5x optique",
      "text": "C'est la différence clé avec le HONOR 600, qui n'a pas de téléobjectif.",
      "tip": "Comparez le zoom des deux modèles côte à côte."
     },
     {
      "kicker": "L'écran",
      "title": "8 000 nits en pic HDR",
      "text": "Lisible en plein soleil, et doux pour les yeux le soir avec une gradation PWM 3 840 Hz.",
      "tip": "Montrez l’écran sous le spot le plus fort du rayon, à côté du téléphone du client."
     },
     {
      "kicker": "La puce",
      "title": "Snapdragon 8 Elite",
      "text": "Une puce haut de gamme : c'est l'autre écart avec le 600, équipé d'un Snapdragon 7 Gen 4.",
      "tip": "Si le client hésite avec le 600, posez les deux côte à côte et lancez la même appli."
     },
     {
      "kicker": "La charge",
      "title": "80 W et 50 W sans fil",
      "text": "Le 600 Pro se recharge aussi sans fil, contrairement au 600.",
      "tip": "Si votre rayon a un chargeur sans fil, posez-le dessus. Sinon, montrez la mention sur la fiche."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "Le zoom",
    "accroche": "On lit l'étiquette prix au bout du rayon ?",
    "preuve": "Téléobjectif périscopique 50 Mpx, zoom optique 3,5x, et AI Super Zoom 2.0 pour les zooms poussés.",
    "benefice": "Des photos de loin qui restent détaillées.",
    "action": "Zoomez en 3,5x puis au-delà sur une étiquette éloignée."
   },
   {
    "title": "L'écran au soleil",
    "accroche": "Vous arrivez à lire votre écran dehors ?",
    "preuve": "AMOLED 6,57 pouces, pic à 8 000 nits en HDR.",
    "benefice": "Lisible en terrasse ou en plein soleil.",
    "action": "Approchez l'écran d'un éclairage fort, luminosité automatique activée."
   },
   {
    "title": "La photo qui s'anime",
    "accroche": "Et si votre photo devenait une vidéo ?",
    "preuve": "AI Image to Video 2.0, lancé depuis le bouton IA, jusqu'à 3 photos animées.",
    "benefice": "Un souvenir qui bouge, à partager en un geste.",
    "action": "Lancez l'animation d'une photo de démo. Précisez le quota de 10 utilisations par mois."
   },
   {
    "title": "Fin et solide",
    "accroche": "Il ne pèse presque rien, et pourtant…",
    "preuve": "7,8 mm, 195 g, IP68, IP69, IP69K et SGS 5 étoiles chutes et écrasement.",
    "benefice": "Le confort d'un téléphone fin sans fragilité.",
    "action": "Mettez-le dans la main du client."
   }
  ],
  "pitch": {
   "text": "Vous aimez photographier de loin ? Le HONOR 600 Pro associe un capteur 200 Mpx et un vrai téléobjectif zoom optique 3,5x, avec le Snapdragon 8 Elite pour que tout aille vite. Son écran monte à 8 000 nits en pic : lisible en plein soleil. Il ne fait que 7,8 millimètres, résiste à l'eau et aux chutes, et se recharge en 80 W ou sans fil. On teste le zoom sur l'étiquette du fond ?",
   "keywords": [
    "HONOR 600 Pro",
    "On teste le zoom sur l'étiquette du fond ?"
   ]
  },
  "objections": [
   {
    "id": "honor-600-pro-o1",
    "q": "Quelle différence avec le 600 ?",
    "reponse": "Le 600 Pro ajoute un téléobjectif 50 Mpx zoom optique 3,5x, le Snapdragon 8 Elite au lieu du Snapdragon 7 Gen 4, et la charge sans fil 50 W.",
    "montrer": null
   },
   {
    "id": "honor-600-pro-o2",
    "q": "Pourquoi pas le Magic8 Pro ?",
    "reponse": "Le Magic8 Pro va plus loin en zoom (200 Mpx, 3,7x) et en charge. Le 600 Pro offre l'essentiel dans un format plus fin et plus léger.",
    "montrer": null
   },
   {
    "id": "honor-600-pro-o3",
    "q": "J'ai vu 7 000 mAh en ligne.",
    "reponse": "C'est la version hors Europe. En France, c'est 6 400 mAh.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Zoom optique du 600 Pro ?",
    "options": [
     "2x",
     "3,5x",
     "3,7x",
     "5x"
    ],
    "answer": 1,
    "explain": "Téléobjectif périscopique 50 Mpx, zoom optique 3,5x."
   },
   {
    "q": "Batterie en France ?",
    "options": [
     "6 400 mAh",
     "7 000 mAh",
     "5 600 mAh"
    ],
    "answer": 0,
    "explain": "6 400 mAh en Europe, 7 000 mAh hors Europe."
   },
   {
    "q": "Charge sans fil ?",
    "options": [
     "Non",
     "Oui, 50 W"
    ],
    "answer": 1,
    "explain": "80 W filaire, 50 W sans fil (chargeur vendu à part)."
   },
   {
    "q": "Pic de luminosité de l'écran ?",
    "options": [
     "2 000 nits",
     "5 000 nits",
     "8 000 nits"
    ],
    "answer": 2,
    "explain": "8 000 nits en pic HDR."
   }
  ],
  "faq": [
   {
    "id": "honor-600-pro-f1",
    "q": "Quel est le prix ?",
    "a": "799,90 € dans la liste honor.com/fr au 16 octobre 2026. Un bandeau du site indique « à partir de 499,90 € » : prix à confirmer selon l'offre."
   },
   {
    "id": "honor-600-pro-f2",
    "q": "Quels coloris ?",
    "a": "Golden White, Black et Orange."
   },
   {
    "id": "honor-600-pro-f3",
    "q": "Quel système ?",
    "a": "MagicOS 10 et Android 16."
   },
   {
    "id": "honor-600-pro-f4",
    "q": "Quelles caméras ?",
    "a": "Principal 200 Mpx f/1,9 stabilisé, téléobjectif 50 Mpx f/2,8 stabilisé, ultra grand-angle 12 Mpx, selfie 50 Mpx."
   },
   {
    "id": "honor-600-pro-f5",
    "q": "Image to Video est-il gratuit ?",
    "a": "C'est un service en ligne avec 10 utilisations par mois, payant au-delà."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur",
      "value": "7,8 mm hors bloc photo",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "195 g",
      "status": "verified"
     },
     {
      "label": "Bordures d'écran",
      "value": "0,98 mm",
      "status": "verified"
     },
     {
      "label": "Coloris",
      "value": "Golden White, Black, Orange",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP68, IP69, IP69K",
      "status": "verified"
     },
     {
      "label": "Solidité",
      "value": "SGS 5 étoiles chutes et écrasement",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "6,57\" AMOLED, 120 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "8 000 nits en pic HDR",
      "status": "verified"
     },
     {
      "label": "Gradation PWM",
      "value": "3 840 Hz, jusqu'à 1 nit",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 8 Elite",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Principal",
      "value": "200 Mpx f/1,9 Ultra Night, capteur 1/1,4\", OIS",
      "status": "verified"
     },
     {
      "label": "Téléobjectif",
      "value": "50 Mpx f/2,8 périscopique, zoom optique 3,5x, OIS",
      "status": "verified"
     },
     {
      "label": "Ultra grand-angle",
      "value": "12 Mpx AF",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "50 Mpx f/2,0",
      "status": "verified"
     },
     {
      "label": "Zoom numérique",
      "value": "Jusqu'à 120x",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "6 400 mAh (Europe)",
      "status": "verified"
     },
     {
      "label": "Charge filaire",
      "value": "80 W",
      "status": "verified"
     },
     {
      "label": "Charge sans fil",
      "value": "50 W, chargeur vendu séparément",
      "status": "verified"
     },
     {
      "label": "Durée de vie",
      "value": "Plus de 80 % de capacité après 5 ans selon HONOR",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix honor.com/fr",
      "value": "799,90 € dans la liste, 499,90 € dans un bandeau (16/10/2026)",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Prix : 799,90 € dans la liste des smartphones honor.com/fr, « à partir de 499,90 € » dans un bandeau de la même page (16/10/2026).",
   "Batterie : honor.com/fr affiche 6 400 mAh dans la page, mais 7 000 mAh dans sa description visible sur Google. La page Caractéristiques écrit « 6 400 mAh (valeur nominale) » et la page produit « typique ».",
   "Verre de l'écran : aucune information officielle. Non mentionné."
  ],
  "sources": [
   {
    "label": "Fiche HONOR 600 Pro sur honor.com/fr",
    "url": "https://www.honor.com/fr/phones/honor-600-pro1/"
   },
   {
    "label": "Gamme et prix sur honor.com/fr (relevé du 16/10/2026)",
    "url": "https://www.honor.com/fr/phones/"
   },
   {
    "label": "Phonandroid, le 600 Pro est officiel",
    "url": "https://www.phonandroid.com/le-honor-600-pro-est-officiel-le-meilleur-rapport-qualite-prix-de-la-serie.html"
   },
   {
    "label": "Clubic, annonce de la série 600",
    "url": "https://www.clubic.com/actualite-610003-annonce-honor-600.html"
   }
  ],
  "videos": [],
  "note": "Contenu repris des one-pagers vendeur HONOR (octobre 2026), revérifiés sur la page Caractéristiques de honor.com/fr le 08/10/2026."
 },
 {
  "id": "honor-600",
  "name": "HONOR 600",
  "univers": "smartphones",
  "family": "Série HONOR 600 · photo",
  "type": "phone",
  "variant": "n",
  "img": "visuels/600.webp",
  "imgAr": 0.484,
  "status": "verified",
  "flag": false,
  "tagline": "Un capteur 200 Mpx et une batterie qui tient, pour celui qui photographie plus qu'il ne zoome.",
  "price": "À partir de 499,90 €",
  "priceStatus": "verified",
  "launch": "Lancé en France au printemps 2026 · prix relevé sur honor.com/fr le 16 octobre 2026",
  "hook": "Des belles photos sans payer le zoom.",
  "hookSub": "Pour le client qui photographie sa vie de tous les jours et veut un téléphone fin, endurant et solide.",
  "figures": [
   {
    "value": 200,
    "unit": "Mpx",
    "label": "capteur principal Ultra Night"
   },
   {
    "value": 6400,
    "unit": "mAh",
    "label": "de batterie (Europe)"
   },
   {
    "value": 8000,
    "unit": "nits",
    "label": "en pic HDR"
   },
   {
    "value": 185,
    "unit": "g",
    "label": "pour 7,8 mm"
   }
  ],
  "points": [
   {
    "title": "Photo 200 Mpx",
    "text": "Grand capteur 200 Mpx Ultra Night stabilisé, ultra grand-angle 12 Mpx avec macro, selfie 50 Mpx."
   },
   {
    "title": "Fin malgré la batterie",
    "text": "7,8 mm et 185 g pour 6 400 mAh. Cadre en métal mat, bordures d'écran de 0,98 mm."
   },
   {
    "title": "Lisible en plein soleil",
    "text": "AMOLED 6,57 pouces 120 Hz, pic à 8 000 nits en HDR, gradation PWM 3 840 Hz."
   },
   {
    "title": "Solide",
    "text": "IP68, IP69 et IP69K, SGS 5 étoiles chutes et écrasement."
   },
   {
    "title": "Un bouton pour l'IA",
    "text": "Accès direct aux fonctions IA, dont AI Image to Video 2.0."
   }
  ],
  "alerts": [
   "Le 600 n'a pas de téléobjectif ni de charge sans fil : si le client zoome souvent, orientez vers le 600 Pro.",
   "Batterie : 6 400 mAh en Europe. Les 7 000 mAh vus en ligne concernent la version hors Europe."
  ],
  "modules": [
   {
    "id": "honor-600-m1",
    "title": "Découvrir le HONOR 600",
    "goal": "Vendre la photo du quotidien et l'endurance.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui photographie tout, tout le temps",
      "text": "Famille, repas, sorties : il veut de belles photos et une batterie qui suit.",
      "tip": "Demandez au client de montrer les dernières photos de sa galerie : vous saurez ce qu’il photographie."
     },
     {
      "kicker": "La photo",
      "title": "200 Mpx Ultra Night",
      "text": "Grand capteur stabilisé, même de nuit. Macro avec l'ultra grand-angle 12 Mpx.",
      "tip": "Prenez une photo en macro d’un objet du rayon et faites zoomer le client dedans."
     },
     {
      "kicker": "Le format",
      "title": "7,8 mm et 185 g",
      "text": "Cadre en métal mat, bordures de 0,98 mm : un écran bord à bord.",
      "tip": "Faites-le tenir de profil par le client, puis faites toucher le cadre."
     },
     {
      "kicker": "L'IA",
      "title": "Bouton IA et Image to Video 2.0",
      "text": "Une photo s'anime en un geste, depuis le bouton dédié.",
      "tip": "Animez une photo que vous venez de prendre du client : c’est l’effet le plus parlant."
     },
     {
      "kicker": "Bien orienter",
      "title": "600 ou 600 Pro ?",
      "text": "Le 600 Pro ajoute un téléobjectif 3,5x, le Snapdragon 8 Elite et la charge sans fil.",
      "tip": "Posez une seule question : « Vous zoomez souvent ? » Si oui, 600 Pro. Sinon, 600."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "La photo 200 Mpx",
    "accroche": "On zoome dans une photo prise à l'instant ?",
    "preuve": "Capteur principal 200 Mpx Ultra Night, stabilisé.",
    "benefice": "On recadre après coup sans perdre la netteté.",
    "action": "Prenez une photo du rayon, puis zoomez dedans dans la galerie."
   },
   {
    "title": "La macro",
    "accroche": "Vous voulez voir le détail d'un tissu ou d'une fleur ?",
    "preuve": "Ultra grand-angle 12 Mpx avec mode macro.",
    "benefice": "Des photos de très près, sans accessoire.",
    "action": "Photographiez de près une étiquette ou un objet texturé."
   },
   {
    "title": "L'écran au soleil",
    "accroche": "Dehors, vous voyez votre écran ?",
    "preuve": "Pic à 8 000 nits en HDR, PWM 3 840 Hz.",
    "benefice": "Lisible dehors, doux pour les yeux le soir.",
    "action": "Approchez l'écran d'une forte lumière."
   },
   {
    "title": "La photo animée",
    "accroche": "Et si la photo bougeait ?",
    "preuve": "AI Image to Video 2.0 depuis le bouton IA.",
    "benefice": "Un souvenir animé à partager.",
    "action": "Animez une photo de démo. Mentionnez le quota mensuel du service."
   }
  ],
  "pitch": {
   "text": "Vous prenez beaucoup de photos au quotidien ? Le HONOR 600 a un capteur de 200 Mpx stabilisé, net même de nuit, et une batterie de 6 400 mAh dans un téléphone de 7,8 millimètres. Son écran reste lisible en plein soleil, et il résiste à l'eau et aux chutes. Un bouton IA anime même vos photos en vidéo. On prend une photo et on zoome dedans ?",
   "keywords": [
    "HONOR 600",
    "On prend une photo et on zoome dedans ?"
   ]
  },
  "objections": [
   {
    "id": "honor-600-o1",
    "q": "Il n'a pas de zoom ?",
    "reponse": "Pas de téléobjectif : le 200 Mpx permet de recadrer après coup. Si le client zoome souvent, présentez le 600 Pro.",
    "montrer": null
   },
   {
    "id": "honor-600-o2",
    "q": "Pas de charge sans fil ?",
    "reponse": "Non, mais la charge filaire 80 W est rapide avec le chargeur HONOR.",
    "montrer": null
   },
   {
    "id": "honor-600-o3",
    "q": "Il a l'air fragile, il est fin.",
    "reponse": "IP68, IP69 et IP69K, et SGS 5 étoiles chutes et écrasement.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Le HONOR 600 a-t-il un téléobjectif ?",
    "options": [
     "Oui, 3,5x",
     "Non"
    ],
    "answer": 1,
    "explain": "Pas de téléobjectif : c'est le principal écart avec le 600 Pro."
   },
   {
    "q": "Quel processeur ?",
    "options": [
     "Snapdragon 8 Elite",
     "Snapdragon 7 Gen 4",
     "Dimensity 7100"
    ],
    "answer": 1,
    "explain": "Snapdragon 7 Gen 4 sur la page Caractéristiques honor.com/fr."
   },
   {
    "q": "Charge filaire ?",
    "options": [
     "45 W",
     "66 W",
     "80 W",
     "100 W"
    ],
    "answer": 2,
    "explain": "80 W filaire, pas de charge sans fil."
   },
   {
    "q": "Poids ?",
    "options": [
     "175 g",
     "185 g",
     "195 g"
    ],
    "answer": 1,
    "explain": "185 g pour la version européenne de 6 400 mAh."
   }
  ],
  "faq": [
   {
    "id": "honor-600-f1",
    "q": "Quel est le prix ?",
    "a": "À partir de 499,90 € sur honor.com/fr au 16 octobre 2026."
   },
   {
    "id": "honor-600-f2",
    "q": "Quels coloris ?",
    "a": "Orange, Black et Golden White. Le Golden White serait réservé à la boutique en ligne selon un média : à confirmer."
   },
   {
    "id": "honor-600-f3",
    "q": "Quel système ?",
    "a": "MagicOS 10 et Android 16."
   },
   {
    "id": "honor-600-f4",
    "q": "Le cadre est-il en métal ?",
    "a": "Oui, cadre en métal mat."
   },
   {
    "id": "honor-600-f5",
    "q": "Quel zoom numérique ?",
    "a": "Jusqu'à 30x."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur",
      "value": "7,8 mm hors bloc photo",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "185 g",
      "status": "verified"
     },
     {
      "label": "Cadre",
      "value": "Métal mat, bordures de 0,98 mm",
      "status": "verified"
     },
     {
      "label": "Coloris",
      "value": "Orange, Black, Golden White",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP68, IP69, IP69K",
      "status": "verified"
     },
     {
      "label": "Solidité",
      "value": "SGS 5 étoiles chutes et écrasement",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "6,57\" AMOLED, 120 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "8 000 nits en pic HDR, certains scénarios",
      "status": "verified"
     },
     {
      "label": "Gradation PWM",
      "value": "3 840 Hz",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 7 Gen 4",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Principal",
      "value": "200 Mpx f/1,9 Ultra Night, capteur 1/1,4\", OIS",
      "status": "verified"
     },
     {
      "label": "Ultra grand-angle",
      "value": "12 Mpx AF, macro",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "50 Mpx f/2,0",
      "status": "verified"
     },
     {
      "label": "Téléobjectif",
      "value": "Aucun",
      "status": "verified"
     },
     {
      "label": "Zoom numérique",
      "value": "Jusqu'à 30x",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "6 400 mAh (Europe)",
      "status": "verified"
     },
     {
      "label": "Charge filaire",
      "value": "80 W",
      "status": "verified"
     },
     {
      "label": "Charge sans fil",
      "value": "Non",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix honor.com/fr",
      "value": "À partir de 499,90 € (16/10/2026)",
      "status": "verified"
     },
     {
      "label": "Golden White",
      "value": "Exclusif boutique en ligne selon un seul média",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Processeur : la page Caractéristiques honor.com/fr indique « Snapdragon 7 Gen 4 », la description Google de la page produit dit « Snapdragon 7 Next-Gen ». Retenez Snapdragon 7 Gen 4.",
   "Poids : 185 g en Europe, 190 g sur honor.com/global pour la version 7 000 mAh.",
   "Dos : la presse parle de fibre composite ou de verre selon les titres. Seul le cadre en métal mat est confirmé."
  ],
  "sources": [
   {
    "label": "Fiche HONOR 600 sur honor.com/fr",
    "url": "https://www.honor.com/fr/phones/honor-600/"
   },
   {
    "label": "Gamme et prix sur honor.com/fr (relevé du 16/10/2026)",
    "url": "https://www.honor.com/fr/phones/"
   },
   {
    "label": "Lesmobiles, lancement du HONOR 600 en France",
    "url": "https://www.lesmobiles.com/actualite/honor-600-lancement-en-france-d-un-milieu-de-gamme-ambitieux"
   },
   {
    "label": "Clubic, annonce de la série 600",
    "url": "https://www.clubic.com/actualite-610003-annonce-honor-600.html"
   }
  ],
  "videos": [],
  "note": "Contenu repris des one-pagers vendeur HONOR (octobre 2026), revérifiés sur la page Caractéristiques de honor.com/fr le 08/10/2026."
 },
 {
  "id": "honor-600-lite",
  "name": "HONOR 600 Lite",
  "univers": "smartphones",
  "family": "Série HONOR 600 · essentiel",
  "type": "phone",
  "variant": "lite",
  "img": "visuels/600-lite.webp",
  "imgAr": 0.482,
  "status": "verified",
  "flag": false,
  "tagline": "Du métal dans la main et 48 heures d'autonomie certifiées.",
  "price": "349,90 €",
  "priceStatus": "verified",
  "launch": "Prix relevé sur honor.com/fr le 16 octobre 2026 (379,90 € plus bas prix des 30 derniers jours)",
  "hook": "Le premier prix qui se sent premium.",
  "hookSub": "Pour le client qui veut un téléphone solide, endurant et agréable à tenir, sans payer le haut de gamme.",
  "figures": [
   {
    "value": 6520,
    "unit": "mAh",
    "label": "de batterie"
   },
   {
    "value": 48,
    "unit": "h",
    "label": "d'autonomie certifiées TÜV Rheinland"
   },
   {
    "value": 108,
    "unit": "Mpx",
    "label": "capteur photo"
   },
   {
    "value": 7.34,
    "unit": "mm",
    "label": "pour 180 g"
   }
  ],
  "points": [
   {
    "title": "Monocoque en métal",
    "text": "On le sent au toucher. 7,34 mm et 180 g."
   },
   {
    "title": "Deux jours certifiés",
    "text": "6 520 mAh, 48 h certifiées TÜV Rheinland selon usage. Charge 45 W avec le chargeur HONOR."
   },
   {
    "title": "Un bouton pour la photo",
    "text": "Une pression sur le bouton AI Camera ouvre l'appareil photo, sans chercher l'icône."
   },
   {
    "title": "Un écran lumineux",
    "text": "AMOLED 6,6 pouces 1,5K à 120 Hz, pic à 6 500 nits."
   },
   {
    "title": "Solide au quotidien",
    "text": "IP66, chute de 1,8 m testée sur marbre, SGS 5 étoiles. Tactile utilisable sous la pluie."
   }
  ],
  "alerts": [
   "IP66 seulement : il résiste à la pluie et aux projections, pas à l'immersion. Ne dites jamais « étanche ».",
   "Pas de charge sans fil."
  ],
  "modules": [
   {
    "id": "honor-600-lite-m1",
    "title": "Découvrir le 600 Lite",
    "goal": "Vendre la matière et l'autonomie.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui a un budget serré mais des exigences",
      "text": "Il veut un téléphone qui dure deux jours et qui ne fait pas « bas de gamme » en main.",
      "tip": "Mettez-le dans la main du client avant de parler du prix."
     },
     {
      "kicker": "La matière",
      "title": "Monocoque en métal",
      "text": "Faites-le toucher : c'est l'argument qui se sent tout de suite.",
      "tip": "Tendez-le avant de parler."
     },
     {
      "kicker": "L'autonomie",
      "title": "48 h certifiées TÜV Rheinland",
      "text": "6 520 mAh, charge 45 W avec le chargeur HONOR.",
      "tip": "Dites « certifié 48 heures par TÜV Rheinland », pas « la batterie tient deux jours »."
     },
     {
      "kicker": "La photo",
      "title": "108 Mpx et bouton AI Camera",
      "text": "Une pression et l'appareil photo est prêt.",
      "tip": "Verrouillez le téléphone, tendez-le au client et laissez-le appuyer sur le bouton."
     },
     {
      "kicker": "L'IA",
      "title": "Gomme, sous-titres, synthèse",
      "text": "Effacer un passant, sous-titrer une vidéo sans le son, résumer un long texte.",
      "tip": "Choisissez une seule fonction selon le client : la gomme pour un parent, la synthèse pour un étudiant."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "Le toucher",
    "accroche": "Prenez-le en main : vous diriez quel matériau ?",
    "preuve": "Monocoque en métal, 7,34 mm et 180 g.",
    "benefice": "La sensation d'un téléphone plus cher.",
    "action": "Tendez-le au client sans rien dire."
   },
   {
    "title": "Le bouton photo",
    "accroche": "Combien de temps pour ouvrir votre appareil photo ?",
    "preuve": "Une pression sur le bouton AI Camera ouvre l'appareil photo.",
    "benefice": "On ne rate plus la photo.",
    "action": "Appuyez une fois sur le bouton et déclenchez."
   },
   {
    "title": "La gomme IA",
    "accroche": "Un inconnu sur votre photo ?",
    "preuve": "AI Gomme efface un élément ou une personne en un geste.",
    "benefice": "La photo est sauvée.",
    "action": "Effacez un élément d'une photo de démo."
   },
   {
    "title": "Entourer pour chercher",
    "accroche": "Vous voyez un objet dans une vidéo et vous voulez savoir ce que c'est ?",
    "preuve": "Entourer pour chercher lance la recherche sur ce que l'on entoure à l'écran.",
    "benefice": "La réponse sans quitter l'appli.",
    "action": "Entourez un objet à l'écran pour lancer la recherche."
   }
  ],
  "pitch": {
   "text": "Vous voulez un téléphone qui tient deux jours sans y mettre le prix d'un haut de gamme ? Le HONOR 600 Lite est en métal, faites-le toucher, et son autonomie est certifiée 48 heures par TÜV Rheinland. Un bouton ouvre l'appareil photo 108 Mpx en une pression, et son écran monte à 6 500 nits. Il résiste à la pluie et aux chutes de 1,8 mètre. Vous le prenez en main ?",
   "keywords": [
    "HONOR 600 Lite",
    "Vous le prenez en main ?"
   ]
  },
  "objections": [
   {
    "id": "honor-600-lite-o1",
    "q": "Je peux le passer sous l'eau ?",
    "reponse": "Il est certifié IP66 : pluie et projections d'eau, pas d'immersion.",
    "montrer": null
   },
   {
    "id": "honor-600-lite-o2",
    "q": "Un téléphone pas cher, ça ne dure pas.",
    "reponse": "Monocoque en métal, chute de 1,8 m testée, SGS 5 étoiles, et 6 ans de mises à jour indiqués sur la page d'achat française.",
    "montrer": null
   },
   {
    "id": "honor-600-lite-o3",
    "q": "La charge est lente ?",
    "reponse": "45 W avec le chargeur HONOR, pour une batterie de 6 520 mAh.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Autonomie certifiée par TÜV Rheinland ?",
    "options": [
     "24 h",
     "36 h",
     "48 h",
     "72 h"
    ],
    "answer": 2,
    "explain": "48 h selon usage."
   },
   {
    "q": "Quelle protection contre l'eau ?",
    "options": [
     "IP54",
     "IP66",
     "IP68",
     "IP69K"
    ],
    "answer": 1,
    "explain": "IP66 : pluie et projections, pas d'immersion."
   },
   {
    "q": "Que fait le bouton AI Camera en une pression ?",
    "options": [
     "Lance Gemini",
     "Ouvre l'appareil photo",
     "Prend une capture d'écran"
    ],
    "answer": 1,
    "explain": "Une pression ouvre l'appareil photo."
   },
   {
    "q": "Quel matériau pour le châssis ?",
    "options": [
     "Plastique",
     "Verre",
     "Métal"
    ],
    "answer": 2,
    "explain": "Monocoque en métal."
   }
  ],
  "faq": [
   {
    "id": "honor-600-lite-f1",
    "q": "Quel est le prix ?",
    "a": "349,90 € sur honor.com/fr au 16 octobre 2026, avec 379,90 € comme plus bas prix des 30 derniers jours."
   },
   {
    "id": "honor-600-lite-f2",
    "q": "Quels coloris ?",
    "a": "Sprout Green, Velvet Grey et Velvet Black. Desert Gold n'est pas proposé en France."
   },
   {
    "id": "honor-600-lite-f3",
    "q": "Quel processeur ?",
    "a": "Le Dimensity 7100 Elite de MediaTek."
   },
   {
    "id": "honor-600-lite-f4",
    "q": "Combien de temps de mises à jour ?",
    "a": "6 ans, selon la page d'achat française."
   },
   {
    "id": "honor-600-lite-f5",
    "q": "L'écran fonctionne-t-il sous la pluie ?",
    "a": "Oui, le tactile reste utilisable sous la pluie."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur",
      "value": "7,34 mm hors module photo",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "180 g",
      "status": "verified"
     },
     {
      "label": "Châssis",
      "value": "Monocoque en métal",
      "status": "verified"
     },
     {
      "label": "Coloris",
      "value": "Sprout Green, Velvet Grey, Velvet Black",
      "status": "verified"
     },
     {
      "label": "Eau et poussière",
      "value": "IP66",
      "status": "verified"
     },
     {
      "label": "Chute",
      "value": "1,8 m sur marbre lisse (laboratoire HONOR)",
      "status": "verified"
     },
     {
      "label": "Solidité",
      "value": "SGS 5 étoiles chutes et écrasement",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "6,6\" AMOLED 1,5K, 120 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "Pic à 6 500 nits, certaines situations",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "MediaTek Dimensity 7100 Elite",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     },
     {
      "label": "Mises à jour",
      "value": "6 ans selon la page d'achat FR",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Photo",
    "rows": [
     {
      "label": "Principal",
      "value": "108 Mpx (mode Haute Résolution)",
      "status": "verified"
     },
     {
      "label": "Selfie",
      "value": "16 Mpx",
      "status": "verified"
     },
     {
      "label": "Bouton",
      "value": "AI Camera",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "6 520 mAh typique (6 320 mAh nominale)",
      "status": "verified"
     },
     {
      "label": "Autonomie",
      "value": "48 h certifiées TÜV Rheinland, selon usage",
      "status": "verified"
     },
     {
      "label": "Charge filaire",
      "value": "45 W, chargeur HONOR requis",
      "status": "verified"
     },
     {
      "label": "Charge sans fil",
      "value": "Non",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Son",
    "rows": [
     {
      "label": "Haut-parleurs",
      "value": "Stéréo, +300 % de volume selon HONOR",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix honor.com/fr",
      "value": "349,90 € (16/10/2026)",
      "status": "verified"
     },
     {
      "label": "Plus bas prix sur 30 jours",
      "value": "379,90 €",
      "status": "verified"
     }
    ]
   }
  ],
  "contradictions": [
   "Châssis : la presse parle d'« aluminium forgé sous vide », honor.com/fr de « métal renforcé ». Formulé « monocoque en métal ».",
   "Appui long sur le bouton AI Camera : « suggestions IA » sur honor.com/fr, « vidéo » dans la presse. Non repris.",
   "Coloris : « Light Green » dans le communiqué correspond à « Sprout Green » sur honor.com/fr."
  ],
  "sources": [
   {
    "label": "Fiche HONOR 600 Lite sur honor.com/fr",
    "url": "https://www.honor.com/fr/phones/honor-600-lite/"
   },
   {
    "label": "Gamme et prix sur honor.com/fr (relevé du 16/10/2026)",
    "url": "https://www.honor.com/fr/phones/"
   },
   {
    "label": "GSMArena, fiche HONOR 600 Lite",
    "url": "https://fo.gsmarena.com/honor_600_lite_5g-price-14522.php"
   }
  ],
  "videos": [],
  "note": "Contenu repris des one-pagers vendeur HONOR (octobre 2026), revérifiés sur la page Caractéristiques de honor.com/fr le 08/10/2026."
 },
 {
  "id": "magicpad4",
  "name": "HONOR MagicPad4",
  "univers": "tablettes",
  "family": "Tablettes série Magic",
  "type": "tablet",
  "img": "visuels/magicpad4.webp",
  "imgAr": 1.37,
  "status": "verified",
  "flag": true,
  "tagline": "Une tablette très fine, un écran de cinéma et un mode PC.",
  "price": "Prix à confirmer",
  "priceStatus": "confirm",
  "launch": "En vente en France depuis le 2 mars 2026 · 12 Go + 256 Go ou 16 Go + 512 Go",
  "hook": "Le cinéma dans un carnet de 4,8 mm.",
  "hookSub": "Le client regarde ses séries sur un grand OLED, puis branche un clavier pour travailler.",
  "figures": [
   {
    "value": 4.8,
    "unit": "mm",
    "label": "d'épaisseur"
   },
   {
    "value": 450,
    "unit": "g",
    "label": "sur la balance"
   },
   {
    "value": 165,
    "unit": "Hz",
    "label": "écran OLED 12,3\" 3K"
   },
   {
    "value": 10100,
    "unit": "mAh",
    "label": "de batterie"
   }
  ],
  "points": [
   {
    "title": "Fine comme un carnet",
    "text": "4,8 mm d'épaisseur et 450 g : elle se glisse dans un sac sans qu'on la sente."
   },
   {
    "title": "Un écran pour le cinéma",
    "text": "OLED de 12,3 pouces en 3K, 165 Hz, jusqu'à 2 400 nits. Huit haut-parleurs."
   },
   {
    "title": "Le mode PC",
    "text": "Mode PC pleine puissance arrivant par mise à jour, avec jusqu'à 20 fenêtres. Clavier MagicPad4 Smart Keyboard et Magic-Pencil 3 en option."
   },
   {
    "title": "La puissance d'un haut de gamme",
    "text": "Snapdragon 8 Gen 5, 12 ou 16 Go de mémoire."
   },
   {
    "title": "De quoi tenir",
    "text": "Batterie de 10 100 mAh, recharge 66 W. Le chargeur est vendu à part."
   }
  ],
  "alerts": [
   "Prix : les sources ne concordent pas (599 € ou 699 € en 12 Go + 256 Go). Vérifiez le prix de votre enseigne avant de l'annoncer.",
   "Le chargeur 66 W, le clavier et le stylet sont vendus séparément."
  ],
  "modules": [
   {
    "id": "magicpad4-m1",
    "title": "Découvrir la MagicPad4",
    "goal": "Présenter la tablette par ses trois usages : regarder, créer, travailler.",
    "time": "4 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui regarde beaucoup de vidéos et veut aussi travailler",
      "text": "Séries, films, prise de notes, documents : une tablette qui couvre le salon et le bureau.",
      "tip": "Demandez : « Vous l'utiliseriez plutôt pour regarder ou pour travailler ? »"
     },
     {
      "kicker": "Le format",
      "title": "4,8 mm et 450 g",
      "text": "Elle se tient longtemps d'une main et se glisse dans un sac fin.",
      "tip": "Faites-la prendre par la tranche."
     },
     {
      "kicker": "L'écran",
      "title": "OLED 12,3 pouces, 3K, 165 Hz",
      "text": "Des noirs profonds, une image fluide, jusqu'à 2 400 nits en pointe.",
      "tip": "Lancez une vidéo sombre pour montrer les noirs."
     },
     {
      "kicker": "Le son",
      "title": "Huit haut-parleurs",
      "text": "De quoi regarder un film sans casque ni enceinte.",
      "tip": "Montez le volume pendant la vidéo."
     },
     {
      "kicker": "Le travail",
      "title": "Mode PC et accessoires",
      "text": "Fenêtres multiples, clavier et stylet en option.",
      "tip": "Montrez le clavier s'il est en démonstration."
     }
    ]
   },
   {
    "id": "magicpad4-m2",
    "title": "Vendre les accessoires",
    "goal": "Proposer clavier et stylet au bon moment.",
    "time": "2 min",
    "screens": [
     {
      "kicker": "Repérer",
      "title": "Le client parle de cours, de notes ou de documents",
      "text": "C'est le moment de parler du clavier et du stylet.",
      "tip": "Laissez parler le client : dès qu’il dit « cours », « notes » ou « documents », passez à l’écran suivant."
     },
     {
      "kicker": "Montrer",
      "title": "Le Magic-Pencil 3",
      "text": "Prise de notes et dessin directement sur l'écran.",
      "tip": "Faites écrire le client sur une note."
     },
     {
      "kicker": "Proposer",
      "title": "Le MagicPad4 Smart Keyboard",
      "text": "Il transforme la tablette en poste de travail compact.",
      "tip": "Fixez le clavier devant le client et ouvrez un document : la tablette devient un poste de travail."
     },
     {
      "kicker": "Conclure",
      "title": "Le pack complet",
      "text": "Tablette, clavier, stylet et chargeur 66 W : vérifiez les offres groupées de votre enseigne.",
      "tip": "Vérifiez l’offre groupée du jour dans votre enseigne avant d’annoncer un prix."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "La finesse",
    "accroche": "Fermez les yeux et prenez-la. Vous diriez combien d'épaisseur ?",
    "preuve": "4,8 mm et 450 g, selon HONOR.",
    "benefice": "Le client peut lire ou regarder longtemps sans fatigue.",
    "action": "Tendez la tablette par la tranche, écran éteint, puis allumez-la."
   },
   {
    "title": "L'écran",
    "accroche": "Regardez la différence sur une scène sombre.",
    "preuve": "OLED 12,3 pouces en 3K, 165 Hz, jusqu'à 2 400 nits.",
    "benefice": "Les films et séries prennent une autre dimension.",
    "action": "Lancez une vidéo sombre en plein écran et luminosité automatique."
   },
   {
    "title": "Le son",
    "accroche": "Vous regardez vos séries avec un casque ?",
    "preuve": "Huit haut-parleurs intégrés.",
    "benefice": "Un vrai son de film, sans accessoire.",
    "action": "Montez le volume pendant la même vidéo, tablette à l'horizontale."
   },
   {
    "title": "Plusieurs fenêtres",
    "accroche": "Vous travaillez parfois sur plusieurs documents ?",
    "preuve": "Mode PC jusqu'à 20 fenêtres, arrivant par mise à jour selon HONOR.",
    "benefice": "Le client remplace un petit ordinateur pour les tâches du quotidien.",
    "action": "Ouvrez deux applis en écran partagé. Si le mode PC n'est pas encore actif sur l'appareil de démo, dites-le."
   },
   {
    "title": "Les accessoires",
    "accroche": "Et si vous preniez vos notes directement sur l'écran ?",
    "preuve": "Compatible HONOR Magic-Pencil 3 et MagicPad4 Smart Keyboard, vendus séparément.",
    "benefice": "Une tablette qui suit le client en cours ou en réunion.",
    "action": "Faites écrire le client avec le stylet de démonstration."
   }
  ],
  "pitch": {
   "text": "Vous regardez beaucoup de séries et vous aimeriez aussi travailler dessus ? La HONOR MagicPad4 fait 4,8 millimètres et 450 grammes. Son écran OLED de 12,3 pouces affiche des noirs profonds et une image très fluide, avec huit haut-parleurs pour le son. Avec le clavier et le stylet en option, elle devient un poste de travail. Et sa batterie de 10 100 mAh tient la distance. Vous voulez voir une vidéo dessus ?",
   "keywords": [
    "HONOR MagicPad4",
    "Vous voulez voir une vidéo dessus ?"
   ]
  },
  "objections": [
   {
    "id": "magicpad4-o1",
    "q": "Je préfère un iPad.",
    "reponse": "Partez de l'usage : écran OLED de 12,3 pouces, huit haut-parleurs, mode PC. Les fichiers s'échangent avec un iPhone ou un iPad grâce à l'appli HONOR Connect.",
    "montrer": "Comparez les deux écrans sur une vidéo sombre si les deux sont en rayon."
   },
   {
    "id": "magicpad4-o2",
    "q": "Le chargeur n'est pas fourni ?",
    "reponse": "Non, comme sur beaucoup d'appareils récents. Pour profiter des 66 W, il faut le chargeur HONOR d'origine.",
    "montrer": "Proposez le chargeur avec la tablette."
   },
   {
    "id": "magicpad4-o3",
    "q": "Android pour travailler, vraiment ?",
    "reponse": "Le mode PC permet d'afficher plusieurs fenêtres comme sur un ordinateur, avec clavier et stylet. Il arrive par mise à jour selon HONOR : précisez-le.",
    "montrer": null
   },
   {
    "id": "magicpad4-o4",
    "q": "Elle est trop fine pour être solide.",
    "reponse": "Ne promettez rien qui ne figure pas sur la fiche. Parlez de l'usage : une housse ou le clavier protège l'écran au transport.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Quelle est l'épaisseur de la MagicPad4 ?",
    "options": [
     "4,8 mm",
     "5,9 mm",
     "6,7 mm",
     "7,5 mm"
    ],
    "answer": 0,
    "explain": "4,8 mm pour 450 g."
   },
   {
    "q": "Quel type d'écran ?",
    "options": [
     "LCD 11\"",
     "OLED 12,3\" 3K",
     "LCD 12,1\" 3K",
     "OLED 10,4\""
    ],
    "answer": 1,
    "explain": "OLED de 12,3 pouces en 3K, 165 Hz."
   },
   {
    "q": "Combien de haut-parleurs ?",
    "options": [
     "2",
     "4",
     "6",
     "8"
    ],
    "answer": 3,
    "explain": "Huit haut-parleurs."
   },
   {
    "q": "Le chargeur 66 W est-il dans la boîte ?",
    "options": [
     "Oui",
     "Non"
    ],
    "answer": 1,
    "explain": "Il est vendu séparément."
   },
   {
    "q": "Comment présenter le mode PC ?",
    "options": [
     "Il est actif sur toutes les tablettes",
     "Il arrive par mise à jour selon HONOR",
     "Il n'existe pas",
     "Il demande un abonnement"
    ],
    "answer": 1,
    "explain": "HONOR indique un déploiement par mise à jour."
   }
  ],
  "faq": [
   {
    "id": "magicpad4-f1",
    "q": "Quand est-elle sortie en France ?",
    "a": "Le 2 mars 2026."
   },
   {
    "id": "magicpad4-f2",
    "q": "Quelles versions ?",
    "a": "12 Go + 256 Go et 16 Go + 512 Go."
   },
   {
    "id": "magicpad4-f3",
    "q": "Quelles couleurs ?",
    "a": "Gris et blanc."
   },
   {
    "id": "magicpad4-f4",
    "q": "Quels accessoires ?",
    "a": "Le HONOR Magic-Pencil 3 et le MagicPad4 Smart Keyboard, vendus séparément."
   },
   {
    "id": "magicpad4-f5",
    "q": "Quel processeur ?",
    "a": "Le Snapdragon 8 Gen 5."
   },
   {
    "id": "magicpad4-f6",
    "q": "La recharge ?",
    "a": "66 W avec le chargeur HONOR d'origine, vendu séparément."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Épaisseur",
      "value": "4,8 mm",
      "status": "verified"
     },
     {
      "label": "Poids",
      "value": "450 g",
      "status": "verified"
     },
     {
      "label": "Couleurs",
      "value": "Gris, blanc",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille et type",
      "value": "12,3\" OLED",
      "status": "verified"
     },
     {
      "label": "Définition",
      "value": "3K (3 000 × 1 920)",
      "status": "verified"
     },
     {
      "label": "Fréquence",
      "value": "165 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité maximale",
      "value": "2 400 nits",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Snapdragon 8 Gen 5",
      "status": "verified"
     },
     {
      "label": "Mémoire",
      "value": "12 Go + 256 Go ou 16 Go + 512 Go",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16",
      "status": "verified"
     },
     {
      "label": "Mode PC",
      "value": "Jusqu'à 20 fenêtres, par mise à jour",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Son et photo",
    "rows": [
     {
      "label": "Haut-parleurs",
      "value": "8",
      "status": "verified"
     },
     {
      "label": "Caméras",
      "value": "13 MP arrière, 9 MP avant",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "10 100 mAh",
      "status": "verified"
     },
     {
      "label": "Recharge",
      "value": "66 W, chargeur vendu séparément",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Lancement France",
      "value": "2 mars 2026",
      "status": "verified"
     },
     {
      "label": "Prix 12 + 256 Go",
      "value": "599 € ou 699 € selon les sources",
      "status": "confirm"
     },
     {
      "label": "Prix 16 + 512 Go",
      "value": "699 € ou 799 € selon les sources",
      "status": "confirm"
     },
     {
      "label": "Clavier, stylet",
      "value": "Vendus séparément, prix à confirmer",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Prix : 699 € (12 + 256 Go) et 799 € (16 + 512 Go) selon Phonandroid et Presse-citron ; 599 € et 699 € selon Notebookcheck et NoypiGeeks ; 599,90 € en prix de référence chez un comparateur. La fiche honor.com/fr ne tranche pas.",
   "Batterie : 10 100 mAh sur honor.com/fr, 10 000 mAh dans un test. Retenez la fiche officielle.",
   "Poids : 450 g sur honor.com/fr, 458 g dans un test. Retenez la fiche officielle."
  ],
  "sources": [
   {
    "label": "Fiche HONOR MagicPad4",
    "url": "https://www.honor.com/fr/tablets/honor-magicpad-4/"
   },
   {
    "label": "Phonandroid, test MagicPad 4",
    "url": "https://www.phonandroid.com/?p=2683940"
   },
   {
    "label": "Notebookcheck, sortie européenne",
    "url": "https://www.notebookcheck.net/Honor-releases-new-165-Hz-OLED-tablet-globally.1243349.0.html"
   },
   {
    "label": "NoypiGeeks, prix européens",
    "url": "https://www.noypigeeks.com/?p=264876"
   },
   {
    "label": "Comparez-malin, prix de référence",
    "url": "https://www.comparez-malin.fr/informatique/tablette/honor-magicpad4-12-go-256-go-gris.html"
   },
   {
    "label": "Presse-citron, test MagicPad 4",
    "url": "https://www.presse-citron.net/test-de-la-honor-magicpad-4-que-vaut-la-tablette-la-plus-fine-du-monde/"
   }
  ],
  "videos": []
 },
 {
  "id": "magicbook16",
  "name": "HONOR MagicBook 16 2026",
  "univers": "ordinateurs",
  "family": "Série MagicBook N",
  "type": "laptop",
  "img": "visuels/magicbook.webp",
  "imgAr": 1.443,
  "status": "verified",
  "flag": true,
  "tagline": "Un grand 16 pouces qui tient la journée, pour moins de 1 000 €.",
  "price": "999,90 €",
  "priceStatus": "verified",
  "launch": "Disponible en France depuis le printemps 2026 · configuration unique",
  "hook": "Le grand écran de travail, sans adaptateur.",
  "hookSub": "Pour l'étudiant ou le télétravailleur qui veut de la place à l'écran, tous les ports et une longue autonomie.",
  "figures": [
   {
    "value": 16,
    "unit": "\"",
    "label": "d'écran au format 16:10"
   },
   {
    "value": 80,
    "unit": "Wh",
    "label": "de batterie"
   },
   {
    "value": 14,
    "unit": "h",
    "label": "d'autonomie annoncée au maximum"
   },
   {
    "value": 1.64,
    "unit": "kg",
    "label": "sur la balance"
   }
  ],
  "points": [
   {
    "title": "De la place à l'écran",
    "text": "16 pouces au format 16:10, écran mat Full HD+ : plus de lignes visibles dans un tableur ou un document."
   },
   {
    "title": "Une journée de cours ou de travail",
    "text": "Batterie de 80 Wh, jusqu'à 14 heures selon HONOR, recharge 65 W."
   },
   {
    "title": "Tous les ports, sans adaptateur",
    "text": "Deux USB-C, deux USB-A, HDMI 2.1 et prise casque."
   },
   {
    "title": "Un clavier complet",
    "text": "Pavé numérique, clavier résistant aux éclaboussures (IPX2)."
   },
   {
    "title": "Il travaille avec le téléphone",
    "text": "HONOR Connect partage notifications, presse-papiers et fichiers. Device Clone récupère les données d'un ancien PC Windows."
   }
  ],
  "alerts": [
   "L'écran est un IPS Full HD+ 60 Hz de 300 nits, critiqué par la presse pour ses couleurs. Pour la photo ou la retouche, orientez vers un écran OLED.",
   "Chargeur fourni ou non : les sources divergent. Vérifiez la boîte de votre stock."
  ],
  "modules": [
   {
    "id": "magicbook16-m1",
    "title": "Découvrir le MagicBook 16",
    "goal": "Vendre par l'usage : études, télétravail, bureautique.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "L'étudiant et le télétravailleur",
      "text": "Documents, tableurs, visio, cours en ligne : un grand écran et une batterie qui suit.",
      "tip": "Demandez : « Vous l'utiliserez surtout pour quoi ? »"
     },
     {
      "kicker": "L'écran",
      "title": "16 pouces au format 16:10",
      "text": "Plus de hauteur utile qu'un écran 16:9. Dalle mate, Full HD+.",
      "tip": "Ouvrez un tableur en plein écran."
     },
     {
      "kicker": "L'autonomie",
      "title": "80 Wh, jusqu'à 14 h",
      "text": "La journée de cours sans chercher une prise.",
      "tip": "Demandez combien d’heures le client passe loin d’une prise dans une journée."
     },
     {
      "kicker": "La connectique",
      "title": "Tous les ports utiles",
      "text": "USB-C, USB-A, HDMI 2.1, jack : le client branche sa souris, sa clé et son écran sans adaptateur.",
      "tip": "Montrez les deux côtés de l'ordinateur."
     },
     {
      "kicker": "L'écosystème",
      "title": "Avec un smartphone HONOR",
      "text": "Notifications, fichiers et presse-papiers partagés grâce à HONOR Connect.",
      "tip": "Si le client a un smartphone HONOR, connectez-le au MagicBook et copiez un texte de l’un à l’autre."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "La place à l'écran",
    "accroche": "Vous travaillez sur des tableaux ou des documents longs ?",
    "preuve": "Écran 16 pouces au format 16:10, Full HD+, mat.",
    "benefice": "Moins de défilement, deux documents côte à côte lisibles.",
    "action": "Ouvrez un tableur et un document côte à côte."
   },
   {
    "title": "Le clavier complet",
    "accroche": "Vous tapez souvent des chiffres ?",
    "preuve": "Clavier pleine taille avec pavé numérique, résistant aux éclaboussures (IPX2).",
    "benefice": "Saisie rapide pour les comptes, les devis ou les cours de maths.",
    "action": "Faites taper une suite de chiffres au client sur le pavé numérique."
   },
   {
    "title": "Tous les ports",
    "accroche": "Vous avez une souris, une clé USB, un écran ?",
    "preuve": "Deux USB-C, deux USB-A, HDMI 2.1, prise casque.",
    "benefice": "Pas d'adaptateur à acheter ni à oublier.",
    "action": "Montrez chaque port en tournant l'ordinateur."
   },
   {
    "title": "Avec le téléphone",
    "accroche": "Vous recopiez parfois un texte du téléphone vers l'ordinateur ?",
    "preuve": "HONOR Connect partage notifications, presse-papiers et fichiers ; compatible iPhone via l'appli dédiée (iOS 15 ou plus).",
    "benefice": "Le client gagne du temps entre ses deux écrans.",
    "action": "Si un smartphone HONOR est en démo, copiez un texte sur le téléphone et collez-le sur l'ordinateur."
   }
  ],
  "pitch": {
   "text": "Vous cherchez un ordinateur pour les cours ou le télétravail ? Le HONOR MagicBook 16 vous donne un grand écran de 16 pouces, un clavier complet avec pavé numérique et tous les ports pour brancher votre souris ou votre écran sans adaptateur. Sa batterie de 80 Wh tient jusqu'à 14 heures selon HONOR. Et il partage vos fichiers avec votre téléphone. Le tout à 999,90 €. Vous voulez essayer le clavier ?",
   "keywords": [
    "HONOR MagicBook 16",
    "Le tout à 999,90 €."
   ]
  },
  "objections": [
   {
    "id": "magicbook16-o1",
    "q": "L'écran n'est pas très lumineux.",
    "reponse": "C'est un écran mat Full HD+ de 300 nits pensé pour la bureautique : il limite les reflets. Pour la photo ou la vidéo, présentez un modèle à écran OLED.",
    "montrer": "Soyez honnête : c'est ce qui fait confiance."
   },
   {
    "id": "magicbook16-o2",
    "q": "1,64 kg, c'est lourd.",
    "reponse": "C'est le poids d'un 16 pouces avec une grosse batterie. Le client qui se déplace tous les jours peut préférer un 14 pouces.",
    "montrer": null
   },
   {
    "id": "magicbook16-o3",
    "q": "Je ne connais pas HONOR en ordinateur.",
    "reponse": "Il tourne sous Windows 11, avec un processeur Intel Core Ultra 5 récent. Rien ne change dans les habitudes du client.",
    "montrer": null
   },
   {
    "id": "magicbook16-o4",
    "q": "Je vais perdre les fichiers de mon ancien PC.",
    "reponse": "Device Clone transfère photos, vidéos, documents et favoris de navigation depuis un ancien PC Windows, sans fil.",
    "montrer": "Montrez la page Device Clone dans PC Manager."
   }
  ],
  "quiz": [
   {
    "q": "Quelle est la capacité de la batterie ?",
    "options": [
     "56 Wh",
     "65 Wh",
     "80 Wh",
     "99 Wh"
    ],
    "answer": 2,
    "explain": "80 Wh, jusqu'à 14 h selon HONOR."
   },
   {
    "q": "Quel processeur ?",
    "options": [
     "Intel Core Ultra 5 325",
     "AMD Ryzen 5",
     "Snapdragon X Plus",
     "Intel Core i3"
    ],
    "answer": 0,
    "explain": "Intel Core Ultra 5 325, génération Panther Lake."
   },
   {
    "q": "À quel client le conseiller en priorité ?",
    "options": [
     "Retouche photo professionnelle",
     "Études et télétravail",
     "Jeux vidéo exigeants",
     "Montage vidéo 4K"
    ],
    "answer": 1,
    "explain": "Grand écran, clavier complet, autonomie : la bureautique et les études."
   },
   {
    "q": "Quel port n'est PAS présent ?",
    "options": [
     "HDMI",
     "USB-A",
     "USB-C",
     "Ethernet RJ45"
    ],
    "answer": 3,
    "explain": "Il a USB-C, USB-A, HDMI 2.1 et jack, pas de prise Ethernet listée."
   }
  ],
  "faq": [
   {
    "id": "magicbook16-f1",
    "q": "Quel est le prix ?",
    "a": "999,90 € sur la boutique officielle HONOR France, dans la seule configuration vendue en France."
   },
   {
    "id": "magicbook16-f2",
    "q": "Quelle configuration ?",
    "a": "Intel Core Ultra 5 325, 16 Go de mémoire, SSD de 512 Go, Windows 11."
   },
   {
    "id": "magicbook16-f3",
    "q": "Le stockage est-il extensible ?",
    "a": "Oui, HONOR indique un second emplacement M.2 libre."
   },
   {
    "id": "magicbook16-f4",
    "q": "Quelle couleur ?",
    "a": "Starry Gray."
   },
   {
    "id": "magicbook16-f5",
    "q": "Fonctionne-t-il avec un iPhone ?",
    "a": "Oui pour le partage de fichiers et de notifications via HONOR Connect, avec iOS 15 ou plus."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Poids",
      "value": "1,64 kg",
      "status": "verified"
     },
     {
      "label": "Épaisseur",
      "value": "15,9 mm",
      "status": "verified"
     },
     {
      "label": "Couleur",
      "value": "Starry Gray",
      "status": "verified"
     },
     {
      "label": "Robustesse",
      "value": "MIL-STD-810H selon HONOR",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Taille",
      "value": "16\", format 16:10",
      "status": "verified"
     },
     {
      "label": "Dalle",
      "value": "IPS LCD mat",
      "status": "verified"
     },
     {
      "label": "Définition",
      "value": "1 920 × 1 200",
      "status": "verified"
     },
     {
      "label": "Fréquence",
      "value": "60 Hz",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "300 nits",
      "status": "verified"
     },
     {
      "label": "Couleurs",
      "value": "45 % NTSC",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Performances",
    "rows": [
     {
      "label": "Processeur",
      "value": "Intel Core Ultra 5 325, 8 cœurs, 4,5 GHz",
      "status": "verified"
     },
     {
      "label": "NPU",
      "value": "47 TOPS",
      "status": "verified"
     },
     {
      "label": "Mémoire",
      "value": "16 Go (type LPDDR5X ou DDR5 selon les sources)",
      "status": "confirm"
     },
     {
      "label": "Stockage",
      "value": "SSD 512 Go, emplacement libre",
      "status": "verified"
     },
     {
      "label": "Système",
      "value": "Windows 11",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Connectique",
    "rows": [
     {
      "label": "Ports",
      "value": "2 × USB-C 3.2 Gen 2, 2 × USB-A, HDMI 2.1, jack 3,5 mm",
      "status": "verified"
     },
     {
      "label": "Sans fil",
      "value": "Wi-Fi 6 et Bluetooth 5.1, ou Wi-Fi 7 et Bluetooth 5.4 selon les sources",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "80 Wh",
      "status": "verified"
     },
     {
      "label": "Autonomie",
      "value": "Jusqu'à 14 h selon HONOR",
      "status": "verified"
     },
     {
      "label": "Recharge",
      "value": "65 W",
      "status": "verified"
     },
     {
      "label": "Chargeur dans la boîte",
      "value": "Selon les sources, avec ou sans",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Clavier",
    "rows": [
     {
      "label": "Format",
      "value": "Pleine taille, pavé numérique",
      "status": "verified"
     },
     {
      "label": "Protection",
      "value": "IPX2, éclaboussures",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix public",
      "value": "999,90 €",
      "status": "verified"
     },
     {
      "label": "Lancement France",
      "value": "Printemps 2026, date exacte à confirmer",
      "status": "confirm"
     },
     {
      "label": "Offre honor.com en octobre",
      "value": "849,90 € avec remises cumulées",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Prix : 999,90 € en France (Clubic, Phonandroid, Presse-citron). Le chiffre de 1 199 € vient d'un site allemand ou d'un comparateur : ne l'utilisez pas.",
   "Définition : une légende d'image de la page honor.com/fr mentionne « 2.5K », alors que la fiche et les tests donnent 1 920 × 1 200. La version chinoise a un écran différent.",
   "Batterie : 80 Wh en France ; la version chinoise annoncée avec 92 Wh et un écran 180 Hz n'est pas celle vendue ici.",
   "Wi-Fi : Wi-Fi 6 selon deux tests, Wi-Fi 7 selon un comparateur."
  ],
  "sources": [
   {
    "label": "Fiche HONOR MagicBook 16 2026",
    "url": "https://www.honor.com/fr/laptops/honor-magicbook-16-2026/"
   },
   {
    "label": "Clubic, test MagicBook 16",
    "url": "https://www.clubic.com/test-produit-619102-test-honor-magicbook-16-un-grand-portable-serieux-mais-limite.html"
   },
   {
    "label": "Phonandroid, test MagicBook 16 2026",
    "url": "https://www.phonandroid.com/test-honor-magicbook-16-2026.html"
   },
   {
    "label": "Presse-citron, test MagicBook 16",
    "url": "https://www.presse-citron.net/honor-magicbook-16-test/"
   }
  ],
  "videos": []
 },
 {
  "id": "watch6",
  "name": "HONOR Watch 6",
  "univers": "montres",
  "family": "Montres connectées",
  "type": "watch",
  "img": "visuels/watch-6.webp",
  "imgAr": 0.947,
  "status": "verified",
  "flag": true,
  "tagline": "Jusqu'à 35 jours sans recharge, et un écran lisible en plein soleil.",
  "price": "À partir de 249,90 €",
  "priceStatus": "verified",
  "launch": "En vente en France depuis le 24 juin 2026",
  "hook": "La montre qu'on oublie de recharger.",
  "hookSub": "Le client porte sa montre jour et nuit et ne la recharge qu'une fois par mois en mode longue durée.",
  "figures": [
   {
    "value": 35,
    "unit": "j",
    "label": "d'autonomie en mode longue durée"
   },
   {
    "value": 17,
    "unit": "j",
    "label": "en usage normal"
   },
   {
    "value": 3000,
    "unit": "nits",
    "label": "de luminosité d'écran"
   },
   {
    "value": 120,
    "unit": "+",
    "label": "modes sportifs"
   }
  ],
  "points": [
   {
    "title": "Une recharge par mois",
    "text": "Jusqu'à 35 jours en mode longue durée, 17 jours en usage normal, 42 heures avec le GPS, selon HONOR."
   },
   {
    "title": "Lisible partout",
    "text": "Écran AMOLED de 1,46 pouce, jusqu'à 3 000 nits."
   },
   {
    "title": "Un GPS précis",
    "text": "GPS double fréquence pour suivre course, vélo ou randonnée sans le téléphone."
   },
   {
    "title": "Le suivi du quotidien",
    "text": "Fréquence cardiaque, oxygène dans le sang, sommeil, stress. Plus de 120 modes sportifs."
   },
   {
    "title": "Android et iPhone",
    "text": "Compatible Android 9 et plus, iOS 15.1 et plus, avec l'appli HONOR Santé."
   }
  ],
  "alerts": [
   "Ce n'est pas un dispositif médical. Présentez le suivi santé comme du bien-être, jamais comme un diagnostic.",
   "Paiement sans contact : annoncé en France par mise à jour, via Fidesmo, pour certaines cartes Mastercard et Visa. Vérifiez sur la montre de démo avant d'en parler."
  ],
  "modules": [
   {
    "id": "watch6-m1",
    "title": "Découvrir la Watch 6",
    "goal": "Vendre l'autonomie et la simplicité.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client lassé de recharger sa montre",
      "text": "Il veut suivre son sommeil et ses séances sans y penser.",
      "tip": "Demandez : « Vous rechargez votre montre tous les combien ? »"
     },
     {
      "kicker": "L'autonomie",
      "title": "Jusqu'à 35 jours",
      "text": "17 jours en usage normal, 42 heures avec le GPS.",
      "tip": "Insistez sur le sommeil : la montre reste au poignet la nuit."
     },
     {
      "kicker": "L'écran",
      "title": "AMOLED 1,46\", 3 000 nits",
      "text": "Lisible en plein soleil, en terrasse ou en course.",
      "tip": "Allez à la vitrine ou près d'une lumière forte."
     },
     {
      "kicker": "Le sport",
      "title": "GPS double fréquence et 120+ modes",
      "text": "Course, vélo, randonnée : le tracé reste précis sans le téléphone.",
      "tip": "Demandez quel sport pratique le client, puis ouvrez ce mode d’entraînement sur la montre."
     },
     {
      "kicker": "Les deux versions",
      "title": "Noir aluminium ou marron acier",
      "text": "Noir à 249,90 €, marron en acier 316L à 269,90 €.",
      "tip": "Faites essayer les deux au poignet."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "L'autonomie",
    "accroche": "Et si vous ne rechargiez votre montre qu'une fois par mois ?",
    "preuve": "Jusqu'à 35 jours en mode longue durée et 17 jours en usage normal, selon HONOR.",
    "benefice": "Le suivi du sommeil sans trou, puisqu'elle reste au poignet.",
    "action": "Affichez l'écran batterie de la montre de démo."
   },
   {
    "title": "L'écran au soleil",
    "accroche": "Vous arrivez à lire votre montre dehors ?",
    "preuve": "AMOLED 1,46 pouce, jusqu'à 3 000 nits.",
    "benefice": "L'heure et le rythme cardiaque se lisent d'un coup d'œil, même en plein soleil.",
    "action": "Approchez la montre d'une source lumineuse forte."
   },
   {
    "title": "Le sport",
    "accroche": "Vous courez ou roulez sans votre téléphone ?",
    "preuve": "GPS double fréquence et plus de 120 modes sportifs.",
    "benefice": "Un parcours précis enregistré au poignet.",
    "action": "Lancez un mode Course en extérieur pour montrer l'écran d'entraînement."
   },
   {
    "title": "Avec n'importe quel téléphone",
    "accroche": "Vous avez un iPhone ? Pas de problème.",
    "preuve": "Compatible Android 9 et plus, iOS 15.1 et plus, avec l'appli HONOR Santé.",
    "benefice": "Le client n'a pas à changer de téléphone.",
    "action": "Montrez l'appli HONOR Santé sur un téléphone de démo."
   }
  ],
  "pitch": {
   "text": "Vous en avez assez de recharger votre montre ? La HONOR Watch 6 tient jusqu'à 35 jours en mode longue durée, et 17 jours en usage normal. Elle suit votre sommeil, votre rythme cardiaque et plus de 120 sports, avec un GPS précis. Son écran reste lisible en plein soleil. Et elle fonctionne avec un Android comme avec un iPhone. Vous voulez l'essayer au poignet ?",
   "keywords": [
    "HONOR Watch 6",
    "Vous voulez l'essayer au poignet ?"
   ]
  },
  "objections": [
   {
    "id": "watch6-o1",
    "q": "Je préfère une Apple Watch.",
    "reponse": "Si le client veut surtout de l'autonomie, la Watch 6 tient jusqu'à 17 jours en usage normal et fonctionne aussi avec un iPhone.",
    "montrer": "Ne comparez pas des chiffres que vous ne pouvez pas sourcer : parlez de son usage."
   },
   {
    "id": "watch6-o2",
    "q": "Elle mesure ma tension ?",
    "reponse": "Non. Elle suit la fréquence cardiaque, l'oxygène dans le sang, le sommeil et le stress. Ce n'est pas un appareil médical.",
    "montrer": null
   },
   {
    "id": "watch6-o3",
    "q": "Je peux payer avec ?",
    "reponse": "Le paiement sans contact est annoncé en France par mise à jour, via Fidesmo, pour certaines cartes. Vérifiez la compatibilité avec la banque du client.",
    "montrer": null
   },
   {
    "id": "watch6-o4",
    "q": "Elle est grande.",
    "reponse": "Le boîtier fait 46,5 mm, en taille unique. Faites-la essayer : la version aluminium pèse environ 41 g.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Autonomie maximale annoncée ?",
    "options": [
     "7 jours",
     "14 jours",
     "25 jours",
     "35 jours"
    ],
    "answer": 3,
    "explain": "35 jours en mode longue durée, 17 jours en usage normal."
   },
   {
    "q": "Luminosité maximale de l'écran ?",
    "options": [
     "1 000 nits",
     "1 500 nits",
     "2 000 nits",
     "3 000 nits"
    ],
    "answer": 3,
    "explain": "3 000 nits."
   },
   {
    "q": "Elle fonctionne avec un iPhone ?",
    "options": [
     "Oui, iOS 15.1 et plus",
     "Non"
    ],
    "answer": 0,
    "explain": "Android 9+ et iOS 15.1+, appli HONOR Santé."
   },
   {
    "q": "Comment présenter le suivi santé ?",
    "options": [
     "Comme un diagnostic médical",
     "Comme un suivi bien-être, pas un dispositif médical"
    ],
    "answer": 1,
    "explain": "Elle n'est pas un dispositif médical."
   }
  ],
  "faq": [
   {
    "id": "watch6-f1",
    "q": "Quel est le prix ?",
    "a": "249,90 € en noir et 269,90 € en marron, au lancement. Des offres de lancement ont existé : vérifiez celle du moment."
   },
   {
    "id": "watch6-f2",
    "q": "Quelle différence entre noir et marron ?",
    "a": "Le noir est en aluminium (environ 41 g), le marron en acier inoxydable 316L (environ 50 g)."
   },
   {
    "id": "watch6-f3",
    "q": "Résiste-t-elle à l'eau ?",
    "a": "La presse indique 5 ATM. Vérifiez la notice avant de parler de natation, et ne parlez jamais de plongée."
   },
   {
    "id": "watch6-f4",
    "q": "Quelle appli ?",
    "a": "HONOR Santé, sur Android et iPhone."
   },
   {
    "id": "watch6-f5",
    "q": "Quelle taille ?",
    "a": "Un seul boîtier de 46,5 mm."
   },
   {
    "id": "watch6-f6",
    "q": "Quand est-elle sortie ?",
    "a": "Le 24 juin 2026 en France."
   }
  ],
  "specs": [
   {
    "group": "Design",
    "rows": [
     {
      "label": "Boîtier",
      "value": "46,5 mm, taille unique",
      "status": "verified"
     },
     {
      "label": "Shadow Black",
      "value": "Aluminium, environ 41 g",
      "status": "verified"
     },
     {
      "label": "Twilight Brown",
      "value": "Acier inoxydable 316L, environ 50 g",
      "status": "verified"
     },
     {
      "label": "Eau",
      "value": "5 ATM selon la presse",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Écran",
    "rows": [
     {
      "label": "Type et taille",
      "value": "AMOLED 1,46\", 464 × 464",
      "status": "verified"
     },
     {
      "label": "Luminosité",
      "value": "3 000 nits",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Batterie",
    "rows": [
     {
      "label": "Capacité",
      "value": "980 mAh",
      "status": "verified"
     },
     {
      "label": "Mode longue durée",
      "value": "Jusqu'à 35 jours",
      "status": "verified"
     },
     {
      "label": "Usage normal",
      "value": "Jusqu'à 17 jours",
      "status": "verified"
     },
     {
      "label": "GPS continu",
      "value": "Jusqu'à 42 h",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Sport et santé",
    "rows": [
     {
      "label": "GPS",
      "value": "Double fréquence L1 + L5",
      "status": "verified"
     },
     {
      "label": "Capteurs",
      "value": "Cardio, SpO2, sommeil, stress, variabilité cardiaque, baromètre",
      "status": "verified"
     },
     {
      "label": "Modes sportifs",
      "value": "Plus de 120",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Connexion",
    "rows": [
     {
      "label": "Compatibilité",
      "value": "Android 9+, iOS 15.1+",
      "status": "verified"
     },
     {
      "label": "Appli",
      "value": "HONOR Santé",
      "status": "verified"
     },
     {
      "label": "Paiement NFC",
      "value": "Via Fidesmo, Mastercard et Visa, par mise à jour en France",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Prix Shadow Black",
      "value": "249,90 €",
      "status": "verified"
     },
     {
      "label": "Prix Twilight Brown",
      "value": "269,90 €",
      "status": "verified"
     },
     {
      "label": "Lancement France",
      "value": "24 juin 2026",
      "status": "verified"
     }
    ]
   }
  ],
  "contradictions": [
   "Prix : 249,90 € et 269,90 € dans le communiqué de lancement repris par la presse française ; un article arrondit à 249 €. La fiche honor.com/fr n'affiche pas de prix sans coupon.",
   "Offre de lancement : 80 € de remise selon le communiqué, 50 € selon un article sur la boutique allemande."
  ],
  "sources": [
   {
    "label": "Fiche HONOR Watch 6",
    "url": "https://www.honor.com/fr/wearables/honor-watch-6/"
   },
   {
    "label": "Communiqué de lancement repris par Couple of Gamer",
    "url": "https://www.coupleofgamer.com/post/honor-devoile-la-watch-6"
   },
   {
    "label": "Objets du futur, prix et fiche",
    "url": "https://www.objetsdufutur.fr/2026/06/24/honor-watch-6-montre-connectee-ia-autonomie-35-jours/"
   },
   {
    "label": "Notebookcheck, lancement européen",
    "url": "https://www.notebookcheck.com/Honor-Watch-6-startet-mit-35-Tagen-Laufzeit-und-80EUR-Launch-Rabatt-in-Deutschland.1323038.0.html"
   }
  ],
  "videos": []
 },
 {
  "id": "earbuds4",
  "name": "HONOR Earbuds 4",
  "univers": "audio",
  "family": "Écouteurs série N",
  "type": "buds",
  "img": "visuels/earbuds-4.webp",
  "imgAr": 0.984,
  "status": "announced",
  "flag": true,
  "tagline": "Le calme d'une réduction de bruit de 50 dB, 46 heures d'écoute.",
  "price": "Prix France non communiqué",
  "priceStatus": "confirm",
  "launch": "Fiche honor.com/fr : « Disponible prochainement »",
  "hook": "Le silence dans le métro, la voix des gens quand il faut.",
  "hookSub": "Une réduction de bruit forte pour les trajets, et deux modes pour entendre ce qui se passe autour.",
  "figures": [
   {
    "value": 50,
    "unit": "dB",
    "label": "de réduction de bruit maximale"
   },
   {
    "value": 46,
    "unit": "h",
    "label": "d'écoute avec le boîtier"
   },
   {
    "value": 9,
    "unit": "h",
    "label": "par charge, réduction de bruit coupée"
   },
   {
    "value": 5.3,
    "unit": "g",
    "label": "par écouteur"
   }
  ],
  "points": [
   {
    "title": "Le calme dans les transports",
    "text": "Réduction de bruit active hybride jusqu'à 50 dB, en trois niveaux."
   },
   {
    "title": "Entendre quand il faut",
    "text": "Deux modes de transparence : sons ambiants ou voix seulement."
   },
   {
    "title": "Un son détaillé",
    "text": "Double haut-parleur de 11 et 6 mm, membranes revêtues de titane."
   },
   {
    "title": "De quoi tenir la semaine",
    "text": "Jusqu'à 9 heures par charge sans réduction de bruit, 46 heures avec le boîtier. 10 minutes de charge donnent 3 heures."
   },
   {
    "title": "La traduction dans l'appli",
    "text": "Appli HONOR AI Space sur Android et iPhone, avec une fonction de traduction IA."
   }
  ],
  "alerts": [
   "Pas encore en vente sur honor.com/fr : la fiche indique « Disponible prochainement ». Ne promettez ni date ni prix.",
   "Prix connu à l'étranger seulement : 69,90 € en Italie sur honor.com. À confirmer pour la France."
  ],
  "modules": [
   {
    "id": "earbuds4-m1",
    "title": "Découvrir les Earbuds 4",
    "goal": "Préparer l'arrivée en rayon.",
    "time": "3 min",
    "screens": [
     {
      "kicker": "Pour qui",
      "title": "Le client qui fait des trajets",
      "text": "Métro, train, open space : il veut du calme sans se couper du monde.",
      "tip": "Demandez : « Vous les utiliseriez surtout dans les transports ? »"
     },
     {
      "kicker": "Le calme",
      "title": "50 dB de réduction de bruit",
      "text": "Trois niveaux pour s'adapter au lieu.",
      "tip": "Faites essayer les écouteurs au client dans l’allée la plus bruyante du magasin."
     },
     {
      "kicker": "L'écoute du monde",
      "title": "Deux modes de transparence",
      "text": "Sons ambiants pour la rue, voix pour les annonces en gare.",
      "tip": "Activez le mode voix et parlez au client sans qu’il retire les écouteurs."
     },
     {
      "kicker": "L'autonomie",
      "title": "46 heures avec le boîtier",
      "text": "Une recharge rapide de 10 minutes donne 3 heures d'écoute.",
      "tip": "Demandez combien de temps durent ses trajets par jour, puis comptez les jours d’écoute ensemble."
     },
     {
      "kicker": "La compatibilité",
      "title": "Android et iPhone",
      "text": "L'appli HONOR AI Space règle le son et propose la traduction.",
      "tip": "Demandez quel téléphone a le client et ouvrez l’appli HONOR AI Space sur le téléphone de démo."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "Le calme",
    "accroche": "Mettez-les et écoutez le magasin disparaître.",
    "preuve": "Réduction de bruit active hybride jusqu'à 50 dB, selon HONOR.",
    "benefice": "Trajets plus reposants, musique à volume plus bas.",
    "action": "Placez les écouteurs, activez la réduction de bruit au niveau maximal sans musique."
   },
   {
    "title": "Entendre une voix",
    "accroche": "Et quand quelqu'un vous parle ?",
    "preuve": "Mode transparence voix, qui fait ressortir les voix.",
    "benefice": "Le client entend une annonce ou un collègue sans retirer ses écouteurs.",
    "action": "Passez en mode voix et parlez au client à voix normale."
   },
   {
    "title": "L'autonomie",
    "accroche": "Vous oubliez souvent de les recharger ?",
    "preuve": "46 heures avec le boîtier, 10 minutes de charge pour 3 heures.",
    "benefice": "Une semaine de trajets sans y penser.",
    "action": "Montrez le niveau du boîtier dans l'appli HONOR AI Space."
   }
  ],
  "pitch": {
   "text": "Vous faites des trajets en transport ? Les HONOR Earbuds 4 coupent jusqu'à 50 décibels de bruit, et deux modes vous laissent entendre la rue ou une voix sans les retirer. Avec le boîtier, vous avez 46 heures d'écoute, et 10 minutes de charge suffisent pour 3 heures. Ils fonctionnent avec un Android comme avec un iPhone. Ils arrivent bientôt : je vous préviens dès qu'ils sont en rayon ?",
   "keywords": [
    "HONOR Earbuds 4",
    "Ils arrivent bientôt : je vous préviens dès qu'ils sont en rayon ?"
   ]
  },
  "objections": [
   {
    "id": "earbuds4-o1",
    "q": "Ils fonctionnent avec mon iPhone ?",
    "reponse": "Oui. L'appli HONOR AI Space existe sur l'App Store.",
    "montrer": null
   },
   {
    "id": "earbuds4-o2",
    "q": "Je peux faire du sport avec ?",
    "reponse": "Ils sont certifiés IP54 contre la poussière et les éclaboussures. Pas de baignade.",
    "montrer": null
   },
   {
    "id": "earbuds4-o3",
    "q": "Pourquoi pas tout de suite ?",
    "reponse": "La fiche française indique « Disponible prochainement ». Proposez un produit disponible si le client ne peut pas attendre.",
    "montrer": "Voir la gamme Audio de la Trousse."
   }
  ],
  "quiz": [
   {
    "q": "Réduction de bruit maximale annoncée ?",
    "options": [
     "25 dB",
     "35 dB",
     "42 dB",
     "50 dB"
    ],
    "answer": 3,
    "explain": "50 dB, réduction de bruit active hybride."
   },
   {
    "q": "Autonomie avec le boîtier ?",
    "options": [
     "24 h",
     "30 h",
     "46 h",
     "60 h"
    ],
    "answer": 2,
    "explain": "46 heures avec le boîtier."
   },
   {
    "q": "Statut en France au 16 octobre 2026 ?",
    "options": [
     "En vente partout",
     "Disponible prochainement",
     "Arrêté"
    ],
    "answer": 1,
    "explain": "La fiche honor.com/fr indique « Disponible prochainement »."
   }
  ],
  "faq": [
   {
    "id": "earbuds4-f1",
    "q": "Quand arrivent-ils en France ?",
    "a": "La date n'est pas communiquée : la fiche indique « Disponible prochainement »."
   },
   {
    "id": "earbuds4-f2",
    "q": "Quelles couleurs ?",
    "a": "Blanc et noir."
   },
   {
    "id": "earbuds4-f3",
    "q": "Quelle appli ?",
    "a": "HONOR AI Space, sur Android et iPhone."
   },
   {
    "id": "earbuds4-f4",
    "q": "Quelle résistance ?",
    "a": "IP54, contre la poussière et les éclaboussures."
   },
   {
    "id": "earbuds4-f5",
    "q": "Quelle connexion ?",
    "a": "Bluetooth 5.3 avec connexion à deux appareils."
   }
  ],
  "specs": [
   {
    "group": "Son",
    "rows": [
     {
      "label": "Haut-parleurs",
      "value": "11 mm + 6 mm, membranes titane",
      "status": "verified"
     },
     {
      "label": "Réduction de bruit",
      "value": "Hybride, jusqu'à 50 dB, 3 niveaux",
      "status": "verified"
     },
     {
      "label": "Transparence",
      "value": "Sons ambiants ou voix",
      "status": "verified"
     },
     {
      "label": "Codecs",
      "value": "SBC et AAC",
      "status": "confirm"
     }
    ]
   },
   {
    "group": "Autonomie",
    "rows": [
     {
      "label": "Par charge",
      "value": "Jusqu'à 9 h sans réduction de bruit",
      "status": "verified"
     },
     {
      "label": "Avec réduction de bruit",
      "value": "Environ 5 h",
      "status": "confirm"
     },
     {
      "label": "Avec le boîtier",
      "value": "46 h",
      "status": "verified"
     },
     {
      "label": "Charge rapide",
      "value": "10 min pour 3 h",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Design",
    "rows": [
     {
      "label": "Poids",
      "value": "5,3 g par écouteur",
      "status": "verified"
     },
     {
      "label": "Résistance",
      "value": "IP54",
      "status": "verified"
     },
     {
      "label": "Couleurs",
      "value": "Blanc, noir",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Connexion",
    "rows": [
     {
      "label": "Bluetooth",
      "value": "5.3, deux appareils",
      "status": "verified"
     },
     {
      "label": "Appli",
      "value": "HONOR AI Space, Android et iOS",
      "status": "verified"
     },
     {
      "label": "Traduction",
      "value": "Fonction Interprète dans l'appli",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Commercial",
    "rows": [
     {
      "label": "Statut France",
      "value": "Disponible prochainement",
      "status": "announced"
     },
     {
      "label": "Prix France",
      "value": "Non communiqué",
      "status": "confirm"
     },
     {
      "label": "Prix Italie",
      "value": "69,90 € sur honor.com",
      "status": "confirm"
     }
    ]
   }
  ],
  "contradictions": [
   "Disponibilité : en vente en Italie à 69,90 € sur honor.com, alors que la fiche française indique « Disponible prochainement » sans prix.",
   "Autonomie avec réduction de bruit : environ 5 heures selon une seule source. À confirmer."
  ],
  "sources": [
   {
    "label": "Fiche HONOR Earbuds 4",
    "url": "https://www.honor.com/fr/audio/honor-earbuds-4/"
   },
   {
    "label": "Comparatif audio honor.com/fr",
    "url": "https://www.honor.com/fr/audio/comparison/"
   },
   {
    "label": "HONOR Italie, annonce Earbuds 4",
    "url": "https://www.honor.com/it/club/topicdetail/topicid-3737555877134336/"
   },
   {
    "label": "Tom's Guide, test Earbuds 4",
    "url": "https://www.tomsguide.com/audio/earbuds/honor-earbuds-4-review"
   }
  ],
  "videos": []
 },
 {
  "id": "services",
  "name": "Passer chez HONOR",
  "univers": "services",
  "family": "Services HONOR",
  "type": "service",
  "status": "verified",
  "flag": true,
  "tagline": "Transfert, compatibilité, IA, garantie : les réponses qui rassurent.",
  "price": "Services inclus",
  "priceStatus": "verified",
  "launch": "Device Clone et HONOR Connect se téléchargent sur Google Play et l'App Store",
  "hook": "Changer de téléphone ne doit faire peur à personne.",
  "hookSub": "Le client hésite rarement sur le produit. Il hésite sur ses données, ses habitudes et le service après-vente.",
  "figures": [
   {
    "value": 8,
    "unit": "Go/min",
    "label": "de transfert annoncé avec Device Clone"
   },
   {
    "value": 4,
    "unit": "",
    "label": "types d'ancien téléphone pris en charge"
   },
   {
    "value": 2,
    "unit": "ans",
    "label": "de garantie légale de conformité"
   },
   {
    "value": 3,
    "unit": "mois",
    "label": "de Google AI Pro offerts sur certains modèles"
   }
  ],
  "points": [
   {
    "title": "Device Clone : le transfert sans câble",
    "text": "Un QR code relie l'ancien et le nouveau téléphone. Sans câble, sans consommer de données mobiles, sans inscription. Fonctionne depuis un HONOR, un HarmonyOS, un autre Android ou un iPhone (Android 7.0 ou iOS 8.0 minimum)."
   },
   {
    "title": "HONOR Connect : rester ami avec Apple",
    "text": "Échange de photos, vidéos et fichiers avec iPhone et iPad (appli HONOR Connect) et avec Mac ou PC Windows (HONOR WorkStation). Transfert avec Xiaomi, OPPO et vivo selon le modèle."
   },
   {
    "title": "MagicOS 10 et l'IA HONOR",
    "text": "MagicOS 10 apporte les fonctions IA HONOR (agent, recommandations, assistant de réunion selon le modèle). Sur le Magic V6, Gemini est intégré."
   },
   {
    "title": "Deux ans de garantie",
    "text": "Tous les produits HONOR achetés en France sont couverts deux ans par la garantie légale de conformité et la garantie des vices cachés."
   },
   {
    "title": "Un SAV joignable",
    "text": "Numéro vert 0805 542 740, fr.support@honor.com, chat IA 24 h sur 24, service d'envoi en réparation."
   }
  ],
  "alerts": [
   "Certaines fonctions avec Apple ne marchent que sur certains modèles (par exemple Magic V5, Magic V6, MagicPad3). Dites toujours « selon le modèle ».",
   "HONOR CHOICE acheté hors honor.com : le SAV passe par le revendeur."
  ],
  "modules": [
   {
    "id": "services-m1",
    "title": "Les quatre peurs du client",
    "goal": "Lever les freins au moment de changer de marque.",
    "time": "4 min",
    "screens": [
     {
      "kicker": "Peur n° 1",
      "title": "« Je vais perdre mes données »",
      "text": "Device Clone transfère les données choisies par QR code, depuis Android ou iPhone.",
      "tip": "Faites la démo avec deux téléphones de démonstration."
     },
     {
      "kicker": "Peur n° 2",
      "title": "« Je ne pourrai plus partager avec mes proches sur iPhone »",
      "text": "HONOR Connect échange photos et fichiers avec iPhone, iPad et Mac. Sur certains modèles, partage d'un simple toucher par NFC avec un iPhone 13 ou plus récent sous iOS 17.",
      "tip": "Demandez si les proches du client sont sur iPhone. Si oui, montrez l’appli HONOR Connect."
     },
     {
      "kicker": "Peur n° 3",
      "title": "« Je ne connais pas l'interface »",
      "text": "MagicOS 10 est basé sur Android. L'appli Conseils, préinstallée, guide la prise en main.",
      "tip": "Ouvrez l’appli Conseils sur le téléphone de démo et laissez le client la parcourir."
     },
     {
      "kicker": "Peur n° 4",
      "title": "« Et si ça tombe en panne ? »",
      "text": "Deux ans de garantie légale, numéro vert gratuit, chat 24 h sur 24 et service d'envoi en réparation.",
      "tip": "Notez le numéro vert du SAV sur le ticket ou la facture du client."
     },
     {
      "kicker": "La conclusion",
      "title": "Proposez le transfert sur place",
      "text": "Le client repart avec ses données sur son nouveau téléphone : c'est le meilleur souvenir d'achat.",
      "tip": "Proposez le transfert avant l’encaissement, pendant que le client est encore au comptoir."
     }
    ]
   }
  ],
  "demo": [
   {
    "title": "Le transfert depuis un iPhone",
    "accroche": "On transfère vos données maintenant, pendant que vous êtes là ?",
    "preuve": "Device Clone relie les deux téléphones par QR code, sans câble ni données mobiles, avec un débit annoncé jusqu'à 8 Go par minute.",
    "benefice": "Le client repart avec son téléphone prêt à l'emploi.",
    "action": "Nouveau téléphone : Paramètres > Système et mises à jour > Device Clone > « Ceci est le nouvel appareil » > Apple. Sur l'iPhone, installez Device Clone et scannez le QR code."
   },
   {
    "title": "Partager avec un iPhone",
    "accroche": "Vos proches sont sur iPhone ? Vous continuerez à leur envoyer vos photos.",
    "preuve": "L'appli HONOR Connect sur iPhone et iPad permet d'échanger photos, vidéos et fichiers avec un appareil HONOR.",
    "benefice": "Le client ne perd pas ses habitudes de partage en famille.",
    "action": "Envoyez une photo de démo vers un iPhone équipé de HONOR Connect."
   },
   {
    "title": "L'IA au quotidien",
    "accroche": "Vous voulez voir ce que l'IA peut faire pour vous ?",
    "preuve": "Sur le Magic V6, Gemini est intégré et peut agir dans les applis ; MagicOS 10 ajoute les fonctions IA HONOR.",
    "benefice": "Résumer, traduire, retoucher une photo en quelques secondes.",
    "action": "Ouvrez Gemini et demandez un résumé d'une page web ouverte. Rappelez qu'une connexion internet est nécessaire."
   },
   {
    "title": "La garantie",
    "accroche": "Et si vous avez un souci ?",
    "preuve": "Deux ans de garantie légale de conformité, numéro vert 0805 542 740, chat IA 24 h sur 24.",
    "benefice": "Le client achète l'esprit tranquille.",
    "action": "Montrez la page Assistance de l'appli My HONOR si elle est installée."
   }
  ],
  "pitch": {
   "text": "Vous hésitez à changer de marque ? Avec Device Clone, on transfère vos données ensemble, ici, en scannant un QR code : sans câble, depuis Android ou iPhone. Vos proches sont sur iPhone ? Vous continuez à leur envoyer vos photos avec HONOR Connect. L'IA et Gemini vous aident au quotidien. Et votre appareil est couvert deux ans, avec un numéro vert gratuit. On lance le transfert ?",
   "keywords": [
    "Device Clone",
    "On lance le transfert ?"
   ]
  },
  "objections": [
   {
    "id": "services-o1",
    "q": "Je vais perdre mes données.",
    "reponse": "Device Clone transfère les données que vous choisissez depuis un Android ou un iPhone, avec un simple QR code.",
    "montrer": "Proposez de faire le transfert en magasin."
   },
   {
    "id": "services-o2",
    "q": "HONOR, ce n'est pas Huawei ?",
    "reponse": "HONOR est une entreprise indépendante depuis 2020. Ses smartphones vendus en France fonctionnent avec les services Google, dont Gemini.",
    "montrer": null
   },
   {
    "id": "services-o3",
    "q": "Combien de temps sera-t-il mis à jour ?",
    "reponse": "Cela dépend du modèle. Vérifiez la durée de suivi indiquée sur la fiche officielle avant de répondre.",
    "montrer": "Ne donnez pas de chiffre de mémoire."
   },
   {
    "id": "services-o4",
    "q": "Et en cas de panne ?",
    "reponse": "Deux ans de garantie légale de conformité, un numéro vert gratuit (0805 542 740) et un service d'envoi en réparation.",
    "montrer": null
   },
   {
    "id": "services-o5",
    "q": "Mon ancien téléphone est très ancien.",
    "reponse": "Device Clone demande au minimum Android 7.0 ou iOS 8.0 sur l'ancien appareil.",
    "montrer": null
   }
  ],
  "quiz": [
   {
    "q": "Comment Device Clone relie-t-il les deux téléphones ?",
    "options": [
     "Par câble USB",
     "Par QR code",
     "Par carte SD",
     "Par e-mail"
    ],
    "answer": 1,
    "explain": "Un QR code affiché sur le nouveau téléphone, scanné par l'ancien."
   },
   {
    "q": "Depuis quel ancien téléphone peut-on transférer ?",
    "options": [
     "Uniquement HONOR",
     "HONOR et Android",
     "HONOR, HarmonyOS, Android et iPhone"
    ],
    "answer": 2,
    "explain": "Les quatre cas sont prévus par Device Clone."
   },
   {
    "q": "Durée de la garantie légale en France ?",
    "options": [
     "1 an",
     "2 ans",
     "3 ans",
     "5 ans"
    ],
    "answer": 1,
    "explain": "Deux ans, garantie légale de conformité."
   },
   {
    "q": "Quelle appli installer sur un iPhone pour échanger avec un HONOR ?",
    "options": [
     "HONOR Connect",
     "Google Files",
     "AirDrop",
     "HONOR Santé"
    ],
    "answer": 0,
    "explain": "HONOR Connect, sur l'App Store."
   },
   {
    "q": "Numéro vert du SAV HONOR France ?",
    "options": [
     "0805 542 740",
     "0800 000 000",
     "3900",
     "0805 100 100"
    ],
    "answer": 0,
    "explain": "0805 542 740."
   }
  ],
  "faq": [
   {
    "id": "services-f1",
    "q": "Device Clone consomme-t-il mes données mobiles ?",
    "a": "Non, et il ne demande ni câble ni inscription."
   },
   {
    "id": "services-f2",
    "q": "Peut-on transférer en mode avion ?",
    "a": "Non, le transfert ne fonctionne pas en mode avion. Chargez bien les deux téléphones avant de commencer."
   },
   {
    "id": "services-f3",
    "q": "Peut-on transférer d'un ancien PC vers un MagicBook ?",
    "a": "Oui, Device Clone existe sur PC (Windows 7, 10 et 11, 64 bits) : fichiers, photos, vidéos, documents et favoris de navigation."
   },
   {
    "id": "services-f4",
    "q": "Faut-il un compte pour HONOR Connect avec un HONOR ?",
    "a": "Entre appareils HONOR, la continuité se fait avec le même identifiant HONOR."
   },
   {
    "id": "services-f5",
    "q": "Que couvre la garantie ?",
    "a": "Les défauts de conformité et vices cachés, pas l'usure normale, la casse, l'oxydation ni les réparations non autorisées."
   },
   {
    "id": "services-f6",
    "q": "Les produits HONOR CHOICE ?",
    "a": "Achetés sur la boutique HONOR, HONOR en assure le SAV. Achetés chez un autre revendeur, il faut contacter ce revendeur."
   }
  ],
  "specs": [
   {
    "group": "Device Clone",
    "rows": [
     {
      "label": "Liaison",
      "value": "QR code, sans câble ni données mobiles",
      "status": "verified"
     },
     {
      "label": "Ancien appareil",
      "value": "HONOR, HarmonyOS, Android, iPhone",
      "status": "verified"
     },
     {
      "label": "Minimum requis",
      "value": "Android 7.0 ou iOS 8.0",
      "status": "verified"
     },
     {
      "label": "Débit annoncé",
      "value": "Jusqu'à 8 Go par minute",
      "status": "verified"
     },
     {
      "label": "Version PC",
      "value": "Windows 7, 10, 11 (64 bits), jusqu'à 90 Mo/s",
      "status": "verified"
     }
    ]
   },
   {
    "group": "HONOR Connect",
    "rows": [
     {
      "label": "iPhone et iPad",
      "value": "Appli HONOR Connect, iOS 15.6 ou plus selon la fonction",
      "status": "verified"
     },
     {
      "label": "Mac",
      "value": "HONOR WorkStation, macOS 12 ou plus",
      "status": "verified"
     },
     {
      "label": "PC Windows",
      "value": "HONOR WorkStation",
      "status": "verified"
     },
     {
      "label": "Autres Android",
      "value": "Xiaomi, OPPO, vivo, selon le modèle",
      "status": "verified"
     },
     {
      "label": "Toucher NFC avec iPhone",
      "value": "iPhone 13 ou plus récent, iOS 17, certains modèles HONOR",
      "status": "verified"
     }
    ]
   },
   {
    "group": "IA",
    "rows": [
     {
      "label": "Système",
      "value": "MagicOS 10, Android 16, sur les derniers modèles",
      "status": "verified"
     },
     {
      "label": "Assistant",
      "value": "Google Gemini (connexion requise)",
      "status": "verified"
     },
     {
      "label": "Offre",
      "value": "3 mois de Google AI Pro sur le Magic V6, jusqu'au 25 novembre 2026",
      "status": "verified"
     }
    ]
   },
   {
    "group": "Garantie et SAV",
    "rows": [
     {
      "label": "Garantie légale",
      "value": "2 ans, conformité et vices cachés",
      "status": "verified"
     },
     {
      "label": "Exclusions",
      "value": "Usure, mauvaise utilisation, liquides, réparation non autorisée",
      "status": "verified"
     },
     {
      "label": "Contact",
      "value": "0805 542 740 · fr.support@honor.com",
      "status": "verified"
     },
     {
      "label": "Chat",
      "value": "Assistant IA 24 h/24",
      "status": "verified"
     },
     {
      "label": "Autres services",
      "value": "Envoi en réparation, auto-réparation, prix hors garantie publiés",
      "status": "verified"
     }
    ]
   }
  ],
  "contradictions": [
   "Compatibilité iPhone : l'appli HONOR Connect demande iOS 15.6 ou plus, mais le partage par toucher NFC demande un iPhone 13 ou plus récent sous iOS 17, et certaines fonctions sont réservées à quelques modèles HONOR. Dites toujours « selon le modèle »."
  ],
  "sources": [
   {
    "label": "HONOR Device Clone",
    "url": "https://www.honor.com/fr/tech/clone/"
   },
   {
    "label": "HONOR Connect",
    "url": "https://www.honor.com/fr/tech/connect/"
   },
   {
    "label": "Politique de garantie HONOR France",
    "url": "https://www.honor.com/fr/support/warranty-policy/"
   },
   {
    "label": "Fiche HONOR Magic V6",
    "url": "https://www.honor.com/fr/phones/honor-magic-v6/"
   }
  ],
  "videos": [
   {
    "id": "services-v1",
    "title": "Data Cloning | HONOR Magic Series",
    "url": "https://www.youtube.com/watch?v=9ySUvpfdzng",
    "channel": "HONOR South Africa · chaîne liée depuis honor.com/za · en anglais, avril 2024"
   }
  ]
 }
];

/* Gamme : produits sans kit complet */
const GAMME = [
 {
  "name": "HONOR Magic V5",
  "univers": "smartphones",
  "type": "fold",
  "status": "verified",
  "note": "Génération précédente du pliable · 1 599,90 € sur honor.com/fr (16/10/2026)"
 },
 {
  "name": "HONOR Magic7 Pro",
  "univers": "smartphones",
  "type": "phone",
  "status": "verified",
  "note": "Fin de série"
 },
 {
  "name": "HONOR 600 Pro MOLLY Limited Edition",
  "univers": "smartphones",
  "type": "phone",
  "status": "verified",
  "note": "Édition limitée listée sur honor.com/fr"
 },
 {
  "name": "HONOR 600 Smart 5G",
  "univers": "smartphones",
  "type": "phone",
  "status": "verified",
  "note": "219 €"
 },
 {
  "name": "HONOR 400, 400 Lite, 400 Smart",
  "univers": "smartphones",
  "type": "phone",
  "status": "verified",
  "note": "Génération précédente, toujours listée"
 },
 {
  "name": "HONOR X5c Plus, X6b, X7a",
  "univers": "smartphones",
  "type": "phone",
  "status": "verified",
  "note": "Entrée de gamme, anciens modèles"
 },
 {
  "name": "Série HONOR Magic9",
  "univers": "smartphones",
  "type": "phone",
  "status": "announced",
  "note": "Visuel : Magic9 Pro Max, vendu en Chine. Arrivée en Europe annoncée par HONOR pour janvier 2027 · prix non communiqué. Les fiches vendeur du 08/10/2026 indiquent « sans date » : à confirmer avant d’en parler.",
  "img": "visuels/magic9-pro-max.webp",
  "imgAr": 0.591
 },
 {
  "name": "HONOR Robot Phone",
  "univers": "smartphones",
  "type": "phone",
  "status": "announced",
  "img": "visuels/robot-phone.webp",
  "imgAr": 0.387,
  "note": "Vendu en Chine depuis le 12/08/2026. Europe annoncée par HONOR sans date (fiches vendeur du 08/10/2026). Ne pas le promettre à un client."
 },
 {
  "name": "HONOR Pad 20 Pro",
  "univers": "tablettes",
  "type": "tablet",
  "status": "confirm",
  "note": "Nouveauté d'octobre · 599,90 € selon une source"
 },
 {
  "name": "HONOR Pad 20",
  "univers": "tablettes",
  "type": "tablet",
  "status": "confirm",
  "note": "449,90 € selon une source"
 },
 {
  "name": "HONOR Pad 10",
  "univers": "tablettes",
  "type": "tablet",
  "status": "verified",
  "note": "Listée sur honor.com/fr"
 },
 {
  "name": "HONOR Pad X9 Max, X9a, X8b, X8a",
  "univers": "tablettes",
  "type": "tablet",
  "status": "verified",
  "note": "Gamme X, familiale et études"
 },
 {
  "name": "HONOR Pad X8a Kids Edition",
  "univers": "tablettes",
  "type": "tablet",
  "status": "verified",
  "note": "Version enfants"
 },
 {
  "name": "HONOR MagicBook Art 14 Snapdragon",
  "univers": "ordinateurs",
  "type": "laptop",
  "status": "confirm",
  "note": "Écran OLED · 1 399 € au lancement en août 2025, une source"
 },
 {
  "name": "HONOR MagicBook Pro 14",
  "univers": "ordinateurs",
  "type": "laptop",
  "status": "confirm",
  "note": "Prix à confirmer"
 },
 {
  "name": "HONOR MagicBook Pro 16",
  "univers": "ordinateurs",
  "type": "laptop",
  "status": "confirm",
  "note": "Prix à confirmer"
 },
 {
  "name": "HONOR Watch 5",
  "univers": "montres",
  "type": "watch",
  "status": "verified",
  "note": "Génération précédente"
 },
 {
  "name": "HONOR Watch X5i",
  "univers": "montres",
  "type": "watch",
  "status": "verified",
  "note": "Grand écran, prix à confirmer"
 },
 {
  "name": "HONOR Watch 4",
  "univers": "montres",
  "type": "watch",
  "status": "verified",
  "note": "Ancienne génération"
 },
 {
  "name": "HONOR Band 9",
  "univers": "montres",
  "type": "watch",
  "status": "verified",
  "note": "Bracelet d'activité"
 },
 {
  "name": "HONOR Earbuds Open",
  "univers": "audio",
  "type": "buds",
  "status": "verified",
  "note": "Écouteurs ouverts"
 },
 {
  "name": "HONOR Earbuds X6",
  "univers": "audio",
  "type": "buds",
  "status": "verified",
  "note": "Gamme X"
 },
 {
  "name": "HONOR Earbuds 3 Pro",
  "univers": "audio",
  "type": "buds",
  "status": "verified",
  "note": "Génération précédente"
 },
 {
  "name": "HONOR Earbuds X5",
  "univers": "audio",
  "type": "buds",
  "status": "verified",
  "note": "Gamme X"
 },
 {
  "name": "HONOR CHOICE Earbuds X8i, Clip, Headphones Max",
  "univers": "audio",
  "type": "buds",
  "status": "verified",
  "note": "Gamme partenaire : SAV par le revendeur si achat hors honor.com"
 },
 {
  "name": "HONOR Device Clone",
  "univers": "services",
  "type": "service",
  "status": "verified",
  "note": "Transfert de données, kit « Passer chez HONOR »"
 },
 {
  "name": "HONOR Connect",
  "univers": "services",
  "type": "service",
  "status": "verified",
  "note": "Partage avec iPhone, iPad, Mac, Windows et Android"
 },
 {
  "name": "MagicOS 10 et HONOR AI",
  "univers": "services",
  "type": "service",
  "status": "verified",
  "note": "IA en local et Gemini"
 },
 {
  "name": "Garantie et SAV",
  "univers": "services",
  "type": "service",
  "status": "verified",
  "note": "2 ans légaux, numéro vert 0805 542 740"
 },
 {
  "name": "Reprise (Trade-in) et reconditionné",
  "univers": "services",
  "type": "service",
  "status": "verified",
  "note": "Services de la boutique honor.com, conditions à vérifier"
 }
];
