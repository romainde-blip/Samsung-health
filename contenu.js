'use strict';
/* =====================================================================
   CONTENU DE LA TROUSSE HONOR
   Sources : « HONOR · One-pagers vendeur » (fiches vérifiées le 04/10/2026,
   revérifiées le 08/10/2026 sur les pages Caractéristiques honor.com/fr) qui
   font foi, et « Honor · Dare to Be » (vérifié au 19/09/2026, recoupé les 21
   et 24/09/2026, mis à jour le 11/10/2026) pour les prix, les dates de sortie,
   la gamme et les liens vidéo.
   Statuts : 'verified' = Vérifié, 'confirm' = À confirmer, 'announced' = Annoncé.
   Un champ absent ou à null s'affiche « À reprendre ».
   ===================================================================== */

const SRC_OP = 'Fiches vendeur, revérifiées le 08/10/2026 (honor.com/fr)';
const SRC_DTB = 'Trousse « Dare to Be », relevé du 24/09/2026';
const HONOR_FR = { label:'honor.com/fr', url:'https://www.honor.com/fr/', note:'Pages produit et Caractéristiques, consultées le 08/10/2026 pour les fiches vendeur' };
const YT_FR = { label:'Chaîne YouTube HONOR France', url:'https://www.youtube.com/@HonorFrance', note:'Chaîne citée dans « Dare to Be »' };
const V = (label, value, src) => ({ label, value, status:'verified', src: src || SRC_OP });
const C = (label, value, src) => ({ label, value, status:'confirm', src: src || SRC_DTB });
const PRICE_NOTE = 'Relevé le 24/09/2026 (trousse « Dare to Be », recoupé presse et honor.com/fr). Les fiches vendeur ne donnent aucun prix : à revérifier sur honor.com/fr avant de l’annoncer.';

const UNIVERS = [
  { id:'smartphones', name:'Smartphones', short:'Mobiles', families:'Magic, Magic V (pliables), série N (600, 400), série X', phare:'magic-v6' },
  { id:'tablettes', name:'Tablettes', short:'Tablettes', families:'MagicPad, Pad', phare:'magicpad4' },
  { id:'ordinateurs', name:'Ordinateurs', short:'PC', families:'MagicBook', phare:'magicbook-16-2026' },
  { id:'montres', name:'Montres et bracelets', short:'Montres', families:'Montres, bracelets', phare:'watch-6' },
  { id:'audio', name:'Audio', short:'Audio', families:'Earbuds, HONOR CHOICE', phare:'earbuds-4' },
  { id:'services', name:'Services', short:'Services', families:'MagicOS, IA HONOR, Device Clone, HONOR Connect, garantie et SAV', phare:'passer-chez-honor' }
];

const UNIVERS_ALERTS = {
  smartphones:'Magic9, Magic9 Pro Max, Magic9 Super Edition et Robot Phone sont vendus en Chine uniquement. Ne les promettez pas à un client : aucune date ni aucun prix pour la France.',
  services:'Device Clone et garantie : aucune information vérifiée dans les fiches actuelles. Renvoyez le client vers honor.com/fr.'
};

/* Démo commune aux téléphones : même ordre que le pitch guidé des fiches vendeur */
function demoPhone(p){
  return [
    { title:'L’écran', accroche:p.e[0], preuve:p.e[1], benefice:p.e[2], action:'Mettez le téléphone dans la main du client, écran allumé. Laissez-le faire défiler.' },
    { title:'L’autonomie', accroche:p.b[0], preuve:p.b[1], benefice:p.b[2], action:'Ouvrez Paramètres puis Batterie, et montrez le niveau restant sur le téléphone de démo.' },
    { title:'La photo', accroche:p.p[0], preuve:p.p[1], benefice:p.p[2], action:p.p[3] },
    { title:'L’IA et la phrase client', accroche:p.i[0], preuve:p.i[1], benefice:p.i[2], action:'Faites la démo IA, puis dites la phrase client, mot pour mot.' }
  ];
}

const KITS_RAW = [
/* ------------------------------------------------------------------ MAGIC V6 */
{ id:'magic-v6', name:'HONOR Magic V6', univers:'smartphones', family:'Magic V · pliable', type:'fold',
  img:'visuels/magic-v6.webp', imgAr:.773, status:'verified',
  price:'2 299,90 €', priceNote:PRICE_NOTE, releaseFR:'2 juillet 2026', colors:'Rouge · Or · Blanc · Noir', os:'MagicOS 10 · Android 16',
  hook:'Le grand écran qui tient dans la poche.',
  figures:[ { value:7.95, unit:'″', label:'Écran ouvert. Fermé : 6,52″' }, { value:8.75, unit:'mm', label:'Épaisseur plié (version Blanche)' }, { value:6660, unit:'mAh', label:'Batterie typique, 24 h certifiées TÜV' }, { value:500000, unit:'', label:'Pliages testés selon protocole SGS' } ],
  points:[
    'Fermé, on répond et on scrolle d’une main. Ouvert, on regarde un film ou on travaille sur deux applis côte à côte.',
    'Une journée chargée sans chercher de prise : 6 660 mAh, 80 W avec câble, 66 W sans fil.',
    'Il supporte la pluie et la poussière : IP68 et IP69, premier pliable au monde à cumuler les deux selon HONOR. Protection non permanente.',
    'On cadre de loin sans perdre en netteté : téléobjectif 64 Mpx, zoom optique x3.',
    'Il s’entend avec un iPhone et un Mac : notifications, écran étendu, AirPods. Appli HONOR Connect requise.'
  ],
  alerts:[
    'Ne dites pas « la plus grosse batterie d’un pliable vendu en France » : non confirmé sur honor.com/fr.',
    'Les 5 étoiles SGS concernent les chutes et les chocs, pas la charnière. Pour la charnière : 500 000 pliages selon protocole SGS.',
    '219 g et 8,75 mm : version Blanche. Les autres coloris font environ 224 g et 9,0 mm.',
    'AirDrop et relais des appels iPhone : une seule source officielle, absente de la page produit. Ne pas l’annoncer.'
  ],
  modules:[
    { id:'magic-v6-m1', title:'Un téléphone, une tablette', screens:[
      { title:'Fermé : un téléphone normal', text:'Écran externe de 6,52″. 8,75 mm et 219 g en version Blanche. Il se glisse dans une poche de jean.', tip:'Posez-le fermé à côté du téléphone du client. Comparez l’épaisseur avant d’ouvrir.' },
      { title:'Ouvert : une tablette', text:'Écran intérieur de 7,95″. Un film, un document ou deux applis côte à côte.', tip:'Ouvrez-le devant le client, lentement. Le geste fait la moitié de la vente.' },
      { title:'Plusieurs fenêtres à la fois', text:'HONOR Multi-Flex : un document, une visio et une messagerie ouverts en même temps.', tip:'Ouvrez trois applis que le client utilise vraiment, pas des applis de démo.' },
      { title:'Lisible dehors', text:'Écran externe jusqu’à 6 000 nits en pic, écran intérieur jusqu’à 5 000 nits. Verre externe NanoCrystal Shield, plus résistant aux rayures et aux chutes.', tip:'Si le magasin est très éclairé, montrez l’écran sous le spot le plus fort.' }
    ]},
    { id:'magic-v6-m2', title:'Solide et intelligent', screens:[
      { title:'La charnière', text:'500 000 pliages testés selon un protocole SGS.', tip:'Faites ouvrir et fermer le téléphone par le client lui-même, plusieurs fois.' },
      { title:'La pluie ne l’arrête pas', text:'IP68 et IP69. Certification selon IEC 60529, protection non permanente.', tip:'Dites « certifié IP68 et IP69 », jamais « étanche ».' },
      { title:'On déplie, l’IA est là', text:'HONOR Fast-flex : un geste ouvre l’écran partagé, avec l’agent IA à côté de l’appli. On lui pose une question sur ce qui est affiché.', tip:'Préparez une page web sur un sujet qui parle au client avant de lancer Fast-flex.' },
      { title:'Au bureau', text:'Assistant de réunion IA : une alerte quand votre nom est cité. Google Gemini intégré pour ouvrir un fichier ou lancer une appli à la voix.', tip:'Pour un client pro, commencez par cet écran.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Fermé, c’est un téléphone. Ouvert, c’est une tablette. »','Écran externe 6,52″, écran intérieur 7,95″, LTPO 120 Hz.','Le client lit, regarde et travaille sur un vrai grand écran, sans porter une tablette en plus.'],
    b:['« Vous partez le matin, vous rentrez le soir, il reste de la batterie. »','6 660 mAh typique, 24 h certifiées TÜV Rheinland. 80 W avec câble, 66 W sans fil.','Une journée complète sur le grand écran, et une recharge rapide si besoin.'],
    p:['« Vous cadrez de loin, la photo reste nette. »','Principal 50 Mpx, ultra grand-angle 50 Mpx, téléobjectif 64 Mpx avec zoom optique x3.','Une photo d’un enfant sur scène ou d’un détail de façade, sans s’approcher.','Zoomez x3 sur un détail au fond du magasin et faites comparer avec le téléphone du client.'],
    i:['« On déplie, l’IA est déjà là. »','HONOR Fast-flex ouvre l’agent IA à côté de l’appli affichée.','Le client pose sa question sans quitter ce qu’il regarde.']
  }),
  pitch:{ text:'Fermé, il a la taille d’un téléphone : 8,75 mm en version Blanche. Ouvert, c’est une tablette de 7,95 pouces pour un film ou deux applis côte à côte. Sa batterie de 6 660 mAh tient la journée, avec 80 W au câble et 66 W sans fil. Il est certifié IP68 et IP69 : la pluie ne l’arrête pas. Et il s’entend avec votre iPhone et votre Mac.', keywords:['taille d’un téléphone','tablette','6 660 mAh','IP68 et IP69','iPhone'] },
  objections:[
    { id:'magic-v6-o1', q:'« Un pliable, c’est fragile. »', usage:'Vous l’ouvrez et le fermez des dizaines de fois par jour, il est fait pour ça.', preuve:'500 000 pliages testés selon protocole SGS. Verre externe NanoCrystal Shield.', montrer:'Faites plier le téléphone par le client, plusieurs fois.' },
    { id:'magic-v6-o2', q:'« C’est trop épais et trop lourd. »', usage:'Dans la poche, il se comporte comme un téléphone classique.', preuve:'8,75 mm et 219 g en version Blanche, environ 9,0 mm et 224 g pour les autres coloris.', montrer:'Posez-le fermé à côté du téléphone du client.' },
    { id:'magic-v6-o3', q:'« J’ai un iPhone et un Mac, je perds tout. »', usage:'Vous gardez vos habitudes : notifications de l’iPhone, écran étendu du Mac, AirPods.', preuve:'Fonctions listées sur la page produit honor.com/fr. Appli HONOR Connect et compte HONOR requis.', montrer:'Ouvrez l’appli HONOR Connect sur le téléphone de démo.' },
    { id:'magic-v6-o4', q:'« Et s’il prend la pluie ? »', usage:'Vous l’utilisez dehors comme n’importe quel téléphone.', preuve:'Certifié IP68 et IP69 selon IEC 60529. La protection n’est pas permanente.', montrer:'Montrez la mention IP68 et IP69 sur la fiche produit.' }
  ],
  quiz:[
    { q:'Quelle résistance à l’eau et à la poussière annonce le Magic V6 ?', options:['IP68 et IP69','IP66 seulement','IP54'], answer:0, explain:'IP68 et IP69. HONOR le présente comme le premier pliable au monde à cumuler les deux. Protection non permanente.' },
    { q:'Combien de mégapixels pour son téléobjectif ?', options:['200 Mpx','64 Mpx','12 Mpx'], answer:1, explain:'64 Mpx avec un zoom optique x3. Le 200 Mpx, c’est le téléobjectif du Magic8 Pro.' },
    { q:'Peut-on le recharger sans fil ?', options:['Non','Oui, jusqu’à 15 W','Oui, jusqu’à 66 W'], answer:2, explain:'Jusqu’à 66 W sans fil et 80 W avec un câble. Le chargeur sans fil est vendu séparément.' },
    { q:'219 g et 8,75 mm, c’est pour quel coloris ?', options:['Tous les coloris','La version Blanche','La version Rouge'], answer:1, explain:'Version Blanche. Les autres coloris font environ 224 g et 9,0 mm.' }
  ],
  faq:[
    { id:'magic-v6-f1', q:'Quelle est la taille des écrans ?', a:'6,52″ pour l’écran externe, 7,95″ pour l’écran intérieur, tous deux LTPO 120 Hz.', src:SRC_OP },
    { id:'magic-v6-f2', q:'Le chargeur sans fil est-il fourni ?', a:'Non. La charge sans fil monte à 66 W avec un chargeur vendu séparément.', src:SRC_OP },
    { id:'magic-v6-f3', q:'Fonctionne-t-il avec un iPhone ?', a:'Oui : notifications iPhone et Apple Watch, écran étendu du Mac, AirPods et partage de connexion. Il faut l’appli HONOR Connect et le même compte HONOR.', src:SRC_OP },
    { id:'magic-v6-f4', q:'Quel système équipe le Magic V6 ?', a:'MagicOS 10, basé sur Android 16, avec Google Gemini intégré.', src:SRC_OP },
    { id:'magic-v6-f5', q:'Quels coloris en France ?', a:'Rouge, Or, Blanc et Noir, selon la page Caractéristiques honor.com/fr du 08/10/2026.', src:SRC_OP }
  ],
  specs:[
    V('Écran extérieur','6,52″ LTPO 120 Hz, 6 000 nits HDR (2 000 nits global)'),
    V('Écran intérieur','7,95″ LTPO 120 Hz, 5 000 nits HDR (1 300 nits global)'),
    V('Épaisseur pliée','8,75 mm (Blanc), 9,0 mm (autres coloris)'),
    V('Poids','219 g (Blanc), 224 g (autres coloris)'),
    V('Processeur','Snapdragon 8 Elite Gen 5'),
    V('Photo','Principal 50 Mpx f/1,6 OIS · ultra grand-angle 50 Mpx f/2,2 · téléobjectif 64 Mpx f/2,5 OIS, zoom optique x3, numérique x100 · selfie 20 Mpx sur chaque écran'),
    V('Batterie','6 660 mAh typique (6 510 mAh nominale), 24 h TÜV Rheinland'),
    V('Recharge','80 W filaire, 66 W sans fil (chargeur vendu séparément)'),
    V('Protection IP','IP68 et IP69 (IEC 60529)'),
    V('Charnière','500 000 pliages, protocole SGS'),
    V('Système','MagicOS 10 · Android 16'),
    C('Prix','2 299,90 €'),
    C('Sortie France','2 juillet 2026')
  ],
  contradictions:[
    { topic:'« La plus grosse batterie d’un pliable vendu en France »', a:'« Dare to Be » : l’affirme.', b:'Fiches vendeur : introuvable sur honor.com/fr, retiré.' },
    { topic:'Certification SGS de la charnière', a:'« Dare to Be » : « certifié SGS 5 étoiles ».', b:'Fiches vendeur : faux. Les 5 étoiles SGS concernent chutes et chocs ; la charnière, c’est 500 000 pliages selon protocole SGS.' },
    { topic:'Fonctions iPhone', a:'« Dare to Be » : AirDrop, appels et SMS iPhone relayés, 60 Mo/s avec un Mac.', b:'Fiches vendeur : une seule source officielle (guide d’achat), absente de la page produit. Retiré.' },
    { topic:'Offre Google AI Pro', a:'« Dare to Be » : 3 mois offerts.', b:'Fiches vendeur : stockage et date de fin incohérents entre les pages HONOR. Retiré.' },
    { topic:'Test de la tyrolienne', a:'« Dare to Be » : MWC 2026, bagage de 40 kg et homme de 80 kg.', b:'Fiches vendeur : teaser du 24/02/2026, avant la MWC, charges de 25, 50 puis 80 kg. Non utilisé.' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'honor.com/global, communiqué HONOR UK du 2 juillet 2026, GSMArena, Notebookcheck, Clubic, Phonandroid, Lesmobiles, Journal du Geek' }, YT_FR ],
  videos:[
    { id:'magic-v6-v1', title:'Lancement officiel Magic V6', channel:'YouTube · chaîne à confirmer', url:'https://www.youtube.com/watch?v=rPqwUUQN6vQ' },
    { id:'magic-v6-v2', title:'Temps forts du lancement', channel:'YouTube · chaîne à confirmer', url:'https://www.youtube.com/watch?v=nQOLzNEUyCk' }
  ],
  footer:'219 g et 8,75 mm : version Blanche (autres coloris env. 224 g et 9,0 mm). 6 660 mAh typique (6 510 mAh nominale). IP68/IP69 selon IEC 60529, protection non permanente. 6 000 nits : pic de l’écran externe.'
},

/* ------------------------------------------------------------------ MAGIC8 PRO */
{ id:'magic8-pro', name:'HONOR Magic8 Pro', univers:'smartphones', family:'Magic', type:'phone', variant:'pro',
  img:'visuels/magic8-pro.webp', imgAr:.47, status:'verified',
  price:'1 299 €', priceNote:PRICE_NOTE, releaseFR:'29 janvier 2026', colors:'Sunrise Gold · Sky Cyan · Noir', os:'MagicOS 10 · Android 16',
  hook:'Le zoom 200 Mpx, même de nuit.',
  figures:[ { value:200, unit:'Mpx', label:'Téléobjectif Ultra Night, zoom optique 3,7x' }, { value:6.71, unit:'″', label:'Écran OLED LTPO 1-120 Hz' }, { value:6270, unit:'mAh', label:'Batterie typique en Europe' }, { value:100, unit:'W', label:'Charge filaire. 80 W sans fil' } ],
  points:[
    'Vous zoomez depuis le fond de la salle, le visage reste net : téléobjectif 200 Mpx, zoom optique 3,7x.',
    'Les photos du soir restent nettes : moteur AiMAGE Ultra Night, temps de pose réglable.',
    'Lisible en plein soleil : jusqu’à 6 000 nits en pic HDR.',
    'Une touche dédiée à l’IA : double appui pour l’appareil photo, même écran verrouillé.',
    'Il supporte l’eau, la poussière et les jets haute pression : IP68, IP69 et IP69K. Protection non permanente.'
  ],
  alerts:[
    'Batterie en France : 6 270 mAh. Les 7 200 mAh, c’est la version chinoise ; 7 100 mAh, la version internationale.',
    'Épaisseur : 8,4 mm selon honor.com/fr. La presse donne 8,3 mm.',
    'Le visuel officiel montre un coloris blanc non listé pour la France. Ne le citez pas.'
  ],
  modules:[
    { id:'magic8-pro-m1', title:'Le zoom qui change tout', screens:[
      { title:'200 Mpx au téléobjectif', text:'Zoom optique 3,7x sur un capteur de 200 Mpx 1/1,4″, stabilisé.', tip:'Visez une étiquette prix au fond du rayon. Zoomez, puis faites lire le client.' },
      { title:'La nuit aussi', text:'Moteur AiMAGE Ultra Night : des photos nettes quand la lumière baisse.', tip:'Coupez l’éclairage d’une vitrine ou visez un coin sombre pour la démo.' },
      { title:'Retoucher sans logiciel', text:'Assistant photo IA : gommer, agrandir, détourer, d’un geste ou à la voix.', tip:'Prenez une photo du client avec un passant derrière, puis effacez le passant.' },
      { title:'Les couleurs d’une photo qu’on aime', text:'Magic Color applique à vos photos la palette d’une image de référence.', tip:'Demandez au client sa photo préférée et partez de celle-là.' }
    ]},
    { id:'magic8-pro-m2', title:'Un téléphone qui protège', screens:[
      { title:'Eau, poussière, jets', text:'IP68, IP69 et IP69K. Non conçu pour un usage aquatique professionnel.', tip:'Dites « certifié IP68, IP69 et IP69K », jamais « étanche ».' },
      { title:'Chutes', text:'Verre NanoCrystal Shield, certifié SGS 5 étoiles contre les chutes.', tip:'Parlez chute avant de parler coque : c’est la vraie peur du client.' },
      { title:'Arnaques', text:'Sécurité IA : une alerte en appel vidéo si un deepfake ou une voix clonée est détecté.', tip:'Pour un parent ou un grand-parent, commencez par cet écran.' },
      { title:'Déverrouillage', text:'Visage en 3D et empreinte à ultrasons : rapide et sûr.', tip:'Enregistrez votre visage sur le téléphone de démo et montrez la vitesse.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Il reste lisible en plein soleil. »','Écran OLED LTPO 6,71″, 1 à 120 Hz, jusqu’à 6 000 nits en pic HDR.','Lire un plan ou une photo dehors sans plisser les yeux.'],
    b:['« Vous rechargez vite, avec ou sans câble. »','6 270 mAh silicium-carbone en Europe, 100 W filaire, 80 W sans fil.','Dix minutes de charge avant de partir changent la soirée.'],
    p:['« Vous zoomez depuis le fond de la salle, le visage reste net. »','Téléobjectif 200 Mpx, zoom optique 3,7x, AiMAGE Ultra Night.','Un concert, un spectacle d’école, un match : la photo est nette, même de loin.','Zoomez 3,7x sur un visage ou une étiquette au fond du magasin.'],
    i:['« Un bouton pour la photo et pour l’IA. »','Touche IA : double appui pour l’appareil photo, même verrouillé ; appui long pour les fonctions IA.','La photo est prise avant que la scène disparaisse.']
  }),
  pitch:{ text:'Vous zoomez depuis le fond de la salle, et le visage reste net : c’est le téléobjectif 200 Mpx avec zoom optique 3,7x, même de nuit. L’écran de 6,71 pouces reste lisible en plein soleil. La batterie de 6 270 mAh se recharge en 100 W au câble ou 80 W sans fil. Une touche dédiée lance l’appareil photo en double appui. Et il est certifié IP68, IP69 et IP69K.', keywords:['200 Mpx','3,7x','plein soleil','6 270 mAh','touche dédiée','IP68, IP69 et IP69K'] },
  objections:[
    { id:'magic8-pro-o1', q:'« Je ne zoome jamais. »', usage:'Vous zoomez sans le savoir : un spectacle d’école, un panneau, un animal qui s’éloigne.', preuve:'Téléobjectif 200 Mpx, zoom optique 3,7x, Ultra Night.', montrer:'Faites zoomer le client sur un détail au fond du magasin.' },
    { id:'magic8-pro-o2', q:'« La batterie fait moins que ce que j’ai lu. »', usage:'Ce que vous avez lu concerne une autre version. En France, vous avez la version européenne.', preuve:'6 270 mAh typique en Europe (6 090 mAh nominale). 7 200 mAh : version chinoise.', montrer:'Montrez la fiche Caractéristiques honor.com/fr.' },
    { id:'magic8-pro-o3', q:'« J’ai peur de le casser. »', usage:'Il est pensé pour les chutes du quotidien et les sorties sous la pluie.', preuve:'NanoCrystal Shield certifié SGS 5 étoiles contre les chutes, IP68, IP69 et IP69K.', montrer:'Montrez la mention SGS sur la fiche produit.' },
    { id:'magic8-pro-o4', q:'« L’IA, ça ne me sert à rien. »', usage:'Vous vous en servez pour des choses simples : effacer un passant, être prévenu d’une arnaque.', preuve:'Assistant photo IA, détection des deepfakes et des voix clonées en appel vidéo.', montrer:'Effacez un élément d’une photo prise devant le client.' }
  ],
  quiz:[
    { q:'Quel est le zoom optique du téléobjectif 200 Mpx ?', options:['x2','3,7x','x10'], answer:1, explain:'3,7x, même de nuit, avec le moteur AiMAGE Ultra Night.' },
    { q:'Quelle batterie pour la version vendue en France ?', options:['6 270 mAh','7 100 mAh','7 200 mAh'], answer:0, explain:'6 270 mAh typique en Europe. 7 200 mAh, c’est la version chinoise.' },
    { q:'Que fait un double appui sur la touche IA ?', options:['Il lance Gemini','Il ouvre l’appareil photo, même écran verrouillé','Il active le mode avion'], answer:1, explain:'Double appui : l’appareil photo. Appui long : les fonctions IA.' },
    { q:'Quelle épaisseur indique honor.com/fr ?', options:['8,3 mm','8,4 mm','9,0 mm'], answer:1, explain:'8,4 mm sur la page Caractéristiques. La presse donnait 8,3 mm.' }
  ],
  faq:[
    { id:'magic8-pro-f1', q:'Combien de temps pour recharger ?', a:'HONOR annonce 100 W en filaire et 80 W sans fil. Le chargeur sans fil est vendu séparément. Aucun temps de charge vérifié dans les fiches.', src:SRC_OP },
    { id:'magic8-pro-f2', q:'Peut-on l’emmener à la piscine ?', a:'Il est certifié IP68, IP69 et IP69K, mais il n’est pas conçu pour un usage aquatique professionnel et la protection n’est pas permanente.', src:SRC_OP },
    { id:'magic8-pro-f3', q:'Quels coloris en France ?', a:'Sunrise Gold, Sky Cyan et Noir.', src:SRC_OP },
    { id:'magic8-pro-f4', q:'Toutes les fonctions IA sont-elles disponibles ?', a:'Certaines fonctions IA nécessitent une mise à jour du téléphone.', src:SRC_OP }
  ],
  specs:[
    V('Écran','6,71″ OLED LTPO 1-120 Hz, 6 000 nits pic HDR, 1 800 nits pic global'),
    V('Épaisseur','8,4 mm'), V('Poids','219 g'),
    V('Processeur','Snapdragon 8 Elite Gen 5'),
    V('Photo','Téléobjectif 200 Mpx f/2,6 1/1,4″ zoom optique 3,7x OIS · principal 50 Mpx f/1,6 1/1,3″ OIS · ultra grand-angle 50 Mpx f/2,0 122° · selfie 50 Mpx + caméra de profondeur 3D'),
    V('Batterie','6 270 mAh typique en Europe (6 090 mAh nominale), silicium-carbone'),
    V('Recharge','100 W filaire, 80 W sans fil (chargeur vendu séparément)'),
    V('Protection IP','IP68, IP69 et IP69K'),
    V('Verre','NanoCrystal Shield, SGS 5 étoiles anti-chute'),
    V('Système','MagicOS 10 · Android 16'),
    C('Prix','1 299 €'), C('Sortie France','29 janvier 2026')
  ],
  contradictions:[
    { topic:'Épaisseur', a:'Presse : 8,3 mm.', b:'Page Caractéristiques honor.com/fr : 8,4 mm. On retient 8,4 mm.' },
    { topic:'Stabilisation CIPA', a:'honor.com/fr : 6,5 stops.', b:'Communiqué UK : 5,5 stops. Non utilisé.' },
    { topic:'Certification', a:'« Dare to Be » : « IP68 + IP69K ».', b:'Fiches vendeur : IP68, IP69 et IP69K. La certification inclut aussi IP69.' },
    { topic:'Photo de nuit', a:'« Dare to Be » : « photos de concert ».', b:'Fiches vendeur : « concert » non trouvé en source officielle, remplacé par « quand la lumière baisse ».' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'honor.com/global, communiqué HONOR UK/Europe du 8 janvier 2026, GSMArena, Notebookcheck, Clubic, Presse-citron, Phonandroid, Journal du Geek, Lesmobiles' }, YT_FR ],
  videos:[ { id:'magic8-pro-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ],
  footer:'6 270 mAh : capacité typique en Europe (6 090 mAh nominale). 6 000 nits : pic HDR. IP68/IP69/IP69K : non conçu pour un usage aquatique professionnel. Certaines fonctions IA nécessitent une mise à jour.'
},

/* ------------------------------------------------------------------ MAGIC8 LITE */
{ id:'magic8-lite', name:'HONOR Magic8 Lite', univers:'smartphones', family:'Magic', type:'phone', variant:'lite',
  img:'visuels/magic8-lite.webp', imgAr:.475, status:'verified',
  price:null, priceNote:'Aucun prix dans les deux fichiers sources.', releaseFR:'15 janvier 2026', colors:'Forest Green · Midnight Black · Reddish Brown', os:'MagicOS 9 · Android 15',
  hook:'L’endurant qui encaisse.',
  figures:[ { value:7500, unit:'mAh', label:'Batterie, jusqu’à 3 jours selon HONOR' }, { value:2.5, unit:'m', label:'Chute sur granit lisse, labo HONOR' }, { value:108, unit:'Mpx', label:'Photo principale stabilisée' }, { value:189, unit:'g', label:'Pour 7,76 mm d’épaisseur' } ],
  points:[
    'Un week-end sans chercher de prise : 7 500 mAh, jusqu’à 3 jours selon HONOR.',
    'Il encaisse les chutes : 2,5 m sur granit lisse en laboratoire HONOR, SGS 5 étoiles fiabilité complète.',
    'Il supporte l’eau et les jets haute pression : IP66, IP68, IP69 et IP69K. Protection non permanente.',
    'Des photos nettes le soir : 108 Mpx avec stabilisation optique.',
    'Un écran de 6,79″ jusqu’à 6 000 nits en pic HDR, doux pour les yeux (PWM 3 840 Hz).'
  ],
  alerts:[
    'Pas de charge sans fil : 66 W filaire uniquement.',
    'Ultra grand-angle de 5 Mpx : ne le mettez pas en avant. Si le client en parle, restez factuel.',
    'Ne dites pas « 69 heures en usage mixte » ni « 50 % en 30 minutes » : non confirmés par HONOR.',
    'Coloris Reddish Brown : exclusif honor.com selon Clubic, à confirmer.'
  ],
  modules:[
    { id:'magic8-lite-m1', title:'Il tient et il encaisse', screens:[
      { title:'3 jours selon HONOR', text:'7 500 mAh silicium-carbone. Mesure HONOR : volume 8, écran à 150 nits, usage mixte.', tip:'Demandez au client à quelle heure son téléphone actuel est à plat.' },
      { title:'Chutes', text:'2,5 m sur granit lisse, en laboratoire HONOR. SGS 5 étoiles fiabilité complète, première mondiale selon HONOR.', tip:'Parlez de la dernière fois où le client a cassé son écran.' },
      { title:'Eau et poussière', text:'IP66, IP68, IP69 et IP69K. Protection non permanente.', tip:'Dites « certifié IP », jamais « étanche ».' },
      { title:'Par tous les temps', text:'Fonctionne de -30 °C à 55 °C, selon HONOR.', tip:'Pour un client qui travaille dehors, commencez par cet écran.' }
    ]},
    { id:'magic8-lite-m2', title:'L’IA au quotidien', screens:[
      { title:'Retoucher une photo', text:'Outils photo IA : gomme, anti-reflets, détourage. Un passant en trop ou un reflet sur une vitre disparaît.', tip:'Photographiez une vitrine, puis retirez le reflet.' },
      { title:'Écrire plus clair', text:'Outils d’écriture IA : résumer, reformuler, corriger en un appui.', tip:'Faites reformuler un SMS que le client vient d’écrire.' },
      { title:'Glisser pour agir', text:'Magic Portal : un texte ou une image glissé vers une appli, l’action utile se propose.', tip:'Glissez une adresse vers l’appli de cartes.' },
      { title:'Parler à l’IA', text:'Gemini Live : conversation vocale avec partage de l’écran ou de la caméra. Réservé aux 18 ans et plus.', tip:'Vérifiez l’âge avant de proposer la démo.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Un grand écran, lisible même dehors. »','6,79″ AMOLED 1,5K 120 Hz, jusqu’à 6 000 nits en pic HDR, PWM 3 840 Hz.','Des vidéos confortables, sans fatigue pour les yeux le soir.'],
    b:['« Un week-end sans chercher de prise. »','7 500 mAh, jusqu’à 3 jours selon HONOR. Charge 66 W filaire.','Le client oublie son chargeur, et ce n’est pas grave.'],
    p:['« Des photos nettes le soir. »','Principal 108 Mpx avec stabilisation optique.','Les photos de soirée ne sont plus floues.','Prenez une photo dans le coin le moins éclairé du magasin.'],
    i:['« Il corrige la photo après coup. »','Outils photo IA : gomme, anti-reflets, détourage.','Une photo ratée devient une photo à garder.']
  }),
  pitch:{ text:'Un week-end sans chercher de prise : sa batterie de 7 500 mAh tient jusqu’à 3 jours selon HONOR. Il encaisse les chutes, 2,5 mètres sur granit en laboratoire HONOR, et il est certifié IP66, IP68, IP69 et IP69K. L’écran de 6,79 pouces reste lisible dehors. Et son capteur 108 Mpx stabilisé fait des photos nettes le soir.', keywords:['7 500 mAh','3 jours','chutes','IP66, IP68, IP69 et IP69K','108 Mpx'] },
  objections:[
    { id:'magic8-lite-o1', q:'« Il ne se recharge pas sans fil. »', usage:'Avec 3 jours d’autonomie selon HONOR, vous le rechargez rarement.', preuve:'7 500 mAh, charge filaire 66 W.', montrer:'Ouvrez le menu Batterie du téléphone de démo.' },
    { id:'magic8-lite-o2', q:'« Je casse tous mes téléphones. »', usage:'Celui-ci est fait pour les chutes du quotidien.', preuve:'Chute de 2,5 m sur granit lisse en laboratoire HONOR, SGS 5 étoiles fiabilité complète.', montrer:'Montrez la mention SGS sur la fiche.' },
    { id:'magic8-lite-o3', q:'« L’ultra grand-angle est faible. »', usage:'Pour vos photos de tous les jours, c’est le capteur principal qui travaille.', preuve:'Principal 108 Mpx stabilisé. Ultra grand-angle 5 Mpx.', montrer:'Prenez la même photo avec le client et comparez.' },
    { id:'magic8-lite-o4', q:'« Pas de mise à jour vers MagicOS 10 ? »', usage:'Le téléphone sort avec MagicOS 9 et Android 15.', preuve:'Les sources sur la durée de suivi excluent la gamme Magic Lite des 7 ans de la série Magic.', montrer:'Renvoyez vers honor.com/fr pour le calendrier des mises à jour.' }
  ],
  quiz:[
    { q:'Le Magic8 Lite se recharge-t-il sans fil ?', options:['Oui, 50 W','Non, 66 W filaire uniquement','Oui, 15 W'], answer:1, explain:'Charge filaire 66 W uniquement.' },
    { q:'De quelle hauteur a-t-il résisté à une chute en laboratoire HONOR ?', options:['1,5 m','2,5 m','5 m'], answer:1, explain:'2,5 m sur granit lisse, en laboratoire HONOR.' },
    { q:'Quelle capacité de batterie ?', options:['6 270 mAh','6 520 mAh','7 500 mAh'], answer:2, explain:'7 500 mAh typique, jusqu’à 3 jours selon HONOR en usage mixte.' }
  ],
  faq:[
    { id:'magic8-lite-f1', q:'Depuis quand est-il en vente en France ?', a:'Annoncé le 8 décembre 2025 au Royaume-Uni, disponible en France depuis le 15 janvier 2026.', src:SRC_OP },
    { id:'magic8-lite-f2', q:'Comment HONOR mesure-t-il les 3 jours ?', a:'Volume 8, écran à 150 nits, usage mixte. L’autonomie réelle varie selon l’usage.', src:SRC_OP },
    { id:'magic8-lite-f3', q:'Quels coloris ?', a:'Forest Green, Reddish Brown et Midnight Black.', src:SRC_OP },
    { id:'magic8-lite-f4', q:'Gemini Live est-il accessible à tous ?', a:'Non, il est réservé aux 18 ans et plus.', src:SRC_OP }
  ],
  specs:[
    V('Écran','6,79″ AMOLED 1,5K 120 Hz · 800 nits typique, 1 800 nits HBM, 6 000 nits pic HDR · PWM 3 840 Hz'),
    V('Épaisseur','7,76 mm'), V('Poids','189 g'),
    V('Processeur','Snapdragon 6 Gen 4'),
    V('Photo','Principal 108 Mpx f/1,75 OIS · ultra grand-angle 5 Mpx f/2,2 · selfie 16 Mpx f/2,45'),
    V('Batterie','7 500 mAh typique (7 330 mAh nominale), silicium-carbone'),
    V('Recharge','66 W filaire, pas de charge sans fil'),
    V('Protection IP','IP66, IP68, IP69 et IP69K'),
    V('Chutes','2,5 m sur granit lisse (labo HONOR), SGS 5 étoiles fiabilité complète'),
    C('Haut-parleur','400 % plus puissant, selon HONOR uniquement', SRC_OP),
    C('Température d’usage','-30 °C à 55 °C, selon HONOR uniquement', SRC_OP),
    V('Système','MagicOS 9 · Android 15'),
    C('Prix',null), V('Sortie France','15 janvier 2026')
  ],
  contradictions:[
    { topic:'Date de sortie', a:'« Dare to Be » : sorti en décembre 2025.', b:'Fiches vendeur : annoncé le 08/12/2025 au Royaume-Uni, disponible en France depuis le 15/01/2026.' },
    { topic:'Certification', a:'« Dare to Be » et première version des fiches : « IP68 + IP69K ».', b:'Page Caractéristiques honor.com/fr : IP66, IP68, IP69 et IP69K.' },
    { topic:'Autonomie et charge', a:'« Dare to Be » : 69 h en usage mixte et 50 % en 30 min (Lesmobiles).', b:'Fiches vendeur : une seule source, non communiqué par HONOR. Retiré.' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'Communiqué HONOR du 8 décembre 2025, GSMArena, Notebookcheck, Phonandroid, Lesmobiles, Clubic, Boulanger (en appui)' } ],
  videos:[ { id:'magic8-lite-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ],
  footer:'7 500 mAh typique (7 330 mAh nominale). 3 jours : volume 8, écran 150 nits, usage mixte. Chute 2,5 m sur granit lisse, laboratoire HONOR. IP66/IP68/IP69/IP69K : protection non permanente.'
},

/* ------------------------------------------------------------------ 600 PRO */
{ id:'600-pro', name:'HONOR 600 Pro', univers:'smartphones', family:'Série N · 600', type:'phone', variant:'n',
  img:'visuels/600-pro.webp', imgAr:.482, status:'verified',
  price:'999,90 €', priceNote:PRICE_NOTE, releaseFR:'30 avril 2026', colors:'Golden White · Black · Orange', os:'MagicOS 10 · Android 16',
  hook:'Le 200 Mpx avec zoom optique.',
  figures:[ { value:200, unit:'Mpx', label:'Capteur principal Ultra Night' }, { value:3.5, unit:'x', label:'Zoom optique, téléobjectif 50 Mpx' }, { value:6400, unit:'mAh', label:'Batterie en Europe' }, { value:8000, unit:'nits', label:'Pic HDR de l’écran' } ],
  points:[
    'Le zoom d’un photophone : principal 200 Mpx et téléobjectif périscopique 50 Mpx, zoom optique 3,5x.',
    'Lisible en plein soleil : écran 6,57″ jusqu’à 8 000 nits en pic HDR.',
    'Une batterie qui dure : 6 400 mAh, plus de 80 % de capacité après 5 ans selon HONOR.',
    'Puce haut de gamme Snapdragon 8 Elite dans un téléphone de 7,8 mm et 195 g.',
    'Il supporte la poussière, l’immersion et les jets haute pression : IP68, IP69 et IP69K. Protection non permanente.'
  ],
  alerts:[
    'Batterie en France : 6 400 mAh. Les 7 000 mAh, c’est la version hors Europe, même si la méta-description Google de honor.com/fr l’affiche.',
    'La vidéo des voitures télécommandées a été tournée avec la version 7 000 mAh. Ne l’utilisez pas comme preuve.',
    'Ne dites pas « triple certification » : dites « IP68, IP69 et IP69K ».'
  ],
  modules:[
    { id:'600-pro-m1', title:'La photo d’un haut de gamme', screens:[
      { title:'200 Mpx Ultra Night', text:'Capteur 1/1,4″ stabilisé, de jour comme de nuit.', tip:'Faites une photo du client dans le coin le plus sombre du rayon.' },
      { title:'Le zoom optique 3,5x', text:'Téléobjectif périscopique 50 Mpx. C’est ce qui le distingue du 600.', tip:'Si le client hésite avec le 600, montrez le zoom sur les deux.' },
      { title:'Une photo devient une vidéo', text:'AI Image to Video 2.0 : jusqu’à 3 photos animées, depuis le bouton IA. Quota mensuel.', tip:'Animez une photo prise devant le client, c’est l’effet le plus parlant.' },
      { title:'Le zoom poussé retrouve du détail', text:'AI Super Zoom 2.0 affine les photos prises en zoom poussé.', tip:'Poussez le zoom au maximum puis montrez le résultat après traitement.' }
    ]},
    { id:'600-pro-m2', title:'Fin, solide, endurant', screens:[
      { title:'7,8 mm, 195 g', text:'Bordures d’écran de 0,98 mm : un écran bord à bord dans un téléphone fin.', tip:'Faites-le tenir de profil par le client.' },
      { title:'Eau et chocs', text:'IP68, IP69 et IP69K. SGS 5 étoiles chutes et écrasement.', tip:'Dites « certifié IP », jamais « étanche ».' },
      { title:'Une batterie qui vieillit bien', text:'6 400 mAh, plus de 80 % de capacité après 5 ans selon HONOR. 80 W filaire, 50 W sans fil.', tip:'Pour un client qui garde son téléphone longtemps, insistez sur les 5 ans.' },
      { title:'Doux pour les yeux', text:'PWM 3 840 Hz, luminosité qui descend jusqu’à 1 nit le soir.', tip:'Baissez la luminosité au minimum pour montrer le confort de lecture au lit.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Lisible en plein soleil. »','6,57″ AMOLED 120 Hz, 8 000 nits en pic HDR, bordures de 0,98 mm.','Un plan, une photo ou un billet se lisent dehors sans effort.'],
    b:['« Une batterie qui tient, aujourd’hui et dans 5 ans. »','6 400 mAh en Europe, plus de 80 % après 5 ans selon HONOR. 80 W filaire, 50 W sans fil.','Le client garde son téléphone plus longtemps.'],
    p:['« Le zoom d’un photophone. »','Principal 200 Mpx Ultra Night, téléobjectif 50 Mpx, zoom optique 3,5x.','Photos nettes de loin et de nuit.','Zoomez 3,5x sur un détail lointain, puis prenez la même photo avec le téléphone du client.'],
    i:['« Une photo devient une vidéo. »','AI Image to Video 2.0, lancé depuis le bouton IA. Quota mensuel.','Des souvenirs animés à partager en un geste.']
  }),
  pitch:{ text:'Le zoom d’un photophone et un écran lisible en plein soleil, dans un téléphone fin. Son capteur 200 Mpx et son téléobjectif 50 Mpx, zoom optique 3,5x, font des photos nettes de loin et de nuit. L’écran monte à 8 000 nits en pic. La batterie de 6 400 mAh garde plus de 80 % de sa capacité après 5 ans selon HONOR. Et il est certifié IP68, IP69 et IP69K.', keywords:['200 Mpx','3,5x','8 000 nits','6 400 mAh','5 ans','IP68, IP69 et IP69K'] },
  objections:[
    { id:'600-pro-o1', q:'« J’ai vu 7 000 mAh sur Internet. »', usage:'La version vendue en France est la version européenne.', preuve:'6 400 mAh en Europe. 7 000 mAh, c’est la version hors Europe.', montrer:'Ouvrez la page Caractéristiques honor.com/fr, pas le résultat Google.' },
    { id:'600-pro-o2', q:'« Pourquoi pas le 600, moins cher ? »', usage:'Si vous zoomez sur vos photos, le 600 Pro fait la différence.', preuve:'Le 600 Pro a un téléobjectif 50 Mpx zoom optique 3,5x. Le 600 n’a pas de téléobjectif.', montrer:'Comparez un zoom x3 sur les deux téléphones.' },
    { id:'600-pro-o3', q:'« La photo IA, c’est payant ? »', usage:'Vous l’utilisez gratuitement dans la limite d’un quota.', preuve:'Image to Video 2.0 : service cloud, 10 utilisations par mois, payant au-delà.', montrer:'Lancez une animation depuis le bouton IA.' },
    { id:'600-pro-o4', q:'« Il va s’user vite. »', usage:'Sa batterie est pensée pour durer plusieurs années.', preuve:'Plus de 80 % de capacité après 5 ans, selon HONOR. SGS 5 étoiles chutes et écrasement.', montrer:'Montrez la mention sur la fiche produit.' }
  ],
  quiz:[
    { q:'Quelle batterie pour le 600 Pro vendu en France ?', options:['6 400 mAh','7 000 mAh','6 660 mAh'], answer:0, explain:'6 400 mAh en Europe. Les 7 000 mAh, c’est la version hors Europe.' },
    { q:'Quel est son téléobjectif ?', options:['Pas de téléobjectif','50 Mpx périscopique, zoom optique 3,5x','200 Mpx, zoom 3,7x'], answer:1, explain:'Téléobjectif périscopique 50 Mpx, zoom optique 3,5x.' },
    { q:'Combien d’utilisations par mois pour Image to Video 2.0 ?', options:['Illimité','10, payant au-delà','3'], answer:1, explain:'Service cloud avec quota de 10 utilisations par mois, payant au-delà.' }
  ],
  faq:[
    { id:'600-pro-f1', q:'Le chargeur sans fil 50 W est-il fourni ?', a:'Non, le chargeur HONOR est vendu séparément.', src:SRC_OP },
    { id:'600-pro-f2', q:'Quelle est la différence avec le 600 ?', a:'Le 600 Pro ajoute un téléobjectif 50 Mpx zoom optique 3,5x, la charge sans fil 50 W et le Snapdragon 8 Elite.', src:SRC_OP },
    { id:'600-pro-f3', q:'Quels coloris ?', a:'Golden White, Black et Orange.', src:SRC_OP },
    { id:'600-pro-f4', q:'Quel système ?', a:'MagicOS 10, basé sur Android 16.', src:SRC_OP }
  ],
  specs:[
    V('Écran','6,57″ AMOLED 120 Hz, 8 000 nits pic HDR, PWM 3 840 Hz, bordures 0,98 mm'),
    V('Épaisseur','7,8 mm hors bloc photo'), V('Poids','195 g'),
    V('Processeur','Snapdragon 8 Elite'),
    V('Photo','Principal 200 Mpx f/1,9 AF OIS · téléobjectif 50 Mpx f/2,8 AF OIS, zoom optique 3,5x · ultra grand-angle 12 Mpx AF · selfie 50 Mpx f/2,0 · zoom numérique 120x'),
    V('Batterie','6 400 mAh (Europe)'),
    V('Recharge','80 W filaire, 50 W sans fil (chargeur vendu séparément)'),
    V('Protection IP','IP68, IP69 et IP69K'),
    V('Solidité','SGS 5 étoiles chutes et écrasement'),
    V('Système','MagicOS 10 · Android 16'),
    C('Prix','999,90 €'), C('Sortie France','30 avril 2026')
  ],
  contradictions:[
    { topic:'Capacité de la batterie sur honor.com/fr', a:'Page produit : 6 400 mAh typique, 6 210 mAh nominale.', b:'Page Caractéristiques : « 6 400 mAh (valeur nominale) ». Méta-description Google : 7 000 mAh. On dit simplement 6 400 mAh.' },
    { topic:'Monocoque et verre', a:'« Dare to Be » : aucune mention.', b:'Fiches vendeur : aucune information officielle sur le verre, non mentionné.' },
    { topic:'Vidéo des voitures RC', a:'« Dare to Be » : citée comme démonstration.', b:'Fiches vendeur : tournée avec la version 7 000 mAh. Non utilisée.' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'honor.com/global, GSMArena, Notebookcheck, Phonandroid, Lesmobiles, Fnac L’Éclaireur, JV Tech, Generation-NT, Darty (en appui)' }, YT_FR ],
  videos:[ { id:'600-pro-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ],
  footer:'6 400 mAh en Europe (7 000 mAh hors Europe). 8 000 nits : pic HDR. Sans fil 50 W : chargeur HONOR vendu séparément. Image to Video : quota mensuel.'
},

/* ------------------------------------------------------------------ 600 */
{ id:'600', name:'HONOR 600', univers:'smartphones', family:'Série N · 600', type:'phone', variant:'n',
  img:'visuels/600.webp', imgAr:.484, status:'verified',
  price:'Dès 549 €', priceNote:'128 Go : 549 €, 256 Go : 649 €. ' + PRICE_NOTE, releaseFR:'23 avril 2026', colors:'Orange · Black · Golden White', os:'MagicOS 10 · Android 16',
  hook:'Le 200 Mpx essentiel.',
  figures:[ { value:200, unit:'Mpx', label:'Capteur principal Ultra Night' }, { value:6400, unit:'mAh', label:'Batterie en Europe' }, { value:80, unit:'W', label:'Charge filaire' }, { value:185, unit:'g', label:'Pour 7,8 mm d’épaisseur' } ],
  points:[
    'Un capteur 200 Mpx stabilisé, même de nuit : pour celui qui photographie plus qu’il ne zoome.',
    'Une batterie qui tient : 6 400 mAh, plus de 80 % de capacité après 5 ans selon HONOR.',
    'Lisible en plein soleil : 6,57″ jusqu’à 8 000 nits en pic HDR.',
    'Cadre en métal mat, 7,8 mm et 185 g.',
    'Il supporte la pluie, l’immersion et les jets haute pression : IP68, IP69 et IP69K. Protection non permanente.'
  ],
  alerts:[
    'Le 600 n’a pas de téléobjectif. C’est la différence avec le 600 Pro.',
    'Pas de charge sans fil.',
    'Ne dites pas « châssis en fibre composite » : le cadre est en métal mat.',
    'Golden White : exclusif boutique en ligne selon une seule source, à confirmer avant de le proposer.'
  ],
  modules:[
    { id:'600-m1', title:'Le 200 Mpx pour tous les jours', screens:[
      { title:'Un grand capteur', text:'200 Mpx Ultra Night 1/1,4″, stabilisé. Ultra grand-angle 12 Mpx avec macro.', tip:'Photographiez un objet du rayon en macro.' },
      { title:'Pas de téléobjectif', text:'Zoom numérique jusqu’à 30x. Pour zoomer souvent, orientez vers le 600 Pro.', tip:'Posez la question « vous zoomez souvent ? » avant de conseiller.' },
      { title:'La photo s’anime', text:'AI Image to Video 2.0, depuis le bouton IA dédié. Quota mensuel.', tip:'Animez une photo du client.' },
      { title:'Retoucher à la voix', text:'Assistant photo IA : on dit ce qu’on veut changer.', tip:'Demandez au client de formuler la retouche lui-même.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Lisible en plein soleil. »','6,57″ AMOLED 120 Hz, 8 000 nits en pic HDR, PWM 3 840 Hz.','Un écran confortable dehors comme le soir.'],
    b:['« Une batterie qui tient. »','6 400 mAh en Europe, 80 W filaire, plus de 80 % après 5 ans selon HONOR.','Moins de recharges, un téléphone qui dure.'],
    p:['« Un gros capteur pour les photos du quotidien. »','Principal 200 Mpx Ultra Night stabilisé, ultra grand-angle 12 Mpx avec macro.','Des photos nettes de jour comme de nuit.','Prenez une photo en macro d’un objet du rayon.'],
    i:['« Une touche pour l’IA. »','Bouton IA dédié, AI Image to Video 2.0.','L’IA sans chercher dans les menus.']
  }),
  pitch:{ text:'Un capteur 200 Mpx et une batterie qui tient, pour celui qui photographie plus qu’il ne zoome. L’écran de 6,57 pouces reste lisible en plein soleil. La batterie de 6 400 mAh se recharge en 80 W et garde plus de 80 % de sa capacité après 5 ans selon HONOR. Cadre en métal mat, 185 grammes. Et il est certifié IP68, IP69 et IP69K.', keywords:['200 Mpx','6 400 mAh','5 ans','métal mat','IP68, IP69 et IP69K'] },
  objections:[
    { id:'600-o1', q:'« Il n’a pas de zoom. »', usage:'Si vous photographiez surtout de près, le capteur principal fait le travail.', preuve:'200 Mpx Ultra Night, pas de téléobjectif. Le 600 Pro a un zoom optique 3,5x.', montrer:'Comparez le 600 et le 600 Pro sur un zoom x3.' },
    { id:'600-o2', q:'« C’est du plastique ? »', usage:'Au toucher, vous sentez le métal du cadre.', preuve:'Cadre en métal mat (honor.com/fr).', montrer:'Faites toucher la tranche.' },
    { id:'600-o3', q:'« La batterie va faiblir. »', usage:'Elle est pensée pour durer plusieurs années.', preuve:'Plus de 80 % de capacité après 5 ans, selon HONOR.', montrer:'Montrez la mention sur la fiche.' }
  ],
  quiz:[
    { q:'Le HONOR 600 a-t-il un téléobjectif ?', options:['Oui, 50 Mpx','Non','Oui, 200 Mpx'], answer:1, explain:'Non : principal 200 Mpx et ultra grand-angle 12 Mpx. C’est la différence avec le 600 Pro.' },
    { q:'En quoi est son cadre ?', options:['Fibre composite','Métal mat','Plastique'], answer:1, explain:'Le cadre est en métal mat.' },
    { q:'Quelle certification ?', options:['IP68 seulement','IP68, IP69 et IP69K','IP66'], answer:1, explain:'IP68, IP69 et IP69K : pluie, immersion et jets haute pression.' }
  ],
  faq:[
    { id:'600-f1', q:'Quelle puce ?', a:'Snapdragon 7 Gen 4, selon la page Caractéristiques honor.com/fr.', src:SRC_OP },
    { id:'600-f2', q:'Peut-on le recharger sans fil ?', a:'Non. Charge filaire 80 W uniquement.', src:SRC_OP },
    { id:'600-f3', q:'Quelle différence de prix entre 128 et 256 Go ?', a:'549 € en 128 Go, 649 € en 256 Go, relevé le 24/09/2026. Prix à revérifier.', src:SRC_DTB },
    { id:'600-f4', q:'Gemini Live est-il ouvert à tous ?', a:'Il est réservé aux 18 ans et plus.', src:SRC_OP }
  ],
  specs:[
    V('Écran','6,57″ AMOLED 120 Hz, 8 000 nits pic HDR, PWM 3 840 Hz'),
    V('Épaisseur','7,8 mm hors bloc photo'), V('Poids','185 g'),
    V('Processeur','Snapdragon 7 Gen 4'),
    V('Photo','Principal 200 Mpx f/1,9 AF OIS · ultra grand-angle 12 Mpx AF · selfie 50 Mpx f/2,0 · zoom numérique 30x · pas de téléobjectif'),
    V('Batterie','6 400 mAh (Europe)'),
    V('Recharge','80 W filaire, pas de charge sans fil'),
    V('Protection IP','IP68, IP69 et IP69K'),
    V('Cadre','Métal mat'),
    V('Système','MagicOS 10 · Android 16'),
    C('Prix','549 € (128 Go), 649 € (256 Go)'), C('Sortie France','23 avril 2026')
  ],
  contradictions:[
    { topic:'Matière', a:'« Dare to Be » : châssis en fibre composite.', b:'Fiches vendeur : faux, le cadre est en métal mat. Le dos serait en fibre composite selon la presse, en verre selon GSMArena et TechRadar.' },
    { topic:'Certification', a:'« Dare to Be » : IP68.', b:'Fiches vendeur : IP68, IP69 et IP69K.' },
    { topic:'Poids', a:'honor.com/fr et presse : 185 g.', b:'honor.com/global : 190 g, pour la version 7 000 mAh.' },
    { topic:'Capteur principal', a:'« Dare to Be » : même capteur que le 600 Pro.', b:'Fiches vendeur : une seule source (GSMArena), non repris.' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'honor.com/global, GSMArena, Notebookcheck, Phonandroid, Clubic, Journal du Geek, Lesmobiles, Fnac L’Éclaireur, TechRadar' } ],
  videos:[ { id:'600-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ],
  footer:'6 400 mAh en Europe (7 000 mAh hors Europe). 8 000 nits : pic HDR, certains scénarios. Épaisseur hors bloc photo. Image to Video : quota mensuel.'
},

/* ------------------------------------------------------------------ 600 LITE */
{ id:'600-lite', name:'HONOR 600 Lite', univers:'smartphones', family:'Série N · 600', type:'phone', variant:'lite',
  img:'visuels/600-lite.webp', imgAr:.482, status:'verified',
  price:'399 €', priceNote:'Prix de lancement. ' + PRICE_NOTE, releaseFR:'1er avril 2026', colors:'Sprout Green · Velvet Grey · Velvet Black', os:'MagicOS 10 · Android 16',
  hook:'Le métal, tout en finesse.',
  figures:[ { value:7.34, unit:'mm', label:'Épaisseur, monocoque en métal' }, { value:6520, unit:'mAh', label:'48 h certifiées TÜV Rheinland' }, { value:108, unit:'Mpx', label:'Photo principale' }, { value:180, unit:'g', label:'Poids' } ],
  points:[
    'Faites-le toucher : monocoque en métal, 7,34 mm et 180 g.',
    'Deux jours d’usage : 48 h d’autonomie certifiées TÜV Rheinland, selon l’usage.',
    'Un appui sur le bouton AI Camera et l’appareil photo s’ouvre.',
    'Lisible dehors : écran 6,6″ jusqu’à 6 500 nits en pic. Tactile utilisable sous la pluie.',
    'Six ans de mises à jour, selon la page d’achat honor.com/fr.'
  ],
  alerts:[
    'IP66 seulement : pluie et projections. Ne dites jamais « étanche » et ne parlez pas d’immersion.',
    'Pas de charge sans fil. 45 W avec le chargeur HONOR.',
    'Ne dites pas « aluminium forgé sous vide » ni « première dans l’industrie » : non confirmés.'
  ],
  modules:[
    { id:'600-lite-m1', title:'Le métal à petit prix', screens:[
      { title:'Monocoque en métal', text:'7,34 mm hors module photo, 180 g. Au toucher, on sent la différence.', tip:'Mettez-le dans la main du client avant de parler du prix.' },
      { title:'48 h certifiées', text:'6 520 mAh, autonomie certifiée par TÜV Rheinland, selon l’usage.', tip:'Dites « certifié 48 h », pas « la batterie tient deux jours ».' },
      { title:'Pluie et chutes', text:'IP66, chute de 1,8 m sur marbre lisse en laboratoire HONOR, SGS 5 étoiles chutes et écrasement.', tip:'IP66 : pluie et projections, pas d’immersion.' },
      { title:'IA du quotidien', text:'AI Gomme, AI Sous-titres, AI Synthèse, Entourer pour chercher.', tip:'Montrez Entourer pour chercher sur une photo de produit.' }
    ]}
  ],
  demo:demoPhone({
    e:['« Lisible dehors, même sous la pluie. »','6,6″ AMOLED 1,5K 120 Hz, pic à 6 500 nits. Tactile utilisable sous la pluie.','Le téléphone reste utilisable dans la rue, par tous les temps.'],
    b:['« Deux jours certifiés. »','6 520 mAh, 48 h certifiées TÜV Rheinland selon l’usage. 45 W avec le chargeur HONOR.','Le client part un week-end sans s’inquiéter.'],
    p:['« Une pression, la photo. »','Principal 108 Mpx, bouton AI Camera.','La photo est prise avant que la scène disparaisse.','Appuyez sur le bouton AI Camera, téléphone verrouillé, et prenez une photo.'],
    i:['« Un passant en moins. »','AI Gomme efface un élément ou une personne en un geste.','La photo de vacances est enfin propre.']
  }),
  pitch:{ text:'Faites-le toucher : c’est une monocoque en métal, 7,34 millimètres et 180 grammes. Son autonomie est certifiée 48 heures par TÜV Rheinland. Le bouton AI Camera ouvre l’appareil photo d’une pression, avec un capteur 108 Mpx. L’écran de 6,6 pouces reste lisible dehors. Et il est certifié IP66 contre la pluie.', keywords:['métal','7,34','48 heures','AI Camera','108 Mpx','IP66'] },
  objections:[
    { id:'600-lite-o1', q:'« Il passe sous l’eau ? »', usage:'Il supporte la pluie et les projections du quotidien.', preuve:'IP66 seulement. Pas d’immersion, protection non permanente.', montrer:'Montrez la mention IP66 sur la fiche.' },
    { id:'600-lite-o2', q:'« À ce prix, c’est forcément du plastique. »', usage:'Prenez-le en main : c’est du métal.', preuve:'Monocoque en métal, selon honor.com/fr.', montrer:'Faites toucher le dos et la tranche.' },
    { id:'600-lite-o3', q:'« Il ne tiendra pas la journée. »', usage:'Il tient la journée et le lendemain selon l’usage.', preuve:'48 h certifiées TÜV Rheinland, 6 520 mAh.', montrer:'Ouvrez le menu Batterie.' }
  ],
  quiz:[
    { q:'Quelle certification pour le 600 Lite ?', options:['IP68','IP66','IP69K'], answer:1, explain:'IP66 : pluie et projections d’eau.' },
    { q:'Quelle autonomie certifiée par TÜV Rheinland ?', options:['24 h','48 h','72 h'], answer:1, explain:'48 h. L’autonomie réelle varie selon l’usage.' },
    { q:'Quelle puissance de charge ?', options:['45 W','66 W','80 W'], answer:0, explain:'45 W avec le chargeur et le câble HONOR.' }
  ],
  faq:[
    { id:'600-lite-f1', q:'Le chargeur est-il fourni ?', a:'Les fiches ne le précisent pas. La charge 45 W nécessite le chargeur HONOR.', src:SRC_OP },
    { id:'600-lite-f2', q:'Combien d’années de mises à jour ?', a:'Six ans, selon la page d’achat honor.com/fr.', src:SRC_OP },
    { id:'600-lite-f3', q:'Quels coloris en France ?', a:'Sprout Green, Velvet Grey et Velvet Black. Desert Gold n’est pas proposé en France.', src:SRC_OP },
    { id:'600-lite-f4', q:'Que fait un appui long sur le bouton AI Camera ?', a:'Les sources ne concordent pas : non repris dans la trousse.', src:SRC_OP }
  ],
  specs:[
    V('Écran','6,6″ AMOLED 1,5K 120 Hz, pic 6 500 nits'),
    V('Épaisseur','7,34 mm hors module photo'), V('Poids','180 g'),
    V('Processeur','Dimensity 7100 Elite'),
    V('Photo','Principal 108 Mpx (mode Haute Résolution) · selfie 16 Mpx'),
    V('Batterie','6 520 mAh typique (6 320 mAh nominale), 48 h TÜV Rheinland'),
    V('Recharge','45 W avec chargeur HONOR, pas de charge sans fil'),
    V('Protection IP','IP66'),
    V('Chutes','1,8 m sur marbre lisse (labo HONOR), SGS 5 étoiles'),
    V('Matière','Monocoque en métal'),
    C('Son','Stéréo, +300 % de volume selon HONOR', SRC_OP),
    V('Système','MagicOS 10 · Android 16, 6 ans de mises à jour'),
    C('Prix','399 € au lancement'), C('Sortie France','1er avril 2026')
  ],
  contradictions:[
    { topic:'Matière', a:'« Dare to Be » : monocoque aluminium forgé sous vide, première dans l’industrie.', b:'honor.com/fr : « métal renforcé ». Formulé « monocoque en métal ».' },
    { topic:'Bouton AI Camera', a:'« Dare to Be » : lance Snapchat si on le configure.', b:'Fiches vendeur : communiqué uniquement, non repris. Appui long : « suggestions IA » (honor.com/fr) contre « vidéo » (presse).' },
    { topic:'Autonomie', a:'« Dare to Be » : la batterie tient deux jours.', b:'Fiches vendeur : 48 h certifiées TÜV Rheinland, selon usage.' },
    { topic:'Nom du coloris vert', a:'Communiqué : Light Green.', b:'honor.com/fr : Sprout Green.' }
  ],
  sources:[ HONOR_FR, { label:'Recoupements presse', url:null, note:'honor.com/global, GSMArena, Notebookcheck, Phonandroid, Fnac L’Éclaireur, STUFF Magazine, Darty (en appui)' } ],
  videos:[ { id:'600-lite-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ],
  footer:'6 520 mAh typique (6 320 mAh nominale). 108 Mpx en mode Haute Résolution. 6 500 nits : pic, certaines situations. IP66 : protection non permanente. Chute 1,8 m sur marbre lisse, laboratoire HONOR. 45 W : chargeur HONOR requis.'
},

/* ------------------------------------------------------------------ MAGICPAD4 */
{ id:'magicpad4', name:'HONOR MagicPad4', univers:'tablettes', family:'MagicPad', type:'tablet',
  img:'visuels/magicpad4.webp', imgAr:1.37, status:'confirm',
  price:'Dès 699 €', priceNote:PRICE_NOTE, releaseFR:null,
  hook:'La tablette la plus fine au monde, selon HONOR.',
  figures:[ { value:4.8, unit:'mm', label:'Épaisseur' }, { value:450, unit:'g', label:'Poids' }, { value:12.3, unit:'″', label:'Écran OLED' }, { value:165, unit:'Hz', label:'Fréquence d’affichage' } ],
  points:[
    'Elle se glisse dans un sac sans se faire sentir : 4,8 mm et 450 g.',
    'Un grand écran OLED de 12,3″ à 165 Hz pour les films et le dessin.',
    'Huit haut-parleurs pour un vrai son de film.',
    'Un Smart Keyboard dédié pour travailler comme sur un ordinateur.',
    null
  ],
  alerts:[ 'Toutes les données de ce kit viennent de « Dare to Be » (presse : Presse-citron, Journal du Geek). À vérifier sur honor.com/fr avant usage.' ],
  pitch:{ text:'Elle se glisse dans un sac sans se faire sentir : 4,8 millimètres et 450 grammes, la tablette la plus fine au monde selon HONOR. Son écran OLED de 12,3 pouces à 165 Hz et ses huit haut-parleurs en font un vrai écran de cinéma. Et avec son Smart Keyboard, on travaille comme sur un ordinateur.', keywords:['4,8 millimètres','450 grammes','OLED','huit haut-parleurs','Smart Keyboard'] },
  quiz:[
    { q:'Quelle épaisseur pour la MagicPad4 ?', options:['4,8 mm','6,1 mm','7,8 mm'], answer:0, explain:'4,8 mm, la tablette la plus fine au monde selon HONOR. À confirmer sur honor.com/fr.' },
    { q:'Combien de haut-parleurs ?', options:['4','6','8'], answer:2, explain:'Huit haut-parleurs, selon « Dare to Be ». À confirmer.' }
  ],
  specs:[ C('Écran','OLED 12,3″, 165 Hz'), C('Épaisseur','4,8 mm'), C('Poids','450 g'), C('Son','8 haut-parleurs'), C('Clavier','Smart Keyboard dédié'), C('Prix','Dès 699 €') ],
  contradictions:[ { topic:'Aucune contradiction relevée', a:'Une seule source disponible : « Dare to Be ».', b:'À croiser avec honor.com/fr.' } ],
  sources:[ HONOR_FR, { label:'Trousse « Dare to Be »', url:null, note:'Presse-citron et Journal du Geek (MagicPad 4), menus honor.com/fr du 20/09/2026' } ],
  videos:[ { id:'magicpad4-v1', title:'Chaîne YouTube HONOR France', channel:'@HonorFrance', url:'https://www.youtube.com/@HonorFrance' } ]
},

/* ------------------------------------------------------------------ MAGICBOOK 16 2026 */
{ id:'magicbook-16-2026', name:'HONOR MagicBook 16 2026', univers:'ordinateurs', family:'MagicBook · série N', type:'laptop',
  img:'visuels/magicbook.webp', imgAr:1.443, status:'confirm',
  alerts:[ 'Seule information disponible : le MagicBook 16 2026 fait partie de la série N des MagicBook (menus honor.com/fr du 20/09/2026). Le visuel est celui de l’univers Ordinateurs de « Dare to Be » : modèle à confirmer.' ],
  sources:[ HONOR_FR ]
},

/* ------------------------------------------------------------------ WATCH 6 */
{ id:'watch-6', name:'HONOR Watch 6', univers:'montres', family:'Montres', type:'watch',
  img:'visuels/watch-6.webp', imgAr:.947, status:'confirm',
  price:'249,90 €', priceNote:PRICE_NOTE, releaseFR:'Juin 2026',
  hook:'Jusqu’à 35 jours sans recharge.',
  figures:[ { value:35, unit:'jours', label:'Autonomie maximale' }, { value:17, unit:'jours', label:'Environ, en usage standard' }, { value:null, label:null }, { value:null, label:null } ],
  points:[ 'On oublie le chargeur pendant des semaines : jusqu’à 35 jours, environ 17 jours en usage standard.', null, null, null, null ],
  alerts:[ 'Données issues de « Dare to Be » (Le Big Data, Menow, Blog Nouvelles Technologies). À vérifier sur honor.com/fr.', 'Ne dites jamais « étanche » : indiquez la certification IP une fois vérifiée.' ],
  quiz:[ { q:'Quelle autonomie maximale annonce-t-on pour la Watch 6 ?', options:['7 jours','14 jours','35 jours'], answer:2, explain:'Jusqu’à 35 jours, environ 17 jours en usage standard. À confirmer.' } ],
  specs:[ C('Autonomie','Jusqu’à 35 jours, environ 17 jours en usage standard'), C('Protection IP',null), C('Prix','249,90 €'), C('Sortie','Juin 2026') ],
  sources:[ HONOR_FR, { label:'Trousse « Dare to Be »', url:null, note:'Le Big Data, Menow, Blog Nouvelles Technologies' } ]
},

/* ------------------------------------------------------------------ EARBUDS 4 */
{ id:'earbuds-4', name:'HONOR Earbuds 4', univers:'audio', family:'Earbuds', type:'buds',
  img:'visuels/earbuds-4.webp', imgAr:.984, status:'verified',
  hook:'Le silence quand vous le voulez.',
  figures:[ { value:50, unit:'dB', label:'Réduction de bruit active hybride' }, { value:46, unit:'h', label:'D’autonomie avec le boîtier' }, { value:11, unit:'mm', label:'Haut-parleur principal, plus un de 6 mm' }, { value:null, label:null } ],
  points:[
    'Le bruit du métro disparaît : réduction de bruit active hybride jusqu’à 50 dB.',
    'Une semaine de trajets sans recharger le boîtier : 46 h au total avec le boîtier.',
    'Un son riche : double haut-parleur 11 mm et 6 mm en titane.',
    'Traduction par l’IA, directement dans les écouteurs.',
    null
  ],
  alerts:[ 'Fiche lue sur honor.com/fr le 20/09/2026 par « Dare to Be ». Prix et date de sortie : à reprendre.' ],
  pitch:{ text:'Dans le métro, le bruit disparaît : la réduction de bruit active hybride monte à 50 décibels. Le double haut-parleur 11 et 6 millimètres en titane donne un son riche. Avec le boîtier, vous avez 46 heures d’écoute. Et l’IA traduit vos conversations.', keywords:['50 décibels','titane','46 heures','traduit'] },
  quiz:[ { q:'Quelle autonomie totale avec le boîtier ?', options:['24 h','36 h','46 h'], answer:2, explain:'46 heures avec le boîtier.' }, { q:'Jusqu’à combien de décibels pour la réduction de bruit ?', options:['30 dB','50 dB','70 dB'], answer:1, explain:'Réduction de bruit active hybride jusqu’à 50 dB.' } ],
  specs:[ V('Réduction de bruit','Active hybride, 50 dB', 'honor.com/fr, fiche lue le 20/09/2026'), V('Haut-parleurs','Double, 11 mm + 6 mm en titane', 'honor.com/fr, fiche lue le 20/09/2026'), V('Autonomie','46 h avec le boîtier', 'honor.com/fr, fiche lue le 20/09/2026'), V('IA','Traduction IA', 'honor.com/fr, fiche lue le 20/09/2026'), C('Protection IP',null), C('Prix',null) ],
  sources:[ HONOR_FR, { label:'Trousse « Dare to Be »', url:null, note:'Fiche HONOR Earbuds 4 sur honor.com/fr, lue le 20/09/2026' } ]
},

/* ------------------------------------------------------------------ PASSER CHEZ HONOR */
{ id:'passer-chez-honor', name:'Passer chez HONOR', univers:'services', family:'Services', type:'service', status:'confirm',
  hook:'Changer de téléphone sans rien perdre.',
  figures:[ { value:7, unit:'ans', label:'De mises à jour, série Magic (hors Lite)' }, { value:6, unit:'ans', label:'De mises à jour, série N' }, { value:2, unit:'ans', label:'De garantie sur les reconditionnés' }, { value:null, label:null } ],
  points:[
    'Depuis un iPhone, le transfert se fait d’un geste avec OneTap.',
    'Le téléphone acheté aujourd’hui reçoit des mises à jour pendant des années : 7 ans pour la série Magic hors Lite, 6 ans pour la série N.',
    'Le Magic V6 garde le lien avec l’iPhone et le Mac grâce à l’appli HONOR Connect.',
    'HONOR vend aussi des reconditionnés sur son site, garantis 2 ans.',
    'En France, MagicOS apporte la traduction des appels, la détection des deepfakes en visio et Google Gemini.'
  ],
  alerts:[ 'Durée des mises à jour : sources presse (Huawei Central, Lesmobiles, Menow), en Europe et au Royaume-Uni. À vérifier sur honor.com/fr.', 'Device Clone : aucune information dans les fichiers sources. Ne pas improviser.' ],
  objections:[
    { id:'passer-chez-honor-o1', q:'« Je vais perdre mes photos et mes contacts. »', usage:'Vous transférez vos données au moment de la mise en route.', preuve:'OneTap permet le transfert d’un geste entre un HONOR et un iPhone.', montrer:'Montrez l’écran de transfert au premier démarrage.' },
    { id:'passer-chez-honor-o2', q:'« Il ne sera plus mis à jour dans deux ans. »', usage:'Votre téléphone reste à jour longtemps, et il garde sa valeur à la revente.', preuve:'7 ans sur la série Magic hors Lite, 6 ans sur la série N, en Europe (presse).', montrer:'Renvoyez vers la page du produit sur honor.com/fr.' }
  ],
  specs:[ C('Transfert depuis iPhone','OneTap'), C('Mises à jour série Magic','7 ans, hors Magic Lite (UE et Royaume-Uni)'), C('Mises à jour série N','6 ans'), C('Reconditionnés','Garantie 2 ans'), C('Device Clone',null), C('Garantie et SAV',null) ],
  sources:[ HONOR_FR, { label:'Trousse « Dare to Be »', url:null, note:'Huawei Central, Lesmobiles, Menow ; menus honor.com/fr du 20/09/2026' } ]
}
];

/* Gamme : produits sans kit complet */
const NOTE_CAT = 'Au catalogue honor.com/fr, menus relevés le 20/09/2026';
const GAMME = [
  { name:'HONOR Magic9 Pro Max', univers:'smartphones', type:'phone', status:'announced', img:'visuels/magic9-pro-max.webp', imgAr:.591, note:'Chine depuis le 28/09/2026. Europe annoncée par HONOR, sans date. Partenariat ARRI.' },
  { name:'HONOR Magic9', univers:'smartphones', type:'phone', status:'confirm', img:'visuels/magic9.webp', imgAr:.595, note:'Chine uniquement. Aucune annonce pour la France.' },
  { name:'HONOR Magic9 Super Edition', univers:'smartphones', type:'phone', status:'confirm', img:'visuels/magic9-super-edition.webp', imgAr:.915, note:'Chine uniquement. Aucune annonce pour la France.' },
  { name:'HONOR Robot Phone', univers:'smartphones', type:'phone', status:'announced', img:'visuels/robot-phone.webp', imgAr:.387, note:'Chine depuis le 12/08/2026. Europe annoncée par HONOR, sans date.' },
  { name:'Série 400', univers:'smartphones', type:'phone', status:'confirm', note:'HONOR 400 vendu en reconditionné sur honor.com. Modèles neufs à reprendre.' },
  { name:'Série X', univers:'smartphones', type:'phone', status:'confirm', note:'Modèles à reprendre.' },
  { name:'HONOR MagicPad2', univers:'tablettes', type:'tablet', status:'verified', note:NOTE_CAT },
  { name:'HONOR Pad 10, Pad 9, Pad 8', univers:'tablettes', type:'tablet', status:'verified', note:'Série N. ' + NOTE_CAT },
  { name:'HONOR Pad X9 Max, X9a, X8b, X8a, Kids Edition', univers:'tablettes', type:'tablet', status:'verified', note:'Série X. ' + NOTE_CAT },
  { name:'HONOR MagicBook Art 14 Snapdragon', univers:'ordinateurs', type:'laptop', status:'verified', note:'Série Art. ' + NOTE_CAT },
  { name:'HONOR MagicBook Pro 14 et Pro 16', univers:'ordinateurs', type:'laptop', status:'verified', note:'Série Pro. ' + NOTE_CAT },
  { name:'HONOR Watch X5i, Watch 5, Watch 4', univers:'montres', type:'watch', status:'verified', note:NOTE_CAT },
  { name:'HONOR Band 9', univers:'montres', type:'watch', status:'verified', note:'Bracelet. ' + NOTE_CAT },
  { name:'HONOR Earbuds Open', univers:'audio', type:'buds', status:'verified', note:'Modèle ouvert. ' + NOTE_CAT },
  { name:'HONOR Earbuds X6, Earbuds 3 Pro, Earbuds X5', univers:'audio', type:'buds', status:'verified', note:NOTE_CAT },
  { name:'HONOR CHOICE Earbuds Clip, Earbuds X8i', univers:'audio', type:'buds', status:'verified', note:'Gamme partenaire HONOR CHOICE. ' + NOTE_CAT },
  { name:'HONOR CHOICE Outdoor Speaker, Headphones Lite', univers:'audio', type:'buds', status:'verified', note:'Gamme partenaire HONOR CHOICE. ' + NOTE_CAT },
  { name:'MagicOS', univers:'services', type:'service', status:'confirm', note:'MagicOS 10 en France. MagicOS 11 présenté le 15/09/2026 en Chine, déploiement France à confirmer.' },
  { name:'IA HONOR', univers:'services', type:'service', status:'confirm', note:'Traduction des appels, détection des deepfakes en visio, Google Gemini intégré.' },
  { name:'Device Clone', univers:'services', type:'service', status:'confirm', note:'Aucune information dans les fichiers sources.' },
  { name:'HONOR Connect', univers:'services', type:'service', status:'verified', note:'Appli requise pour les fonctions iPhone et Mac du Magic V6.' },
  { name:'Garantie et SAV', univers:'services', type:'service', status:'confirm', note:'Reconditionnés garantis 2 ans. Le reste est à reprendre.' }
];
