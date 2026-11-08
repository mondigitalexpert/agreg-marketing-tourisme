import { course, JURY } from '../courseHelpers'

export const methodCourses = {
  'cours|Marketing international': course({
    title:'Marketing international : choisir les marchés, entrer, adapter et coordonner',
    intro:'Le marketing international ne consiste pas à reproduire à l’étranger un mix conçu pour le marché domestique. Il faut sélectionner les marchés, choisir un mode d’entrée, comprendre les différences institutionnelles et culturelles, puis arbitrer entre standardisation et adaptation.',
    objectives:[
      'Évaluer l’attractivité et l’accessibilité d’un marché étranger.',
      'Comparer les principaux modes d’entrée.',
      'Arbitrer standardisation et adaptation du mix.',
      'Comprendre les enjeux culturels sans tomber dans les stéréotypes.',
      'Relier prix, distribution, communication et risque international.'
    ],
    keyPoints:[
      'Le potentiel d’un pays doit être croisé avec le risque, la concurrence et la capacité de l’entreprise à y opérer.',
      'Le mode d’entrée détermine niveau de contrôle, besoin d’investissement, vitesse et risque.',
      'Standardiser réduit certains coûts mais peut réduire la pertinence locale.',
      'Adapter ne signifie pas tout modifier : l’entreprise peut standardiser certains éléments et localiser d’autres.',
      'Les différences culturelles sont des variables d’analyse, pas des étiquettes individuelles.',
      'Pour les services touristiques, la distribution internationale et les marchés émetteurs sont souvent aussi importants que l’implantation physique.'
    ],
    sections:[
      {
        heading:'1. Pourquoi internationaliser le marketing ?',
        text:'Les motivations peuvent être croissance, saturation du marché domestique, suivi de clients, accès à des ressources, diversification du risque, économies d’échelle ou valorisation d’une marque. L’internationalisation n’est pertinente que si l’organisation dispose d’un avantage ou d’une proposition de valeur transférable.'
      },
      {
        heading:'2. Sélection des marchés',
        text:'Une première sélection peut combiner taille du marché, croissance, pouvoir d’achat, accessibilité, distance, réglementation, intensité concurrentielle, risque politique et compatibilité avec l’offre. Une approche en deux temps — présélection macro puis étude détaillée — évite de comparer tous les pays avec la même profondeur.'
      },
      {
        heading:'3. Modes d’entrée',
        text:'Les principaux modes d’entrée se distinguent par contrôle, investissement et risque.',
        bullets:[
          'Export direct ou indirect : investissement limité mais contrôle variable.',
          'Agent ou distributeur : accès au marché via un intermédiaire local.',
          'Licence : transfert de droits d’utilisation contre rémunération.',
          'Franchise : transfert d’un concept et d’un système d’exploitation.',
          'Alliance ou joint-venture : partage de ressources et de contrôle.',
          'Filiale : contrôle élevé mais investissement et exposition plus importants.'
        ]
      },
      {
        heading:'4. Standardisation ou adaptation',
        text:'La standardisation peut produire économies d’échelle, cohérence de marque et efficacité opérationnelle. L’adaptation augmente la pertinence lorsque goûts, usages, langues, réglementation, infrastructures ou concurrence diffèrent. La plupart des stratégies combinent les deux.'
      },
      {
        heading:'5. Produit et marque à l’international',
        text:'L’entreprise doit décider quels attributs, formats, services, noms ou preuves peuvent être conservés. Les contraintes réglementaires, linguistiques ou culturelles peuvent imposer des adaptations. La marque doit rester reconnaissable tout en évitant des associations négatives ou incompréhensibles.'
      },
      {
        heading:'6. Prix international',
        text:'Le prix est affecté par coûts logistiques, fiscalité, change, pouvoir d’achat, concurrence, marges des intermédiaires et perception locale de la valeur. Une simple conversion du prix domestique est rarement suffisante.',
        bullets:[
          'Effet de change et volatilité.',
          'Structure de taxes et droits.',
          'Coûts d’importation et de distribution.',
          'Écart de pouvoir d’achat.',
          'Risque d’arbitrage entre marchés.'
        ]
      },
      {
        heading:'7. Communication interculturelle',
        text:'Les symboles, références, humour, rapport au temps ou à l’autorité peuvent varier. Les modèles culturels, notamment ceux d’Hofstede, donnent des dimensions comparatives à l’échelle des pays mais doivent être utilisés avec prudence : ils décrivent des tendances agrégées et ne prédisent pas le comportement d’un individu.'
      },
      {
        heading:'8. Distribution internationale',
        text:'L’accès au client dépend de la structure locale de distribution, des plateformes, des partenaires, des règles et de la logistique. Pour les services touristiques, il faut également raisonner en marchés émetteurs, prescripteurs, agences, tour-opérateurs, OTA et visibilité numérique.'
      },
      {
        heading:'9. Incoterms : place dans le programme',
        text:'Les Incoterms définissent la répartition de certaines obligations, coûts et risques entre vendeur et acheteur dans les échanges de marchandises. Ils sont utiles pour le marketing international de biens ; leur rôle est beaucoup plus limité dans un service touristique pur. Il faut donc les mobiliser uniquement lorsque le cas concerne un flux de biens.'
      },
      {
        heading:'10. Application destination touristique',
        text:'Une destination française ciblant deux marchés émetteurs peut conserver son identité de marque tout en adaptant choix des canaux, langue, calendrier, arguments, partenariats et parfois offre. L’analyse doit intégrer accessibilité, saisonnalité et habitudes de réservation.'
      }
    ],
    recap:[
      'Sélectionner les marchés avant de penser au mix.',
      'Choisir le mode d’entrée selon contrôle, risque et ressources.',
      'Arbitrer standardisation et adaptation par composante.',
      'Utiliser les modèles culturels avec prudence.',
      'Intégrer change, fiscalité et distribution au prix.',
      'En tourisme, raisonner aussi par marché émetteur.'
    ],
    examTips:[
      'Éviter les généralisations culturelles du type « les consommateurs japonais sont… ».',
      'Justifier chaque adaptation par une différence observée ou probable.',
      'Ne pas recommander une implantation lourde sans analyser ressources et risque.',
      'Ne mobiliser les Incoterms que dans les situations où ils sont réellement pertinents.'
    ],
    sources:[
      {type:'Ouvrage',name:'Hofstede — Culture’s Consequences',url:'https://us.sagepub.com/en-us/nam/cultures-consequences/book665'},
      JURY
    ]
  }),

  'cours|Études marketing': course({
    title:'Études marketing : transformer une question de décision en dispositif de recherche',
    intro:'Une étude marketing ne commence pas par un questionnaire. Elle commence par une décision à éclairer. La démarche consiste à formuler la problématique, identifier les informations nécessaires, choisir une méthode, construire un échantillon, collecter des données, les analyser puis traduire les résultats en implications managériales.',
    objectives:[
      'Distinguer question de gestion et question d’étude.',
      'Choisir entre données secondaires, qualitatif, quantitatif et expérimentation.',
      'Construire un échantillonnage cohérent.',
      'Concevoir un questionnaire limitant les biais.',
      'Évaluer validité, fiabilité et limites des résultats.'
    ],
    keyPoints:[
      'Une étude utile répond à une décision explicite.',
      'Les données secondaires doivent être évaluées avant de lancer une collecte coûteuse.',
      'Le qualitatif explore significations et mécanismes ; le quantitatif mesure et compare.',
      'Un échantillon important n’est pas forcément représentatif.',
      'Une question mal formulée produit une mesure fragile, même avec beaucoup de répondants.',
      'Corrélation, association ou différence statistique ne prouvent pas automatiquement une causalité.'
    ],
    sections:[
      {
        heading:'1. De la question managériale à la question d’étude',
        text:'La question managériale porte sur la décision : faut-il repositionner, modifier un prix, améliorer un parcours, cibler un segment ? La question d’étude précise les informations nécessaires pour décider. Cette traduction évite de collecter des données sans usage.',
        example:'Question managériale : « Faut-il investir dans le canal direct ? » Question d’étude : « Quels facteurs expliquent le choix OTA/direct, quel est leur poids relatif et quels freins sont modifiables ? »'
      },
      {
        heading:'2. Recherche documentaire et données secondaires',
        text:'Avant toute enquête, il faut examiner les données internes et externes existantes. Leur qualité dépend de la source, de la méthode, de la date, du périmètre et de la comparabilité.',
        bullets:[
          'Données internes : ventes, CRM, trafic, tickets, réclamations.',
          'Statistiques publiques : Insee, Eurostat, Banque de France.',
          'Panels et études professionnelles.',
          'Publications scientifiques.',
          'Données de plateforme et open data.'
        ]
      },
      {
        heading:'3. Études qualitatives',
        text:'Le qualitatif cherche à comprendre représentations, motivations, pratiques et mécanismes. Il convient particulièrement à une phase exploratoire, un sujet peu connu ou une expérience complexe.',
        bullets:[
          'Entretien semi-directif : approfondir une expérience ou un raisonnement.',
          'Focus group : observer interactions et représentations collectives.',
          'Observation : étudier comportements dans leur contexte.',
          'Netnographie / analyse de contenus : explorer discours et communautés en ligne.'
        ]
      },
      {
        heading:'4. Échantillonnage qualitatif',
        text:'L’objectif n’est pas la représentativité statistique mais la richesse et la diversité pertinentes des situations. On recherche souvent une saturation analytique : les nouveaux entretiens apportent de moins en moins d’éléments nouveaux. Le nombre d’entretiens dépend donc de l’hétérogénéité du terrain et de la profondeur attendue.'
      },
      {
        heading:'5. Études quantitatives',
        text:'Le quantitatif permet d’estimer des fréquences, comparer des groupes, mesurer des relations et parfois tester des hypothèses. La qualité dépend autant de l’échantillon et des mesures que du nombre de réponses.'
      },
      {
        heading:'6. Échantillonnage quantitatif',
        text:'Les méthodes probabilistes donnent à chaque unité une probabilité connue d’être sélectionnée, ce qui facilite l’inférence. Les méthodes par quotas ou convenance sont courantes mais imposent davantage de prudence.',
        bullets:[
          'Aléatoire simple.',
          'Stratifié.',
          'Par grappes.',
          'Quotas.',
          'Convenance / auto-sélection.'
        ]
      },
      {
        heading:'7. Construire un questionnaire',
        text:'Les questions doivent être compréhensibles, non ambiguës et ne pas induire la réponse. L’ordre peut influencer les réponses ; les échelles doivent être cohérentes ; les modalités doivent être exhaustives et mutuellement exclusives lorsque c’est nécessaire.',
        bullets:[
          'Éviter les doubles questions : « satisfait du prix et du service ? »',
          'Éviter les formulations orientées ou culpabilisantes.',
          'Limiter la longueur et les efforts cognitifs.',
          'Prétester sur quelques personnes.',
          'Prévoir les modalités « autre » ou « non concerné » si nécessaire.'
        ]
      },
      {
        heading:'8. Mesurer un construit',
        text:'Certaines notions ne sont pas directement observables : satisfaction, confiance, attitude ou image. Elles sont approchées par plusieurs items. La fiabilité concerne la cohérence de la mesure ; la validité concerne sa capacité à mesurer réellement le concept visé.'
      },
      {
        heading:'9. Expérimentation et causalité',
        text:'Pour tester un effet causal, l’expérimentation cherche à isoler l’effet d’une variable en comparant des groupes dans des conditions contrôlées. Les tests A/B sont une forme fréquente en digital. Leur interprétation exige taille suffisante, durée pertinente et absence de changements simultanés majeurs.'
      },
      {
        heading:'10. Analyse et restitution',
        text:'Le rapport doit répondre à la question initiale, pas simplement présenter tous les tableaux. Il distingue résultats, interprétations et limites. Une différence statistique peut être faible en importance managériale ; inversement une différence importante peut manquer de précision si l’échantillon est faible.'
      },
      {
        heading:'11. Éthique et données personnelles',
        text:'Une étude doit limiter les données collectées, informer les participants et respecter le cadre applicable. Une base de recherche marketing n’autorise pas automatiquement une réutilisation pour prospection. La finalité doit être claire.'
      },
      {
        heading:'12. Application tourisme',
        text:'Pour comprendre une baisse de réservation directe, un dispositif robuste peut combiner analytics, entretiens clients, observation du processus, analyse d’avis et enquête quantitative. Chaque source répond à une question différente et les résultats peuvent être triangulés.'
      }
    ],
    recap:[
      'Commencer par la décision à éclairer.',
      'Exploiter les données existantes avant de collecter.',
      'Choisir qualitatif ou quantitatif selon la question.',
      'Distinguer taille et représentativité de l’échantillon.',
      'Prétester les questionnaires.',
      'Séparer résultat, interprétation et causalité.'
    ],
    examTips:[
      'Ne jamais proposer « faire une enquête » sans préciser objectif, population, méthode et variables.',
      'Expliquer pourquoi une méthode est adaptée.',
      'Distinguer une fréquence observée d’une généralisation à la population.',
      'Mentionner les limites principales plutôt que présenter l’étude comme parfaite.'
    ],
    sources:[
      {type:'Officiel',name:'Insee — Méthodes et qualité statistiques',url:'https://www.insee.fr/fr/information/2387611',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Statistiques & décision': course({
    title:'Statistiques et aide à la décision : calculer, tester et interpréter',
    intro:'Le programme 2027 inclut statistiques descriptives, analyse de données, prévision, tests, probabilités, recherche opérationnelle et outils de décision. À l’agrégation, le calcul n’est jamais une fin : il faut choisir l’outil adapté, effectuer correctement le calcul, puis traduire le résultat en décision.',
    objectives:[
      'Maîtriser les indicateurs descriptifs essentiels.',
      'Calculer taux, indices, parts de marché et ratios marketing.',
      'Comprendre dispersion, corrélation et régression.',
      'Lire probabilités, intervalles de confiance et tests.',
      'Interpréter les résultats dans un contexte de décision.'
    ],
    keyPoints:[
      'Une moyenne sans dispersion peut masquer des populations très différentes.',
      'Un taux d’évolution dépend d’une base et d’une période explicites.',
      'Corrélation ne signifie pas causalité.',
      'Un test statistique confronte les données à une hypothèse ; il ne prouve pas une théorie de manière absolue.',
      'La significativité statistique n’est pas la même chose que l’importance managériale.',
      'Le rapport du jury 2025 insiste sur la maîtrise et l’interprétation des calculs.'
    ],
    sections:[
      {
        heading:'1. Statistiques descriptives',
        text:'Les statistiques descriptives résument une série. Le choix dépend du type de variable et de la distribution.',
        bullets:[
          'Moyenne : sensible aux valeurs extrêmes.',
          'Médiane : partage la série en deux et résiste mieux aux extrêmes.',
          'Mode : valeur la plus fréquente.',
          'Étendue : maximum – minimum.',
          'Variance et écart-type : dispersion autour de la moyenne.',
          'Quartiles : position dans la distribution.'
        ]
      },
      {
        heading:'2. Taux et indices',
        text:'Les taux doivent toujours préciser numérateur, dénominateur et période.',
        formula:'Taux d’évolution = (Valeur finale – Valeur initiale) / Valeur initiale × 100.',
        bullets:[
          'Part de marché = ventes entreprise / ventes marché.',
          'Taux de conversion = conversions / opportunités ou visites pertinentes.',
          'Taux de rétention = clients maintenus / clients du cohort de départ.',
          'Indice base 100 = valeur période / valeur de base × 100.'
        ]
      },
      {
        heading:'3. Ratios marketing et tourisme',
        text:'Les ratios permettent de comparer des situations de taille différente mais ne remplacent pas l’analyse économique.',
        formula:'ADR = revenu chambres / chambres vendues. Taux d’occupation = chambres vendues / chambres disponibles. RevPAR = revenu chambres / chambres disponibles = ADR × taux d’occupation.',
        example:'Deux hôtels peuvent avoir le même RevPAR avec des combinaisons prix/occupation différentes. Il faut alors regarder coûts, capacité, mix clients et marge.'
      },
      {
        heading:'4. Probabilités',
        text:'Une probabilité mesure l’incertitude d’un événement dans un cadre défini. Les lois binomiale, Poisson ou normale servent de modèles dans certaines situations. Le choix dépend des hypothèses : indépendance, nombre d’essais, fréquence, continuité, etc.'
      },
      {
        heading:'5. Échantillonnage et intervalle de confiance',
        text:'Un estimateur calculé sur un échantillon varie d’un échantillon à l’autre. L’intervalle de confiance exprime une incertitude autour de l’estimation selon un niveau de confiance et des hypothèses. Plus l’échantillon augmente, plus l’incertitude d’échantillonnage tend à diminuer, toutes choses égales par ailleurs.'
      },
      {
        heading:'6. Logique d’un test statistique',
        text:'Un test part d’une hypothèse nulle H0 et mesure dans quelle mesure les données sont compatibles avec elle. La p-value représente, sous H0 et les hypothèses du test, la probabilité d’obtenir un résultat au moins aussi extrême. Elle ne donne pas la probabilité que H0 soit vraie.',
        bullets:[
          'Erreur de type I : rejeter H0 alors qu’elle est vraie.',
          'Erreur de type II : ne pas rejeter H0 alors qu’elle est fausse.',
          'Seuil alpha : risque de type I accepté dans la procédure.'
        ]
      },
      {
        heading:'7. Comparer des groupes',
        text:'Selon le type de variable, la distribution et le plan d’étude, on peut comparer des moyennes, proportions ou distributions. L’outil doit être choisi après examen des conditions d’application. Le résultat doit ensuite être interprété en taille d’effet et importance pratique.'
      },
      {
        heading:'8. Corrélation et régression',
        text:'La corrélation mesure une association, souvent linéaire. Une régression modélise une variable à partir d’une ou plusieurs autres. Une relation statistique peut être due à une variable omise, une causalité inverse ou une coïncidence. Elle doit donc être interprétée avec le contexte et le design de l’étude.'
      },
      {
        heading:'9. Prévision',
        text:'Les séries temporelles peuvent comporter tendance, saisonnalité, cycles et bruit. Une prévision extrapole à partir de structures observées ; elle devient fragile lors de rupture de tendance. Il faut comparer prévision et réalisé et suivre l’erreur.'
      },
      {
        heading:'10. Segmentation et analyse multivariée',
        text:'Des outils de classification, analyse factorielle ou réduction de dimension peuvent aider à explorer des structures dans les données. Au concours, il faut surtout comprendre ce que produit l’outil et ses limites : les groupes ou axes sont des constructions à interpréter.'
      },
      {
        heading:'11. Aide à la décision',
        text:'Les outils quantitatifs servent à arbitrer : scénarios, coûts, probabilités, seuils, matrices de décision, optimisation ou planification. Le modèle simplifie la réalité ; les hypothèses doivent être visibles.'
      },
      {
        heading:'12. Méthode de copie',
        text:'Toujours écrire la formule ou la logique, remplacer par les données, calculer avec unité, puis interpréter. Une réponse qui donne seulement « 12,4 % » reste incomplète : il faut dire ce que ce résultat change pour la décision.'
      }
    ],
    recap:[
      'Décrire avant d’inférer.',
      'Préciser bases, périodes et unités.',
      'Lire moyenne avec dispersion.',
      'Ne pas confondre corrélation et causalité.',
      'Comprendre la logique du test au-delà de la p-value.',
      'Conclure chaque calcul en langage de gestion.'
    ],
    examTips:[
      'Vérifier l’ordre de grandeur avant de rendre un calcul.',
      'Toujours donner une unité et une période.',
      'Si une hypothèse statistique n’est pas vérifiable dans le cas, le signaler.',
      'Ne pas surinterpréter une différence statistiquement significative mais économiquement faible.'
    ],
    sources:[
      {type:'Officiel',name:'Insee — Définitions, méthodes et qualité',url:'https://www.insee.fr/fr/information/2387611',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Droit appliqué au marketing': course({
    title:'Droit appliqué au marketing : communiquer, vendre et exploiter les données dans un cadre légal',
    intro:'Le marketing agit dans un environnement juridique dense : pratiques commerciales, information du consommateur, prix, contrats, e-commerce, prospection, données personnelles, influence, marques et plateformes. Le bon réflexe est d’identifier la pratique marketing, la règle applicable et le risque juridique.',
    objectives:[
      'Identifier les principales règles de protection du consommateur.',
      'Sécuriser prix, promotions et allégations.',
      'Comprendre les bases du e-commerce et de la prospection.',
      'Appliquer les principes essentiels du RGPD et des traceurs.',
      'Repérer les risques liés à l’influence, aux avis, aux marques et aux plateformes.'
    ],
    keyPoints:[
      'Une pratique commerciale peut être trompeuse par action ou omission.',
      'L’information précontractuelle doit permettre au consommateur de décider en connaissance de cause.',
      'Les annonces de réduction de prix obéissent à un prix de référence encadré.',
      'La prospection électronique BtoC exige en principe un consentement préalable, avec certaines exceptions.',
      'Les traceurs non strictement nécessaires nécessitent en principe un consentement préalable valable.',
      'Le marketing d’influence rémunéré doit rendre son intention commerciale explicite.',
      'Les données personnelles doivent être collectées pour des finalités déterminées et de manière proportionnée.'
    ],
    sections:[
      {
        heading:'1. Pratiques commerciales trompeuses',
        text:'Une pratique peut être trompeuse lorsqu’elle contient de fausses informations, présente de manière ambiguë des éléments essentiels ou omet une information substantielle. Le marketing doit donc être capable de prouver les allégations objectives qu’il avance.'
      },
      {
        heading:'2. Information du consommateur',
        text:'Avant la conclusion d’un contrat, le professionnel doit fournir certaines informations sur les caractéristiques, prix, identité, conditions et garanties selon le contexte. L’enjeu marketing est de concilier clarté et efficacité sans masquer des conditions importantes.'
      },
      {
        heading:'3. Affichage et information sur les prix',
        text:'Le prix doit être communiqué de manière lisible et non ambiguë. Les frais obligatoires doivent être intégrés ou clairement présentés selon les règles applicables. Les pratiques de type dark patterns peuvent exposer à des risques si elles manipulent le choix du consommateur.'
      },
      {
        heading:'4. Réductions de prix',
        text:'Lorsqu’un professionnel annonce une réduction de prix, la référence est en principe le prix le plus bas pratiqué par le professionnel au cours des trente jours précédents, avec des règles spécifiques pour certains cas. Le marketing doit conserver la traçabilité du prix de référence.'
      },
      {
        heading:'5. E-commerce',
        text:'La vente à distance impose information précontractuelle, confirmation et règles relatives au droit de rétractation lorsque celui-ci s’applique. Certaines prestations liées à l’hébergement, au transport ou aux loisirs à date déterminée peuvent relever d’exceptions : il faut vérifier le régime précis du service plutôt que généraliser.'
      },
      {
        heading:'6. Prospection électronique',
        text:'Pour les particuliers, l’e-mail ou SMS commercial exige en principe un consentement préalable. Une exception existe notamment pour certains clients existants lorsque la prospection porte sur des produits ou services analogues et qu’une opposition simple est proposée. Les règles diffèrent dans certains contextes professionnels.'
      },
      {
        heading:'7. RGPD : principes fondamentaux',
        text:'Le RGPD impose notamment licéité, loyauté, transparence, finalité déterminée, minimisation, exactitude, durée de conservation limitée et sécurité. Le responsable de traitement doit pouvoir justifier la base légale et informer les personnes.',
        bullets:[
          'Consentement : une base légale parmi plusieurs, pas la seule.',
          'Intérêt légitime : nécessite une mise en balance selon le traitement.',
          'Contrat : utilisable lorsque le traitement est nécessaire à l’exécution du contrat.',
          'Droits : accès, rectification, effacement, opposition et autres selon le cas.'
        ]
      },
      {
        heading:'8. Cookies et traceurs',
        text:'Les traceurs strictement nécessaires au service demandé peuvent relever d’une exemption ; de nombreux traceurs publicitaires ou de mesure non exemptée nécessitent un consentement préalable. Le refus doit être aussi simple que l’acceptation lorsque le consentement est requis.'
      },
      {
        heading:'9. Influence et contenus commerciaux',
        text:'Lorsqu’un créateur reçoit une contrepartie et fait la promotion d’un bien, service ou cause, l’intention commerciale doit être identifiable. Le professionnel et l’influenceur doivent aussi respecter les règles propres aux secteurs et produits concernés.'
      },
      {
        heading:'10. Avis en ligne et réputation',
        text:'Lorsqu’un professionnel présente des avis, il doit respecter les obligations applicables à leur information et ne pas recourir à de faux avis ou pratiques trompeuses. Les avis sponsorisés ou incités nécessitent une vigilance particulière sur la transparence.'
      },
      {
        heading:'11. Marques et propriété intellectuelle',
        text:'La marque protège un signe pour des produits ou services déterminés lorsqu’elle est valablement enregistrée et disponible. Le choix d’un nom, slogan ou identité visuelle doit intégrer recherche d’antériorité et risque de confusion. Les contenus utilisés en communication peuvent également être protégés par le droit d’auteur.'
      },
      {
        heading:'12. Cas actuel : données et personnalisation',
        text:'Les décisions récentes de la CNIL montrent que personnalisation et entraînement algorithmique ne dispensent pas de respecter les règles relatives aux traceurs et aux données. L’innovation marketing doit donc intégrer la conformité dès la conception, et non comme contrôle final.'
      },
      {
        heading:'13. Application tourisme',
        text:'CRM hôtelier, retargeting, programme de fidélité, réservation en ligne, OTA, avis clients, promotions et influenceurs peuvent mobiliser simultanément plusieurs règles. Une recommandation marketing crédible doit identifier les contraintes juridiques au même titre que les contraintes économiques.'
      }
    ],
    recap:[
      'Identifier la pratique marketing avant de chercher la règle.',
      'Éviter toute allégation non prouvable ou information essentielle masquée.',
      'Tracer les prix de référence lors des promotions.',
      'Distinguer prospection, exécution du contrat et personnalisation.',
      'Intégrer RGPD et cookies dès la conception.',
      'Vérifier les régimes spécifiques des services touristiques.'
    ],
    examTips:[
      'Ne pas écrire « RGPD = consentement » : plusieurs bases légales existent.',
      'Ne pas généraliser le droit de rétractation à toutes les prestations touristiques.',
      'Appuyer une recommandation juridique sur une source officielle.',
      'Dans un cas, relier risque juridique et conséquence marketing : confiance, réputation, coût, expérience.'
    ],
    sources:[
      {type:'Officiel',name:'CNIL — Prospection commerciale électronique',url:'https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel',checked:'08/11/2026'},
      {type:'Officiel',name:'CNIL — Cookies et autres traceurs',url:'https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi',checked:'08/11/2026'},
      {type:'Officiel',name:'DGCCRF — Annonces de réduction de prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/annonces-de-reduction-de-prix-ce-que-vous-devez-savoir',checked:'08/11/2026'},
      {type:'Officiel',name:'Économie.gouv.fr — Devoirs des influenceurs',url:'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs',checked:'08/11/2026'},
      JURY
    ]
  })
}
