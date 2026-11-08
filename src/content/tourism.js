import { tourismPedagogy } from './pedagogyMeta'
import { tourismCorrections } from './corrections'
const p=(label,title,intro,keyPoints,sections,sources)=>({label,title,intro,keyPoints,sections,sources})
const INSEE_HOTEL={type:'Officiel',name:'Insee — Parc et fréquentation des hôtels, données 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'}
const ATOUT={type:'Officiel',name:'Atout France — Conjoncture et dernières tendances',url:'https://www.atout-france.fr/fr/informations/conjoncture-et-dernieres-tendances',checked:'08/11/2026'}

export const tourismPages = {
  'tourisme|Fondamentaux': p(
    'Application tourisme',
    'Fondamentaux du marché touristique',
    'Le tourisme est un système d’activités interdépendantes : hébergement, restauration, transport, loisirs, culture, distribution et services publics. Les indicateurs doivent toujours être lus avec leur champ statistique.',
    [
      'En 2025, les hébergements collectifs en France ont enregistré environ 465,4 millions de nuitées.',
      'L’hôtellerie représente 220,2 millions de nuitées en 2025 ; les autres formes d’hébergement ont des dynamiques différentes.',
      'Les nuitées ne couvrent pas les excursionnistes, l’ensemble du non-marchand ni toutes les dépenses touristiques.',
      'En 2026, Atout France signale une activité encore bien orientée mais avec des arbitrages budgétaires et des rythmes de croissance plus modérés.',
      'Le marketing touristique doit articuler demande, capacité, saisonnalité, accès, image, prix et expérience.'
    ],
    [
      {heading:'Lire correctement les données',text:'Toujours préciser année, territoire, type d’hébergement, population observée et caractère provisoire ou définitif des chiffres.'},
      {heading:'Exercice',text:'Compare une donnée nationale, une donnée régionale et une donnée d’entreprise. Explique pourquoi elles ne sont pas directement interchangeables.'}
    ],
    [
      {type:'Officiel',name:'Insee — Hébergements collectifs de tourisme, données 2025',url:'https://www.insee.fr/fr/statistiques/2015395',checked:'08/11/2026'},
      ATOUT
    ]
  ),

  'tourisme|Hôtellerie': p(
    'Application sectorielle',
    'Hôtellerie : segmentation, marques et distribution',
    'L’hôtellerie concentre les problématiques de capacité périssable, marque, expérience, prix, distribution et fidélité. C’est un terrain privilégié pour mobiliser les concepts de marketing des services.',
    [
      'En 2025, l’Insee recense en moyenne mensuelle 14 886 hôtels pour 618 200 chambres ou appartements.',
      'Le taux d’occupation moyen est de 62,3 % ; les 4 étoiles atteignent 68,1 %.',
      'Le marché oppose et combine indépendants, chaînes, franchises, management contracts et plateformes de distribution.',
      'Accor a réalisé 5,639 Md€ de chiffre d’affaires en 2025 et affichait plus de 45 marques en juillet 2026.',
      'La fidélité, la réservation directe et la maîtrise de la donnée client sont des enjeux stratégiques de distribution.'
    ],
    [
      {heading:'Cas actuel — Accor',text:'Au premier semestre 2026, Accor publie 2,760 Md€ de chiffre d’affaires et un RevPAR en hausse de 2,2 % par rapport au S1 2025. Ces données permettent de travailler performance, portefeuille de marques et stratégie de croissance.'},
      {heading:'Cas historique de vos ressources',text:'Les documents Accor et OKKO datés de 2015 restent utiles pour étudier personnalisation, déstandardisation et rôle des OTA, mais ils doivent être explicitement traités comme historiques.'},
      {heading:'Exercice',text:'Propose une stratégie pour augmenter la part de réservation directe sans supprimer les OTA. Indique objectifs, leviers et KPI.'}
    ],
    [
      INSEE_HOTEL,
      {type:'Entreprise',name:'Accor — Résultats financiers 2026',url:'https://group.accor.com/fr/finance/financial-results',checked:'08/11/2026'},
      {type:'Entreprise',name:'Accor at a glance — juillet 2026',url:'https://assets.group.accor.com/yrj0orc8tx24/1gfnIc7BnVhT7xnnVrKMYj/cde89098605135e4610f1e2b48c855b2/Accor_Overview_JULY_2026.pdf',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Accor et digital.docx',note:'Article de 2015 — cas historique.'},
      {type:'Ressource fournie',name:'OKKO Hôtel.docx',note:'Article de 2015 — cas historique.'}
    ]
  ),

  'tourisme|Restauration': p(
    'Application sectorielle',
    'Restauration : valeur, expérience et rentabilité',
    'La restauration combine expérience, contraintes de capacité, coûts variables, rotation des tables, réputation et forte sensibilité aux arbitrages budgétaires des clients.',
    [
      'En hiver 2026, l’Insee observe une hausse de 9,8 % du chiffre d’affaires de la restauration par rapport à l’hiver 2025, pour des données 2026 encore provisoires.',
      'Les prix sont libres mais doivent être affichés clairement ; les prestations et suppléments doivent être transparents.',
      'La carte est à la fois outil de production, de marge, de positionnement et de communication.',
      'Le revenue management peut s’appliquer en intégrant prix, capacité, durée d’occupation des tables et créneaux.',
      'Avis, réservation en ligne et visibilité locale influencent directement acquisition et choix.'
    ],
    [
      {heading:'Attention à la conjoncture',text:'Les indicateurs nationaux peuvent évoluer différemment selon saison, territoire et type d’établissement. Une hausse de chiffre d’affaires ne signifie pas nécessairement une amélioration de marge.'},
      {heading:'Exercice',text:'Un restaurant touristique a une forte demande le week-end mais des marges faibles. Propose trois leviers qui n’impliquent pas tous une hausse de prix.'}
    ],
    [
      {type:'Officiel',name:'Insee — Saison touristique d’hiver 2026',url:'https://www.insee.fr/fr/statistiques/8983528',checked:'08/11/2026'},
      {type:'Officiel',name:'DGCCRF — Restaurants : droits et obligations',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/restaurants-droits-et-obligations-des-professionnels',checked:'08/11/2026'},
      {type:'Académique',name:'Kimes et al. — Restaurant Revenue Management',url:'https://ecommons.cornell.edu/entities/publication/1c996dfd-35f2-46d4-9a50-880c145f02a8'}
    ]
  ),

  'tourisme|Destinations & territoires': p(
    'Application sectorielle',
    'Destinations : attractivité, image et gestion des flux',
    'Une destination est une offre collective. Sa performance dépend de l’accessibilité, des expériences, de l’image, des acteurs privés et publics et de la capacité à gérer les flux dans le temps et l’espace.',
    [
      'L’image de destination résulte de la communication mais aussi de l’expérience, des médias, des avis et des représentations sociales.',
      'Les organismes de gestion de destination ne contrôlent qu’une partie de l’offre et doivent coordonner des parties prenantes.',
      'La saisonnalité peut être traitée par diversification des offres, événements, marchés cibles et tarification.',
      'Les données de fréquentation doivent être complétées par indicateurs de dépenses, satisfaction, pression locale et retombées.',
      'Le branding territorial doit rester cohérent avec l’identité et la capacité réelle d’accueil.'
    ],
    [
      {heading:'Contexte 2026',text:'Atout France observe un meilleur étalement des séjours entre juin et septembre et des arbitrages budgétaires plus visibles chez la clientèle française.'},
      {heading:'Exercice',text:'Choisis une destination littorale et propose un plan pour réduire la concentration en août sans dégrader le positionnement.'}
    ],
    [
      ATOUT,
      {type:'Académique',name:'Hanna, Rowley & Keegan — Place and Destination Branding',url:'https://doi.org/10.1111/emre.12433'}
    ]
  ),

  'tourisme|Agences / TO / plateformes': p(
    'Application sectorielle',
    'Agences, tour-opérateurs et plateformes',
    'Les intermédiaires assemblent, distribuent, recommandent ou sécurisent la transaction. Leur valeur vient de l’audience, de l’information, de la comparaison et de la réduction des coûts de recherche, mais ils peuvent créer une dépendance.',
    [
      'Une agence ou un tour-opérateur ne joue pas le même rôle qu’une OTA ou une marketplace.',
      'Les plateformes gagnent en valeur avec l’échelle, les données et les effets de réseau.',
      'Booking Holdings a enregistré 186,1 Md$ de gross travel bookings et 1,2 milliard de nuitées réservées en 2025.',
      'Booking.com est soumis au Digital Markets Act en tant que gatekeeper pour son service d’intermédiation.',
      'La distribution doit être évaluée en coût net, contrôle de la donnée, accès au marché et capacité de fidélisation.'
    ],
    [
      {heading:'Enjeu concurrentiel',text:'Depuis novembre 2024, Booking.com ne peut plus imposer aux prestataires des clauses empêchant de proposer de meilleurs prix ou conditions sur d’autres canaux, au titre du DMA.'},
      {heading:'Exercice',text:'Pour un hôtel indépendant, compare OTA, agence traditionnelle et vente directe selon audience, coût, données, contrôle, risque et fidélisation.'}
    ],
    [
      {type:'Entreprise',name:'Booking Holdings — Factsheet 2025',url:'https://www.bookingholdings.com/about/factsheet/',checked:'08/11/2026'},
      {type:'Officiel UE',name:'Commission européenne — Booking.com et Digital Markets Act',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked:'08/11/2026'}
    ]
  ),

  'tourisme|Expérience touristique': p(
    'Application sectorielle',
    'Expérience touristique et parcours client',
    'Le voyage est une expérience étendue avant, pendant et après le séjour. Le marketing doit donc piloter la cohérence d’un ensemble de moments, souvent produits par plusieurs organisations.',
    [
      'L’expérience commence avant l’achat par inspiration, recherche et anticipation.',
      'Le parcours comprend des points de contact maîtrisés, partenaires, clients et environnements non contrôlés.',
      'Pine et Gilmore mettent en avant la mise en scène d’expériences mémorables comme niveau de différenciation.',
      'Lemon et Verhoef insistent sur l’évolution de l’expérience dans le temps et entre canaux.',
      'Une défaillance peut être compensée par une récupération de service rapide et juste.'
    ],
    [
      {heading:'Tourisme',text:'Aéroport, train, hôtel, restaurant, site culturel et application peuvent tous influencer le souvenir final sans appartenir à la même organisation.'},
      {heading:'Exercice',text:'Cartographie un city-break de 48 heures. Repère cinq “moments de vérité” et propose un indicateur pour chacun.'}
    ],
    [
      {type:'Académique',name:'Pine & Gilmore — Welcome to the Experience Economy',url:'https://hbr.org/1998/07/welcome-to-the-experience-economy'},
      {type:'Académique',name:'Lemon & Verhoef — Customer Experience Throughout the Customer Journey',url:'https://doi.org/10.1509/jm.15.0420'}
    ]
  ),

  'tourisme|Distribution & OTA': p(
    'Application sectorielle',
    'Distribution touristique et OTA',
    'Les OTA apportent visibilité et conversion mais modifient le partage de valeur et la maîtrise de la relation client. La question stratégique est moins “avec ou sans OTA” que “quel mix de canaux pour quel segment et à quel coût”.',
    [
      'Comparer les canaux sur coût total, conversion, audience, données, conditions et fidélisation.',
      'La réservation directe peut être soutenue par fidélité, contenu, CRM, avantages non tarifaires et expérience de réservation.',
      'Le DMA a interdit à Booking.com certaines pratiques de parité empêchant des conditions différentes sur d’autres canaux.',
      'Les plateformes doivent aussi respecter des obligations liées au DSA, notamment sur risques systémiques et transparence.',
      'La dépendance à une plateforme est un risque stratégique même lorsqu’elle apporte du volume.'
    ],
    [
      {heading:'Actualité 2026',text:'Le 21 octobre 2026, la Commission européenne a ouvert une procédure formelle visant Booking.com sur des risques liés aux annonces frauduleuses, au phishing et à la transparence de certains classements payants. L’ouverture ne préjuge pas du résultat final.'},
      {heading:'Exercice',text:'Propose un tableau de bord de distribution avec cinq KPI capables d’éviter une lecture uniquement fondée sur le nombre de réservations.'}
    ],
    [
      {type:'Officiel UE',name:'Commission européenne — DMA et Booking.com',url:'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en',checked:'08/11/2026'},
      {type:'Officiel UE',name:'Commission européenne — Procédure DSA Booking.com, 21 octobre 2026',url:'https://france.representation.ec.europa.eu/informations-et-evenements/informations/dsa-la-commission-enquete-sur-bookingcom-2026-10-21_fr',checked:'08/11/2026'}
    ]
  ),

  'tourisme|E-réputation': p(
    'Application sectorielle',
    'E-réputation, avis et confiance',
    'Dans le tourisme, l’expérience est difficile à évaluer avant consommation. Les avis, notes, photos et réponses des professionnels deviennent donc des signaux de qualité et des éléments de réduction du risque perçu.',
    [
      'Une note moyenne doit être lue avec volume, récence, dispersion et contenu des avis.',
      'Les avis extrêmes peuvent être utiles pour identifier les moments de friction, mais ne représentent pas toujours la majorité.',
      'Répondre à un avis sert autant les futurs lecteurs que l’auteur de l’avis.',
      'La gestion de réputation doit être connectée à l’amélioration opérationnelle et non limitée à la communication.',
      'Les avis artificiels ou présentations trompeuses posent des problèmes juridiques et de confiance.'
    ],
    [
      {heading:'Méthode',text:'Coder les avis par thèmes — accueil, propreté, prix, localisation, restauration, processus — permet de passer d’un score global à des causes actionnables.'},
      {heading:'Exercice',text:'Imagine 50 avis dont la note baisse alors que la satisfaction sur la chambre reste stable. Propose une méthode pour identifier le point de rupture.'}
    ],
    [
      {type:'Officiel',name:'DGCCRF — E-commerce : règles entre professionnels et consommateurs',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/e-commerce-les-regles-entre-professionnels-et-consommateurs',checked:'08/11/2026'},
      {type:'Académique',name:'Lemon & Verhoef — Customer journey et expérience',url:'https://doi.org/10.1509/jm.15.0420'}
    ]
  ),

  'tourisme|Revenue management': p(
    'Application sectorielle',
    'Revenue management : prix, capacité et demande',
    'Le revenue management consiste à piloter une capacité périssable en combinant segmentation de la demande, prévision, prix et contrôle de l’inventaire afin d’améliorer le revenu et la contribution.',
    [
      'Le cadre est particulièrement adapté aux capacités fixes ou relativement fixes et à une demande variable.',
      'Une chambre non vendue ce soir ne peut pas être stockée pour demain : l’inventaire est périssable.',
      'Les décisions portent sur niveaux de prix, restrictions, disponibilité, canaux et prévisions.',
      'Le RevPAR combine taux d’occupation et prix moyen chambre ; il ne mesure pas à lui seul la rentabilité totale.',
      'La perception de justice tarifaire est une limite importante à surveiller.'
    ],
    [
      {heading:'Référence',text:'Sheryl Kimes a contribué à formaliser le yield/revenue management dans l’hôtellerie et d’autres services à capacité contrainte.'},
      {heading:'Exercice',text:'Deux hôtels ont le même RevPAR avec des combinaisons prix/occupation différentes. Analyse les risques et opportunités de chaque modèle.'}
    ],
    [
      {type:'Académique',name:'Kimes — Yield Management: A Tool for Capacity-Constrained Service Firms',url:'https://ecommons.cornell.edu/entities/publication/08225911-1a4a-46d7-9c9d-849458fab0a9'},
      INSEE_HOTEL
    ]
  ),

  'tourisme|Fidélisation & CRM': p(
    'Application sectorielle',
    'Fidélisation, CRM et valeur client',
    'La fidélisation cherche à développer une relation rentable dans le temps. Elle ne se réduit pas aux points d’un programme : elle combine valeur, satisfaction, confiance, personnalisation et reconnaissance.',
    [
      'Satisfaction et fidélité sont liées mais ne sont pas équivalentes.',
      'Un CRM stratégique relie développement de la stratégie, création de valeur, intégration multicanale, information et mesure de performance.',
      'La donnée client doit servir un objectif clair et respecter les règles de protection des données.',
      'La valeur vie client aide à arbitrer coût d’acquisition et investissement de fidélisation.',
      'Un programme de fidélité doit créer une raison de revenir au-delà de la seule remise.'
    ],
    [
      {heading:'Cas actuel',text:'Accor indiquait en juin 2026 plus de 220 millions de membres pour son programme ALL Accor, ce qui montre l’importance stratégique prise par la plateforme de fidélité et l’écosystème de partenaires.'},
      {heading:'Exercice',text:'Conçois trois avantages de fidélité pour un hôtel qui ne soient pas des réductions de prix et indique le comportement recherché.'}
    ],
    [
      {type:'Académique',name:'Payne & Frow — A Strategic Framework for CRM',url:'https://doi.org/10.1509/jmkg.2005.69.4.167'},
      {type:'Académique',name:'Oliver — Whence Consumer Loyalty?',url:'https://doi.org/10.1177/00222429990634s105'},
      {type:'Entreprise',name:'Accor at a glance — juin 2026',url:'https://assets.group.accor.com/yrj0orc8tx24/1gfnIc7BnVhT7xnnVrKMYj/cde89098605135e4610f1e2b48c855b2/Accor_Overview_JULY_2026.pdf',checked:'08/11/2026'}
    ]
  ),

  'tourisme|Tourisme durable': p(
    'Application sectorielle',
    'Tourisme durable : promesse, preuve et arbitrages',
    'Le tourisme durable ne peut pas être traité comme un simple axe de communication. Il concerne mobilité, énergie, eau, biodiversité, flux, achats, accessibilité, emplois et acceptabilité locale.',
    [
      'Définir précisément l’impact étudié et éviter les allégations générales non démontrées.',
      'Mesurer des indicateurs opérationnels et comparer leur évolution.',
      'Distinguer réduction d’impact, compensation, certification et communication.',
      'L’intensité touristique peut aider à réfléchir à la pression exercée sur les territoires, avec les limites de son champ statistique.',
      'Les labels peuvent fournir des référentiels mais ne remplacent pas une analyse complète de la performance.'
    ],
    [
      {heading:'France',text:'Atout France pilote notamment les labels Destination d’excellence et Tourisme & Handicap, tandis que les entreprises développent leurs propres trajectoires environnementales.'},
      {heading:'Europe',text:'Eurostat a publié en 2026 des indicateurs harmonisés liés à la durabilité du tourisme, dont l’intensité touristique.'},
      {heading:'Exercice',text:'Évalue une promesse “séjour durable” avec cinq critères de preuve et identifie deux risques de greenwashing.'}
    ],
    [
      {type:'Officiel',name:'Atout France — Labels d’État du tourisme',url:'https://www.atout-france.fr/fr/labels-tourisme',checked:'08/11/2026'},
      {type:'Officiel UE',name:'Eurostat — Tourism nights 2025 et tourisme intensity',url:'https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20261016-1',checked:'08/11/2026'},
      {type:'Entreprise',name:'MSC Cruises — Sustainability Report 2025',url:'https://www.msccruises.com/int/sustainability',checked:'08/11/2026'}
    ]
  ),

  'tourisme|IA & nouvelles technologies': p(
    'Application sectorielle',
    'IA, data et nouvelles technologies dans le tourisme',
    'Les technologies émergentes modifient recherche d’information, conseil, personnalisation, gestion énergétique, opérations et visibilité des acteurs touristiques. Leur intérêt doit être évalué par cas d’usage et non par effet de mode.',
    [
      'France Tourisme Tech cite IA, data, IoT, réalité augmentée, jumeaux numériques, cybersécurité et blockchain parmi les technologies mobilisées.',
      'Les cas d’usage vont de l’expérience voyageur à la gestion des flux et de l’énergie.',
      'L’IA générative devient un outil de relation client et de production de contenus dans les organisations touristiques.',
      'La qualité des données, la protection des données et la gouvernance restent des prérequis.',
      'Il faut mesurer gain de temps, qualité, conversion ou coût plutôt que le simple nombre d’usages.'
    ],
    [
      {heading:'Actualité 2026',text:'Atout France a organisé plusieurs formations dédiées à l’IA pour les professionnels du tourisme et les conseillers en séjour.'},
      {heading:'Exercice',text:'Choisis un cas d’usage IA dans un office de tourisme. Définis utilisateur, problème, données, valeur attendue, risques et indicateur de succès.'}
    ],
    [
      {type:'Officiel',name:'DGE — France Tourisme Tech 2026',url:'https://www.entreprises.gouv.fr/espace-entreprises/appels-a-projets-et-appels-a-manifestation-d-interet/france-tourisme-tech-0',checked:'08/11/2026'},
      {type:'Officiel',name:'Atout France — IA pour les conseillers en séjour',url:'https://www.atout-france.fr/fr/catalogue/operations-carte/initiation-lusage-des-ia-pour-les-conseillers-en-sejour',checked:'08/11/2026'}
    ]
  ),

  'tourisme|Influence & réseaux sociaux': p(
    'Application sectorielle',
    'Influence, contenus et réseaux sociaux',
    'Le tourisme est particulièrement visuel et expérientiel, ce qui rend influence et contenus sociaux importants dans l’inspiration. L’efficacité dépend toutefois de la crédibilité, de l’adéquation avec la cible et de la transparence commerciale.',
    [
      'Distinguer portée, engagement, trafic, conversion et impact sur la marque.',
      'Le nombre d’abonnés ne suffit pas pour évaluer la qualité d’un partenariat.',
      'Le contenu des clients et créateurs peut rassurer mais aussi amplifier les écarts entre promesse et réalité.',
      'Les contreparties doivent être clairement signalées lorsque le contenu est commercial.',
      'Une campagne doit prévoir droits d’usage, mesure et gestion du risque réputationnel.'
    ],
    [
      {heading:'Exercice',text:'Compare un macro-influenceur et trois micro-créateurs pour promouvoir une destination hors saison. Propose un choix et des KPI.'}
    ],
    [
      {type:'Officiel',name:'Économie.gouv.fr — Devoirs des influenceurs',url:'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs',checked:'08/11/2026'},
      {type:'Académique',name:'Kannan & Li — Digital marketing framework',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006'}
    ]
  ),

  'tourisme|Luxe & tourisme': p(
    'Application sectorielle',
    'Luxe, hospitalité et création de valeur',
    'Le luxe touristique combine rareté, excellence de service, personnalisation, marque, expérience et forte exigence de cohérence. Le prix élevé n’est soutenable que si la valeur symbolique et vécue est crédible.',
    [
      'Le segment luxe est fortement dépendant de la réputation et de l’expérience de bout en bout.',
      'La personnalisation doit rester discrète, fiable et respectueuse de la vie privée.',
      'L’expérience peut intégrer hébergement, gastronomie, bien-être, mobilité et accès à des événements.',
      'Accor distingue une division Luxury & Lifestyle et indiquait 21 marques dans cet univers en juillet 2026.',
      'La montée en gamme exige cohérence entre design, personnel, processus, service et environnement de marque.'
    ],
    [
      {heading:'Cas actuel',text:'Au S1 2026, Accor indique une hausse de 8,5 % de l’EBITDA de sa division Luxury & Lifestyle à taux de change constant, malgré un contexte géopolitique perturbé dans certaines régions.'},
      {heading:'Exercice',text:'Propose trois éléments de preuve permettant de justifier une montée en gamme d’un établissement sans utiliser uniquement le décor ou le prix.'}
    ],
    [
      {type:'Entreprise',name:'Accor — Résultats semestriels 2026',url:'https://group.accor.com/en/news-stories/accor-half-year-2026-results',checked:'08/11/2026'},
      {type:'Entreprise',name:'Accor at a glance — juillet 2026',url:'https://assets.group.accor.com/yrj0orc8tx24/1gfnIc7BnVhT7xnnVrKMYj/cde89098605135e4610f1e2b48c855b2/Accor_Overview_JULY_2026.pdf',checked:'08/11/2026'}
    ]
  ),

  'tourisme|Événementiel': p(
    'Application sectorielle',
    'Événementiel touristique et désaisonnalisation',
    'L’événement peut attirer, prolonger le séjour, créer une raison de revisite et lisser la saisonnalité. Il doit cependant être évalué au-delà du nombre d’entrées.',
    [
      'Un événement peut renforcer image, fréquentation, panier moyen et retombées territoriales.',
      'La capacité, la sécurité et l’expérience de flux sont des composantes du produit.',
      'L’événementiel peut soutenir une stratégie de désaisonnalisation.',
      'Le succès doit intégrer satisfaction, revenus, coûts, réachat, retombées et externalités.',
      'La répétition d’un événement peut devenir un actif de marque.'
    ],
    [
      {heading:'Cas actuel — Parc Astérix',text:'Peur sur le Parc 2025 a accueilli 557 500 visiteurs sur 20 jours selon le site presse du parc ; l’édition 2026 a renforcé l’offre immersive et les nocturnes.'},
      {heading:'Exercice',text:'Construis un tableau d’évaluation d’un événement touristique avec cinq KPI commerciaux et trois KPI d’expérience.'}
    ],
    [
      {type:'Entreprise',name:'Parc Astérix — Peur sur le Parc 2026',url:'https://newsroom.parcasterix.fr/strongpeur-sur-le-parc-levenement-halloween-n1-en-france-se-reinvente-du-3-octobre-au-8-novembre-2026strong-30936/?lang=en',checked:'08/11/2026'},
      {type:'Entreprise',name:'Compagnie des Alpes — CA 2025-2026',url:'https://news.compagniedesalpes.com/chiffre-affaires-2025-2026/?lang=fr',checked:'08/11/2026'}
    ]
  ),

  'tourisme|Crises & tourisme': p(
    'Application sectorielle',
    'Crises, confiance et résilience touristique',
    'Les crises touristiques peuvent être sanitaires, climatiques, géopolitiques, cyber, réputationnelles ou opérationnelles. Le marketing intervient dans l’information, la confiance, la relation et la reprise, mais ne remplace pas la gestion de crise.',
    [
      'Distinguer faits établis, informations provisoires et hypothèses.',
      'La communication de crise doit être rapide mais ne pas sacrifier exactitude et transparence.',
      'Les plateformes peuvent amplifier les risques par fraude, faux contenus ou propagation rapide d’incidents.',
      'Les dépendances à un canal, une clientèle ou une saison augmentent la vulnérabilité.',
      'La reprise nécessite souvent adaptation de l’offre, segmentation, garanties et suivi de la confiance.'
    ],
    [
      {heading:'Cas actuel — Booking.com',text:'La Commission européenne a ouvert le 21 octobre 2026 une procédure formelle sur la gestion des risques d’annonces frauduleuses et d’escroqueries par hameçonnage sur Booking.com. Il s’agit d’une enquête, pas d’une conclusion de culpabilité.'},
      {heading:'Conjoncture',text:'Atout France décrit en 2026 un environnement économique et géopolitique incertain, avec une activité touristique française néanmoins encore bien orientée.'},
      {heading:'Exercice',text:'Rédige les cinq premières décisions marketing à prendre après la découverte d’une vague de faux avis ou d’une fraude touchant les clients d’une plateforme.'}
    ],
    [
      {type:'Officiel UE',name:'Commission européenne — Procédure DSA Booking.com, 21 octobre 2026',url:'https://france.representation.ec.europa.eu/informations-et-evenements/informations/dsa-la-commission-enquete-sur-bookingcom-2026-10-21_fr',checked:'08/11/2026'},
      ATOUT
    ]
  )
}


Object.entries(tourismCorrections).forEach(([key,corrections])=>{
  if(tourismPages[key]) tourismPages[key].corrections=corrections
})

Object.entries(tourismPedagogy).forEach(([key,meta])=>{ if(tourismPages[key]) Object.assign(tourismPages[key],meta) })
