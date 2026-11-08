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
    [sources.porter,sources.ajzen,sources.aaker,sources.keller,sources.servuction,sources.sd,sources.lemon,sources.effectuation,sources.kimes]
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
    [sources.porter,sources.ajzen,sources.keller,sources.servuction,sources.lemon,sources.sd,sources.crm,sources.effectuation,sources.kimes,sources.webster,sources.experience]
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
