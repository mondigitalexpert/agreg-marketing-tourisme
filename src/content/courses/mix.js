import { course, JURY } from '../courseHelpers'

export const mixCourses = {
  'cours|Prix': course({
    title:'Politique de prix : coûts, valeur, élasticité et acceptation',
    intro:'Le prix est une variable de revenu, de positionnement et de perception. Il ne se fixe pas uniquement à partir des coûts : une décision tarifaire croise structure de coûts, valeur perçue, consentement à payer, concurrence, objectifs stratégiques et réglementation.',
    objectives:[
      'Distinguer coût, prix, marge, valeur perçue et consentement à payer.',
      'Calculer et interpréter une élasticité-prix simple.',
      'Comparer les principales logiques de fixation du prix.',
      'Comprendre tarification dynamique et revenue management.',
      'Intégrer les règles françaises d’information et de réduction de prix.'
    ],
    keyPoints:[
      'Un prix trop bas peut dégrader la marge et brouiller le positionnement autant qu’un prix trop élevé peut réduire la demande.',
      'Le consentement à payer est une limite individuelle ou segmentaire, pas une propriété fixe du produit.',
      'L’élasticité mesure une réaction relative de la demande à une variation relative du prix.',
      'Les prix peuvent être différenciés selon segments, moment, conditions ou canal, sous réserve de cohérence stratégique et juridique.',
      'Dans les capacités périssables, le revenue management coordonne prix, disponibilité et prévision de demande.',
      'Une promotion efficace doit être évaluée en marge incrémentale, acquisition, cannibalisation et effet sur le prix de référence perçu.'
    ],
    sections:[
      {
        heading:'1. Les trois grandes références pour fixer un prix',
        text:'Une politique de prix combine généralement trois références : les coûts, la demande et la concurrence. Aucune ne suffit seule. Les coûts donnent un plancher économique à long terme ; la demande renseigne sur la valeur et la sensibilité ; la concurrence situe les alternatives accessibles au client.',
        bullets:[
          'Approche par les coûts : coût complet, coût variable, marge cible, seuil de rentabilité.',
          'Approche par la demande : valeur perçue, consentement à payer, élasticité, sensibilité.',
          'Approche concurrentielle : prix de référence, premium, alignement, guerre des prix.'
        ]
      },
      {
        heading:'2. Marge et seuil de rentabilité',
        text:'Le raisonnement marketing doit rester compatible avec l’économie de l’offre. Une baisse de prix peut augmenter les volumes mais diminuer la contribution totale si la hausse de demande ne compense pas la baisse de marge unitaire.',
        formula:'Marge sur coût variable unitaire = Prix de vente unitaire – Coût variable unitaire. Seuil de rentabilité simplifié = Charges fixes / Taux de marge sur coûts variables.'
      },
      {
        heading:'3. Élasticité-prix de la demande',
        text:'L’élasticité-prix rapporte la variation relative de la quantité demandée à la variation relative du prix. Une valeur négative est fréquente : quand le prix augmente, la quantité demandée baisse. L’interprétation doit être contextualisée car l’élasticité dépend du segment, de la période, des substituts et du niveau initial du prix.',
        formula:'Élasticité-prix ≈ (% variation de la quantité demandée) / (% variation du prix).',
        bullets:[
          '|e| > 1 : demande dite élastique, la quantité réagit proportionnellement davantage.',
          '|e| < 1 : demande relativement inélastique.',
          'L’élasticité observée sur une période courte ne doit pas être généralisée sans précaution.'
        ]
      },
      {
        heading:'4. Valeur perçue et consentement à payer',
        text:'Le client compare les bénéfices perçus aux sacrifices monétaires et non monétaires. Le consentement à payer varie avec la situation, la rareté, l’urgence, la confiance, les alternatives, la marque et le segment. Une stratégie de prix fondée sur la valeur cherche donc à comprendre ce que le client valorise réellement.'
      },
      {
        heading:'5. Stratégies de lancement et de positionnement tarifaire',
        text:'L’écrémage consiste à démarrer avec un prix élevé pour capter des clients à forte disposition à payer ; la pénétration vise un prix plus bas pour accélérer l’adoption ou gagner des parts de marché. L’alignement suit les repères du marché ; le premium suppose des preuves de valeur crédibles.',
        example:'Une offre hôtelière premium ne peut pas soutenir durablement un tarif supérieur uniquement par une décoration plus coûteuse : l’expérience, la marque, le service et les preuves doivent justifier le différentiel.'
      },
      {
        heading:'6. Tarification différenciée et dynamique',
        text:'La différenciation tarifaire adapte le prix à des segments, conditions ou moments. La tarification dynamique modifie le prix au fil du temps selon la demande, la capacité, la concurrence ou d’autres signaux. L’enjeu marketing est de préserver une perception de justice et de lisibilité.',
        bullets:[
          'Conditions d’annulation ou de modification.',
          'Moment de réservation.',
          'Catégorie de client ou programme de fidélité.',
          'Canal de distribution.',
          'Période de forte ou faible demande.'
        ]
      },
      {
        heading:'7. Revenue management',
        text:'Le revenue management est particulièrement adapté aux capacités fixes ou difficilement ajustables et périssables : transport, hôtellerie, restauration, loisirs. Il combine prévision, segmentation, prix et contrôle de l’inventaire. Son objectif n’est pas nécessairement de maximiser l’occupation, mais d’améliorer le revenu et la contribution de la capacité disponible.'
      },
      {
        heading:'8. Promotions et prix de référence',
        text:'Les promotions peuvent générer essai, trafic ou déstockage, mais aussi habituer le client à attendre une remise. Il faut analyser ventes incrémentales, marge, cannibalisation, acquisition de nouveaux clients et effet sur le positionnement.'
      },
      {
        heading:'9. Cadre juridique français',
        text:'L’information sur les prix doit être claire. Lorsqu’un professionnel annonce une réduction de prix, le prix de référence est en principe le prix le plus bas pratiqué au cours des trente jours précédents, sous réserve des cas particuliers prévus par les textes.'
      },
      {
        heading:'10. Application tourisme',
        text:'Dans l’hôtellerie ou le transport, le prix dépend fortement du temps et de la capacité. Une bonne analyse distingue ADR, taux d’occupation, RevPAR, coût de distribution et contribution. Un prix élevé avec faible occupation peut produire le même RevPAR qu’un prix plus bas avec forte occupation, mais les risques opérationnels et la marge peuvent différer.'
      }
    ],
    recap:[
      'Croiser coûts, valeur, demande et concurrence.',
      'Interpréter l’élasticité avec prudence et dans un périmètre clair.',
      'Distinguer prix, valeur perçue et consentement à payer.',
      'Utiliser la tarification dynamique comme outil de pilotage, pas comme simple hausse opportuniste.',
      'Évaluer une promotion par la marge incrémentale et les effets comportementaux.',
      'Respecter les obligations d’information et de prix de référence.'
    ],
    examTips:[
      'Toujours interpréter un calcul de prix ou d’élasticité en termes de décision.',
      'Ne pas supposer qu’un prix plus bas augmente automatiquement le chiffre d’affaires.',
      'Dans un cas de revenue management, raisonner à la fois en revenu, capacité, segment et perception de justice.',
      'Distinguer une recommandation tarifaire de son cadre juridique.'
    ],
    sources:[
      {type:'Officiel',name:'DGCCRF — L’information sur les prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/linformation-sur-les-prix',checked:'08/11/2026'},
      {type:'Officiel',name:'DGCCRF — Annonces de réduction de prix',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/annonces-de-reduction-de-prix-ce-que-vous-devez-savoir',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Communication': course({
    title:'Communication marketing : objectifs, messages, canaux et efficacité',
    intro:'La communication marketing organise les messages et les points de contact destinés à faire connaître, comprendre, préférer ou agir. Elle doit partir d’un objectif précis et d’une cible définie, puis assurer la cohérence entre message, canal, calendrier, budget et mesure de performance.',
    objectives:[
      'Distinguer objectifs cognitifs, affectifs et comportementaux.',
      'Construire une stratégie de communication à partir de la cible et du positionnement.',
      'Articuler média, hors média, digital, influence et promotion.',
      'Choisir des indicateurs adaptés à l’objectif.',
      'Intégrer référencement, influence et cadre juridique.'
    ],
    keyPoints:[
      'La communication ne compense pas durablement une offre incohérente avec la promesse.',
      'Le message doit préciser bénéfice, preuve, ton et action attendue.',
      'Le choix des canaux dépend du parcours de la cible et non de leur popularité générale.',
      'La communication intégrée recherche la cohérence entre les points de contact.',
      'Un indicateur de visibilité n’est pas un indicateur de vente ; chaque KPI doit être relié à l’objectif.',
      'L’influence commerciale et la publicité doivent respecter les obligations de transparence.'
    ],
    sections:[
      {
        heading:'1. Fixer l’objectif avant le canal',
        text:'La première question n’est pas « sur quel réseau communiquer ? » mais « quel changement cherche-t-on à produire ? ». Un objectif peut être cognitif — faire connaître ou comprendre —, affectif — faire préférer ou modifier l’image —, ou comportemental — générer essai, visite, demande de devis, réservation ou réachat.'
      },
      {
        heading:'2. Cible de communication et cible marketing',
        text:'La cible de communication peut être plus large ou différente de la cible commerciale. Prescripteurs, influenceurs, journalistes, salariés ou distributeurs peuvent jouer un rôle dans la décision. La stratégie doit identifier le destinataire principal et les relais.'
      },
      {
        heading:'3. Construire le message',
        text:'Le message transforme le positionnement en contenu communicable. Il articule une promesse, des bénéfices, des raisons de croire et un ton. La preuve est essentielle lorsque la promesse est difficile à évaluer avant achat.',
        bullets:[
          'Promesse : ce que la cible doit retenir.',
          'Bénéfice : valeur fonctionnelle, émotionnelle, sociale ou expérientielle.',
          'Reason why : élément crédibilisant la promesse.',
          'Ton et codes : cohérence avec la marque et la cible.',
          'Call-to-action : action recherchée lorsqu’il y en a une.'
        ]
      },
      {
        heading:'4. Hiérarchie des effets',
        text:'Lavidge et Steiner proposent une progression de la connaissance vers l’achat à travers plusieurs étapes cognitives et affectives. Ce type de modèle rappelle qu’une campagne de notoriété ne doit pas être jugée uniquement par les ventes immédiates. Les parcours réels sont cependant moins linéaires, surtout dans les environnements numériques.'
      },
      {
        heading:'5. Média, hors média et digital',
        text:'La communication peut mobiliser publicité, relations presse, événementiel, partenariats, promotion des ventes, marketing direct, contenu, référencement, réseaux sociaux ou influence. Les catégories se chevauchent davantage avec le numérique ; l’enjeu est la fonction de chaque canal dans le parcours.'
      },
      {
        heading:'6. Paid, Owned, Earned',
        text:'Une grille utile distingue médias payés, espaces possédés par la marque et visibilité gagnée. Les médias payés offrent contrôle et portée ; les médias possédés permettent la continuité ; les médias gagnés peuvent apporter crédibilité mais sont moins contrôlables.',
        bullets:[
          'Paid : publicité, sponsoring, référencement payant.',
          'Owned : site, application, newsletter, comptes sociaux de la marque.',
          'Earned : presse, avis, bouche-à-oreille, partages spontanés.'
        ]
      },
      {
        heading:'7. Référencement et visibilité',
        text:'Le programme cite explicitement la stratégie de référencement. Le SEO cherche une visibilité organique durable à partir de la pertinence du contenu, de la structure technique et de l’autorité ; le SEA achète une visibilité sur des requêtes ou audiences. Les deux doivent être évalués par trafic qualifié, conversion et coût.'
      },
      {
        heading:'8. Influence et preuve sociale',
        text:'Les créateurs de contenu peuvent agir sur inspiration, crédibilité et considération. Le nombre d’abonnés ne suffit pas : affinité avec la cible, qualité de l’audience, engagement, capacité à produire un contenu crédible et effets mesurables sont plus importants.',
        example:'Pour une destination hors saison, quelques micro-créateurs spécialisés peuvent parfois produire une audience plus qualifiée qu’une personnalité très large mais peu liée au voyage.'
      },
      {
        heading:'9. Mesurer l’efficacité',
        text:'Les indicateurs doivent suivre la chaîne objectif → exposition → réaction → comportement → résultat. Une forte portée peut coexister avec une faible mémorisation ; un fort engagement avec peu de ventes ; une forte conversion avec un coût d’acquisition excessif.',
        bullets:[
          'Notoriété : couverture, mémorisation, notoriété assistée/spontanée.',
          'Image : associations, préférence, considération.',
          'Digital : clics, taux d’engagement, coût par clic, trafic qualifié.',
          'Conversion : leads, réservations, ventes, coût d’acquisition.',
          'Relation : réachat, recommandation, valeur client.'
        ]
      },
      {
        heading:'10. Application tourisme et destinations',
        text:'La communication touristique construit souvent un imaginaire avant la consommation. Elle doit gérer un écart particulier entre image projetée et expérience réelle. Une destination communique en outre avec une offre qu’elle ne contrôle pas intégralement : transporteurs, hébergeurs, habitants, restaurateurs et sites culturels contribuent tous à la promesse.'
      }
    ],
    recap:[
      'Partir de l’objectif et de la cible, pas du canal.',
      'Relier message et preuve au positionnement.',
      'Attribuer un rôle à chaque point de contact.',
      'Mesurer avec des KPI cohérents avec l’objectif.',
      'Distinguer visibilité, engagement et conversion.',
      'Intégrer transparence et droit de l’influence.'
    ],
    examTips:[
      'Éviter « communiquer davantage » : préciser cible, message, canal, temporalité et KPI.',
      'Ne pas citer un indicateur sans expliquer ce qu’il mesure et ce qu’il ne mesure pas.',
      'Relier la communication au positionnement et à l’expérience réelle.',
      'Dans une recommandation d’influence, intégrer transparence commerciale et mesure.'
    ],
    sources:[
      {type:'Académique',name:'Lavidge & Steiner — A Model for Predictive Measurements of Advertising Effectiveness',url:'https://journals.sagepub.com/doi/10.1177/002224296102500611'},
      {type:'Officiel',name:'Économie.gouv.fr — Obligations des influenceurs',url:'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Distribution & omnicanal': course({
    title:'Distribution et omnicanal : créer de la disponibilité sans perdre le contrôle de la relation',
    intro:'La politique de distribution organise la mise à disposition de l’offre, la circulation de l’information et une partie de l’expérience. Elle implique des choix de circuits, canaux, intermédiaires, couverture, logistique, animation et négociation. Le numérique ajoute des plateformes et impose de raisonner en parcours omnicanal.',
    objectives:[
      'Distinguer circuit, canal, réseau, intermédiaire et plateforme.',
      'Comparer distribution directe et indirecte.',
      'Comprendre intensité de distribution, couverture et animation du réseau.',
      'Analyser les conflits de canal et la dépendance aux intermédiaires.',
      'Construire une logique omnicanale cohérente.'
    ],
    keyPoints:[
      'La distribution crée de la valeur par disponibilité, information, assortiment, confiance, logistique et parfois financement.',
      'Un canal indirect peut augmenter la portée tout en réduisant marge, contrôle et accès à la donnée client.',
      'Les stratégies intensive, sélective ou exclusive correspondent à des objectifs et positionnements différents.',
      'Le conflit de canal apparaît lorsque des acteurs estiment que les décisions d’un autre canal menacent leur rôle ou leur rentabilité.',
      'L’omnicanal cherche une continuité d’expérience et de données entre canaux, au-delà de la simple coexistence multicanale.',
      'La performance doit être mesurée en coût net, marge, conversion, couverture, expérience et fidélisation.'
    ],
    sections:[
      {
        heading:'1. Fonctions de la distribution',
        text:'La distribution rapproche l’offre de la demande. Elle peut assurer transport, stockage, assortiment, mise en relation, information, conseil, transaction, paiement, service ou financement. Ces fonctions existent même lorsqu’un intermédiaire disparaît : elles sont simplement reprises par un autre acteur.'
      },
      {
        heading:'2. Circuit direct et indirect',
        text:'Dans un circuit direct, l’entreprise vend au client sans intermédiaire commercial principal. Dans un circuit indirect, un ou plusieurs intermédiaires interviennent. Le direct donne davantage de contrôle et de données mais exige des capacités commerciales et technologiques ; l’indirect apporte couverture, expertise ou confiance mais prélève une partie de la valeur.'
      },
      {
        heading:'3. Intensité de distribution',
        text:'Une distribution intensive cherche une présence large ; une distribution sélective choisit un nombre limité de points de vente ou partenaires ; une distribution exclusive limite fortement les distributeurs. Le choix dépend du positionnement, du besoin de conseil, du niveau de contrôle et des coûts.',
        example:'Une marque de luxe peut privilégier la sélectivité pour contrôler l’expérience, tandis qu’un produit courant recherche souvent une disponibilité maximale.'
      },
      {
        heading:'4. Réseaux, animation et négociation',
        text:'Un réseau de distribution doit être recruté, formé, motivé, équipé et évalué. Les relations peuvent être contractuelles ou plus partenariales. La négociation porte sur prix, marges, référencement, visibilité, données, promotions, services et partage des risques.'
      },
      {
        heading:'5. Conflits de canal',
        text:'Le développement du direct peut inquiéter les intermédiaires ; les promotions d’un canal peuvent dégrader la rentabilité d’un autre ; les données peuvent devenir un enjeu de pouvoir. Une stratégie cohérente définit le rôle de chaque canal et des règles de coexistence.'
      },
      {
        heading:'6. E-commerce et plateformes',
        text:'Les plateformes réduisent les coûts de recherche et peuvent produire des effets de réseau. Elles apportent audience, comparaison, confiance et outils de transaction, mais peuvent aussi créer dépendance, commissions et asymétrie de données. Leur pouvoir doit être évalué comme un élément du système de distribution.'
      },
      {
        heading:'7. Du multicanal à l’omnicanal',
        text:'Verhoef, Kannan et Inman analysent le passage à l’omnicanal comme une intégration accrue des canaux et touchpoints. Le client peut commencer une interaction sur un canal et la poursuivre sur un autre. L’entreprise doit donc coordonner données, stock, prix, service et identité.',
        bullets:[
          'Continuité du panier ou dossier client.',
          'Cohérence des informations et prix.',
          'Vue unifiée du client lorsque le cadre juridique le permet.',
          'Possibilité de changer de canal sans recommencer le parcours.',
          'Mesure transversale des interactions.'
        ]
      },
      {
        heading:'8. Digitalisation du point de vente',
        text:'Le point de vente physique peut intégrer réservation, paiement mobile, bornes, écrans, clienteling, consultation de stock ou personnalisation. La technologie doit réduire une friction ou améliorer l’expérience ; elle n’est pas un objectif en soi.'
      },
      {
        heading:'9. Mesure de performance par canal',
        text:'Le chiffre d’affaires brut est insuffisant. Il faut intégrer commission, coût d’acquisition, coûts logistiques, taux de retour, données obtenues, conversion, panier, marge et potentiel de fidélisation.',
        formula:'Contribution canal = Revenus générés – coûts variables – commissions – coûts spécifiques d’acquisition et de service.'
      },
      {
        heading:'10. Application tourisme : direct, OTA, agences, GDS',
        text:'Un hôtel distribue parfois simultanément via son site, son centre d’appel, des OTA, agences, tour-opérateurs, GDS et entreprises. L’objectif n’est pas forcément de supprimer les intermédiaires, mais d’optimiser le mix selon segment, saison, coût net et valeur relationnelle.'
      }
    ],
    recap:[
      'La distribution assure des fonctions qui ne disparaissent pas avec la désintermédiation.',
      'Comparer direct et indirect par coût, portée, contrôle et données.',
      'Adapter l’intensité au positionnement.',
      'Anticiper conflits et dépendances de canal.',
      'L’omnicanal exige intégration des points de contact.',
      'Mesurer la marge nette et la valeur relationnelle par canal.'
    ],
    examTips:[
      'Ne pas recommander automatiquement « développer le direct » sans analyser conversion et coût d’acquisition.',
      'Distinguer multi-canal et omnicanal.',
      'Dans un cas de plateforme, analyser à la fois valeur créée et dépendance.',
      'Relier toute recommandation de canal à une cible et à un moment du parcours.'
    ],
    sources:[
      {type:'Académique',name:'Verhoef, Kannan & Inman — From Multi-Channel Retailing to Omni-Channel Retailing',url:'https://doi.org/10.1016/j.jretai.2015.02.005'},
      {type:'Officiel UE',name:'Commission européenne — Booking.com et obligations DMA',url:'https://digital-strategy.ec.europa.eu/en/news/booking-must-now-comply-digital-markets-act',checked:'08/11/2026'},
      JURY
    ]
  }),

  'cours|Marketing digital': course({
    title:'Marketing digital : parcours, acquisition, données et performance',
    intro:'Le marketing digital ne constitue pas un canal isolé : il transforme la recherche, la comparaison, la recommandation, la transaction, le service et la fidélisation. Il oblige à articuler parcours client, contenus, médias, données, plateformes, automatisation et mesure.',
    objectives:[
      'Cartographier un parcours digital et ses principaux points de contact.',
      'Distinguer acquisition, activation, conversion, fidélisation et recommandation.',
      'Comprendre SEO, SEA, contenu, social, CRM et marketing automation.',
      'Relier collecte de données et personnalisation au cadre de consentement.',
      'Mesurer la performance sans confondre métriques intermédiaires et résultats.'
    ],
    keyPoints:[
      'Le digital élargit et relie les points de contact plutôt qu’il ne remplace systématiquement les canaux physiques.',
      'Lemon et Verhoef analysent l’expérience comme un parcours composé de touchpoints contrôlés par la marque, ses partenaires, les clients et l’environnement.',
      'Kannan et Li montrent comment les technologies numériques transforment plusieurs étapes du processus marketing.',
      'SEO, SEA, réseaux sociaux, CRM et contenu répondent à des objectifs distincts.',
      'La personnalisation dépend de la qualité des données et d’un cadre de traitement licite.',
      'L’attribution parfaite d’une vente à un seul point de contact est souvent impossible dans un parcours multi-interactions.'
    ],
    sections:[
      {
        heading:'1. Le parcours client numérique',
        text:'Le client peut découvrir une offre sur un réseau social, effectuer une recherche, consulter des avis, visiter le site, abandonner, revenir via un e-mail puis réserver sur un autre appareil. La cartographie du parcours identifie les étapes, besoins, émotions, données et frictions plutôt qu’une simple liste de canaux.'
      },
      {
        heading:'2. Acquisition',
        text:'L’acquisition vise à attirer une audience pertinente. Les principaux leviers incluent référencement naturel, publicité en ligne, affiliation, partenariats, réseaux sociaux, influence et contenu. Le coût d’acquisition doit être comparé à la marge et à la valeur client.',
        formula:'CAC simplifié = dépenses d’acquisition / nombre de nouveaux clients attribués à la période.'
      },
      {
        heading:'3. SEO et intention de recherche',
        text:'Le référencement naturel cherche à rendre une page accessible et pertinente pour une intention de recherche. Contenu, technique, popularité et expérience jouent un rôle. La logique ne doit pas être réduite à répéter des mots-clés : il faut répondre correctement au besoin d’information.'
      },
      {
        heading:'4. SEA et médias payants',
        text:'Le référencement payant et la publicité programmatique permettent de cibler requêtes ou audiences. Leur pilotage combine enchères, pertinence, création publicitaire, landing page et conversion. Un coût par clic faible peut être inutile si le trafic n’est pas qualifié.'
      },
      {
        heading:'5. Contenu, réseaux sociaux et communautés',
        text:'Le contenu peut informer, rassurer, inspirer ou démontrer l’expertise. Les réseaux sociaux facilitent diffusion, interaction et preuve sociale. La stratégie doit préciser le rôle de chaque format : inspiration, trafic, conversion, service ou fidélisation.'
      },
      {
        heading:'6. CRM et marketing automation',
        text:'Le CRM regroupe données et interactions afin d’améliorer connaissance et relation. L’automatisation permet de déclencher certains messages selon événements ou comportements. Elle doit éviter la sur-sollicitation et respecter les règles de prospection.',
        bullets:[
          'Bienvenue après inscription.',
          'Relance d’abandon si le cadre le permet.',
          'Message avant ou après séjour.',
          'Réactivation d’un client inactif.',
          'Personnalisation selon préférences déclarées ou comportements observés.'
        ]
      },
      {
        heading:'7. Données, cookies et consentement',
        text:'Une stratégie digitale ne peut pas considérer la donnée comme une ressource gratuite. Le RGPD et les règles sur les traceurs imposent finalité, transparence, base légale, minimisation et droits des personnes. Les traceurs non strictement nécessaires nécessitent en principe un consentement préalable valable.'
      },
      {
        heading:'8. Mesure et attribution',
        text:'La mesure doit distinguer indicateurs d’audience, d’engagement, de conversion et de valeur. L’attribution répartit le mérite d’une conversion entre les touchpoints ; chaque modèle est conventionnel et peut favoriser certains canaux.',
        bullets:[
          'Taux de clic : réaction à une exposition.',
          'Taux de conversion : part des visites ou opportunités réalisant l’action cible.',
          'ROAS : revenus attribués / dépenses publicitaires.',
          'CAC : coût d’acquisition.',
          'CLV : valeur estimée du client sur la durée.',
          'Rétention : maintien de l’usage ou de la relation dans le temps.'
        ]
      },
      {
        heading:'9. IA générative et moteurs de réponse',
        text:'L’IA générative modifie la production de contenu, l’assistance, la recherche d’information et certains parcours. Pour l’analyse marketing, il faut distinguer cas d’usage, qualité attendue, données utilisées, erreurs possibles, coût et indicateurs. Une technologie nouvelle n’est pas une stratégie en soi.'
      },
      {
        heading:'10. Application tourisme',
        text:'Le parcours touristique est très digitalisé avant le séjour : inspiration, comparaison, avis, cartographie, réservation et préparation. Pendant et après le séjour, applications, messageries et contenus continuent l’expérience. Le défi est de relier ces points de contact sans perdre confiance, cohérence ou maîtrise de la donnée.'
      }
    ],
    recap:[
      'Raisonner en parcours et non en silos de canaux.',
      'Associer chaque levier digital à un objectif précis.',
      'Mesurer acquisition, conversion, rétention et valeur.',
      'Reconnaître les limites de l’attribution.',
      'Respecter le cadre des données et traceurs.',
      'Évaluer l’IA par le problème résolu et la valeur créée.'
    ],
    examTips:[
      'Éviter les recommandations vagues du type « développer les réseaux sociaux » ou « utiliser l’IA ».',
      'Toujours préciser cible, étape du parcours, action et KPI.',
      'Ne pas présenter une métrique de vanité comme résultat business.',
      'Intégrer données personnelles et consentement dans les recommandations de personnalisation.'
    ],
    sources:[
      {type:'Académique',name:'Lemon & Verhoef — Understanding Customer Experience Throughout the Customer Journey',url:'https://doi.org/10.1509/jm.15.0420'},
      {type:'Académique',name:'Kannan & Li — Digital marketing: A framework, review and research agenda',url:'https://doi.org/10.1016/j.ijresmar.2016.11.006'},
      {type:'Officiel',name:'CNIL — Cookies et autres traceurs',url:'https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi',checked:'08/11/2026'},
      JURY
    ]
  })
}
