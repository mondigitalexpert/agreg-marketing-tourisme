import { marketingPages } from './content/marketing'
import { tourismPages } from './content/tourism'
import { authorsPages } from './content/authors'
import { trainingPages } from './content/training'
import { casePages } from './content/cases'
import { watchPages } from './content/watch'
import { libraryPages } from './content/library'
import { progressPages } from './content/progress'

const basePages = {
  'concours|Épreuves 2027': {
    label:'Repère officiel',
    title:'Épreuves de l’agrégation externe Économie-Gestion 2027',
    intro:'Le concours combine trois écrits d’admissibilité puis trois oraux d’admission. L’option C Marketing intervient à l’écrit dans l’étude de cas et à l’oral dans le cas pratique de spécialité.',
    keyPoints:[
      'Admissibilité : dissertation de management — 5 h — coefficient 1.',
      'Admissibilité : droit + économie dans une même épreuve de 5 h, sur deux dossiers et deux copies distinctes — coefficient 1.',
      'Admissibilité : étude de cas dans l’option C Marketing — 5 h — coefficient 1.',
      'Admission : leçon de management — préparation 4 h, oral 1 h dont 30 min maximum d’exposé — coefficient 1.',
      'Admission : exposé en droit ou en économie, choix formulé lors de l’inscription — préparation 4 h, oral 1 h — coefficient 1.',
      'Admission : cas pratique de spécialité Marketing — préparation 4 h, oral 1 h — coefficient 1.'
    ],
    sections:[
      {heading:'Ce que cela implique pour la préparation',text:'Il faut préparer en parallèle quatre registres : management, droit, économie et marketing. Le marketing ne suffit donc pas à lui seul pour réussir le concours, même si l’option C détermine l’étude de cas écrite et le cas pratique oral.'},
      {heading:'Point de vigilance 2027',text:'Le programme 2027 insiste sur la fusion, à l’écrit, du droit et de l’économie dans une seule épreuve de cinq heures. Les deux disciplines restent traitées séparément sur deux copies.'}
    ],
    sources:[
      {type:'Officiel',name:'Ministère de l’Éducation nationale — Les épreuves de l’agrégation externe économie et gestion',url:'https://www.devenirenseignant.gouv.fr/les-epreuves-de-l-agregation-externe-section-economie-et-gestion-868',checked:'08/11/2026'},
      {type:'Officiel',name:'Programme de la session 2027 — Économie et gestion',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'}
    ]
  },

  'concours|Programme officiel': {
    label:'Programme 2027',
    title:'Ce qu’il faut réellement couvrir',
    intro:'Le programme 2027 articule un socle commun et le programme spécifique de l’option choisie. Pour l’option C, le niveau attendu ne se limite pas au marketing opérationnel : il inclut stratégie, études, outils quantitatifs et environnement juridique.',
    keyPoints:[
      'Management : programmes STMG, CEJM et UE7 du DCG, traités au niveau M1, complétés par gouvernance, contrôle, technologies et comportements humains.',
      'Droit : programmes STMG, CEJM et UE1, UE2, UE3 du DCG, avec des thèmes complémentaires de niveau master.',
      'Économie : programmes STMG, CEJM et UE5 du DCG, avec mondialisation, environnement, travail, mutations technologiques, démographie, pauvreté et inégalités.',
      'Marketing : marché et environnement, comportement, stratégie, mix, marketing sectoriel et international, études, statistiques, gestion et droit appliqué.'
    ],
    sections:[
      {heading:'Le bon réflexe',text:'Utiliser le programme comme une checklist de compétences : chaque notion doit pouvoir être définie, reliée à un modèle, illustrée par un cas et mobilisée dans une recommandation.'},
      {heading:'À ne pas confondre',text:'Le tourisme est un terrain d’application particulièrement utile pour cette préparation, mais l’option C reste une option Marketing. Le sujet peut porter sur n’importe quel secteur, comme l’illustre le sujet 2026 consacré à Coopérative U.'}
    ],
    sources:[
      {type:'Officiel',name:'Programme de l’agrégation externe économie et gestion — session 2027',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'}
    ]
  },

  'concours|Option C Marketing': {
    label:'Programme de spécialité',
    title:'Option C — Marketing',
    intro:'L’option C est organisée autour de six ensembles de compétences auxquels s’ajoutent les dimensions juridiques et réglementaires du marketing et de la communication.',
    keyPoints:[
      'Comprendre le marché et l’environnement : veille, data marketing, études, concurrence, demande et comportement.',
      'Formuler la stratégie : segmentation, ciblage, différenciation, niche, globalisation, positionnement et repositionnement.',
      'Piloter le marketing opérationnel : produit/service, marque, prix, communication, distribution, vente et omnicanal.',
      'Maîtriser les marketing sectoriels : services, tourisme, industriel, digital, influence, social, territorial, entrepreneurial, culturel et BtoB.',
      'Traiter l’international : études de marché, stratégie, mix international et Incoterms.',
      'Utiliser les méthodes d’aide à la décision : études qualitatives/quantitatives, statistiques, probabilités, prévisions, recherche opérationnelle, gestion de projet et outils de gestion.'
    ],
    sections:[
      {heading:'Ce que le sujet 2026 confirme',text:'Le sujet officiel 2026 demandait à la fois modèle d’affaires, positionnement, adaptation aux attentes consommateurs, calculs de performance, assortiment local, stratégie digitale, buyer persona, parcours client et évaluation d’un site internet.'},
      {heading:'Conséquence',text:'Une bonne préparation doit alterner théorie, calcul, diagnostic, lecture documentaire et recommandations opérationnelles. Le simple apprentissage de définitions est insuffisant.'}
    ],
    sources:[
      {type:'Officiel',name:'Programme 2027 — Option C Marketing',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Sujet option C externe 2026.pdf — utilisé pour identifier la nature des questions',note:'Sujet fourni par l’utilisateur ; non republié intégralement.'}
    ]
  },

  'concours|Attentes du jury': {
    label:'Dernier rapport externe disponible',
    title:'Ce que le jury valorise réellement',
    intro:'Au 8 novembre 2026, le rapport du jury externe économie-gestion 2026 n’est pas encore publié. Le dernier rapport externe disponible est celui de la session 2025.',
    keyPoints:[
      'Lire des revues académiques en marketing afin d’actualiser les cadres théoriques mobilisables.',
      'Maîtriser la partie calculatoire : les indicateurs ne doivent pas seulement être connus, mais calculés et interprétés.',
      'Éviter la récitation : les concepts et modèles doivent servir l’analyse du cas.',
      'Définir les notions importantes et répondre précisément à toutes les sous-questions.',
      'Justifier les recommandations à partir du contexte, des données et de cadres théoriques adaptés.',
      'Le rapport 2025 rappelle aussi, de manière transversale dans ses observations sur d’autres options, l’exigence de citer ses sources comme élément d’honnêteté intellectuelle.'
    ],
    sections:[
      {heading:'Un indicateur utile',text:'En 2025, pour l’étude de cas écrite Option C, la moyenne était de 5,87/20 pour 292 candidats présents. Cela montre le niveau de sélectivité de cette épreuve, sans préjuger des résultats 2026.'},
      {heading:'Pour le site d’entraînement',text:'Chaque cas proposé ici devra donc demander au minimum : concepts, données, diagnostic, justification et recommandations — et pas seulement une réponse de cours.'}
    ],
    sources:[
      {type:'Officiel',name:'Rapport du jury de l’agrégation externe économie et gestion — session 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'},
      {type:'Officiel',name:'Page des rapports de jury 2026 — rapport externe économie-gestion annoncé comme à venir',url:'https://www.devenirenseignant.gouv.fr/rapports-des-jurys-des-concours-de-l-agregation-de-la-session-2026-1811',checked:'08/11/2026'}
    ]
  },

  'concours|Méthodologie': {
    label:'Synthèse de travail',
    title:'Construire une préparation efficace',
    intro:'Cette page reprend uniquement des principes généraux de préparation présents dans le support INSPE fourni. Ce document porte sur une épreuve de l’agrégation interne : ses conseils de planification, veille, mémorisation et entraînement sont transposables, mais sa méthodologie d’épreuve ne doit pas être confondue avec celle de l’agrégation externe.',
    keyPoints:[
      'Structurer la préparation par matière et par thème, avec un calendrier de travail.',
      'Construire progressivement des fiches ou cartes mentales à partir d’ouvrages et de sources de référence.',
      'Mémoriser les définitions et modèles par répétition régulière, notamment avec des flashcards.',
      'Constituer un dossier par notion : définitions, auteurs, théorie, actualité, exemples d’entreprises et données.',
      'Suivre quelques entreprises de manière continue afin de disposer d’exemples riches et actualisés.',
      'S’entraîner fréquemment sur des unités courtes : introduction, problématique, plan, analyse ou recommandation.'
    ],
    sections:[
      {heading:'La logique de l’application',text:'L’application reprend cette démarche sous une forme opérationnelle : un cours court, une fiche de mémorisation, un exemple sourcé, puis un exercice ou un cas.'},
      {heading:'Protection et périmètre de la ressource',text:'Le support méthodologique INSPE fourni sert uniquement de référence de travail. Son contenu original n’est ni intégré ni proposé au téléchargement. Comme il concerne l’agrégation interne, seules les recommandations générales de préparation sont reprises ici.'}
    ],
    sources:[
      {type:'Ressource fournie',name:'Cours INSPE Agreg Methodo Partie 2.pdf — Florence Clargé',note:'Synthèse d’idées méthodologiques uniquement ; le document indique qu’il ne peut être diffusé ou reproduit sans autorisation.'},
      {type:'Officiel',name:'Rapport du jury externe 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'}
    ]
  },

  'concours|Sujets officiels': {
    label:'Entraînement',
    title:'Sujets officiels à exploiter',
    intro:'Les sujets officiels sont une base prioritaire pour calibrer le niveau d’exigence. Le sujet Option C externe 2026 fourni dans les ressources porte sur Coopérative U.',
    keyPoints:[
      'Dossier 1 : modèle d’affaires, positionnement et adaptation aux attentes des consommateurs.',
      'Dossier 2 : modèle coopératif, calculs de contribution au chiffre d’affaires et productivité par m², assortiment local.',
      'Dossier 3 : stratégie digitale, buyer persona, parcours client, performance du site et recommandations.'
    ],
    sections:[
      {heading:'Comment l’utiliser',text:'Ne pas commencer par chercher un corrigé. Travailler d’abord le sujet en temps limité, identifier les modèles à mobiliser, effectuer les calculs, puis comparer la qualité de l’argumentation avec les attendus du programme et les conseils du jury.'},
      {heading:'Rappel du sujet',text:'Le sujet précise que les concepts et théories associés doivent être définis et mobilisés pour aller au-delà de la simple exploitation des annexes.'}
    ],
    sources:[
      {type:'Officiel',name:'Sujets de l’agrégation — session 2026',url:'https://www.devenirenseignant.gouv.fr/sujets-et-rapports-des-jurys-concours-de-l-agregation-de-2026-1659',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Sujet option C externe 2026.pdf',note:'Copie du sujet officiel présente dans les ressources de révision.'}
    ]
  },

  'concours|Rapports de jury': {
    label:'Source prioritaire',
    title:'Lire les rapports de jury comme un cahier des charges',
    intro:'Les rapports ne donnent pas seulement des résultats : ils décrivent les défauts les plus fréquents et ce qui différencie une réponse acceptable d’une réponse de niveau agrégation.',
    keyPoints:[
      'Dernier rapport externe économie-gestion disponible au 08/11/2026 : session 2025.',
      'Le rapport externe 2026 n’est pas encore publié sur la page officielle.',
      'Pour l’Option C, le rapport 2025 insiste sur l’actualisation académique et la maîtrise des calculs.',
      'Les conseils transversaux insistent sur la précision, la structuration, les définitions, la justification et les sources.'
    ],
    sections:[
      {heading:'Usage conseillé',text:'Créer une checklist “jury” à utiliser après chaque cas : ai-je défini les notions ? utilisé un cadre adapté ? exploité les chiffres ? contextualisé ? justifié mes préconisations ? cité mes sources ?'},
      {heading:'Mise à jour',text:'Cette page devra être mise à jour dès la publication du rapport externe économie-gestion 2026.'}
    ],
    sources:[
      {type:'Officiel',name:'Rapport du jury externe 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'},
      {type:'Officiel',name:'Rapports des jurys 2026',url:'https://www.devenirenseignant.gouv.fr/rapports-des-jurys-des-concours-de-l-agregation-de-la-session-2026-1811',checked:'08/11/2026'}
    ]
  },

  'concours|Pièges à éviter': {
    label:'Checklist',
    title:'Les erreurs à éviter',
    intro:'Ces pièges sont issus du programme, du rapport de jury externe 2025 et de la méthodologie de préparation fournie.',
    keyPoints:[
      'Réciter des auteurs sans expliquer leur apport au problème posé.',
      'Donner des recommandations sous forme de catalogue sans diagnostic ni justification.',
      'Éviter les calculs alors que le programme exige des outils quantitatifs.',
      'Paraphraser les annexes sans apporter de connaissances personnelles.',
      'Utiliser un exemple d’entreprise ancien comme s’il décrivait encore la situation actuelle.',
      'Confondre le tourisme avec le programme : le tourisme est un terrain d’application, pas le périmètre exclusif de l’option C.',
      'Employer une donnée actuelle sans source ou sans date de vérification.'
    ],
    sections:[
      {heading:'Règle de l’application',text:'Toute donnée d’actualité ou affirmation concernant une entreprise réelle doit comporter une source et une date de vérification. Un cas ancien est signalé comme historique.'}
    ],
    sources:[
      {type:'Officiel',name:'Rapport du jury externe 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Cours INSPE Agreg Methodo Partie 2.pdf',note:'Utilisé uniquement comme appui méthodologique.'}
    ]
  },

  'cours|Marché & environnement': {
    label:'Cours essentiel',
    title:'Comprendre le marché et son environnement',
    intro:'Avant de formuler une stratégie, il faut être capable de décrire le marché, ses acteurs, ses évolutions et les déterminants de la demande. Le programme 2027 associe explicitement veille, data marketing, études, concurrence et comportement.',
    keyPoints:[
      'Analyser l’environnement : dimensions économiques, géopolitiques, technologiques, sociales, juridiques et éthiques.',
      'Analyser l’offre : concurrents, stratégies d’acteurs, parts de marché et dynamique sectorielle.',
      'Analyser la demande : profils, motivations, freins, processus de décision et évolutions des usages.',
      'Distinguer une donnée brute, un indicateur et une interprétation marketing.',
      'Croiser plusieurs sources avant de conclure sur une tendance.'
    ],
    sections:[
      {heading:'Application tourisme',text:'Pour un marché hôtelier, l’analyse peut combiner capacité d’hébergement, nuitées, taux d’occupation, origine de la clientèle, saisonnalité, segment de classement, concurrence des chaînes et indépendants, ainsi que les tendances de réservation.'},
      {heading:'Exercice rapide',text:'À partir d’une statistique de fréquentation hôtelière, formule trois constats factuels puis deux hypothèses marketing. Ne transforme jamais une hypothèse en fait.'}
    ],
    sources:[
      {type:'Officiel',name:'Programme 2027 — Option C Marketing',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'},
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels, données 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'}
    ]
  },

  'cours|Marketing des services': {
    label:'Cours essentiel',
    title:'Marketing des services',
    intro:'Le marketing des services est particulièrement important pour travailler le tourisme. Les ressources fournies mobilisent notamment la servuction, les spécificités du service et l’extension du mix marketing.',
    keyPoints:[
      'La servuction décrit le système de production du service et l’interaction entre client, personnel en contact et support physique.',
      'Les services ont classiquement été étudiés à travers quatre caractéristiques dites IHIP : intangibilité, hétérogénéité, indissociabilité et périssabilité. Ce cadre reste utile pédagogiquement mais son caractère universel est discuté dans la littérature académique.',
      'Le mix des services élargit les 4P par des dimensions liées aux personnes, aux processus et aux preuves physiques.',
      'L’expérience perçue dépend autant du résultat que des conditions de délivrance du service.',
      'Dans le tourisme, le client participe souvent directement à la production de son expérience.'
    ],
    sections:[
      {heading:'Auteurs à mobiliser',text:'Pierre Eiglier et Éric Langeard constituent une référence centrale pour la servuction. La ressource de préparation fournie mobilise également Booms et Bitner pour le mix étendu des services.'},
      {heading:'Application hôtelière',text:'Le check-in, l’accueil, la chambre, les espaces communs, l’application mobile, le personnel et même les autres clients peuvent influencer l’expérience perçue. Le diagnostic marketing doit donc dépasser la seule chambre vendue.'},
      {heading:'Question d’entraînement',text:'Explique comment un hôtel peut rendre tangible une promesse de service avant l’achat, puis propose deux indicateurs permettant d’évaluer l’effet des dispositifs choisis.'}
    ],
    sources:[
      {type:'Académique',name:'BNF — Eiglier & Langeard, Servuction : le marketing des services (1987)',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n',checked:'08/11/2026'},
      {type:'Académique',name:'Booms & Bitner — Marketing Strategies and Organization Structures for Service Firms (1981)',url:'https://www.scienceopen.com/book?vid=6af78f40-d8ac-4627-82cb-e5c651a134f1',checked:'08/11/2026'},
      {type:'Académique',name:'Lovelock & Gummesson — Whither Services Marketing? (2004), discussion critique du cadre IHIP',url:'https://journals.sagepub.com/doi/10.1177/1094670504266131',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Copies Option C — Innovation et marketing des services.pdf',note:'Ressource de préparation, utilisée comme point de départ ; les notions théoriques sont recoupées avec des références académiques externes.'}
    ]
  },

  'tourisme|Fondamentaux': {
    label:'Application tourisme',
    title:'Premiers repères chiffrés sur le tourisme en France',
    intro:'Cette fiche donne d’abord des repères sur les hébergements collectifs, qui ne couvrent pas à eux seuls toute l’économie touristique. Les données sont datées, leur champ est précisé et les résultats 2025 définitifs sont distingués des publications provisoires 2026.',
    keyPoints:[
      'En 2025, les hébergements collectifs de tourisme totalisent 465,4 millions de nuitées.',
      'Les hôtels représentent 220,2 millions de nuitées, les campings 147,6 millions et les autres hébergements collectifs touristiques 97,6 millions.',
      'Pour les hôtels, le taux d’occupation moyen est de 62,3 % ; les établissements classés totalisent 203,1 millions de nuitées.',
      'Dans l’hôtellerie, les chaînes totalisent 109,2 millions de nuitées et les indépendants 111,0 millions.',
      'Les données annuelles 2025 sont définitives ; certaines publications mensuelles ou saisonnières 2026 sont encore provisoires.'
    ],
    sections:[
      {heading:'Comment les utiliser au concours',text:'Ces chiffres peuvent servir à contextualiser un cas, mais ils ne suffisent pas à expliquer une stratégie. Il faut ensuite segmenter le marché, identifier les acteurs, analyser les comportements et relier les tendances aux décisions marketing.'},
      {heading:'Réflexe anti-hallucination',text:'Toujours conserver l’année, le périmètre géographique et la définition de l’indicateur. “Le tourisme augmente” n’est pas une information exploitable sans ces précisions.'}
    ],
    sources:[
      {type:'Officiel',name:'Insee — Parc et fréquentation des hébergements collectifs, données annuelles 2025',url:'https://www.insee.fr/fr/statistiques/2015395',checked:'08/11/2026'},
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels, données annuelles 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'},
      {type:'Officiel',name:'Insee — Saison touristique d’été 2026, données 2026 signalées provisoires',url:'https://www.insee.fr/fr/statistiques/9056644',checked:'08/11/2026'}
    ]
  },

  'tourisme|Hôtellerie': {
    label:'Application sectorielle',
    title:'Hôtellerie : segmentation, expérience et distribution',
    intro:'L’hôtellerie permet de mobiliser presque tout le programme de marketing : segmentation, positionnement, politique de service, prix, distribution, expérience client, digital, CRM et marque.',
    keyPoints:[
      'Le parc hôtelier recensé par l’Insee comptait en moyenne mensuelle 14 886 établissements en 2025, pour 618 200 chambres ou appartements.',
      'Les établissements classés 4 étoiles affichaient un taux d’occupation de 68,1 % en 2025, supérieur à la moyenne de l’ensemble des hôtels.',
      'L’analyse doit distinguer chaînes et indépendants, classement, clientèle résidente/non résidente, tourisme d’affaires/loisirs et saisonnalité.',
      'Les ressources fournies sur Accor et OKKO sont utiles pour travailler personnalisation, digitalisation, processus de service et plateformes — mais ce sont des cas historiques à ne pas présenter comme des faits 2026.'
    ],
    sections:[
      {heading:'Cas historique — Accor (2015)',text:'La ressource fournie reprend un article de 2015 décrivant la transformation des marques d’Accor autour de la personnalisation, de la déstandardisation et du digital. Elle est intéressante pour travailler la différenciation dans les services, mais ne décrit pas la situation actuelle du groupe.'},
      {heading:'Cas historique — OKKO Hotels (2015)',text:'La ressource fournie reprend un article de 2015 présentant un concept hôtelier reposant sur la simplification de certains services, l’usage du numérique et un espace commun central. Elle permet de travailler le modèle d’affaires, la servuction et la valeur perçue, mais ses données opérationnelles doivent être actualisées avant réemploi.'},
      {heading:'Mini-cas',text:'Un hôtel 4 étoiles veut réduire sa dépendance aux plateformes tout en conservant leur capacité d’acquisition. Propose un diagnostic en distinguant acquisition, conversion, fidélisation, coût de distribution et expérience client.'}
    ],
    sources:[
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Accor et digital.docx',note:'Article Les Échos daté de 2015 dans le document fourni ; cas historique, à ne pas utiliser comme photographie actuelle du groupe.'},
      {type:'Ressource fournie',name:'Pour lancer ses 4 étoiles version allégée OKKO Hôtel.docx',note:'Article Les Échos daté de 2015 dans le document fourni ; données et pratiques à actualiser avant réemploi.'}
    ]
  },

  'cas|Hôtellerie': {
    label:'Cas d’entraînement sourcé',
    title:'Cas express — Le marché hôtelier français',
    intro:'Objectif : transformer des données officielles en diagnostic marketing, sans inventer de causalité.',
    keyPoints:[
      'En 2025 : 220,2 millions de nuitées hôtelières en France.',
      'Taux d’occupation moyen : 62,3 %.',
      'Chaînes : 109,2 millions de nuitées ; indépendants : 111,0 millions.',
      '4 étoiles : taux d’occupation de 68,1 % ; 63,5 millions de nuitées.'
    ],
    sections:[
      {heading:'Question 1 — Diagnostic',text:'Que peut-on affirmer, et que ne peut-on pas affirmer, à partir de ces seules données ? Distingue faits, interprétations et hypothèses.'},
      {heading:'Question 2 — Segmentation',text:'Propose trois axes de segmentation pertinents pour un groupe hôtelier français. Justifie chacun.'},
      {heading:'Question 3 — Recommandation',text:'Un réseau indépendant veut augmenter sa réservation directe. Propose trois leviers marketing et, pour chacun, un indicateur de suivi.'},
      {heading:'Piste de correction',text:'Une bonne réponse ne cherche pas une “solution magique”. Elle articule diagnostic, cible, proposition de valeur, canal, coût d’acquisition, fidélisation et mesure de performance.'}
    ],
    sources:[
      {type:'Officiel',name:'Insee — Parc et fréquentation des hôtels 2025',url:'https://www.insee.fr/fr/statistiques/2015412',checked:'08/11/2026'}
    ]
  },

  'entrainement|QCM rapides': {
    label:'Quiz interactif',
    title:'QCM — Concours & fondamentaux Marketing',
    intro:'Un premier quiz court construit uniquement à partir du programme officiel, du sujet 2026 et des ressources de préparation utilisées dans les pages déjà publiées.',
    quiz:[
      {q:'Combien d’épreuves écrites d’admissibilité comporte l’agrégation externe économie-gestion ?',choices:['2','3','4','5'],answer:1,explanation:'Trois écrits : management, droit+économie, étude de cas de spécialité.'},
      {q:'En 2027, l’épreuve écrite droit-économie dure :',choices:['3 h','4 h','5 h','6 h'],answer:2,explanation:'Une seule épreuve de 5 heures avec deux dossiers et deux copies distinctes.'},
      {q:'Le choix entre droit et économie pour l’exposé oral est :',choices:['Tiré au sort','Choisi au moment de l’inscription','Décidé après l’admissibilité','Imposé par l’option Marketing'],answer:1,explanation:'Le choix est formulé lors de l’inscription, indépendamment de l’option choisie.'},
      {q:'Le sujet Option C externe 2026 portait principalement sur :',choices:['Accor','Coopérative U','Air France','Decathlon'],answer:1,explanation:'Le cas 2026 fourni porte sur Coopérative U.'},
      {q:'Lequel n’est PAS un thème explicite du programme Option C 2027 ?',choices:['Marketing territorial','Marketing d’influence','Marketing BtoB','Audit légal'],answer:3,explanation:'L’audit légal relève d’autres champs du programme, pas du programme spécifique de l’Option C.'},
      {q:'La servuction est principalement associée à :',choices:['Eiglier et Langeard','Porter et Kramer','Maslow et Herzberg','Taylor et Fayol'],answer:0,explanation:'Eiglier et Langeard ont formalisé la servuction dans le marketing des services.'},
      {q:'Dans un cas marketing, le jury attend surtout :',choices:['Une liste de solutions','Une récitation d’auteurs','Des réponses contextualisées et justifiées','Le plus grand nombre possible de concepts'],answer:2,explanation:'Les concepts doivent servir l’analyse du cas et les recommandations doivent être justifiées.'},
      {q:'Une donnée de 2015 sur Accor peut être utilisée en 2026 :',choices:['Comme un fait actuel sans précaution','Comme un cas historique clairement daté','Seulement si elle est spectaculaire','Sans source si elle figure dans une fiche de révision'],answer:1,explanation:'Une donnée ancienne doit être présentée comme historique et actualisée si elle sert à décrire la situation actuelle.'}
    ],
    sources:[
      {type:'Officiel',name:'Épreuves de l’agrégation externe économie-gestion',url:'https://www.devenirenseignant.gouv.fr/les-epreuves-de-l-agregation-externe-section-economie-et-gestion-868',checked:'08/11/2026'},
      {type:'Officiel',name:'Programme 2027',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'},
      {type:'Ressource fournie',name:'Sujet option C externe 2026.pdf'},
      {type:'Ressource fournie',name:'Copies Option C — Innovation et marketing des services.pdf',note:'Ressource de préparation non officielle ; les références théoriques sont à recouper avant publication.'},
      {type:'Académique',name:'BNF — Eiglier & Langeard, Servuction : le marketing des services (1987)',url:'https://catalogue.bnf.fr/ark:/12148/cb34968117n',checked:'08/11/2026'},
      {type:'Officiel',name:'Rapport du jury externe économie-gestion 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'}
    ]
  }
}


export const contentPages = {
  ...basePages,
  ...marketingPages,
  ...tourismPages,
  ...authorsPages,
  ...trainingPages,
  ...casePages,
  ...watchPages,
  ...libraryPages,
  ...progressPages
}
