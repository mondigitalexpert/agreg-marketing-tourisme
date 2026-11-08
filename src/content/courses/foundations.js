import { course, JURY } from '../courseHelpers'

export const foundationCourses = {
  'cours|Marché & environnement': course({
    title:'Marché et environnement : construire un diagnostic marketing',
    intro:'L’analyse de marché est le point de départ de nombreuses décisions marketing. Elle ne consiste pas à accumuler des données : elle délimite le terrain concurrentiel, mesure l’offre et la demande, repère les transformations de l’environnement et transforme ces informations en enjeux de décision.',
    objectives:[
      'Délimiter correctement un marché et justifier le périmètre retenu.',
      'Analyser la structure de l’offre, la concurrence et les rapports de force.',
      'Mesurer la demande avec des indicateurs adaptés au problème posé.',
      'Relier les évolutions du macro-environnement aux comportements et à la performance du marché.',
      'Transformer les faits collectés en diagnostic hiérarchisé et exploitable.'
    ],
    keyPoints:[
      'Le périmètre du marché dépend de la question étudiée : produit, besoin, usage, territoire, clientèle et période doivent être explicités.',
      'L’analyse de l’offre porte à la fois sur les concurrents directs, les substituts, les canaux, les nouveaux entrants et les partenaires de la chaîne de valeur.',
      'La demande doit être décrite en volume, en valeur et en comportements ; une croissance du chiffre d’affaires ne signifie pas nécessairement une croissance des volumes.',
      'PESTEL structure le macro-environnement ; les cinq forces de Porter analysent la structure concurrentielle ; SWOT synthétise ensuite le diagnostic.',
      'Une information récente n’est pas automatiquement une tendance durable : la veille doit croiser date, source, périmètre et évolution dans le temps.',
      'Le diagnostic n’est utile que s’il débouche sur quelques enjeux prioritaires : attractivité, différenciation, dépendance, capacité, rentabilité, accès au marché ou évolution des usages.'
    ],
    sections:[
      {
        heading:'1. Définir le marché avant de le mesurer',
        text:'Le mot « marché » peut désigner plusieurs réalités. Dans une copie, il faut donc annoncer le périmètre retenu. On peut raisonner par catégorie de produit ou service, par besoin satisfait, par usage, par zone géographique ou par segment de clientèle. Un marché trop étroit masque les substituts ; un marché trop large rend les données peu opératoires.',
        bullets:[
          'Marché principal : offres directement comparables par le client dans la situation étudiée.',
          'Marché des substituts : solutions différentes satisfaisant un besoin proche.',
          'Marchés complémentaires : offres dont la consommation accompagne ou facilite l’usage de l’offre principale.',
          'Marché générique : ensemble plus large des solutions répondant au besoin fondamental.',
          'Périmètre temporel et géographique : indispensables pour rendre les indicateurs comparables.'
        ]
      },
      {
        heading:'2. Analyser l’offre et la structure concurrentielle',
        text:'L’analyse de l’offre ne se limite pas à dresser une liste de concurrents. Elle cherche à comprendre qui crée de la valeur, comment cette valeur est distribuée et où se situent les rapports de force. Les parts de marché, la croissance, la concentration, les capacités, les niveaux de prix, les modèles économiques et les canaux de distribution permettent d’établir une première cartographie.',
        bullets:[
          'Part de marché en volume ou en valeur : préciser systématiquement le dénominateur.',
          'Part de marché relative : utile pour comparer l’entreprise au principal concurrent lorsque ce ratio est pertinent.',
          'Degré de concentration : repérer si quelques acteurs dominent ou si l’offre est fragmentée.',
          'Barrières à l’entrée : investissements, réglementation, accès aux données, réputation, réseau, coûts de changement.',
          'Substituts : évaluer la possibilité pour le client de satisfaire le même besoin autrement.'
        ]
      },
      {
        heading:'3. Les cinq forces de Porter : lire la structure du secteur',
        text:'Porter propose d’analyser la rentabilité structurelle d’un secteur à travers cinq forces : intensité de la rivalité, menace de nouveaux entrants, menace de substituts, pouvoir de négociation des clients et pouvoir de négociation des fournisseurs. Le modèle sert à expliquer des rapports de force ; il ne donne pas à lui seul une stratégie.',
        bullets:[
          'Une forte croissance peut réduire la rivalité à court terme, mais elle peut aussi attirer de nouveaux entrants.',
          'Une plateforme de distribution peut être simultanément un apporteur d’affaires et un acteur disposant d’un fort pouvoir de négociation.',
          'Les coûts de changement, la différenciation et la concentration influencent le pouvoir de négociation.',
          'Les frontières sectorielles deviennent parfois floues avec le numérique : le périmètre choisi doit être argumenté.'
        ]
      },
      {
        heading:'4. Mesurer et comprendre la demande',
        text:'La demande s’étudie à plusieurs niveaux : taille, croissance, structure, comportements et processus d’achat. Le nombre de clients ne suffit pas. Il faut aussi examiner fréquence d’achat, panier ou dépense moyenne, saisonnalité, taux de pénétration, occasions de consommation, fidélité, motifs et freins.',
        bullets:[
          'Demande actuelle : consommation effectivement observée sur le périmètre retenu.',
          'Demande potentielle : clients ou usages susceptibles d’être conquis sous certaines conditions.',
          'Non-consommateurs relatifs : personnes qui ne consomment pas actuellement mais pourraient le faire.',
          'Non-consommateurs absolus : personnes pour lesquelles l’offre n’est pas pertinente ou accessible dans le cadre étudié.',
          'Évolution de la demande : séparer effet volume, effet prix, effet mix et modification du périmètre.'
        ]
      },
      {
        heading:'5. Le macro-environnement avec PESTEL',
        text:'PESTEL classe les facteurs politiques, économiques, socioculturels, technologiques, environnementaux et légaux. Son intérêt est de repérer des variables externes susceptibles d’influencer la demande, les coûts, les canaux ou les règles du jeu. La matrice n’est pas une fin en soi : chaque facteur doit être relié à un mécanisme marketing.',
        example:'Exemple : l’évolution du pouvoir d’achat n’est pas seulement un facteur « économique ». Elle peut modifier la durée des séjours, les périodes choisies, le niveau de gamme, la sensibilité aux promotions et donc la segmentation de la demande touristique.'
      },
      {
        heading:'6. Veille, données et système d’information marketing',
        text:'Le programme 2027 mentionne explicitement veille, data marketing et systèmes d’information marketing. Une organisation doit organiser la collecte, le stockage, la qualité et l’interprétation des informations utiles à la décision. La source doit être évaluée selon son producteur, sa méthode, sa date, son champ et son intérêt éventuel.',
        bullets:[
          'Sources internes : ventes, CRM, trafic digital, réclamations, conversion, historique de prix.',
          'Sources externes publiques : Insee, Eurostat, Banque de France, autorités publiques.',
          'Sources professionnelles : études sectorielles, fédérations, panels, cabinets.',
          'Sources d’entreprise : pertinentes pour ce que l’entreprise déclare, mais non indépendantes.',
          'Données qualitatives : avis, entretiens, observation, contenus sociaux ; elles éclairent les mécanismes sans permettre automatiquement une généralisation statistique.'
        ]
      },
      {
        heading:'7. Du constat au diagnostic',
        text:'Le diagnostic sélectionne les faits qui modifient la décision. SWOT peut servir de synthèse finale : forces et faiblesses renvoient aux caractéristiques internes ; opportunités et menaces aux évolutions externes. Une SWOT ne doit pas être remplie de généralités. Chaque item doit être prouvé et, idéalement, relié à une conséquence.',
        example:'Faible : « le digital est une opportunité ». Plus utile : « la progression des réservations mobiles crée une opportunité de conversion directe, mais suppose une expérience de réservation rapide et un suivi du coût d’acquisition par canal ».'
      },
      {
        heading:'8. Application tourisme',
        text:'Un diagnostic touristique combine généralement fréquentation, provenance des clientèles, saisonnalité, capacité, taux d’occupation, prix, accessibilité, réputation, concurrence des destinations ou plateformes et contraintes territoriales. La même donnée peut avoir des sens différents : un taux d’occupation élevé peut signaler une forte attractivité mais aussi une capacité insuffisante à certaines dates.',
        bullets:[
          'Hôtel : capacité, ADR, taux d’occupation, RevPAR, mix direct/OTA, segmentation affaires/loisirs.',
          'Destination : nuitées, excursionnistes, origine géographique, saisonnalité, accessibilité, satisfaction, pression sur le territoire.',
          'Plateforme : nombre d’utilisateurs, inventaire, effets de réseau, commissions, données et dépendance des fournisseurs.'
        ]
      },
      {
        heading:'9. Méthode de réponse à une question de diagnostic',
        text:'Une réponse efficace suit une logique courte : 1) définir le périmètre ; 2) sélectionner les faits déterminants ; 3) les interpréter ; 4) mobiliser un outil uniquement s’il éclaire le problème ; 5) hiérarchiser les enjeux ; 6) préparer le lien vers la recommandation. Il faut distinguer en permanence fait, interprétation et hypothèse.'
      }
    ],
    recap:[
      'Toujours délimiter le marché avant d’utiliser des chiffres.',
      'Analyser simultanément offre, demande et environnement.',
      'Utiliser Porter pour les rapports de force et PESTEL pour le macro-environnement.',
      'Réserver SWOT à la synthèse du diagnostic.',
      'Relier chaque donnée à une conséquence marketing.',
      'Distinguer faits vérifiés, interprétations et hypothèses.'
    ],
    examTips:[
      'Éviter les diagnostics « catalogue » où PESTEL, Porter et SWOT sont juxtaposés sans lien avec la question.',
      'Donner le périmètre et la date des chiffres utilisés.',
      'Ne pas confondre croissance du chiffre d’affaires, croissance des volumes et amélioration de la rentabilité.',
      'Terminer le diagnostic par deux ou trois enjeux prioritaires formulés comme des tensions décisionnelles.'
    ],
    sources:[
      {type:'Académique',name:'Porter — The Five Competitive Forces That Shape Strategy',url:'https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy'},
      {type:'Officiel',name:'Insee — Méthodes et qualité statistiques',url:'https://www.insee.fr/fr/information/2387611',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Comportement du consommateur': course({
    title:'Comportement du consommateur : comprendre la décision et l’expérience',
    intro:'Le comportement du consommateur étudie la manière dont les individus ou ménages perçoivent une offre, construisent des préférences, prennent une décision, vivent l’expérience puis évaluent leur choix. Le programme 2027 attend explicitement des approches cognitivistes, émotionnelles et issues de la Consumer Culture Theory.',
    objectives:[
      'Décomposer un processus de décision et identifier les facteurs qui l’influencent.',
      'Distinguer motivations, attitudes, perceptions, émotions, normes sociales et contraintes.',
      'Mobiliser la théorie du comportement planifié d’Ajzen lorsqu’elle est pertinente.',
      'Comprendre le rôle du risque perçu, de l’implication et de l’expérience.',
      'Relier les comportements observés à des décisions de segmentation, offre, communication ou distribution.'
    ],
    keyPoints:[
      'Le consommateur n’est ni parfaitement rationnel ni totalement irrationnel : sa décision dépend du contexte, de ses croyances, de ses émotions et des contraintes.',
      'Le processus classique reconnaissance du besoin → recherche → évaluation → choix → post-achat est une grille de lecture, pas une séquence toujours linéaire.',
      'Attitude, norme subjective et contrôle comportemental perçu contribuent à l’intention dans la théorie du comportement planifié.',
      'Le risque perçu augmente lorsque le client achète avant de pouvoir évaluer réellement la prestation, ce qui est fréquent dans le tourisme.',
      'La Consumer Culture Theory replace la consommation dans des logiques identitaires, culturelles, sociales et symboliques.',
      'L’expérience post-achat influence satisfaction, bouche-à-oreille, avis, réclamation et fidélité.'
    ],
    sections:[
      {
        heading:'1. Le processus de décision : une architecture à adapter',
        text:'Une représentation classique distingue reconnaissance du besoin, recherche d’information, évaluation des alternatives, décision et comportement post-achat. Cette structure aide à localiser les points de friction, mais de nombreux parcours sont itératifs : le consommateur revient en arrière, compare plusieurs canaux ou délègue une partie du choix à des plateformes et recommandations.',
        bullets:[
          'Reconnaissance du besoin : écart perçu entre situation actuelle et situation souhaitée.',
          'Recherche interne : souvenirs, habitudes et expériences antérieures.',
          'Recherche externe : moteurs, réseaux sociaux, avis, proches, vendeurs, plateformes.',
          'Évaluation : critères, règles de décision, arbitrages et réduction du risque.',
          'Post-achat : satisfaction, dissonance éventuelle, avis, fidélité ou changement.'
        ]
      },
      {
        heading:'2. Les facteurs individuels',
        text:'Les comportements sont influencés par les caractéristiques de la personne et par la situation. Les motivations donnent une direction au comportement ; la perception filtre l’information ; l’apprentissage transforme les expériences en connaissances ; les attitudes prédisposent à évaluer favorablement ou défavorablement un objet.',
        bullets:[
          'Motivation : recherche d’un bénéfice fonctionnel, hédonique, social, symbolique ou expérientiel.',
          'Perception : attention sélective, interprétation et mémorisation des informations.',
          'Implication : importance personnelle de la décision, qui influence l’effort de recherche.',
          'Expérience et apprentissage : rôle des habitudes, essais antérieurs et routines.',
          'Émotions : peuvent influencer attention, souvenir, évaluation et choix.'
        ]
      },
      {
        heading:'3. Les facteurs sociaux et situationnels',
        text:'La décision est aussi sociale. Famille, pairs, communautés, normes et groupes de référence influencent les préférences et le choix. La situation — temps disponible, urgence, occasion, lieu, accompagnants — peut modifier fortement le comportement d’un même individu.',
        example:'Un voyageur professionnel peut privilégier fiabilité, localisation et flexibilité en semaine, puis rechercher prix, activités et capacité familiale lors d’un séjour privé. Segmenter uniquement par âge ou revenu ne suffit donc pas toujours.'
      },
      {
        heading:'4. Attitudes, intentions et théorie du comportement planifié',
        text:'Ajzen montre que l’intention de réaliser un comportement peut être expliquée par trois déterminants : l’attitude envers le comportement, les normes subjectives et le contrôle comportemental perçu. L’intention, combinée au contrôle perçu, contribue ensuite à expliquer le comportement. Le modèle est particulièrement utile pour analyser adoption, intention de réservation, usage d’un service ou comportement responsable.',
        bullets:[
          'Attitude : évaluation favorable ou défavorable du comportement.',
          'Norme subjective : pression ou approbation perçue de personnes ou groupes importants.',
          'Contrôle comportemental perçu : perception de la facilité ou difficulté à réaliser le comportement.',
          'Intention : disposition à agir, distincte de l’action effectivement observée.'
        ],
        example:'Une personne peut avoir une attitude favorable envers le train mais choisir l’avion si elle estime le temps de trajet ferroviaire incompatible avec ses contraintes. Le contrôle perçu peut donc limiter le passage de l’attitude au comportement.'
      },
      {
        heading:'5. Risque perçu et réducteurs de risque',
        text:'Le risque perçu apparaît lorsque le consommateur anticipe des conséquences négatives possibles. Il peut être financier, fonctionnel, physique, social, psychologique ou temporel. Les services et le tourisme sont fortement concernés parce que la prestation est souvent achetée avant consommation et ne peut pas être testée intégralement.',
        bullets:[
          'Avis et notes : preuves sociales, à lire avec volume et récence.',
          'Marque et labels : signaux de qualité ou de conformité.',
          'Garanties et conditions flexibles : réduction du risque financier ou temporel.',
          'Photos, vidéos, visites virtuelles : réduction de l’incertitude sur la prestation.',
          'Conseil humain ou conversationnel : aide à la décision lorsque le choix est complexe.'
        ]
      },
      {
        heading:'6. Approches émotionnelles et expérientielles',
        text:'Le consommateur n’évalue pas seulement des attributs fonctionnels. Le plaisir, l’anticipation, la surprise, la nostalgie, le sentiment de contrôle ou l’immersion contribuent à la valeur perçue. Dans l’expérience touristique, l’avant-voyage peut déjà produire du plaisir ou de l’anxiété, et le souvenir reconstruit ensuite l’évaluation du séjour.',
        example:'Une destination peut être choisie pour la représentation qu’elle véhicule — aventure, prestige, authenticité, repos — autant que pour un inventaire objectif d’équipements.'
      },
      {
        heading:'7. Consumer Culture Theory',
        text:'Arnould et Thompson regroupent sous l’appellation Consumer Culture Theory plusieurs courants qui étudient les dimensions culturelles, sociales, symboliques et idéologiques de la consommation. Cette approche est utile lorsque la consommation participe à la construction identitaire, à l’appartenance à une communauté ou à la production de significations.',
        bullets:[
          'Projet identitaire du consommateur.',
          'Cultures de marché et communautés de consommation.',
          'Influence des structures sociales et historiques.',
          'Discours, idéologies de marché et interprétations du consommateur.'
        ]
      },
      {
        heading:'8. Satisfaction, dissonance et comportement post-achat',
        text:'Après l’achat, le client compare l’expérience à ses attentes et à d’autres références. La satisfaction peut favoriser réachat et recommandation, mais elle ne garantit pas la fidélité : prix, variété, contraintes, opportunités concurrentes ou faible coût de changement peuvent provoquer un départ malgré une expérience satisfaisante.',
        bullets:[
          'Réclamation : source d’information sur les défaillances du service.',
          'Bouche-à-oreille et avis : prolongent l’expérience dans l’espace public.',
          'Dissonance post-achat : doute ou inconfort après une décision engageante.',
          'Fidélité attitudinale et comportementale : dimensions à distinguer.'
        ]
      },
      {
        heading:'9. Application au tourisme',
        text:'Le tourisme combine forte implication, achat anticipé, incertitude, dimension émotionnelle et participation du client. Les avis, la réputation, la flexibilité d’annulation, le contenu visuel, l’accès, la sécurité perçue et l’entourage influencent fortement la décision. La consommation est ensuite co-produite par plusieurs acteurs, ce qui complexifie l’évaluation finale.'
      },
      {
        heading:'10. Méthode concours',
        text:'Face à un cas, commencer par identifier le comportement à expliquer : intention, choix de canal, fidélité, adoption, sensibilité au prix, avis ou abandon. Choisir ensuite un cadre théorique qui éclaire ce mécanisme. Il faut éviter de réciter un auteur sans montrer ce que le modèle permet de comprendre.'
      }
    ],
    recap:[
      'Le comportement dépend d’un ensemble de facteurs individuels, sociaux et situationnels.',
      'Le processus de décision est utile mais rarement parfaitement linéaire.',
      'Ajzen est pertinent lorsqu’il faut expliquer intention et passage à l’action.',
      'Le risque perçu est central pour les services achetés avant consommation.',
      'Les émotions et significations culturelles complètent les approches cognitives.',
      'Le post-achat alimente satisfaction, avis, fidélité ou changement.'
    ],
    examTips:[
      'Ne pas confondre attitude favorable et comportement effectif.',
      'Éviter d’expliquer tous les comportements par une seule variable comme le prix.',
      'Choisir le modèle après avoir identifié le comportement à expliquer.',
      'Relier chaque mécanisme à un levier marketing concret : offre, information, preuve, canal, prix ou relation.'
    ],
    sources:[
      {type:'Académique',name:'Ajzen — The Theory of Planned Behavior (1991)',url:'https://www.sciencedirect.com/science/article/pii/074959789190020T'},
      {type:'Académique',name:'Arnould & Thompson — Consumer Culture Theory (2005)',url:'https://doi.org/10.1086/426626'},
      JURY
    ]
  }),

  'cours|Segmentation • Ciblage • Positionnement': course({
    title:'Segmentation, ciblage, positionnement : transformer l’hétérogénéité du marché en choix stratégique',
    intro:'La démarche SCP organise le passage de la connaissance du marché à la stratégie. Segmenter consiste à identifier des groupes pertinents ; cibler à choisir ceux sur lesquels concentrer les efforts ; positionner à construire une place distinctive et crédible face aux alternatives.',
    objectives:[
      'Choisir des critères de segmentation adaptés à la décision.',
      'Évaluer la qualité et l’attractivité des segments.',
      'Comparer les principales stratégies de ciblage.',
      'Formuler et évaluer un positionnement.',
      'Utiliser cartes perceptuelles et données sans confondre image observée et positionnement voulu.'
    ],
    keyPoints:[
      'Une segmentation n’est utile que si elle produit des groupes suffisamment différents pour justifier des décisions marketing distinctes.',
      'Les critères peuvent être descriptifs, psychographiques, comportementaux ou fondés sur les bénéfices recherchés.',
      'Le ciblage combine attractivité du segment et capacité réelle de l’organisation à créer de la valeur pour lui.',
      'Le positionnement est une promesse comparative : il suppose une cible, un cadre de référence, un bénéfice distinctif et des preuves.',
      'L’image est ce que le marché perçoit ; le positionnement est ce que l’organisation cherche à installer.',
      'Le repositionnement devient nécessaire lorsque les attentes, la concurrence ou la crédibilité de la promesse évoluent.'
    ],
    sections:[
      {
        heading:'1. Pourquoi segmenter ?',
        text:'Un marché rassemble des clients dont les attentes, les usages et la sensibilité aux actions marketing diffèrent. Traiter tous les clients de la même manière peut diluer la proposition de valeur ; multiplier les segments sans logique augmente au contraire la complexité et les coûts. La segmentation cherche un niveau de différenciation économiquement et stratégiquement utile.'
      },
      {
        heading:'2. Les familles de critères',
        text:'Les critères descriptifs sont faciles à observer mais ne sont pas toujours explicatifs. Les critères comportementaux ou liés aux bénéfices recherchés peuvent mieux prédire la réponse marketing.',
        bullets:[
          'Géographiques : pays, région, urbain/rural, accessibilité, climat.',
          'Sociodémographiques : âge, revenu, composition du foyer, profession.',
          'Psychographiques : valeurs, style de vie, personnalité, centres d’intérêt.',
          'Comportementaux : fréquence, fidélité, canal, occasion, niveau d’usage, sensibilité au prix.',
          'Bénéfices recherchés : praticité, statut, sécurité, expérience, économie, durabilité.'
        ]
      },
      {
        heading:'3. Les qualités d’un segment exploitable',
        text:'Un segment doit pouvoir être décrit et atteint. Sa taille doit être suffisamment intéressante au regard du modèle économique, et sa réponse marketing suffisamment spécifique pour justifier une offre ou une communication adaptée.',
        bullets:[
          'Mesurable : possibilité d’estimer taille, caractéristiques ou performance.',
          'Substantiel : potentiel compatible avec les objectifs et coûts.',
          'Accessible : possibilité de toucher le segment via les canaux disponibles.',
          'Différenciable : réponse suffisamment distincte des autres segments.',
          'Actionnable : capacité de construire une offre et un mix adaptés.'
        ]
      },
      {
        heading:'4. Segmentation statistique',
        text:'Le programme 2027 mentionne les outils statistiques de segmentation. En pratique, des analyses de classification peuvent regrouper des individus selon leur proximité sur plusieurs variables. L’outil statistique ne choisit pas la stratégie : les groupes obtenus doivent ensuite être interprétés, nommés et évalués selon leur utilité marketing.',
        bullets:[
          'Choisir des variables pertinentes avant de lancer une classification.',
          'Normaliser éventuellement les variables pour éviter qu’une échelle domine les distances.',
          'Comparer plusieurs nombres de classes et vérifier leur stabilité.',
          'Interpréter les groupes avec des variables descriptives non utilisées dans la construction.',
          'Éviter de transformer un cluster statistique en persona imaginaire sans données complémentaires.'
        ]
      },
      {
        heading:'5. Évaluer l’attractivité des segments',
        text:'Le ciblage suppose d’évaluer chaque segment : taille, croissance, rentabilité potentielle, intensité concurrentielle, accessibilité, risques, compatibilité avec la marque et compétences internes. Un segment attractif pour le marché peut être peu pertinent pour une organisation qui ne dispose ni de la crédibilité ni des ressources nécessaires.'
      },
      {
        heading:'6. Les stratégies de ciblage',
        text:'Les stratégies peuvent aller d’une couverture large à une concentration très sélective. Le vocabulaire varie selon les auteurs ; l’essentiel est d’expliquer le niveau de différenciation choisi et ses conséquences.',
        bullets:[
          'Marketing indifférencié/global : une offre principale pour un marché large.',
          'Marketing différencié : plusieurs segments avec des offres ou mix adaptés.',
          'Concentration/niche : focalisation sur un segment ou un petit nombre de segments.',
          'Individualisation/personnalisation : adaptation fine rendue possible par les données et les technologies.'
        ]
      },
      {
        heading:'7. Formuler un positionnement',
        text:'Un positionnement efficace clarifie la place recherchée face aux concurrents. Une formulation de travail peut préciser : pour quelle cible, dans quel univers de référence, quel bénéfice distinctif, avec quelles preuves. Le positionnement doit ensuite être cohérent avec le produit/service, le prix, la communication et la distribution.',
        example:'Pour les voyageurs professionnels recherchant simplicité et flexibilité, un hôtel peut se positionner comme la solution la plus fluide pour les courts séjours urbains grâce au check-in rapide, à une localisation adaptée et à des conditions flexibles. Ce n’est pas encore un slogan : c’est une direction stratégique.'
      },
      {
        heading:'8. Cartes perceptuelles et positionnement perçu',
        text:'Une carte perceptuelle représente des marques ou offres selon des dimensions perçues par les clients. Elle peut révéler proximité concurrentielle, espaces vacants ou incohérences. Mais les axes doivent provenir de données et le « vide » sur une carte ne prouve pas qu’un segment rentable existe.'
      },
      {
        heading:'9. Repositionnement',
        text:'Une organisation peut repositionner une offre lorsque les attentes évoluent, que le marché se banalise, qu’un concurrent occupe la même promesse ou que le positionnement historique devient peu crédible. Le repositionnement exige souvent une transformation réelle de l’offre ; une nouvelle communication seule ne suffit pas.'
      },
      {
        heading:'10. Application tourisme',
        text:'Dans l’hôtellerie, les critères de segmentation peuvent croiser motif de séjour, fréquence, budget, durée, canal, besoins de flexibilité ou bénéfices recherchés. Pour une destination, les segments peuvent être définis par origine géographique, type de séjour, saison, activité, mobilité ou sensibilité à certaines expériences. Le ciblage doit tenir compte de la capacité d’accueil et de l’acceptabilité territoriale.'
      }
    ],
    recap:[
      'Segmenter = comprendre des groupes différents ; cibler = choisir ; positionner = construire une place distinctive.',
      'Un bon segment doit être mesurable, substantiel, accessible, différenciable et actionnable.',
      'Le ciblage croise attractivité externe et capacités internes.',
      'Le positionnement doit être clair, crédible, distinctif et cohérent avec le mix.',
      'Une carte perceptuelle représente des perceptions ; elle ne prouve pas à elle seule l’existence d’une opportunité.'
    ],
    examTips:[
      'Justifier les critères de segmentation au lieu d’empiler âge, revenu et géographie.',
      'Ne pas confondre cible et persona : le persona est une représentation opérationnelle, pas le segment lui-même.',
      'Toujours relier le choix de cible aux ressources et au positionnement.',
      'Vérifier que les recommandations de mix sont compatibles avec le positionnement annoncé.'
    ],
    sources:[
      {type:'Ouvrage',name:'Kotler & Armstrong — Marketing: An Introduction, segmentation, targeting and positioning',url:'https://www.pearson.com/en-us/subject-catalog/p/marketing-an-introduction/P200000006082'},
      JURY
    ]
  }),

  'cours|Produit / Service / Marque': course({
    title:'Produit, service, gamme et marque : construire et piloter l’offre',
    intro:'La politique d’offre traduit le positionnement en proposition concrète. Elle articule bénéfices recherchés, caractéristiques, qualité, services associés, design, gamme, marque et innovation. Dans les services, le client évalue aussi le processus, l’environnement et les interactions qui permettent de délivrer la promesse.',
    objectives:[
      'Distinguer bénéfice central, offre tangible et services associés.',
      'Analyser largeur, profondeur, cohérence et rôle des références d’une gamme.',
      'Utiliser le cycle de vie comme grille d’analyse sans en faire une loi.',
      'Comprendre les principales dimensions du capital de marque.',
      'Évaluer les choix d’architecture, extension ou repositionnement de marque.'
    ],
    keyPoints:[
      'Une offre crée de la valeur par un ensemble de bénéfices fonctionnels, symboliques, relationnels et expérientiels.',
      'Le produit réel et les services associés doivent être cohérents avec le positionnement.',
      'La gamme permet de couvrir plusieurs besoins mais augmente les risques de complexité et de cannibalisation.',
      'Le cycle de vie aide à raisonner sur l’évolution d’une offre mais sa forme et sa durée ne sont ni automatiques ni prévisibles.',
      'Le capital de marque dépend notamment de la notoriété et des associations que la marque installe dans la mémoire du consommateur.',
      'Une extension de marque peut accélérer l’adoption mais aussi diluer ou brouiller les associations existantes.'
    ],
    sections:[
      {
        heading:'1. L’offre comme ensemble de bénéfices',
        text:'Le client n’achète pas uniquement un objet ou une prestation technique : il cherche un résultat. Il faut donc distinguer le bénéfice central attendu, la prestation ou le produit qui le matérialise et les services associés qui facilitent l’achat, l’usage ou la relation.',
        example:'Dans un hôtel, le bénéfice central peut être repos, sécurité ou praticité. La chambre matérialise l’offre ; réservation, accueil, restauration, wifi, bagagerie ou programme de fidélité complètent la valeur.'
      },
      {
        heading:'2. Attributs, qualité et design',
        text:'Les attributs peuvent être fonctionnels, esthétiques, sensoriels ou symboliques. Leur importance dépend de la cible et du contexte. La qualité ne doit pas être définie uniquement comme conformité technique : elle inclut l’adéquation aux attentes et la constance de la prestation.'
      },
      {
        heading:'3. Les services associés',
        text:'Garantie, livraison, conseil, paiement, assistance, retour, personnalisation ou maintenance peuvent être déterminants dans la valeur perçue. Ils permettent de différencier des offres techniquement proches et modifient parfois le modèle économique.',
        bullets:[
          'Services avant achat : information, conseil, simulation, essai.',
          'Services pendant l’achat : financement, réservation, personnalisation, choix du canal.',
          'Services après achat : assistance, maintenance, retour, communauté, fidélisation.'
        ]
      },
      {
        heading:'4. Politique de gamme',
        text:'La gamme organise les références offertes par l’entreprise. Sa largeur correspond au nombre de lignes ou familles ; sa profondeur au nombre de variantes dans une ligne. L’entreprise arbitre entre couverture de marché, lisibilité, coûts, cannibalisation et capacité commerciale.',
        bullets:[
          'Entrée de gamme : accessibilité, recrutement, volume.',
          'Cœur de gamme : contribution principale et repère de positionnement.',
          'Haut de gamme : image, marge, montée en gamme.',
          'Produit d’appel : acquisition ou trafic.',
          'Références de spécialité : réponse à un segment ou usage précis.'
        ]
      },
      {
        heading:'5. Cycle de vie : utilité et limites',
        text:'Le cycle de vie distingue généralement introduction, croissance, maturité et déclin. Il peut aider à formuler des hypothèses sur objectifs, prix, communication et distribution. Mais une offre peut connaître relances, mutations ou coexistence de plusieurs cycles selon les pays et segments. Levitt lui-même présente le cycle de vie comme un outil de réflexion managériale, pas comme une horloge infaillible.'
      },
      {
        heading:'6. La marque comme actif marketing',
        text:'La marque identifie l’offre et réduit certains coûts de recherche, mais elle peut surtout créer des associations distinctives et de la confiance. Keller définit le Customer-Based Brand Equity comme l’effet différentiel de la connaissance de la marque sur la réponse du consommateur au marketing de cette marque.',
        bullets:[
          'Notoriété : capacité à reconnaître ou rappeler la marque.',
          'Image : ensemble des associations présentes en mémoire.',
          'Force des associations : facilité avec laquelle elles sont activées.',
          'Favorabilité : caractère positif ou désirable des associations.',
          'Unicité : associations qui distinguent la marque de ses concurrents.'
        ]
      },
      {
        heading:'7. Aaker : une autre lecture du capital de marque',
        text:'Aaker met notamment en avant fidélité, notoriété, qualité perçue, associations de marque et autres actifs propriétaires. Les deux approches ne sont pas strictement interchangeables, mais elles montrent toutes deux que la marque crée une valeur au-delà du produit physique.'
      },
      {
        heading:'8. Architecture et extension de marque',
        text:'L’organisation peut utiliser une marque unique, plusieurs marques indépendantes ou des architectures hybrides. Une extension s’appuie sur le capital existant pour entrer sur une nouvelle catégorie ou proposer une variante. L’évaluation porte sur la cohérence perçue, le risque de dilution, la cannibalisation et les économies de communication.',
        example:'Une chaîne hôtelière multimarque doit éviter que plusieurs enseignes aient des promesses trop proches. Sinon le client ne comprend plus la différence et les marques se concurrencent à l’intérieur du portefeuille.'
      },
      {
        heading:'9. Innovation et rénovation de l’offre',
        text:'L’innovation peut être radicale ou incrémentale et porter sur le concept, les fonctionnalités, le processus, le modèle de revenus ou l’expérience. Un lancement doit articuler problème client, proposition de valeur, preuve, prix, distribution et adoption. Une nouveauté technique sans bénéfice clair n’est pas automatiquement une innovation marketing.'
      },
      {
        heading:'10. Application au tourisme',
        text:'Dans le tourisme, l’offre est souvent composite : hébergement, transport, restauration, activités, service humain, interfaces numériques et environnement. Le marketing de l’offre doit assurer la cohérence de l’ensemble. La marque aide à réduire l’incertitude, mais l’expérience vécue peut rapidement confirmer ou contredire la promesse.'
      }
    ],
    recap:[
      'Partir du bénéfice recherché, pas seulement des caractéristiques.',
      'Piloter la gamme en arbitrant couverture, lisibilité, coût et cannibalisation.',
      'Utiliser le cycle de vie comme hypothèse de gestion et non comme prédiction.',
      'Analyser la marque par notoriété et associations, puis par comportements et valeur créée.',
      'Vérifier la cohérence des extensions et de l’architecture de marque.',
      'Dans les services, l’offre inclut aussi le processus et les interactions.'
    ],
    examTips:[
      'Une recommandation de gamme doit préciser l’objectif : acquisition, montée en gamme, couverture, marge ou clarification du portefeuille.',
      'Ne pas réduire le capital de marque à la notoriété.',
      'Éviter de dire qu’un produit est « en maturité » sans indicateurs ou comparaison temporelle.',
      'Relier toute innovation à un bénéfice client et à un modèle économique.'
    ],
    sources:[
      {type:'Académique',name:'Keller — Conceptualizing, Measuring, and Managing Customer-Based Brand Equity (1993)',url:'https://journals.sagepub.com/doi/10.1177/002224299305700101'},
      {type:'Ouvrage',name:'Aaker — Managing Brand Equity (1991)',url:'https://www.simonandschuster.com/books/Managing-Brand-Equity/David-A-Aaker/9780029001011'},
      {type:'Académique',name:'Levitt — Exploit the Product Life Cycle',url:'https://hbr.org/1965/11/exploit-the-product-life-cycle'},
      JURY
    ]
  })
}
