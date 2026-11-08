const OFFICIAL = {type:'Officiel',name:'Programme 2027 — Agrégation externe économie-gestion, option C Marketing',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'}
const JURY = {type:'Officiel',name:'Rapport du jury externe économie-gestion 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'}
const p=(label,title,intro,keyPoints,sections,sources)=>({label,title,intro,keyPoints,sections,sources:[OFFICIAL,...sources]})

export const marketingPages = {
  'cours|Marché & environnement': p(
    'Cours essentiel',
    'Comprendre le marché et son environnement',
    'L’analyse du marché vise à transformer des informations dispersées en diagnostic : structure de l’offre, demande, concurrence, tendances et contraintes de l’environnement.',
    [
      'Combiner analyse macro-environnementale et analyse concurrentielle : une tendance n’a d’intérêt que si elle modifie les opportunités, menaces ou rapports de force.',
      'Distinguer marché générique, marché principal, produits substituts et marchés complémentaires selon le problème étudié.',
      'Mesurer l’offre avec des indicateurs pertinents : parts de marché, croissance, concentration, capacité, prix, distribution et performances.',
      'Analyser la demande par volumes, valeur, fréquence, profils, usages, motivations, freins et processus de décision.',
      'La veille doit être organisée, datée et sourcée ; une information récente ne devient pas automatiquement une tendance durable.'
    ],
    [
      {heading:'Outils à mobiliser',text:'PESTEL peut structurer l’environnement ; les cinq forces de Porter aident à analyser la structure concurrentielle. SWOT vient ensuite comme synthèse du diagnostic, et non comme substitut à l’analyse.'},
      {heading:'Application tourisme',text:'Pour une destination ou un hôtel, croiser fréquentation, origine de clientèle, saisonnalité, capacité, taux d’occupation, concurrence des plateformes, mobilité et contexte économique.'},
      {heading:'Exercice',text:'Choisis un marché touristique et formule cinq faits sourcés, trois interprétations et deux hypothèses. L’objectif est de ne jamais confondre ces trois niveaux.'}
    ],
    [
      {type:'Académique',name:'Porter — The Five Competitive Forces That Shape Strategy',url:'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy'},
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels, données 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'},
      JURY
    ]
  ),

  'cours|Comportement du consommateur': p(
    'Cours essentiel',
    'Comprendre le comportement du consommateur',
    'Le consommateur ne décide pas uniquement à partir du prix ou de caractéristiques objectives. Attitudes, normes sociales, contrôle perçu, émotions, culture, expérience et contexte orientent le choix.',
    [
      'Étudier le processus de décision : reconnaissance du besoin, recherche d’information, évaluation, choix, expérience et comportements post-achat.',
      'La théorie du comportement planifié d’Ajzen relie intention, attitude, normes subjectives et contrôle comportemental perçu.',
      'La Consumer Culture Theory étudie les dimensions socioculturelles, symboliques et idéologiques de la consommation.',
      'Les heuristiques et biais montrent que la décision réelle n’est pas toujours un calcul parfaitement rationnel.',
      'En tourisme, le risque perçu, les avis, l’imaginaire de destination et l’expérience anticipée sont particulièrement importants.'
    ],
    [
      {heading:'Réflexe concours',text:'Ne jamais citer un modèle pour lui-même. Il faut expliquer quel mécanisme du comportement il éclaire et quelles conséquences marketing on en tire.'},
      {heading:'Application tourisme',text:'Un voyage implique souvent un achat avant consommation, avec incertitude élevée. Les preuves, avis, images, garanties et recommandations réduisent le risque perçu.'},
      {heading:'Exercice',text:'Analyse le choix d’un hôtel en distinguant facteurs individuels, sociaux, situationnels et éléments de preuve. Associe ensuite un levier marketing à chaque facteur.'}
    ],
    [
      {type:'Académique',name:'Ajzen — The Theory of Planned Behavior (1991)',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T'},
      {type:'Académique',name:'Arnould & Thompson — Consumer Culture Theory (2005)',url:'https://doi.org/10.1086/426626'}
    ]
  ),

  'cours|Segmentation • Ciblage • Positionnement': p(
    'Cours essentiel',
    'Segmentation, ciblage et positionnement',
    'La démarche SCP transforme un marché hétérogène en choix stratégique : identifier des segments, sélectionner ceux que l’organisation veut servir et construire une place distinctive dans l’esprit des clients.',
    [
      'Un segment utile doit être mesurable, suffisamment important, accessible, différenciable et exploitable.',
      'Les critères peuvent être géographiques, sociodémographiques, psychographiques, comportementaux ou liés aux bénéfices recherchés.',
      'Le ciblage peut être indifférencié, différencié, concentré ou personnalisé.',
      'Le positionnement exprime la valeur distinctive promise à une cible face aux alternatives concurrentes.',
      'Une carte perceptuelle peut visualiser les positions perçues mais elle dépend des critères choisis et des données recueillies.'
    ],
    [
      {heading:'Formule pratique',text:'Pour [cible], [marque/offre] est [catégorie/cadre de référence] qui apporte [bénéfice distinctif] grâce à [preuve]. Cette formulation sert de contrôle de cohérence, pas de slogan obligatoire.'},
      {heading:'Tourisme',text:'Un hôtel peut cibler affaires, familles, couples, clientèle premium, longs séjours ou voyageurs sensibles à l’environnement. Le positionnement doit ensuite être visible dans l’offre, le prix, la distribution et l’expérience.'},
      {heading:'Exercice',text:'Propose trois segmentations différentes pour un même hôtel. Sélectionne ensuite un segment prioritaire et justifie le choix par attractivité et capacité de l’organisation.'}
    ],
    [
      {type:'Ouvrage',name:'Kotler & Armstrong — Marketing: An Introduction, chapitre Segmentation, Targeting and Positioning',url:'https://bookstore.uoguelph.ca/p-25248-marketing-an-introduction.aspx'}
    ]
  ),

  'cours|Produit / Service / Marque': p(
    'Cours essentiel',
    'Produit, service, gamme et marque',
    'La politique d’offre articule bénéfice central, caractéristiques, services associés, architecture de gamme et capital de marque. Dans les services, le client évalue aussi le processus et les preuves de qualité.',
    [
      'Distinguer bénéfice recherché, produit/service réel et services associés.',
      'La gamme se pilote par largeur, profondeur, cohérence et rôle de chaque référence.',
      'Le cycle de vie peut aider à penser lancement, croissance, maturité et déclin, mais il ne prédit pas mécaniquement la trajectoire d’une offre.',
      'Aaker conceptualise le capital de marque autour d’actifs comme notoriété, fidélité, qualité perçue et associations.',
      'Keller analyse le capital de marque du point de vue de la connaissance de marque et de la réponse du consommateur.'
    ],
    [
      {heading:'À l’agrégation',text:'Une recommandation de gamme ou de marque doit préciser l’objectif : acquisition, montée en gamme, couverture de segments, cohérence, différenciation ou rentabilité.'},
      {heading:'Tourisme',text:'Dans l’hôtellerie, l’offre inclut chambre, restauration, accueil, services numériques, espaces, programme de fidélité et promesse de marque.'},
      {heading:'Exercice',text:'Pour une chaîne hôtelière multimarque, identifie les risques de cannibalisation et propose des critères permettant de clarifier l’architecture de portefeuille.'}
    ],
    [
      {type:'Académique',name:'Keller — Conceptualizing, Measuring, and Managing Customer-Based Brand Equity',url:'https://doi.org/10.1177/002224299305700101'},
      {type:'Ouvrage',name:'Aaker — Managing Brand Equity (1991)',url:'https://www.simonandschuster.com/books/Managing-Brand-Equity/David-A-Aaker/9780029001011'},
      {type:'Académique',name:'Levitt — Exploit the Product Life Cycle',url:'https://hbr.org/1965/11/exploit-the-product-life-cycle'}
    ]
  ),

  'cours|Prix': p(
    'Cours essentiel',
    'Politique de prix et valeur perçue',
    'Le prix est à la fois une variable de revenu, un signal de positionnement et un élément de perception de valeur. Une décision de prix doit croiser coûts, demande, concurrence et objectifs stratégiques.',
    [
      'Distinguer coût, prix, valeur perçue et disposition à payer.',
      'L’élasticité-prix mesure la sensibilité de la demande à une variation de prix ; son interprétation dépend du contexte et de la période.',
      'Les stratégies peuvent viser pénétration, écrémage, alignement, différenciation, yield ou tarification dynamique.',
      'Le prix peut signaler qualité ou exclusivité, mais un prix élevé n’augmente pas automatiquement la valeur perçue.',
      'En France, l’information sur les prix doit être claire ; les annonces de réduction sont soumises à des règles spécifiques.'
    ],
    [
      {heading:'Tourisme',text:'La capacité périssable des hôtels et transports favorise le revenue management : ajuster prix et disponibilité selon prévisions de demande, segments, temporalité et contraintes de capacité.'},
      {heading:'Cadre juridique actuel',text:'Pour une réduction de prix annoncée, la référence est en principe le prix le plus bas pratiqué par le professionnel au cours des 30 jours précédents.'},
      {heading:'Exercice',text:'Un hôtel vend une même chambre à plusieurs tarifs selon date, canal et conditions. Identifie ce qui relève du revenue management, de la discrimination tarifaire et des obligations d’information.'}
    ],
    [
      {type:'Officiel',name:'DGCCRF — L’information sur les prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/linformation-sur-les-prix',checked:'08/11/2026'},
      {type:'Officiel',name:'DGCCRF — Annonces de réduction de prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/annonces-de-reduction-de-prix-ce-que-vous-devez-savoir',checked:'08/11/2026'}
    ]
  ),

  'cours|Communication': p(
    'Cours essentiel',
    'Communication marketing intégrée',
    'La communication consiste à faire connaître, comprendre, préférer et agir, mais aussi à construire une relation cohérente sur plusieurs points de contact. L’enjeu n’est pas de multiplier les canaux, mais d’assurer cohérence et efficacité.',
    [
      'Définir objectif, cible, message, preuve, canal, calendrier, budget et indicateurs avant de choisir les formats.',
      'Distinguer objectifs cognitifs, affectifs et comportementaux.',
      'Le modèle de hiérarchie des effets de Lavidge et Steiner aide à penser le passage de la connaissance à l’action.',
      'La communication intégrée vise la cohérence entre média, hors média, digital, promotion, relations publiques et points de contact.',
      'L’efficacité se mesure selon l’objectif : portée, mémorisation, engagement, trafic, leads, conversion, ventes, image ou fidélité.'
    ],
    [
      {heading:'Tourisme',text:'Une destination ne communique pas seulement une offre : elle construit un imaginaire, doit gérer la cohérence des acteurs et anticiper l’écart entre image projetée et expérience réelle.'},
      {heading:'Influence',text:'Une communication d’influence rémunérée doit signaler clairement son caractère commercial ; la transparence fait partie du cadre de protection du consommateur.'},
      {heading:'Exercice',text:'Construis un mini-plan de communication pour lancer une offre de week-end hors saison : objectif, cible, message, canaux, KPI et risque principal.'}
    ],
    [
      {type:'Académique',name:'Lavidge & Steiner — A Model for Predictive Measurements of Advertising Effectiveness',url:'https://journals.sagepub.com/doi/pdf/10.1177/002224296102500611'},
      {type:'Officiel',name:'Économie.gouv.fr — Obligations des influenceurs',url:'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs',checked:'08/11/2026'}
    ]
  ),

  'cours|Distribution & omnicanal': p(
    'Cours essentiel',
    'Distribution, canaux et omnicanal',
    'La distribution organise la mise à disposition de l’offre. L’omnicanal ne consiste pas à juxtaposer des canaux : il cherche à coordonner l’expérience, les données et les processus entre eux.',
    [
      'Distinguer circuit direct et indirect, canal, intermédiaire et plateforme.',
      'Évaluer un canal par couverture, coût, contrôle, données, marge, expérience et dépendance.',
      'L’omnicanal vise une intégration des points de contact physiques et numériques autour du parcours client.',
      'Les plateformes peuvent apporter audience et conversion tout en créant dépendance, commissions et asymétrie de données.',
      'La performance se juge au-delà du chiffre d’affaires : coût d’acquisition, marge nette par canal, conversion, réachat et valeur client.'
    ],
    [
      {heading:'Référence académique',text:'Verhoef, Kannan et Inman décrivent le passage du multi-canal à l’omnicanal comme un élargissement des canaux et une intégration accrue des interactions.'},
      {heading:'Tourisme',text:'Pour un hôtel, arbitrer entre réservation directe, OTA, agences, GDS et partenaires. Le meilleur mix dépend de la cible, de la saison et du coût net de distribution.'},
      {heading:'Exercice',text:'Construis une matrice comparant site direct et OTA sur six critères : visibilité, conversion, données, coûts, fidélisation et contrôle de l’expérience.'}
    ],
    [
      {type:'Académique',name:'Verhoef, Kannan & Inman — From Multi-Channel Retailing to Omni-Channel Retailing',url:'https://doi.org/10.1016/j.jretai.2015.02.005'},
      {type:'Officiel',name:'Commission européenne — Booking.com et obligations DMA',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked:'08/11/2026'}
    ]
  ),

  'cours|Marketing digital': p(
    'Cours essentiel',
    'Marketing digital et parcours client',
    'Le digital transforme la collecte d’information, la recherche, la recommandation, l’achat, le service et la fidélisation. Une stratégie digitale doit relier points de contact, données, expérience et performance.',
    [
      'Cartographier le parcours client par étapes et points de contact plutôt que raisonner seulement par canal.',
      'Distinguer acquisition, activation, conversion, fidélisation et recommandation.',
      'Le contenu, le référencement, les médias payants, CRM, réseaux sociaux et plateformes répondent à des objectifs différents.',
      'Lemon et Verhoef montrent l’importance d’une expérience construite sur de multiples touchpoints dans le temps.',
      'Kannan et Li proposent un cadre reliant technologies numériques et processus marketing.'
    ],
    [
      {heading:'Données et consentement',text:'Personnalisation et retargeting sont contraints par les règles sur les données personnelles et les traceurs. Un objectif marketing ne justifie pas automatiquement un traitement.'},
      {heading:'Tourisme 2026',text:'Atout France forme désormais les professionnels aux usages de l’IA générative, à la relation client et à la visibilité dans les moteurs de réponse, signe d’un déplacement des pratiques de recherche touristique.'},
      {heading:'Exercice',text:'Dessine le parcours d’un voyageur de l’inspiration au retour. Pour chaque étape, donne un point de contact, une donnée utile, un risque et un KPI.'}
    ],
    [
      {type:'Académique',name:'Lemon & Verhoef — Understanding Customer Experience Throughout the Customer Journey',url:'https://doi.org/10.1509/jm.15.0420'},
      {type:'Académique',name:'Kannan & Li — Digital marketing: A framework, review and research agenda',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006'},
      {type:'Officiel',name:'CNIL — Cookies et autres traceurs, FAQ 2026',url:'https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ',checked:'08/11/2026'}
    ]
  ),

  'cours|Marketing des services': p(
    'Cours essentiel',
    'Marketing des services',
    'Les services demandent d’analyser non seulement la promesse mais aussi le système de délivrance. Servuction, qualité perçue, rôle du personnel, processus et preuves physiques sont centraux.',
    [
      'Eiglier et Langeard formalisent la servuction comme système d’interactions dans la production du service.',
      'Le cadre IHIP — intangibilité, hétérogénéité, indissociabilité, périssabilité — est classique mais discuté et ne doit pas être présenté comme une loi universelle.',
      'Booms et Bitner étendent le mix par People, Process et Physical Evidence.',
      'SERVQUAL a popularisé une approche de la qualité perçue fondée sur l’écart entre attentes et perceptions.',
      'La Service-Dominant Logic de Vargo et Lusch insiste sur service, ressources immatérielles et co-création de valeur.'
    ],
    [
      {heading:'Application hôtelière',text:'Accueil, chambre, personnel, application, processus de check-in, autres clients et traitement d’un incident contribuent tous à la valeur perçue.'},
      {heading:'Innovation',text:'Dans un service, l’innovation peut porter sur le concept, le processus, l’interface client, la technologie, le modèle de revenus ou l’écosystème.'},
      {heading:'Exercice',text:'Analyse une expérience hôtelière en distinguant support physique, personnel en contact, processus visible, back-office et participation du client.'}
    ],
    [
      {type:'Académique',name:'BNF — Eiglier & Langeard, Servuction (1987)',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n'},
      {type:'Académique',name:'Booms & Bitner — Marketing Services by Managing the Environment (1982), avec référence au cadre 7P de 1981',url:'https://journals.sagepub.com/doi/10.1177/001088048202300107'},
      {type:'Académique',name:'Vargo & Lusch — Evolving to a New Dominant Logic for Marketing',url:'https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036'},
      {type:'Académique',name:'Parasuraman, Zeithaml & Berry — SERVQUAL',url:'https://journals.sagepub.com/doi/10.1177/076737019000500102'},
      {type:'Ressource fournie',name:'Copies Option C — Innovation et marketing des services.pdf',note:'Support de préparation interne ; utilisé comme point de départ puis recoupé.'}
    ]
  ),

  'cours|Marketing BtoB': p(
    'Cours essentiel',
    'Marketing BtoB',
    'En BtoB, la demande est souvent dérivée, les achats plus formalisés et plusieurs acteurs interviennent dans la décision. Le marketing doit intégrer le centre d’achat, la valeur économique et la relation.',
    [
      'Identifier utilisateurs, prescripteurs, acheteurs, décideurs, influenceurs et filtres d’information.',
      'Le modèle Webster-Wind considère l’achat organisationnel comme un processus influencé par environnement, organisation, groupe et individus.',
      'La proposition de valeur doit expliciter gains, risques évités, coûts totaux et conditions de mise en œuvre.',
      'Les cycles de vente peuvent être longs et nécessitent contenus, preuves, démonstrations et relation commerciale.',
      'Le CRM BtoB doit articuler marketing et vente au lieu de réduire la relation à un fichier de contacts.'
    ],
    [
      {heading:'Tourisme',text:'Un hôtel peut vendre au voyageur final mais aussi à des entreprises, agences, tour-opérateurs, organisateurs MICE et plateformes. La même capacité est donc commercialisée dans plusieurs logiques.'},
      {heading:'Exercice',text:'Pour un hôtel qui veut développer le séminaire d’entreprise, cartographie le centre d’achat chez le client et propose une preuve adaptée à chaque acteur.'}
    ],
    [
      {type:'Académique',name:'Webster & Wind — A General Model for Understanding Organizational Buying Behavior',url:'https://journals.sagepub.com/doi/10.1177/002224297203600204'},
      {type:'Académique',name:'Payne & Frow — A Strategic Framework for Customer Relationship Management',url:'https://doi.org/10.1509/jmkg.2005.69.4.167'}
    ]
  ),

  'cours|Marketing territorial': p(
    'Cours essentiel',
    'Marketing territorial et destination',
    'Le marketing territorial cherche à renforcer l’attractivité d’un lieu auprès de publics multiples : visiteurs, habitants, entreprises, investisseurs ou talents. Une destination n’est pas une marque contrôlée par un seul acteur.',
    [
      'Distinguer identité voulue, image perçue, réputation et expérience réelle du territoire.',
      'Le territoire réunit de multiples parties prenantes aux intérêts parfois divergents.',
      'La marque de destination ne remplace ni l’offre ni les infrastructures : elle doit être crédible et cohérente avec l’expérience.',
      'Kotler, Haider et Rein ont contribué à formaliser le marketing des lieux dans une logique d’attractivité.',
      'La recherche récente sur le place branding insiste sur identité, image, communication, patrimoine et infrastructures.'
    ],
    [
      {heading:'Tourisme',text:'La promesse d’une destination est co-produite par transporteurs, hébergeurs, restaurateurs, habitants, sites culturels, acteurs publics et plateformes.'},
      {heading:'Exercice',text:'Choisis une destination. Sépare trois éléments d’identité voulue et trois éléments d’image observable à partir d’avis, presse ou données. Analyse les écarts.'}
    ],
    [
      {type:'Ouvrage',name:'Kotler, Haider & Rein — Marketing Places (1993)',url:'https://books.google.com/books/about/Marketing_Places.html?id=luTtAAAAMAAJ'},
      {type:'Académique',name:'Hanna, Rowley & Keegan — Place and Destination Branding: A Review',url:'https://doi.org/10.1111/emre.12433'}
    ]
  ),

  'cours|Marketing entrepreneurial': p(
    'Cours essentiel',
    'Marketing entrepreneurial et modèle d’affaires',
    'Le marketing entrepreneurial traite des situations d’incertitude, de ressources limitées et de création de marché. L’objectif est d’apprendre rapidement, tester la proposition de valeur et faire évoluer le modèle d’affaires.',
    [
      'Un business model décrit comment une organisation crée, délivre et capte de la valeur.',
      'Le Business Model Canvas structure neuf blocs : segments, proposition de valeur, canaux, relations, revenus, ressources, activités, partenaires et coûts.',
      'Sarasvathy oppose logique causale — partir d’un objectif et chercher les moyens — et effectuale — partir des moyens disponibles et construire des possibles.',
      'Tester une hypothèse de marché est différent de chercher à confirmer une intuition.',
      'Les indicateurs précoces doivent porter sur apprentissage, usage, conversion, rétention et économie unitaire.'
    ],
    [
      {heading:'Tourisme',text:'Les start-up de travel tech testent souvent des solutions autour de l’IA, des données, de la mobilité, de l’expérience visiteur, de l’énergie ou de l’accessibilité.'},
      {heading:'Exercice',text:'Construis le Business Model Canvas d’un service touristique puis choisis les trois hypothèses les plus risquées à tester avant d’investir davantage.'}
    ],
    [
      {type:'Ouvrage',name:'Osterwalder & Pigneur — Business Model Generation',url:'https://www.wiley-vch.de/en/areas-interest/finance-economics-law/business-management-13ba/general-introductory-business-management-13ba0/business-model-generation-978-0-470-87641-1'},
      {type:'Académique',name:'Sarasvathy — Causation and Effectuation',url:'https://journals.aom.org/doi/10.5465/AMR.2001.4378020'},
      {type:'Officiel',name:'DGE — France Tourisme Tech, 4e promotion 2026',url:'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0',checked:'08/11/2026'}
    ]
  ),

  'cours|Marketing international': p(
    'Cours essentiel',
    'Marketing international',
    'Le marketing international doit arbitrer standardisation et adaptation en fonction des marchés, cultures, réglementations, canaux et conditions économiques.',
    [
      'Évaluer l’attractivité du pays, les risques, les barrières, les concurrents et l’adéquation de l’offre.',
      'Choisir un mode d’entrée cohérent : export, intermédiaire, licence, franchise, partenariat, filiale ou plateforme.',
      'Adapter ou standardiser produit, prix, communication et distribution selon le contexte.',
      'Les différences culturelles sont des repères d’analyse, pas des stéréotypes individuels.',
      'Les Incoterms définissent des responsabilités logistiques et de risque dans le commerce de biens ; leur utilité est plus limitée pour les services touristiques.'
    ],
    [
      {heading:'Tourisme',text:'Une destination adapte souvent contenus, canaux, calendrier et partenariats selon les marchés émetteurs, tout en conservant une identité de marque cohérente.'},
      {heading:'Exercice',text:'Pour promouvoir une destination française sur deux marchés étrangers, liste ce qui peut rester standardisé et ce qui doit être adapté, avec justification.'}
    ],
    [
      {type:'Ouvrage',name:'Hofstede — Culture’s Consequences',url:'https://www.sagepub.com/shop/buy-a-book/cultures-consequences-2-9710'},
      {type:'Officiel',name:'Atout France — Catalogue et opérations internationales',url:'https://www.atout-france.fr/fr/catalogue/rendez-vous',checked:'08/11/2026'}
    ]
  ),

  'cours|Études marketing': p(
    'Cours essentiel',
    'Études marketing : de la question à la décision',
    'Une étude n’est utile que si elle part d’une question de décision claire. Il faut choisir méthode, échantillon, variables et analyse en fonction du problème, puis expliciter les limites.',
    [
      'Distinguer données secondaires et données primaires.',
      'Les méthodes qualitatives explorent significations, motivations et usages ; elles ne servent pas à estimer une fréquence dans une population.',
      'Les méthodes quantitatives mesurent et testent sur un échantillon ; leur qualité dépend du plan d’échantillonnage et du questionnaire.',
      'Une corrélation ne démontre pas à elle seule une causalité.',
      'La recherche documentaire doit évaluer source, date, champ, méthode et comparabilité des données.'
    ],
    [
      {heading:'Outils',text:'Entretiens individuels, focus groups, observation, analyse documentaire, questionnaire et expérimentation répondent à des objectifs différents.'},
      {heading:'Tourisme',text:'Pour comprendre une baisse de satisfaction, combiner avis clients, entretiens, observation du parcours et enquête quantitative peut être plus robuste qu’une seule méthode.'},
      {heading:'Exercice',text:'Transforme la question « Pourquoi les clients réservent moins en direct ? » en plan d’étude : hypothèses, données nécessaires, méthode et limites.'}
    ],
    [
      {type:'Officiel',name:'Insee — Méthodes et qualité statistiques',url:'https://www.insee.fr/fr/information/2387611',checked:'08/11/2026'}
    ]
  ),

  'cours|Statistiques & décision': p(
    'Cours essentiel',
    'Statistiques, probabilités et aide à la décision',
    'Le programme exige de savoir utiliser les outils quantitatifs comme instruments de décision. L’objectif n’est pas d’accumuler les formules mais de choisir la bonne mesure et d’interpréter correctement.',
    [
      'Maîtriser moyenne, médiane, dispersion, taux d’évolution, indices, parts, ratios et représentations.',
      'Comprendre variables aléatoires et lois usuelles comme binomiale, Poisson et normale dans des situations adaptées.',
      'Savoir lire intervalle de confiance, test statistique et risque d’erreur sans surinterpréter.',
      'Utiliser régression ou prévision uniquement si les hypothèses et données le permettent.',
      'Toujours conclure en langage de gestion : que signifie le résultat pour la décision ?'
    ],
    [
      {heading:'Marketing',text:'Les statistiques servent à segmenter, mesurer une performance, comparer des groupes, prévoir une demande ou tester une hypothèse.'},
      {heading:'Tourisme',text:'Taux d’occupation, RevPAR, panier moyen, conversion, durée de séjour et saisonnalité demandent des calculs simples mais une interprétation rigoureuse.'},
      {heading:'Exercice',text:'À partir de deux hôtels ayant le même taux d’occupation mais des prix moyens différents, calcule le RevPAR et explique pourquoi le taux d’occupation seul ne suffit pas.'}
    ],
    [
      {type:'Officiel',name:'Insee — Définitions, méthodes et qualité',url:'https://www.insee.fr/fr/information/2387611',checked:'08/11/2026'},
      JURY
    ]
  ),

  'cours|Droit appliqué au marketing': p(
    'Cours essentiel',
    'Droit et réglementation appliqués au marketing',
    'Le marketing agit dans un cadre juridique qui concerne prix, information, pratiques commerciales, contrats, données personnelles, prospection, influence et plateformes.',
    [
      'Une pratique commerciale peut être trompeuse par action ou omission ; le marketing doit pouvoir justifier ses allégations.',
      'Les prix doivent être clairement communiqués et les réductions respecter le prix de référence légal.',
      'En BtoC, la prospection électronique exige en principe un consentement préalable, avec des exceptions encadrées pour les clients existants.',
      'Les cookies et traceurs non strictement nécessaires nécessitent en principe un consentement préalable valable.',
      'La publicité d’influence avec contrepartie doit rendre explicite son intention commerciale.',
      'Le RGPD impose notamment licéité, transparence, finalité, minimisation et respect des droits des personnes.'
    ],
    [
      {heading:'Cas 2026',text:'La CNIL a sanctionné FNAC Darty en octobre 2026 pour l’usage d’un traceur sans consentement permettant notamment des recommandations personnalisées et l’entraînement d’un algorithme.'},
      {heading:'Tourisme',text:'CRM hôtelier, retargeting, programme de fidélité, cookies, OTA, avis clients et influenceurs mobilisent plusieurs de ces règles simultanément.'},
      {heading:'Exercice',text:'Audite une campagne fictive : email à des prospects particuliers, pixel publicitaire, influenceur rémunéré et promotion -20 %. Liste les vérifications juridiques nécessaires.'}
    ],
    [
      {type:'Officiel',name:'CNIL — Prospection commerciale électronique, mise à jour 10 juin 2026',url:'https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel',checked:'08/11/2026'},
      {type:'Officiel',name:'CNIL — Cookies et autres traceurs',url:'https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi',checked:'08/11/2026'},
      {type:'Officiel',name:'CNIL — Sanction FNAC Darty, 29 octobre 2026',url:'https://www.cnil.fr/fr/sanction-cookies-app-fnac',checked:'08/11/2026'},
      {type:'Officiel',name:'DGCCRF — Annonces de réduction de prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/annonces-de-reduction-de-prix-ce-que-vous-devez-savoir',checked:'08/11/2026'},
      {type:'Officiel',name:'Économie.gouv.fr — Devoirs des influenceurs',url:'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs',checked:'08/11/2026'}
    ]
  )
}
