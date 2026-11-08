import { trainingCorrections } from './corrections'
const OFFICIAL={type:'Officiel',name:'Programme 2027 — Agrégation externe économie-gestion',url:'https://www.devenirenseignant.gouv.fr/media/20325/download',checked:'08/11/2026'}
const JURY={type:'Officiel',name:'Rapport du jury externe économie-gestion 2025',url:'https://www.devenirenseignant.gouv.fr/media/18028/download',checked:'08/11/2026'}
const p=(label,title,intro,keyPoints=[],sections=[],sources=[OFFICIAL,JURY],extra={})=>({label,title,intro,keyPoints,sections,sources,...extra})

export const trainingPages = {
  'entrainement|QCM rapides': p(
    'Quiz interactif','QCM rapides — fondamentaux',
    'Un premier entraînement de récupération active. Les questions visent des notions stables du programme et des attentes explicitement décrites dans les sources officielles.',
    [],[],[OFFICIAL,JURY],
    {quiz:[
      {q:'L’option C de l’agrégation externe économie-gestion correspond à :',choices:['Finance','Marketing','Systèmes d’information','Ressources humaines'],answer:1,explanation:'L’option C est l’option Marketing.'},
      {q:'En segmentation-ciblage-positionnement, le positionnement désigne principalement :',choices:['Le lieu de vente','La place distinctive recherchée dans l’esprit de la cible','Le prix moyen','Le nombre de segments'],answer:1,explanation:'Le positionnement correspond à la place distinctive recherchée relativement aux alternatives.'},
      {q:'Le RevPAR peut être calculé par :',choices:['Prix moyen × taux d’occupation','CA total ÷ salariés','Taux d’occupation ÷ prix moyen','Marge × panier moyen'],answer:0,explanation:'RevPAR = ADR × taux d’occupation, ou revenu chambres ÷ chambres disponibles.'},
      {q:'Une corrélation statistique prouve-t-elle à elle seule une causalité ?',choices:['Oui','Non'],answer:1,explanation:'Une corrélation ne suffit pas à établir un lien causal.'},
      {q:'Pour analyser l’intention comportementale, quel cadre est le plus adapté ?',choices:['Porter','Ajzen','BCG','Wilson'],answer:1,explanation:'La théorie du comportement planifié d’Ajzen traite notamment de l’intention.'},
      {q:'Dans un service, la servuction concerne :',choices:['La seule publicité','Le système de production du service et les interactions','Uniquement les coûts','Le droit du travail'],answer:1,explanation:'La servuction analyse le système de production/délivrance du service.'},
      {q:'Une recommandation de cas doit être :',choices:['Générique','Contextualisée et justifiée','La plus longue possible','Sans indicateur'],answer:1,explanation:'Le rapport de jury insiste sur la contextualisation, la justification et l’exploitation des données.'},
      {q:'Une donnée 2015 peut être utilisée en 2026 comme :',choices:['Fait actuel sans précaution','Cas historique daté','Prévision','Source officielle par défaut'],answer:1,explanation:'Elle peut illustrer une évolution historique mais doit être datée et actualisée si elle décrit le présent.'}
    ]}
  ),

  'entrainement|Vrai / Faux argumenté': p(
    'Quiz interactif','Vrai / Faux — avec justification',
    'Répondre vrai ou faux n’est que la première étape. L’objectif est d’identifier la nuance qui rend l’énoncé exact ou trompeur.',
    [],[],[OFFICIAL,JURY],
    {quiz:[
      {q:'Un taux d’occupation plus élevé signifie toujours une meilleure rentabilité.',choices:['Vrai','Faux'],answer:1,explanation:'Il faut aussi considérer prix moyen, coûts, mix de canaux, services et marges.'},
      {q:'Le tourisme constitue à lui seul le programme de l’option C.',choices:['Vrai','Faux'],answer:1,explanation:'Le tourisme est un champ du marketing des services, pas le périmètre exclusif de l’option C.'},
      {q:'Une recommandation peut être pertinente même si elle n’est reliée à aucun diagnostic.',choices:['Vrai','Faux'],answer:1,explanation:'Sans diagnostic, la recommandation devient un catalogue générique.'},
      {q:'Les avis clients peuvent être analysés qualitativement pour repérer des irritants.',choices:['Vrai','Faux'],answer:0,explanation:'Le contenu textuel des avis peut aider à identifier les thèmes récurrents et moments de friction.'},
      {q:'La satisfaction et la fidélité sont synonymes.',choices:['Vrai','Faux'],answer:1,explanation:'Un client satisfait peut ne pas revenir ; la fidélité implique une relation comportementale et/ou attitudinale durable.'},
      {q:'Le prix est seulement une variable financière.',choices:['Vrai','Faux'],answer:1,explanation:'Il est aussi un signal de positionnement et influence la perception de valeur.'}
    ]}
  ),

  'entrainement|Flashcards': p(
    'Mémorisation','Flashcards — notions indispensables',
    'Réviser par récupération active : lire la face, produire mentalement une réponse puis seulement révéler le verso.',
    [],[],[OFFICIAL],
    {flashcards:[
      {front:'Segmentation',back:'Découpage d’un marché en groupes de clients présentant des caractéristiques ou réponses suffisamment homogènes pour justifier une approche spécifique.'},
      {front:'Ciblage',back:'Choix du ou des segments que l’organisation décide de servir prioritairement.'},
      {front:'Positionnement',back:'Place distinctive recherchée dans l’esprit d’une cible relativement aux alternatives.'},
      {front:'Valeur perçue',back:'Appréciation des bénéfices reçus relativement aux sacrifices consentis.'},
      {front:'Omnicanal',back:'Coordination intégrée des canaux et points de contact afin de permettre une expérience continue.'},
      {front:'Servuction',back:'Système de production du service impliquant notamment client, personnel, support physique et organisation.'},
      {front:'Customer Journey',back:'Parcours d’un client dans le temps à travers les points de contact avant, pendant et après l’achat/usage.'},
      {front:'RevPAR',back:'Revenu hébergement par chambre disponible ; ADR × taux d’occupation.'},
      {front:'CLV',back:'Valeur économique estimée d’un client sur la durée de la relation.'},
      {front:'Conversion',back:'Réalisation d’une action cible définie et mesurable.'},
      {front:'Part de marché',back:'Ventes de l’entreprise rapportées aux ventes du marché sur un périmètre et une période cohérents.'},
      {front:'Élasticité-prix',back:'Sensibilité relative de la quantité demandée à une variation relative du prix.'}
    ]}
  ),

  'entrainement|Questions ouvertes': p(
    'Réponse courte','Questions ouvertes — expliquer en 5 minutes',
    'Ces questions servent à vérifier la compréhension avant de passer au cas. Répondre en quelques phrases structurées : définition, mécanisme, exemple.',
    [
      'Pourquoi un positionnement doit-il être cohérent avec le mix marketing ?',
      'Quelle différence entre satisfaction et fidélité ?',
      'Pourquoi une plateforme peut-elle être à la fois partenaire et risque stratégique ?',
      'Dans quel cas une étude qualitative est-elle préférable à une enquête quantitative ?',
      'Pourquoi un taux de conversion ne suffit-il pas à évaluer une stratégie digitale ?',
      'Que change la périssabilité d’une capacité hôtelière pour le prix ?',
      'Comment distinguer un fait, une interprétation et une hypothèse dans un diagnostic ?',
      'Pourquoi le tourisme durable ne peut-il pas être traité uniquement comme un axe de communication ?'
    ],
    [
      {heading:'Auto-correction',text:'Une bonne réponse contient une définition ou distinction claire, un mécanisme causal plausible, puis une application. Si l’exemple remplace l’explication, la réponse reste fragile.'}
    ]
  ),

  'entrainement|Définitions': p(
    'Mémorisation','Définitions — entraînement express',
    'Essaye de produire chaque définition en moins de 30 secondes, puis ajoute une distinction avec un concept proche.',
    [
      'Marché — définir le périmètre de l’échange.',
      'Segment — préciser homogénéité et exploitabilité.',
      'Positionnement — distinguer de l’image réellement perçue.',
      'Notoriété — distinguer de l’image et du capital de marque.',
      'Expérience client — distinguer de la seule satisfaction.',
      'Fidélité — distinguer répétition contrainte et préférence.',
      'Omnicanal — distinguer de multicanal.',
      'CRM — distinguer logiciel et stratégie relationnelle.',
      'Revenue management — distinguer simple hausse de prix et pilotage de capacité.',
      'Greenwashing — distinguer action environnementale et communication trompeuse.'
    ],
    [
      {heading:'Règle',text:'Au concours, une définition doit être suffisamment précise pour être réutilisée dans l’analyse. Évite les formulations circulaires du type “la fidélité est le fait d’être fidèle”.'}
    ]
  ),

  'entrainement|Retrouver l’auteur': p(
    'Quiz','Retrouver l’auteur',
    'Identifier l’auteur ou le courant associé à un mécanisme donné.',
    [],[],[OFFICIAL,JURY],
    {quiz:[
      {q:'Attitude + norme subjective + contrôle perçu → intention.',choices:['Ajzen','Porter','Kimes','Aaker'],answer:0,explanation:'Théorie du comportement planifié — Ajzen.'},
      {q:'Servuction et système de production du service.',choices:['Eiglier & Langeard','Keller','Sarasvathy','Webster & Wind'],answer:0,explanation:'Eiglier & Langeard.'},
      {q:'Customer-Based Brand Equity.',choices:['Keller','Kimes','Pine & Gilmore','Porter'],answer:0,explanation:'Keller.'},
      {q:'Effectuation.',choices:['Sarasvathy','Ajzen','Aaker','Oliver'],answer:0,explanation:'Saras Sarasvathy.'},
      {q:'Customer Journey et touchpoints.',choices:['Lemon & Verhoef','Porter','Kimes','Hofstede'],answer:0,explanation:'Lemon & Verhoef.'},
      {q:'Revenue management dans les services à capacité contrainte.',choices:['Kimes','Keller','Levitt','Rogers'],answer:0,explanation:'Sheryl Kimes.'}
    ]}
  ),

  'entrainement|Retrouver le modèle': p(
    'Quiz','Retrouver le modèle',
    'À partir d’un problème, sélectionner l’outil qui répond réellement à la question.',
    [],[],[OFFICIAL,JURY],
    {quiz:[
      {q:'Analyser le pouvoir des OTA, clients, fournisseurs et substituts.',choices:['5 forces','SCP','SERVQUAL','BMC'],answer:0,explanation:'Les cinq forces structurent l’analyse du secteur.'},
      {q:'Comprendre les points de friction avant, pendant et après le séjour.',choices:['Customer Journey','PESTEL','BCG','Wilson'],answer:0,explanation:'Le parcours client est adapté.'},
      {q:'Décomposer le modèle économique d’une travel-tech.',choices:['Business Model Canvas','SERVQUAL','AIDA','CBBE'],answer:0,explanation:'Le BMC structure les blocs du business model.'},
      {q:'Comprendre pourquoi un public favorable ne passe pas à l’action.',choices:['Théorie du comportement planifié','5 forces','BCG','RevPAR'],answer:0,explanation:'Le cadre d’Ajzen analyse l’intention et ses déterminants.'},
      {q:'Optimiser une capacité hôtelière périssable.',choices:['Revenue management','CCT','PESTEL','NPS'],answer:0,explanation:'Le revenue management traite directement ce problème.'}
    ]}
  ),

  'entrainement|Mini-cas 10 min': p(
    'Cas fictifs','Mini-cas — 10 minutes',
    'Objectif : produire rapidement un diagnostic ou une recommandation sans rédiger une dissertation.',
    [],
    [
      {heading:'Cas 1 — Hôtel urbain',text:'Le site direct convertit 1,4 % contre 3,2 % via OTA. Les clients citent surtout la simplicité de comparaison et les avis. En 10 minutes : formule deux hypothèses, deux données à collecter et trois actions testables.'},
      {heading:'Cas 2 — Destination hors saison',text:'Une destination littorale réalise 58 % de ses nuitées sur juillet-août. En 10 minutes : propose deux segments hors saison et une offre adaptée à chacun.'},
      {heading:'Cas 3 — Restaurant',text:'Le restaurant remplit le samedi mais reste faible du lundi au jeudi. En 10 minutes : propose un diagnostic en séparant demande, offre, prix, communication et capacité.'},
      {heading:'Cas 4 — Avis clients',text:'La note globale reste stable mais les avis récents se plaignent du check-in. En 10 minutes : propose une démarche d’analyse et deux KPI.'}
    ]
  ),

  'entrainement|Cas 30–45 min': p(
    'Cas fictifs','Cas intermédiaires — 30 à 45 minutes',
    'Ces cas demandent une réponse structurée en diagnostic, mobilisation de concepts et préconisations mesurables.',
    [],
    [
      {heading:'Cas A — Dépendance OTA',text:'Un réseau de 12 hôtels réalise 62 % de ses réservations via deux OTA. Les commissions pèsent sur la marge, mais le site direct convertit moins. Travail : diagnostic des canaux, causes possibles, stratégie de rééquilibrage et tableau de bord.'},
      {heading:'Cas B — Relance d’une destination',text:'Une destination patrimoniale attire surtout des visiteurs à la journée. Travail : proposer des segments à potentiel, une offre favorisant la nuitée, les partenaires à mobiliser et des KPI.'},
      {heading:'Cas C — Programme de fidélité',text:'Un groupe hôtelier a beaucoup de membres mais peu d’usage récurrent. Travail : distinguer adhésion et fidélité, analyser les causes et proposer une refonte des bénéfices.'}
    ]
  ),

  'entrainement|Études de cas longues': p(
    'Méthode concours','Études de cas longues',
    'Une étude longue doit être traitée comme une suite de décisions liées. Il faut répartir le temps, identifier les concepts nécessaires et exploiter les annexes sans les paraphraser.',
    [
      'Lire d’abord toutes les questions pour repérer les dépendances entre dossiers.',
      'Identifier pour chaque question : verbe d’action, livrable, concept, données et calcul éventuel.',
      'Construire un mini-diagnostic avant toute préconisation.',
      'Réserver du temps aux calculs et à leur interprétation.',
      'Réutiliser les résultats précédents si la logique du cas l’exige.',
      'Conclure chaque réponse par une conséquence pour l’organisation.'
    ],
    [
      {heading:'Sujet officiel 2026',text:'Le sujet Option C 2026 sur Coopérative U constitue le meilleur exercice long disponible dans les ressources fournies. Il combine modèle d’affaires, positionnement, calculs, assortiment et digital.'},
      {heading:'Protocole',text:'Faire une première tentative en temps réel ; ensuite seulement construire un corrigé enrichi avec concepts, auteurs et alternatives.'}
    ],
    [{type:'Ressource fournie',name:'Sujet option C externe 2026.pdf',note:'Sujet officiel présent dans les ressources de révision.'},JURY]
  ),

  'entrainement|Calculs marketing': p(
    'Calcul','Calculs utiles en marketing',
    'Le jury 2025 insiste sur la maîtrise de la partie calculatoire. L’enjeu est de savoir calculer puis interpréter.',
    [
      'Part de marché = ventes de l’entreprise / ventes du marché.',
      'Taux d’évolution = (valeur finale − valeur initiale) / valeur initiale.',
      'Taux de conversion = conversions / visites ou opportunités.',
      'Panier moyen = chiffre d’affaires / nombre de transactions.',
      'Prix moyen hôtelier (ADR) = revenu chambres / chambres vendues.',
      'Taux d’occupation = chambres vendues / chambres disponibles.',
      'RevPAR = revenu chambres / chambres disponibles = ADR × taux d’occupation.',
      'Seuil de rentabilité = charges fixes / taux de marge sur coûts variables, dans sa forme simplifiée.'
    ],
    [
      {heading:'Exercice 1',text:'Un hôtel a 120 chambres, 75 % d’occupation et un ADR de 160 €. Calcule les chambres vendues et le RevPAR. Réponse : 90 chambres ; RevPAR 120 €.'},
      {heading:'Exercice 2',text:'Un site reçoit 40 000 visites et 1 200 réservations. Taux de conversion = 3 %. Si le trafic augmente de 20 % sans changement du taux, combien de réservations ? 1 440.'},
      {heading:'Exercice 3',text:'CA passe de 2,4 M€ à 2,58 M€. Taux d’évolution = 7,5 %. Toujours préciser la période et expliquer ce que ce taux ne dit pas sur la marge.'}
    ],
    [OFFICIAL,JURY]
  ),

  'entrainement|Analyse de documents': p(
    'Méthode','Analyser un document sans le paraphraser',
    'Un document de cas apporte une preuve, une donnée ou un point de vue. L’analyse consiste à en extraire ce qui répond à la question et à le mettre en relation avec les connaissances.',
    [
      'Identifier nature, auteur/source, date, périmètre et objectif du document.',
      'Extraire seulement les données utiles à la question.',
      'Distinguer information, interprétation de l’auteur et publicité éventuelle.',
      'Comparer plusieurs documents lorsque leurs intérêts ou méthodes diffèrent.',
      'Mobiliser une connaissance externe pour interpréter la donnée.',
      'Ne jamais transformer un document d’entreprise en source neutre par défaut.'
    ],
    [
      {heading:'Exercice',text:'Prends un communiqué financier d’entreprise et une statistique Insee sur le même secteur. Liste ce que chacune permet de dire et ce qu’elle ne permet pas de conclure.'}
    ]
  ),

  'entrainement|Diagnostic': p(
    'Méthode','Construire un diagnostic',
    'Le diagnostic transforme des faits en enjeux prioritaires. Il ne consiste pas à recopier toutes les informations disponibles.',
    [
      'Commencer par le problème décisionnel.',
      'Séparer facteurs externes et internes lorsque cela apporte de la clarté.',
      'Hiérarchiser les éléments selon leur impact et leur urgence.',
      'Faire apparaître les tensions : croissance mais marge faible, notoriété forte mais conversion faible, forte satisfaction mais réachat limité, etc.',
      'Formuler les causes comme hypothèses lorsqu’elles ne sont pas démontrées.',
      'Terminer par deux ou trois enjeux qui appellent une décision.'
    ],
    [
      {heading:'Test',text:'Si ton diagnostic pourrait être copié tel quel sur une autre entreprise, il est trop générique.'},
      {heading:'Exercice',text:'À partir d’un hôtel dépendant des OTA et bien noté, formule trois enjeux sans utiliser les mots “opportunité” ou “menace”.'}
    ]
  ),

  'entrainement|Problématique': p(
    'Méthode','Formuler une problématique utile',
    'Une bonne problématique exprime une tension décisionnelle. Elle ne se contente pas de reformuler le thème sous forme de question.',
    [
      'Partir d’un constat contradictoire ou d’un arbitrage.',
      'Inclure l’objectif stratégique réel.',
      'Éviter les questions trop larges : “Comment améliorer le marketing ?”.',
      'Préférer une tension : croissance vs marge, personnalisation vs données, volume vs dépendance, attractivité vs soutenabilité.',
      'La problématique doit permettre plusieurs choix et non appeler une réponse évidente.'
    ],
    [
      {heading:'Exemples',text:'Faible : “Comment un hôtel peut-il utiliser le digital ?” — Mieux : “Comment accroître la réservation directe sans perdre la visibilité apportée par les OTA ni dégrader le coût d’acquisition ?”'},
      {heading:'Exercice',text:'Transforme trois thèmes — fidélité, tourisme durable, IA — en problématiques contenant un arbitrage explicite.'}
    ]
  ),

  'entrainement|Plan': p(
    'Méthode','Construire un plan qui répond à la question',
    'Le plan est une architecture de démonstration. Il doit rendre visible le raisonnement plutôt que suivre mécaniquement “diagnostic / solutions” dans toutes les situations.',
    [
      'Chaque partie doit répondre à un morceau précis de la problématique.',
      'Les titres doivent être argumentatifs et non uniquement descriptifs.',
      'Équilibrer les parties en fonction de l’importance, pas du nombre de pages.',
      'Éviter les plans catalogue : “communication / prix / distribution” sans lien logique.',
      'Pour un cas, le plan peut suivre diagnostic → choix → déploiement → mesure si cela correspond à la question.',
      'Pour une dissertation, le plan doit faire progresser une démonstration conceptuelle.'
    ],
    [
      {heading:'Exercice',text:'Pour la problématique “Comment réduire la dépendance OTA sans sacrifier la demande ?”, propose deux plans différents : un plan analytique et un plan opérationnel.'}
    ]
  ),

  'entrainement|Préconisations': p(
    'Méthode','Formuler des préconisations crédibles',
    'Une préconisation de concours doit être reliée au diagnostic, priorisée, réalisable et mesurable.',
    [
      'Dire quel problème précis l’action traite.',
      'Préciser cible, action, canal/processus et ressources.',
      'Identifier bénéfice attendu et principal risque.',
      'Associer un indicateur et une échéance de mesure.',
      'Éviter les mots-valises : “faire plus de digital”, “communiquer davantage”, “utiliser l’IA”.',
      'Arbitrer : toutes les bonnes idées ne peuvent pas être prioritaires.'
    ],
    [
      {heading:'Format',text:'Parce que [constat], nous recommandons [action] auprès de [cible], via [modalité], afin de [objectif]. Nous suivrons [KPI] et surveillerons [risque].'},
      {heading:'Exercice',text:'Transforme “améliorer les réseaux sociaux” en une recommandation complète et mesurable pour une destination hors saison.'}
    ]
  ),

  'entrainement|Chronométré': p(
    'Organisation','S’entraîner sous contrainte de temps',
    'Le chronomètre sert à automatiser des étapes. Commencer par de petits blocs avant de simuler cinq heures.',
    [
      '5 min : définir une notion et donner un exemple.',
      '10 min : analyser un tableau ou un mini-cas.',
      '20 min : construire diagnostic + problématique.',
      '30 min : rédiger une réponse structurée à une question de cas.',
      '45 min : traiter un dossier intermédiaire.',
      '5 h : simulation complète seulement lorsque les automatismes sont installés.'
    ],
    [
      {heading:'Progression',text:'Noter non seulement la qualité finale mais le temps consommé par lecture, calcul, plan et rédaction. Le but est d’identifier le goulot d’étranglement.'},
      {heading:'Exercice',text:'Choisis une fiche de cas réel du site : 5 min lecture, 10 min diagnostic, 10 min préconisations, 5 min relecture. Compare ensuite avec la piste proposée.'}
    ]
  ),

  'entrainement|Concours blanc': p(
    'Simulation','Concours blanc — protocole',
    'La simulation doit reproduire les conditions de l’épreuve : temps limité, ressources autorisées uniquement, production complète et auto-évaluation différée.',
    [
      'Utiliser en priorité un sujet officiel non encore travaillé.',
      'Bloquer cinq heures sans interruption majeure.',
      'Préparer le matériel avant le départ et ne pas consulter de corrigé.',
      'Faire tous les calculs demandés et répondre à toutes les sous-questions.',
      'Après une pause, annoter la copie avec une grille : précision, concepts, calculs, exploitation des annexes, recommandations, forme.',
      'Reprendre ensuite une seule partie pour produire une version améliorée plutôt que réécrire immédiatement tout le devoir.'
    ],
    [
      {heading:'Premier sujet conseillé',text:'Sujet officiel Option C externe 2026 — Coopérative U, déjà présent dans les ressources. Il correspond directement au format de spécialité.'},
      {heading:'Grille minimale',text:'Ai-je défini ? démontré ? calculé ? interprété ? contextualisé ? recommandé ? mesuré ? cité lorsque nécessaire ?'}
    ],
    [{type:'Ressource fournie',name:'Sujet option C externe 2026.pdf'},JURY]
  )
}


Object.entries(trainingCorrections).forEach(([key,corrections])=>{
  if(trainingPages[key]) trainingPages[key].corrections=corrections
})
