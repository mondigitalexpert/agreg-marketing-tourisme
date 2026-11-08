import { course, JURY } from '../courseHelpers'

export const sectoralCourses = {
  'cours|Marketing des services': course({
    title:'Marketing des services : servuction, qualité, expérience et co-création',
    intro:'Les services posent des questions particulières parce que le client évalue non seulement la promesse mais aussi le processus de délivrance, les interactions, l’environnement et parfois sa propre participation. Le marketing des services articule donc offre, organisation, personnel, preuves physiques et expérience.',
    objectives:[
      'Comprendre les caractéristiques traditionnellement associées aux services et leurs limites.',
      'Analyser une prestation avec la servuction.',
      'Utiliser les 7P comme grille opérationnelle sans en faire un modèle explicatif universel.',
      'Comprendre qualité perçue, attentes et récupération de service.',
      'Mobiliser la Service-Dominant Logic et la co-création lorsque pertinentes.'
    ],
    keyPoints:[
      'Le cadre IHIP — intangibilité, hétérogénéité, indissociabilité, périssabilité — est historique et utile mais discuté.',
      'La servuction analyse le système de production du service, notamment client, personnel en contact, support physique et organisation.',
      'Booms et Bitner ajoutent People, Process et Physical Evidence au mix classique.',
      'La qualité perçue dépend d’attentes, perceptions et attributs de l’expérience.',
      'La récupération après défaillance peut fortement influencer satisfaction et confiance.',
      'Vargo et Lusch déplacent le regard vers le service comme processus de création de valeur et la co-création.'
    ],
    sections:[
      {
        heading:'1. Les spécificités traditionnellement associées aux services',
        text:'La littérature a longtemps décrit les services par l’intangibilité, l’hétérogénéité, l’indissociabilité entre production et consommation et la périssabilité. Cette grille aide à repérer certains enjeux — preuve, standardisation, capacité — mais elle ne s’applique pas avec la même intensité à tous les services.'
      },
      {
        heading:'2. Servuction : le système qui produit l’expérience',
        text:'Eiglier et Langeard utilisent la notion de servuction pour analyser la production d’un service. Le client participe souvent au processus ; le personnel en contact, le support physique, l’organisation interne et les autres clients peuvent influencer la prestation perçue.',
        bullets:[
          'Client : attentes, participation, comportements.',
          'Personnel en contact : compétence, attitude, autonomie.',
          'Support physique : espace, signalétique, équipements, interfaces.',
          'Organisation interne : processus, systèmes, back-office.',
          'Autres clients : ambiance, attentes, files, comportements collectifs.'
        ]
      },
      {
        heading:'3. Les 7P',
        text:'Booms et Bitner étendent le mix Produit-Prix-Place-Promotion à People, Process et Physical Evidence. Les 7P sont utiles comme checklist opérationnelle : ils obligent à considérer le personnel, les procédures et les preuves visibles d’un service.',
        bullets:[
          'People : recrutement, formation, comportements, empowerment.',
          'Process : séquence de service, délais, files, automatisation, récupération.',
          'Physical Evidence : environnement, design, documents, interfaces, signes tangibles.'
        ]
      },
      {
        heading:'4. Qualité perçue et attentes',
        text:'La qualité de service dépend de dimensions techniques et relationnelles. Les modèles de type SERVQUAL ont popularisé l’idée d’un écart entre attentes et perceptions sur plusieurs dimensions. Ils sont largement utilisés, mais leur mesure et leur généralisation ont aussi été discutées ; il faut donc les mobiliser comme outils, pas comme vérité absolue.'
      },
      {
        heading:'5. Variabilité et standardisation',
        text:'Le service peut varier selon le personnel, le client, le moment ou le lieu. L’organisation cherche souvent à réduire la variabilité non souhaitée par formation, procédures, outils et données. Mais une standardisation excessive peut dégrader personnalisation et autonomie.'
      },
      {
        heading:'6. Gestion de la capacité et de la demande',
        text:'Une capacité inutilisée ne peut souvent pas être stockée. Les entreprises de service agissent donc sur réservation, prix, horaires, personnel, files d’attente ou répartition de la demande. Le revenue management est une réponse lorsque la capacité est contrainte et la demande variable.'
      },
      {
        heading:'7. Défaillance et récupération de service',
        text:'Une erreur de réservation, une attente excessive ou un problème de chambre affectent l’expérience. La récupération combine reconnaissance du problème, rapidité, équité de la solution, information et parfois compensation. L’objectif n’est pas seulement de « s’excuser », mais de restaurer confiance et contrôle.'
      },
      {
        heading:'8. Service-Dominant Logic',
        text:'Vargo et Lusch proposent une logique dans laquelle le service — application de compétences au bénéfice d’un acteur — devient central. La valeur n’est pas simplement intégrée dans un produit puis livrée : elle se réalise dans l’usage et l’intégration de ressources. Cette perspective aide à penser relation et co-création.'
      },
      {
        heading:'9. Expérience et participation du client',
        text:'Le client peut produire une partie du service : saisie d’informations, self-check-in, choix, effort, respect des horaires. Cette participation peut réduire les coûts ou améliorer le contrôle perçu, mais elle peut aussi transférer une charge au client et créer de la frustration.'
      },
      {
        heading:'10. Application hôtellerie et tourisme',
        text:'Dans un hôtel, l’expérience résulte de la chambre mais aussi de la réservation, l’arrivée, l’accueil, l’application, le petit-déjeuner, le traitement d’un incident et le départ. Une analyse de servuction permet de distinguer ce qui est visible du client et ce qui relève du back-office.'
      }
    ],
    recap:[
      'Le service doit être analysé comme un système de production et d’interaction.',
      'IHIP est un cadre historique à utiliser avec nuance.',
      'Les 7P complètent le mix par personnes, processus et preuves physiques.',
      'La qualité perçue dépend des attentes et de l’expérience.',
      'La récupération de service est un moment critique de la relation.',
      'La co-création permet de penser la valeur dans l’usage.'
    ],
    examTips:[
      'Ne pas réciter IHIP sans relier chaque caractéristique à une décision.',
      'Utiliser la servuction pour identifier précisément où se crée ou se détruit la valeur.',
      'Éviter de confondre satisfaction, qualité perçue et fidélité.',
      'Dans un cas touristique, intégrer les autres clients et partenaires à l’expérience.'
    ],
    sources:[
      {type:'Académique',name:'BnF — Eiglier & Langeard, Servuction (1987)',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n'},
      {type:'Académique',name:'Booms & Bitner — Marketing Services by Managing the Environment',url:'https://journals.sagepub.com/doi/10.1177/001088048202300107'},
      {type:'Académique',name:'Vargo & Lusch — Evolving to a New Dominant Logic for Marketing',url:'https://journals.sagepub.com/doi/10.1509/jmkg.68.1.1.24036'},
      {type:'Ressource fournie',name:'Copies Option C — Innovation et marketing des services.pdf',note:'Ressource de préparation, recoupée avec des références académiques.'},
      JURY
    ]
  }),

  'cours|Marketing BtoB': course({
    title:'Marketing BtoB : achat organisationnel, valeur et relation',
    intro:'Le BtoB concerne des échanges entre organisations. Il se caractérise souvent par une demande dérivée, des processus d’achat formalisés, plusieurs participants à la décision et une forte importance de la relation, de la preuve économique et de la réduction du risque.',
    objectives:[
      'Comprendre les différences majeures entre achat organisationnel et achat individuel.',
      'Identifier les rôles du centre d’achat.',
      'Analyser les influences environnementales, organisationnelles, groupales et individuelles.',
      'Construire une proposition de valeur économique.',
      'Relier marketing, vente, CRM et gestion des comptes.'
    ],
    keyPoints:[
      'La demande BtoB est souvent dérivée de la demande finale des clients du client.',
      'Plusieurs acteurs peuvent participer à la décision avec des objectifs différents.',
      'Webster et Wind proposent quatre niveaux d’influence : environnement, organisation, groupe d’achat et individus.',
      'Le prix facial compte moins que le coût total, le risque et la valeur créée.',
      'La relation commerciale peut devenir un actif lorsqu’elle réduit incertitude et coûts de coordination.',
      'Marketing et vente doivent partager définition des comptes, besoins, contenus et données.'
    ],
    sections:[
      {
        heading:'1. Les spécificités du marché BtoB',
        text:'Les marchés BtoB peuvent compter moins d’acheteurs mais des volumes plus importants, des produits ou services plus techniques et des cycles de décision plus longs. La relation peut être récurrente et contractuelle. Les conséquences d’un mauvais choix peuvent être importantes, ce qui accroît le besoin de preuve.'
      },
      {
        heading:'2. Demande dérivée et chaîne de valeur',
        text:'La demande d’une entreprise dépend souvent de la demande adressée à ses propres clients. Comprendre le marché du client devient donc essentiel. Un fournisseur hôtelier BtoB doit, par exemple, comprendre les politiques de déplacement des entreprises et pas seulement les besoins de l’acheteur direct.'
      },
      {
        heading:'3. Le centre d’achat',
        text:'La décision peut réunir plusieurs rôles. Une même personne peut cumuler plusieurs rôles et leur poids varie selon l’achat.',
        bullets:[
          'Utilisateur : utilise la solution.',
          'Prescripteur : définit ou influence les caractéristiques.',
          'Acheteur : négocie et formalise l’achat.',
          'Décideur : dispose du pouvoir final.',
          'Influenceur : apporte expertise ou légitimité.',
          'Filtre / gatekeeper : contrôle l’accès à l’information ou aux décideurs.'
        ]
      },
      {
        heading:'4. Le modèle Webster-Wind',
        text:'Webster et Wind analysent l’achat organisationnel à travers quatre familles d’influences : environnementales, organisationnelles, interpersonnelles et individuelles. Le modèle rappelle qu’un achat BtoB n’est pas uniquement un calcul économique : règles internes, pouvoir, culture et motivations individuelles jouent également.'
      },
      {
        heading:'5. Types de situation d’achat',
        text:'Une organisation ne se comporte pas de la même manière lors d’un réachat routinier, d’un réachat modifié ou d’un nouvel achat. Plus l’achat est nouveau et risqué, plus le nombre d’acteurs, la recherche d’information et la formalisation tendent à augmenter.'
      },
      {
        heading:'6. Proposition de valeur',
        text:'Une proposition de valeur BtoB doit traduire l’offre en conséquences économiques ou opérationnelles pour le client : réduction du coût total, augmentation du revenu, baisse du risque, conformité, gain de temps, qualité ou flexibilité.',
        example:'Pour vendre des séminaires à une entreprise, « salle moderne » est une caractéristique. « Réduire le temps d’organisation grâce à un interlocuteur unique et des prestations intégrées » exprime davantage une valeur.'
      },
      {
        heading:'7. Prix, coût total et risque',
        text:'Le prix d’achat n’est qu’une composante du coût. Installation, formation, maintenance, changement de fournisseur, temps administratif, risque de panne ou de non-conformité peuvent être déterminants. Le marketing BtoB doit donc quantifier la valeur lorsque c’est possible.'
      },
      {
        heading:'8. Relation, CRM et comptes clés',
        text:'Les relations longues justifient un suivi structuré des comptes. Le CRM ne se réduit pas au logiciel : il coordonne données, stratégie de relation, vente, service et mesure. Pour les grands comptes, les décisions peuvent être personnalisées par secteur, organisation et potentiel.'
      },
      {
        heading:'9. Contenus et preuve',
        text:'Les contenus BtoB doivent aider plusieurs acteurs à réduire le risque : cas clients, démonstrations, certifications, ROI, données techniques, références, pilotes. La même preuve n’est pas pertinente pour un directeur financier et un utilisateur opérationnel.'
      },
      {
        heading:'10. Application tourisme',
        text:'Un hôtel peut servir voyageurs individuels, entreprises, agences, organisateurs MICE ou tour-opérateurs. Pour développer le segment séminaire, il faut comprendre le centre d’achat du client : RH, office manager, achats, manager métier, finance ou participants peuvent avoir des critères différents.'
      }
    ],
    recap:[
      'Le BtoB implique souvent plusieurs acteurs et un risque perçu élevé.',
      'Analyser le centre d’achat et les niveaux d’influence.',
      'Traduire l’offre en valeur économique ou opérationnelle.',
      'Raisonner en coût total et risque, pas uniquement en prix.',
      'Adapter les preuves aux rôles du centre d’achat.',
      'Relier CRM, marketing et vente.'
    ],
    examTips:[
      'Ne pas supposer qu’une organisation décide comme un consommateur individuel.',
      'Identifier les acteurs et leurs critères avant de recommander une communication.',
      'Quantifier la valeur lorsque les données le permettent.',
      'Dans un cas hôtelier BtoB, distinguer utilisateur du séjour et acheteur du contrat.'
    ],
    sources:[
      {type:'Académique',name:'Webster & Wind — A General Model for Understanding Organizational Buying Behavior',url:'https://journals.sagepub.com/doi/10.1177/002224297203600204'},
      {type:'Académique',name:'Payne & Frow — A Strategic Framework for Customer Relationship Management',url:'https://doi.org/10.1509/jmkg.2005.69.4.167'},
      JURY
    ]
  }),

  'cours|Marketing territorial': course({
    title:'Marketing territorial : attractivité, identité, parties prenantes et marque de destination',
    intro:'Le marketing territorial applique une logique d’attractivité à un lieu, mais le territoire n’est pas un produit classique. Il rassemble habitants, institutions, entreprises, visiteurs et infrastructures. La stratégie doit donc articuler identité, image, gouvernance, offre et acceptabilité.',
    objectives:[
      'Distinguer marketing territorial et simple communication territoriale.',
      'Analyser les différentes cibles d’attractivité.',
      'Distinguer identité voulue, image perçue et réputation.',
      'Comprendre le rôle des parties prenantes et de la gouvernance.',
      'Appliquer ces principes au marketing de destination.'
    ],
    keyPoints:[
      'Un territoire s’adresse à plusieurs publics : habitants, touristes, entreprises, investisseurs, étudiants ou talents.',
      'La marque territoriale n’a de valeur que si elle s’appuie sur une expérience et des actifs réels.',
      'L’identité est produite par l’histoire, les acteurs et les représentations ; elle ne se décrète pas uniquement par une campagne.',
      'L’image perçue peut différer fortement de l’identité voulue.',
      'La gouvernance est centrale car aucun acteur ne contrôle seul l’offre territoriale.',
      'L’attractivité doit être conciliée avec capacité d’accueil, soutenabilité et acceptabilité locale.'
    ],
    sections:[
      {
        heading:'1. Qu’est-ce que le marketing territorial ?',
        text:'Le marketing territorial cherche à comprendre les publics, construire une proposition de valeur territoriale, coordonner les acteurs et renforcer l’attractivité. Il ne se réduit pas à un logo ou une campagne. Kotler, Haider et Rein ont largement contribué à formaliser le marketing des lieux.'
      },
      {
        heading:'2. Les différentes cibles',
        text:'Un même territoire peut chercher à attirer visiteurs, habitants, entreprises, investisseurs, événements ou étudiants. Ces cibles ont des critères différents et peuvent entrer en tension. Une stratégie doit donc prioriser plutôt que promettre tout à tout le monde.'
      },
      {
        heading:'3. Identité, image et réputation',
        text:'L’identité correspond à ce que le territoire est et souhaite exprimer ; l’image renvoie aux perceptions des publics ; la réputation se construit dans le temps à partir d’expériences, discours et évaluations. Une campagne peut influencer l’image, mais ne peut durablement masquer des contradictions avec l’expérience.'
      },
      {
        heading:'4. Les actifs territoriaux',
        text:'Accessibilité, patrimoine, compétences, infrastructures, environnement, culture, événements, gastronomie, entreprises et qualité de vie peuvent constituer des actifs. L’enjeu est d’identifier les combinaisons réellement distinctives et valorisables pour une cible.'
      },
      {
        heading:'5. Gouvernance et parties prenantes',
        text:'Collectivités, offices de tourisme, entreprises, habitants, associations, transporteurs et plateformes peuvent avoir des objectifs différents. Le marketing territorial exige concertation, coordination et partage d’information. Une promesse sans capacité de mise en œuvre collective est fragile.'
      },
      {
        heading:'6. Place branding',
        text:'Le place branding cherche à construire des associations distinctives autour d’un lieu. La littérature souligne que marque, identité, communication, patrimoine, infrastructures et expérience sont interdépendants. Le branding n’est donc qu’une composante du marketing territorial.'
      },
      {
        heading:'7. Attractivité et expérience',
        text:'Pour le visiteur, l’expérience d’un territoire dépasse la communication officielle. Mobilité, propreté, accueil, restauration, hébergement, sécurité, commerces, habitants et services numériques contribuent tous à l’image finale.'
      },
      {
        heading:'8. Mesurer la performance',
        text:'Les indicateurs dépendent de la cible : nuitées, dépenses, emplois, créations d’entreprises, fréquentation, satisfaction, répartition saisonnière, durée de séjour, retombées économiques ou pression locale. Le volume seul peut être trompeur.'
      },
      {
        heading:'9. Soutenabilité et acceptabilité',
        text:'Une stratégie d’attractivité peut produire congestion, hausse des prix, conflits d’usage ou dégradation environnementale. Le marketing territorial contemporain doit intégrer la capacité d’accueil et les attentes des habitants, surtout dans les destinations fortement touristiques.'
      },
      {
        heading:'10. Application destination',
        text:'Une destination peut chercher à désaisonnaliser la fréquentation en ciblant de nouveaux segments, développant des événements ou valorisant des activités différentes. Mais le repositionnement doit rester crédible par rapport aux infrastructures, au climat, à l’accessibilité et à l’offre locale.'
      }
    ],
    recap:[
      'Le territoire n’est pas contrôlé comme une marque de produit.',
      'Prioriser les cibles d’attractivité.',
      'Distinguer identité, image et réputation.',
      'Coordonner les parties prenantes.',
      'Mesurer plus que la fréquentation.',
      'Intégrer capacité d’accueil et acceptabilité.'
    ],
    examTips:[
      'Éviter de réduire le marketing territorial à la communication.',
      'Nommer les parties prenantes et leurs intérêts divergents.',
      'Vérifier que la promesse de destination correspond à une expérience réelle.',
      'Intégrer habitants et soutenabilité aux recommandations.'
    ],
    sources:[
      {type:'Ouvrage',name:'Kotler, Haider & Rein — Marketing Places (1993)',url:'https://books.google.com/books/about/Marketing_Places.html?id=luTtAAAAMAAJ'},
      {type:'Académique',name:'Hanna, Rowley & Keegan — Place and Destination Branding: A Review',url:'https://doi.org/10.1111/emre.12433'},
      JURY
    ]
  }),

  'cours|Marketing entrepreneurial': course({
    title:'Marketing entrepreneurial : incertitude, effectuation et modèle d’affaires',
    intro:'Le marketing entrepreneurial traite des situations où marché, offre et ressources ne sont pas stabilisés. L’entrepreneur doit apprendre rapidement, engager des parties prenantes, tester la proposition de valeur et faire évoluer son modèle économique plutôt que supposer qu’un plan initial sera exécuté sans adaptation.',
    objectives:[
      'Distinguer logique causale et logique effectuale.',
      'Comprendre les principaux principes de l’effectuation.',
      'Décrire un modèle d’affaires avec ses éléments essentiels.',
      'Formuler et tester des hypothèses de marché.',
      'Choisir des indicateurs d’apprentissage et de viabilité.'
    ],
    keyPoints:[
      'La causalité part d’un objectif et sélectionne les moyens ; l’effectuation part des moyens disponibles et construit des possibles.',
      'Sarasvathy oppose logique de prédiction et logique de contrôle dans l’incertitude.',
      'Le Business Model Canvas aide à visualiser création, délivrance et capture de valeur.',
      'Une hypothèse de marché doit être testable et falsifiable.',
      'La traction ne se résume pas au nombre d’inscrits : usage, conversion, rétention et économie unitaire comptent.',
      'Le marketing entrepreneurial mobilise fortement réseau, expérimentation et partenariats.'
    ],
    sections:[
      {
        heading:'1. Entre incertitude et risque',
        text:'Le risque suppose que l’on puisse au moins estimer des probabilités ; l’incertitude forte rend les résultats et parfois les options elles-mêmes difficiles à prévoir. Une start-up ne peut donc pas toujours appliquer un plan détaillé comme si le marché était stable.'
      },
      {
        heading:'2. Causation et effectuation',
        text:'Sarasvathy distingue deux logiques. La causalité choisit des moyens pour atteindre un effet prédéfini. L’effectuation part de moyens disponibles — identité, connaissances, réseau — et cherche les effets possibles que l’entrepreneur peut construire avec eux.',
        bullets:[
          'Bird in hand : partir de qui je suis, ce que je sais, qui je connais.',
          'Affordable loss : raisonner en perte acceptable plutôt qu’en rendement prévu.',
          'Crazy quilt : construire avec des partenaires qui s’engagent.',
          'Lemonade : transformer les contingences et surprises en opportunités.',
          'Pilot in the plane : privilégier les actions contrôlables à la prédiction parfaite.'
        ]
      },
      {
        heading:'3. Business model et proposition de valeur',
        text:'Le modèle d’affaires décrit comment l’organisation crée, délivre et capte de la valeur. Le Business Model Canvas propose neuf blocs qui rendent visibles les interdépendances entre clients, proposition, canaux, relations, revenus, ressources, activités, partenaires et coûts.'
      },
      {
        heading:'4. De l’idée à l’hypothèse',
        text:'« Les touristes veulent une application IA » n’est pas une hypothèse assez précise. Une hypothèse utile spécifie un utilisateur, un problème, un comportement attendu et un seuil de décision.',
        example:'« Au moins 30 % des visiteurs interrogés qui préparent un city-break déclarent perdre plus de 20 minutes à comparer des activités et 15 % accepteront de tester un assistant personnalisé » est plus testable qu’une affirmation générale sur l’IA.'
      },
      {
        heading:'5. Expérimenter',
        text:'L’expérimentation vise à obtenir de l’apprentissage au coût le plus faible compatible avec la décision. Entretien, landing page, prototype, test de prix, pilote BtoB ou précommande répondent à des incertitudes différentes.'
      },
      {
        heading:'6. Indicateurs précoces',
        text:'Les indicateurs doivent montrer si le problème existe, si la solution est utilisée et si le modèle peut devenir viable.',
        bullets:[
          'Acquisition : coût et qualité du trafic ou des leads.',
          'Activation : premier usage significatif.',
          'Rétention : retour ou usage répété.',
          'Conversion : passage à une action payante ou engagée.',
          'Économie unitaire : marge, coût de service, coût d’acquisition.',
          'Recommandation : signal utile mais à interpréter avec prudence.'
        ]
      },
      {
        heading:'7. Réseau et partenariats',
        text:'En effectuation, l’engagement de partenaires réduit l’incertitude et apporte ressources, accès au marché ou crédibilité. Mais chaque partenariat crée aussi des dépendances ; il faut analyser alignement des intérêts et partage de la valeur.'
      },
      {
        heading:'8. Pivot et apprentissage',
        text:'Modifier segment, proposition de valeur, canal ou modèle de revenus n’est pas un échec en soi si la décision s’appuie sur des apprentissages. À l’inverse, changer constamment sans hypothèse ni mesure produit de l’agitation plutôt que de l’apprentissage.'
      },
      {
        heading:'9. Business plan : rôle et limites',
        text:'Le business plan formalise stratégie, marché, ressources et prévisions. Il reste utile pour aligner ou financer, mais ses prévisions sont des hypothèses. Dans l’incertitude, il doit être révisé à mesure que les données réelles arrivent.'
      },
      {
        heading:'10. Application travel tech',
        text:'Les start-up tourisme peuvent travailler mobilité, expérience, accessibilité, énergie, réservation ou IA. La technologie doit être replacée derrière un problème client ou opérationnel. Une innovation technique sans accès au marché ni modèle économique n’est pas une proposition viable.'
      }
    ],
    recap:[
      'Distinguer incertitude et risque.',
      'Comprendre causation et effectuation.',
      'Visualiser le modèle d’affaires et ses dépendances.',
      'Transformer les intuitions en hypothèses testables.',
      'Mesurer apprentissage, usage, rétention et économie unitaire.',
      'Traiter les partenariats comme ressources et dépendances.'
    ],
    examTips:[
      'Ne pas citer l’effectuation comme synonyme d’improvisation.',
      'Relier chaque test à une hypothèse précise.',
      'Dans un Business Model Canvas, expliquer les liens entre blocs plutôt que remplir neuf cases.',
      'Pour une start-up, ne pas confondre innovation technologique et validation du marché.'
    ],
    sources:[
      {type:'Académique',name:'Sarasvathy — Causation and Effectuation (2001)',url:'https://journals.aom.org/doi/10.5465/AMR.2001.4378020'},
      {type:'Ouvrage',name:'Osterwalder & Pigneur — Business Model Generation',url:'https://www.wiley-vch.de/en/areas-interest/finance-economics-law/business-management-13ba/general-introductory-business-management-13ba0/business-model-generation-978-0-470-87641-1'},
      JURY
    ]
  })
}
