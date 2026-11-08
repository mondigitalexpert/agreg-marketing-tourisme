import { authorsCorrections } from './corrections'
const p=(label,title,intro,keyPoints,sections,sources,extra={})=>({label,title,intro,keyPoints,sections,sources,...extra})

const sources = {
  ajzen:{type:'Académique',name:'Ajzen — The Theory of Planned Behavior (1991)',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T'},
  cct:{type:'Académique',name:'Arnould & Thompson — Consumer Culture Theory (2005)',url:'https://doi.org/10.1086/426626'},
  keller:{type:'Académique',name:'Keller — Customer-Based Brand Equity (1993)',url:'https://doi.org/10.1177/002224299305700101'},
  aaker:{type:'Ouvrage',name:'Aaker — Managing Brand Equity (1991)',url:'https://www.simonandschuster.com/books/Managing-Brand-Equity/David-A-Aaker/9780029001011'},
  lemon:{type:'Académique',name:'Lemon & Verhoef — Customer Experience Throughout the Customer Journey (2016)',url:'https://doi.org/10.1509/jm.15.0420'},
  sd:{type:'Académique',name:'Vargo & Lusch — Evolving to a New Dominant Logic for Marketing (2004)',url:'https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036'},
  servuction:{type:'Académique',name:'BnF — Eiglier & Langeard, Servuction (1987)',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n'},
  porter:{type:'Académique',name:'Porter — The Five Competitive Forces That Shape Strategy',url:'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy'},
  crm:{type:'Académique',name:'Payne & Frow — A Strategic Framework for CRM (2005)',url:'https://doi.org/10.1509/jmkg.2005.69.4.167'},
  effectuation:{type:'Académique',name:'Sarasvathy — Causation and Effectuation (2001)',url:'https://journals.aom.org/doi/10.5465/AMR.2001.4378020'},
  experience:{type:'Académique',name:'Pine & Gilmore — Welcome to the Experience Economy (1998)',url:'https://hbr.org/1998/07/welcome-to-the-experience-economy'},
  kimes:{type:'Académique',name:'Kimes — Yield Management: A Tool for Capacity-Constrained Service Firms',url:'https://ecommons.cornell.edu/entities/publication/08225911-1a4a-46d7-9c9d-849458fab0a9'},
  webster:{type:'Académique',name:'Webster & Wind — Organizational Buying Behavior',url:'https://journals.sagepub.com/doi/10.1177/002224297203600204'},
  digital:{type:'Académique',name:'Kannan & Li — Digital marketing framework (2017)',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006'}
}


export const authorProfiles = {
  porter:{
    name:'Michael E. Porter',
    years:'Stratégie et concurrence',
    icon:'🏭',
    oneLine:'Analyser la structure concurrentielle d’un secteur et comprendre où se situe le pouvoir économique.',
    concepts:['Cinq forces concurrentielles','Chaîne de valeur','Avantage concurrentiel','Stratégies génériques'],
    useCases:['Diagnostic sectoriel','Pouvoir des OTA ou distributeurs','Menace des substituts','Barrières à l’entrée'],
    limits:'Porter éclaire surtout la structure concurrentielle. Le modèle ne suffit pas pour expliquer à lui seul les comportements clients, la culture de consommation ou les dynamiques internes d’une organisation.',
    exam:'Dans une copie : nommer la force pertinente, montrer le mécanisme et relier l’analyse à une conséquence stratégique. Éviter de réciter les cinq forces sans hiérarchisation.',
    links:[
      {label:'Biographie — Harvard Business School',url:'https://www.isc.hbs.edu/about-michael-porter/biography/Pages/default.aspx',type:'Institutionnel'},
      {label:'Michael Porter — Wikipédia FR',url:'https://fr.wikipedia.org/wiki/Michael_Porter',type:'Wikipédia'},
      {label:'The Five Competitive Forces That Shape Strategy — HBR',url:'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy',type:'Article'}
    ]
  },
  ajzen:{
    name:'Icek Ajzen',
    years:'Comportement et intention',
    icon:'🧭',
    oneLine:'Expliquer comment attitudes, normes subjectives et contrôle perçu contribuent à former une intention comportementale.',
    concepts:['Theory of Planned Behavior','Attitude','Norme subjective','Contrôle comportemental perçu','Intention'],
    useCases:['Adoption d’un service','Intention de réservation','Comportement durable','Changement de comportement'],
    limits:'Le modèle explique surtout l’intention et certains déterminants du comportement. Il ne remplace pas l’analyse des émotions, habitudes, contraintes matérielles ou dimensions culturelles.',
    exam:'Très utile quand le sujet demande pourquoi une attitude favorable ne se transforme pas en comportement. Toujours distinguer intention et action effective.',
    links:[
      {label:'Profil — UMass Amherst',url:'https://www.umass.edu/natural-sciences/about/directory/icek-aizen',type:'Institutionnel'},
      {label:'The Theory of Planned Behavior (1991)',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T',type:'Article fondateur'}
    ]
  },
  aaker:{
    name:'David A. Aaker',
    years:'Capital et architecture de marque',
    icon:'🏷️',
    oneLine:'Penser la marque comme un actif créateur de valeur, à travers notoriété, qualité perçue, associations et fidélité.',
    concepts:['Brand equity','Notoriété','Qualité perçue','Associations de marque','Fidélité','Portefeuille de marques'],
    useCases:['Diagnostic de marque','Architecture multimarque','Extension de marque','Différenciation'],
    limits:'Les dimensions d’Aaker constituent une grille de gestion. Elles ne mesurent pas automatiquement la valeur financière d’une marque et doivent être opérationnalisées selon le cas.',
    exam:'À mobiliser pour structurer un diagnostic de capital de marque, notamment quand plusieurs dimensions de la marque doivent être distinguées.',
    links:[
      {label:'Profil — Berkeley Haas',url:'https://haas.berkeley.edu/faculty/david-a-aaker/',type:'Institutionnel'},
      {label:'David Aaker — Wikipédia',url:'https://en.wikipedia.org/wiki/David_Aaker',type:'Wikipédia'},
      {label:'Managing Brand Equity — éditeur',url:'https://www.simonandschuster.com/books/Managing-Brand-Equity/David-A-Aaker/9780029001011',type:'Ouvrage'}
    ]
  },
  keller:{
    name:'Kevin Lane Keller',
    years:'Customer-Based Brand Equity',
    icon:'🧠',
    oneLine:'Comprendre comment la connaissance de la marque modifie la réponse du consommateur aux actions marketing.',
    concepts:['CBBE','Brand awareness','Brand image','Associations fortes, favorables et uniques','Résonance de marque'],
    useCases:['Image de marque','Positionnement','Extension de marque','Construction d’une marque forte'],
    limits:'Le cadre est centré sur la réponse du consommateur. Il doit être complété lorsqu’on analyse finance, organisation, distribution ou pouvoir concurrentiel.',
    exam:'Utile pour distinguer notoriété et image et montrer que le capital de marque provient de la structure des connaissances en mémoire.',
    links:[
      {label:'Biographie — Tuck School of Business',url:'https://faculty.tuck.dartmouth.edu/images/uploads/faculty/kevin-lane-keller/Keller-bio-short.pdf',type:'Institutionnel'},
      {label:'Kevin Lane Keller — Wikipédia',url:'https://en.wikipedia.org/wiki/Kevin_Lane_Keller',type:'Wikipédia'},
      {label:'Customer-Based Brand Equity (1993)',url:'https://doi.org/10.1177/002224299305700101',type:'Article fondateur'}
    ]
  },
  'eiglier-langeard':{
    name:'Pierre Eiglier & Éric Langeard',
    years:'Servuction',
    icon:'🤝',
    oneLine:'Analyser le service comme un système de production où client, personnel, support physique et organisation interagissent.',
    concepts:['Servuction','Personnel en contact','Support physique','Client participant','Back-office'],
    useCases:['Hôtellerie','Restauration','Accueil','Parcours de service','Défaillance de service'],
    limits:'La servuction décrit très bien le système de production du service mais doit être complétée par des cadres sur expérience, relation, valeur ou comportement.',
    exam:'Très pertinente pour localiser précisément où se crée ou se détruit la valeur dans un service.',
    links:[
      {label:'Servuction — notice BnF',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n',type:'Référence bibliographique'}
    ]
  },
  'vargo-lusch':{
    name:'Stephen L. Vargo & Robert F. Lusch',
    years:'Service-Dominant Logic',
    icon:'🔄',
    oneLine:'Déplacer l’analyse de la vente d’un produit vers l’intégration de ressources et la création de valeur dans l’usage.',
    concepts:['Service-Dominant Logic','Value-in-use','Co-création','Intégration de ressources','Écosystèmes de service'],
    useCases:['Services','Plateformes','Expérience','Co-création','Écosystèmes'],
    limits:'Le cadre est très général et conceptuel. Pour une recommandation opérationnelle, il faut souvent le compléter par des outils plus concrets.',
    exam:'À utiliser pour montrer que la valeur n’est pas simplement “livrée” par l’entreprise mais se réalise dans l’usage et les interactions.',
    links:[
      {label:'Stephen Vargo — Wikipédia',url:'https://en.wikipedia.org/wiki/Stephen_Vargo',type:'Wikipédia'},
      {label:'Evolving to a New Dominant Logic for Marketing (2004)',url:'https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036',type:'Article fondateur'}
    ]
  },
  'lemon-verhoef':{
    name:'Katherine N. Lemon & Peter C. Verhoef',
    years:'Customer journey et expérience',
    icon:'🛤️',
    oneLine:'Analyser l’expérience client dans le temps, à travers de multiples touchpoints contrôlés ou non par la marque.',
    concepts:['Customer journey','Touchpoints','Expérience client','Phases pré-achat / achat / post-achat'],
    useCases:['Omnicanal','Parcours digital','Hôtellerie','Réservation','Fidélisation'],
    limits:'Cartographier un parcours ne suffit pas : il faut ensuite mesurer les frictions, prioriser les moments critiques et relier l’expérience à la performance.',
    exam:'Très utile pour ordonner une analyse de parcours et distinguer les points de contact propres à la marque, aux partenaires et aux clients.',
    links:[
      {label:'Katherine Lemon — profil auteur',url:'https://www.sciencedirect.com/author/6603914972/katherine-n-lemon',type:'Académique'},
      {label:'Peter Verhoef — Université de Groningen',url:'https://www.rug.nl/staff/p.c.verhoef/',type:'Institutionnel'},
      {label:'Understanding Customer Experience Throughout the Customer Journey',url:'https://doi.org/10.1509/jm.15.0420',type:'Article'}
    ]
  },
  sarasvathy:{
    name:'Saras D. Sarasvathy',
    years:'Effectuation',
    icon:'🚀',
    oneLine:'Comprendre l’action entrepreneuriale en forte incertitude à partir des moyens disponibles et du contrôle plutôt que de la prédiction.',
    concepts:['Effectuation','Affordable loss','Bird in hand','Crazy quilt','Lemonade','Pilot in the plane'],
    useCases:['Start-up','Innovation','Nouveau marché','Travel tech','Projet entrepreneurial incertain'],
    limits:'L’effectuation n’est ni l’improvisation ni le refus de toute planification. Elle est surtout pertinente lorsque l’incertitude est forte.',
    exam:'À mobiliser pour analyser une démarche entrepreneuriale quand le marché et les objectifs ne sont pas encore stabilisés.',
    links:[
      {label:'Profil — UVA Darden',url:'https://www.darden.virginia.edu/faculty-research/directory/saras-d-sarasvathy',type:'Institutionnel'},
      {label:'Saras Sarasvathy — Wikipédia',url:'https://en.wikipedia.org/wiki/Saras_Sarasvathy',type:'Wikipédia'},
      {label:'Causation and Effectuation (2001)',url:'https://journals.aom.org/doi/10.5465/AMR.2001.4378020',type:'Article fondateur'}
    ]
  },
  kimes:{
    name:'Sheryl E. Kimes',
    years:'Revenue management et capacité',
    icon:'📈',
    oneLine:'Piloter prix et disponibilité dans des services à capacité contrainte et inventaire périssable.',
    concepts:['Revenue management','Yield management','Capacité périssable','Pricing','Perception d’équité'],
    useCases:['Hôtellerie','Restauration','Transport','Loisirs','Billetterie'],
    limits:'Le revenue management doit être articulé à la perception de justice, au positionnement et à la relation client ; maximiser le revenu à court terme peut avoir des effets relationnels négatifs.',
    exam:'Référence prioritaire pour un cas qui combine demande variable, capacité fixe, réservation et tarification dynamique.',
    links:[
      {label:'Profil — Cornell',url:'https://business.cornell.edu/profiles/sek6/',type:'Institutionnel'},
      {label:'Yield Management: A Tool for Capacity-Constrained Service Firms',url:'https://ecommons.cornell.edu/entities/publication/08225911-1a4a-46d7-9c9d-849458fab0a9',type:'Article'}
    ]
  },
  'webster-wind':{
    name:'Frederick E. Webster Jr. & Yoram Wind',
    years:'Achat organisationnel BtoB',
    icon:'🏢',
    oneLine:'Analyser l’achat BtoB comme une décision organisationnelle influencée par l’environnement, l’organisation, le groupe et les individus.',
    concepts:['Organizational buying behavior','Centre d’achat','Influences environnementales','Influences organisationnelles','Influences interpersonnelles et individuelles'],
    useCases:['BtoB','Achats complexes','Comptes clés','Séminaires entreprise','Solutions professionnelles'],
    limits:'Le modèle structure les influences mais ne remplace pas l’analyse concrète des rôles, pouvoirs et critères dans l’organisation étudiée.',
    exam:'À mobiliser quand plusieurs acteurs participent à la décision d’achat et que le comportement du consommateur individuel ne suffit plus.',
    links:[
      {label:'Article original — Journal of Marketing',url:'https://journals.sagepub.com/doi/10.1177/002224297203600204',type:'Article fondateur'},
      {label:'Version PDF — Wharton',url:'https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/7215_A_General_Model_for_Understanding.pdf',type:'Académique'}
    ]
  },
  'pine-gilmore':{
    name:'B. Joseph Pine II & James H. Gilmore',
    years:'Experience Economy',
    icon:'✨',
    oneLine:'Penser l’expérience comme une forme de valeur distincte lorsque biens et services ne suffisent plus à différencier l’offre.',
    concepts:['Experience Economy','Mise en scène','Expérience mémorable','Temps et attention du client'],
    useCases:['Tourisme','Loisirs','Luxe','Événementiel','Retail expérientiel'],
    limits:'Toutes les prestations n’ont pas besoin d’être théâtralisées. Une expérience mémorable n’exonère ni de la qualité fonctionnelle ni de la valeur économique.',
    exam:'Utile pour analyser la différenciation par l’expérience, notamment dans le tourisme et les loisirs.',
    links:[
      {label:'Welcome to the Experience Economy — HBR',url:'https://hbr.org/1998/07/welcome-to-the-experience-economy',type:'Article fondateur'},
      {label:'B. Joseph Pine II — biographie',url:'https://www.conference-board.org/bio/joseph-pine',type:'Biographie'}
    ]
  },
  'payne-frow':{
    name:'Adrian Payne & Pennie Frow',
    years:'CRM stratégique',
    icon:'❤️',
    oneLine:'Concevoir le CRM comme un processus stratégique de création de valeur et d’intégration multicanale, pas comme un simple logiciel.',
    concepts:['CRM stratégique','Création de valeur','Intégration multicanale','Gestion de l’information','Évaluation de la performance'],
    useCases:['Fidélisation','CRM hôtelier','Programme relationnel','Omnicanal','Valeur client'],
    limits:'Le cadre organise les processus CRM mais doit être complété par des indicateurs adaptés, une gouvernance de la donnée et le respect du cadre juridique.',
    exam:'Pertinent lorsque le cas porte sur la connaissance client, la relation multicanale ou l’organisation d’un programme CRM.',
    links:[
      {label:'A Strategic Framework for Customer Relationship Management',url:'https://doi.org/10.1509/jmkg.2005.69.4.167',type:'Article fondateur'}
    ]
  },
  'arnould-thompson':{
    name:'Eric J. Arnould & Craig J. Thompson',
    years:'Consumer Culture Theory',
    icon:'🌍',
    oneLine:'Analyser la consommation comme pratique culturelle, identitaire, sociale et symbolique, au-delà du calcul individuel.',
    concepts:['Consumer Culture Theory','Identité','Cultures de marché','Communautés de consommation','Idéologies de marché'],
    useCases:['Luxe','Tourisme identitaire','Communautés','Consommation symbolique','Expérience'],
    limits:'La CCT regroupe plusieurs traditions de recherche ; ce n’est pas un modèle unique à appliquer mécaniquement.',
    exam:'À utiliser lorsque le cas implique identité, appartenance, symboles, communautés ou significations culturelles.',
    links:[
      {label:'Consumer Culture Theory (2005)',url:'https://doi.org/10.1086/426626',type:'Article fondateur'}
    ]
  },
  'kannan-li':{
    name:'P. K. Kannan & Hongshuang “Alice” Li',
    years:'Marketing digital',
    icon:'📱',
    oneLine:'Structurer l’impact des technologies numériques sur les processus marketing, les interactions et la création de valeur.',
    concepts:['Digital marketing framework','Touchpoints numériques','Données','Plateformes','Parcours'],
    useCases:['Marketing digital','Acquisition','Plateformes','Données','Transformation du parcours'],
    limits:'Le cadre est transversal et doit être décliné en leviers, données et KPI spécifiques au cas étudié.',
    exam:'Référence utile pour montrer que le digital reconfigure plusieurs étapes du marketing et ne constitue pas seulement un canal de communication.',
    links:[
      {label:'Digital marketing: A framework, review and research agenda',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006',type:'Article'}
    ]
  }
}

export const essentialAuthorKeys = [
  'porter','ajzen','aaker','keller','eiglier-langeard','vargo-lusch','lemon-verhoef',
  'sarasvathy','kimes','webster-wind','pine-gilmore','payne-frow','arnould-thompson','kannan-li'
]

export const authorsPages = {
  'auteurs|Auteurs incontournables': p(
    'Références utiles',
    'Les auteurs à savoir mobiliser',
    'L’objectif n’est pas de réciter une galerie d’auteurs. Une référence est utile lorsqu’elle éclaire précisément un problème, aide à structurer l’analyse ou justifie une recommandation.',
    [
      'Porter : structure concurrentielle et forces qui déterminent l’attractivité d’un secteur.',
      'Ajzen : intention comportementale, attitudes, normes sociales et contrôle perçu.',
      'Aaker et Keller : capital de marque et construction de valeur autour de la marque.',
      'Eiglier & Langeard : servuction et système de production du service.',
      'Vargo & Lusch : Service-Dominant Logic et co-création de valeur.',
      'Lemon & Verhoef : parcours client et expérience à travers plusieurs points de contact.',
      'Sarasvathy : effectuation dans les situations entrepreneuriales incertaines.',
      'Kimes : revenue management dans les services à capacité contrainte.'
    ],
    [
      {heading:'Règle d’usage',text:'Dans une copie : nom de l’auteur + concept + mécanisme + application au cas. Si l’auteur n’apporte rien à l’analyse, ne pas le citer.'},
      {heading:'Exemple',text:'“Le problème ne relève pas seulement du prix. En mobilisant Ajzen, on peut interroger l’intention d’achat au regard des attitudes, des normes subjectives et du contrôle perçu.” La théorie sert alors à ouvrir l’analyse.'}
    ],
    [sources.porter,sources.ajzen,sources.aaker,sources.keller,sources.servuction,sources.sd,sources.lemon,sources.effectuation,sources.kimes],
    {authorKeys:essentialAuthorKeys}
  ),

  'auteurs|Modèles marketing': p(
    'Boîte à outils',
    'Les modèles : choisir avant d’appliquer',
    'Un modèle est un instrument de lecture. Il simplifie la réalité pour répondre à une question précise. Il faut donc choisir le modèle en fonction du problème, et non parce qu’il est connu.',
    [
      'PESTEL : structurer les facteurs macro-environnementaux.',
      '5 forces de Porter : analyser la structure concurrentielle d’un secteur.',
      'SCP : segmenter, cibler puis positionner.',
      'Théorie du comportement planifié : comprendre une intention comportementale.',
      'CBBE / capital de marque : analyser la valeur créée par la connaissance et les associations de marque.',
      'Servuction / 7P : analyser la production et le marketing d’un service.',
      'Customer Journey : suivre l’expérience dans le temps et entre points de contact.',
      'Business Model Canvas / effectuation : structurer un modèle économique ou une démarche entrepreneuriale.',
      'Revenue management : piloter une capacité périssable face à une demande variable.'
    ],
    [
      {heading:'Erreur classique',text:'Empiler SWOT, PESTEL, Porter et BCG dans une même réponse n’améliore pas l’analyse. Deux outils bien choisis et exploités valent mieux qu’une collection de matrices.'},
      {heading:'Exercice',text:'Pour chacun de ces problèmes — baisse de conversion, nouvelle destination, dépendance OTA, lancement de start-up, image de marque — choisis un modèle et explique pourquoi.'}
    ],
    [sources.porter,sources.ajzen,sources.keller,sources.servuction,sources.lemon,sources.effectuation,sources.kimes]
  ),

  'auteurs|Définitions': p(
    'Lexique raisonné',
    'Définitions à connaître et à savoir contextualiser',
    'Une définition de concours doit être concise, précise et utile à la suite du raisonnement. Elle doit éviter les formules vagues et permettre ensuite de distinguer des concepts proches.',
    [
      'Marché : ensemble des échanges actuels ou potentiels autour d’une catégorie d’offre, dans un périmètre défini.',
      'Segment : groupe de clients présentant des caractéristiques ou réponses suffisamment homogènes pour justifier une approche spécifique.',
      'Positionnement : place distinctive que l’on cherche à occuper dans l’esprit d’une cible relativement aux alternatives.',
      'Valeur perçue : appréciation globale des bénéfices reçus relativement aux sacrifices consentis.',
      'Capital de marque : valeur ajoutée créée par la marque dans les perceptions et comportements.',
      'Expérience client : réponses cognitives, émotionnelles, sensorielles et comportementales résultant des interactions avec l’offre et ses points de contact.',
      'Fidélité : relation durable se traduisant par une préférence et/ou des comportements répétés, sans se réduire à la satisfaction.',
      'Omnicanal : coordination intégrée des canaux et points de contact pour permettre une expérience continue.',
      'Conversion : réalisation d’une action cible mesurable, définie avant l’analyse.',
      'RevPAR : revenu hébergement par chambre disponible ; il peut être calculé par prix moyen × taux d’occupation.'
    ],
    [
      {heading:'Méthode',text:'Pour une notion ambiguë, ajouter immédiatement une distinction : satisfaction ≠ fidélité ; multicanal ≠ omnicanal ; prix ≠ valeur ; image ≠ identité ; fréquentation ≠ rentabilité.'}
    ],
    [sources.keller,sources.lemon,sources.crm,sources.kimes]
  ),

  'auteurs|Théories contemporaines': p(
    'Approfondissement',
    'Théories contemporaines utiles en marketing',
    'Les sujets récents favorisent les cadres capables d’expliquer expérience, digital, culture, relation, services et entrepreneuriat. Ils doivent compléter — et non remplacer — les fondamentaux.',
    [
      'Consumer Culture Theory : consommation comme pratique culturelle, identitaire et sociale.',
      'Service-Dominant Logic : le service et l’intégration de ressources deviennent centraux dans la création de valeur.',
      'Customer Journey : l’expérience se construit sur un ensemble de points de contact, contrôlés ou non par la marque.',
      'Digital marketing framework : technologies numériques, données et plateformes reconfigurent les processus marketing.',
      'Effectuation : en incertitude, l’entrepreneur part des moyens disponibles et construit des options avec les parties prenantes.',
      'Co-création : le client peut participer à la création de valeur et à l’expérience plutôt qu’être simple récepteur.'
    ],
    [
      {heading:'À éviter',text:'“Contemporain” ne veut pas dire “plus vrai”. Chaque cadre a un domaine d’application, des hypothèses et des limites.'},
      {heading:'Tourisme',text:'La co-création, l’expérience et le parcours client sont particulièrement adaptés au tourisme, où plusieurs organisations et le voyageur lui-même participent à la prestation.'}
    ],
    [sources.cct,sources.sd,sources.lemon,sources.digital,sources.effectuation]
  ),

  'auteurs|Quel auteur pour quoi ?': p(
    'Mémo concours',
    'Quel auteur mobiliser selon le problème ?',
    'Cette fiche est un raccourci d’orientation. Elle ne dispense pas de connaître le concept ni de vérifier qu’il correspond réellement au cas.',
    [
      'Concurrence sectorielle → Porter.',
      'Intention, adoption, comportement → Ajzen.',
      'Marque, associations, notoriété → Aaker / Keller.',
      'Service, production et interaction → Eiglier & Langeard.',
      'Expérience et points de contact → Lemon & Verhoef.',
      'Service comme logique de valeur → Vargo & Lusch.',
      'CRM et relation multicanale → Payne & Frow.',
      'Entrepreneuriat en incertitude → Sarasvathy.',
      'Capacité périssable et prix dynamique → Kimes.',
      'Achat organisationnel BtoB → Webster & Wind.',
      'Expérience mémorable → Pine & Gilmore.'
    ],
    [
      {heading:'Test rapide',text:'Si tu ne peux pas expliquer en une phrase ce que l’auteur permet de comprendre dans le cas, ne l’utilise pas.'}
    ],
    [sources.porter,sources.ajzen,sources.keller,sources.servuction,sources.lemon,sources.sd,sources.crm,sources.effectuation,sources.kimes,sources.webster,sources.experience],
    {authorKeys:essentialAuthorKeys}
  ),

  'auteurs|Flashcards': p(
    'Mémorisation',
    'Flashcards — auteurs et concepts',
    'Clique mentalement sur la réponse avant de la lire : la récupération active est plus utile que la simple relecture.',
    [],
    [],
    [sources.porter,sources.ajzen,sources.keller,sources.servuction,sources.lemon,sources.effectuation,sources.kimes],
    {flashcards:[
      {front:'Porter',back:'Cinq forces concurrentielles : rivalité, entrants, substituts, pouvoir des fournisseurs, pouvoir des clients.'},
      {front:'Ajzen',back:'Théorie du comportement planifié : attitude, norme subjective et contrôle perçu contribuent à l’intention.'},
      {front:'Keller',back:'Customer-Based Brand Equity : la connaissance de la marque modifie la réponse du consommateur au marketing.'},
      {front:'Aaker',back:'Capital de marque : notoriété, fidélité, qualité perçue et associations de marque, notamment.'},
      {front:'Eiglier & Langeard',back:'Servuction : système de production du service impliquant client, personnel, support et organisation.'},
      {front:'Vargo & Lusch',back:'Service-Dominant Logic : service, ressources immatérielles et co-création de valeur.'},
      {front:'Lemon & Verhoef',back:'Expérience client à travers le customer journey et de multiples points de contact dans le temps.'},
      {front:'Payne & Frow',back:'CRM stratégique : stratégie, création de valeur, intégration multicanale, information et mesure.'},
      {front:'Sarasvathy',back:'Effectuation : agir à partir des moyens disponibles en situation d’incertitude.'},
      {front:'Kimes',back:'Revenue / yield management pour les services à capacité contrainte et inventaire périssable.'},
      {front:'Webster & Wind',back:'Achat organisationnel BtoB et influences environnementales, organisationnelles, groupales et individuelles.'},
      {front:'Pine & Gilmore',back:'Experience Economy : l’expérience comme niveau de différenciation au-delà du produit et du service.'}
    ]}
  ),

  'auteurs|Auteur ↔ Concept': p(
    'Quiz',
    'Associer rapidement auteur et concept',
    'L’objectif est de reconnaître la référence juste sans hésiter, puis de savoir expliquer son usage.',
    [],
    [],
    [sources.porter,sources.ajzen,sources.servuction,sources.lemon,sources.effectuation,sources.kimes],
    {quiz:[
      {q:'Qui associer au concept de servuction ?',choices:['Porter','Eiglier & Langeard','Keller','Sarasvathy'],answer:1,explanation:'La servuction a été formalisée par Pierre Eiglier et Éric Langeard.'},
      {q:'Quel auteur mobiliser pour l’intention comportementale ?',choices:['Ajzen','Aaker','Kimes','Pine'],answer:0,explanation:'Ajzen formalise la théorie du comportement planifié.'},
      {q:'Qui mobiliser pour le customer journey ?',choices:['Webster & Wind','Lemon & Verhoef','Porter','Rogers'],answer:1,explanation:'Lemon & Verhoef analysent l’expérience client à travers le parcours et les touchpoints.'},
      {q:'L’effectuation est associée à :',choices:['Sarasvathy','Keller','Langeard','Kimes'],answer:0,explanation:'Saras Sarasvathy a développé le cadre effectual.'},
      {q:'Quel auteur est particulièrement utile pour une capacité hôtelière périssable ?',choices:['Aaker','Kimes','Ajzen','Webster'],answer:1,explanation:'Sheryl Kimes a appliqué le yield/revenue management aux services à capacité contrainte.'},
      {q:'Les cinq forces concurrentielles sont associées à :',choices:['Porter','Payne','Vargo','Oliver'],answer:0,explanation:'Michael Porter.'}
    ]}
  ),

  'auteurs|Choisir le bon modèle': p(
    'Quiz raisonné',
    'Quel modèle pour quel problème ?',
    'Le bon réflexe consiste à partir de la question managériale, puis à choisir un cadre qui permet de l’éclairer.',
    [],
    [],
    [sources.porter,sources.ajzen,sources.lemon,sources.effectuation,sources.kimes],
    {quiz:[
      {q:'Une destination veut comprendre pourquoi une campagne connue ne déclenche pas de réservation. Quel cadre est le plus pertinent ?',choices:['5 forces de Porter','Théorie du comportement planifié','BCG','Business Model Canvas'],answer:1,explanation:'Le problème porte sur intention/comportement, pas sur structure concurrentielle ou portefeuille.'},
      {q:'Un hôtel veut comprendre où se dégrade l’expérience entre recherche, réservation, arrivée et séjour.',choices:['Customer Journey','5 forces','Cycle de vie','Ansoff'],answer:0,explanation:'Le customer journey permet de cartographier les touchpoints dans le temps.'},
      {q:'Une start-up tourisme n’a pas encore de marché stabilisé et doit avancer avec des ressources limitées.',choices:['Effectuation','SERVQUAL','CBBE','Porter uniquement'],answer:0,explanation:'L’effectuation est conçue pour des contextes de forte incertitude entrepreneuriale.'},
      {q:'Un hôtel cherche à optimiser prix et disponibilité d’une capacité périssable.',choices:['AIDA','Revenue management','CCT','BCG'],answer:1,explanation:'Le revenue management traite directement ce problème.'},
      {q:'Une marque veut comprendre comment sa notoriété et ses associations influencent la réponse des clients.',choices:['CBBE','PESTEL','Effectuation','SERVQUAL'],answer:0,explanation:'Le Customer-Based Brand Equity de Keller correspond à la question.'}
    ]}
  )
}


Object.entries(authorsCorrections).forEach(([key,corrections])=>{
  if(authorsPages[key]) authorsPages[key].corrections=corrections
})
