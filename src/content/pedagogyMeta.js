export const trainingMeta={
  'entrainement|QCM rapides':{objective:'Vérifier le rappel immédiat des notions et repérer les confusions.',time:'5–10 min',difficulty:'★☆☆',skills:['Rappel','Discrimination conceptuelle'],step:1},
  'entrainement|Vrai / Faux argumenté':{objective:'Passer du rappel à une justification courte et précise.',time:'10–15 min',difficulty:'★☆☆',skills:['Explication','Justification'],step:2},
  'entrainement|Flashcards':{objective:'Automatiser définitions, auteurs et mécanismes essentiels.',time:'5–15 min',difficulty:'★☆☆',skills:['Mémorisation active'],step:1},
  'entrainement|Questions ouvertes':{objective:'Expliquer une notion avec ses propres mots et la relier à une décision.',time:'15–20 min',difficulty:'★★☆',skills:['Explication','Mobilisation'],step:2},
  'entrainement|Définitions':{objective:'Produire des définitions précises, courtes et contextualisables.',time:'10 min',difficulty:'★☆☆',skills:['Définition','Précision'],step:1},
  'entrainement|Retrouver l’auteur':{objective:'Associer une idée ou un mécanisme à la bonne référence théorique.',time:'10 min',difficulty:'★☆☆',skills:['Auteur','Concept'],step:1},
  'entrainement|Retrouver le modèle':{objective:'Choisir le cadre d’analyse adapté au problème posé.',time:'10–15 min',difficulty:'★★☆',skills:['Diagnostic','Choix du modèle'],step:3},
  'entrainement|Mini-cas 10 min':{objective:'Reconnaître rapidement les notions utiles dans une situation concrète.',time:'10 min par cas',difficulty:'★★☆',skills:['Lecture de cas','Diagnostic court'],step:3},
  'entrainement|Cas 30–45 min':{objective:'Construire un diagnostic et des recommandations sur un cas intermédiaire.',time:'30–45 min',difficulty:'★★☆',skills:['Diagnostic','Préconisations','KPI'],step:5},
  'entrainement|Études de cas longues':{objective:'Traiter un ensemble documentaire proche de l’épreuve de spécialité.',time:'1 h 30 à 3 h',difficulty:'★★★',skills:['Annexes','Calcul','Concepts','Recommandations'],step:8},
  'entrainement|Calculs marketing':{objective:'Calculer correctement puis interpréter le résultat pour la décision.',time:'15–25 min',difficulty:'★★☆',skills:['Calcul','Interprétation'],step:4},
  'entrainement|Analyse de documents':{objective:'Extraire une preuve utile, qualifier la source et éviter la paraphrase.',time:'20–30 min',difficulty:'★★☆',skills:['Analyse documentaire','Esprit critique'],step:4},
  'entrainement|Diagnostic':{objective:'Transformer des faits en enjeux hiérarchisés et spécifiques au cas.',time:'20–30 min',difficulty:'★★☆',skills:['Diagnostic','Hiérarchisation'],step:5},
  'entrainement|Problématique':{objective:'Formuler une tension décisionnelle qui organise le raisonnement.',time:'10–15 min',difficulty:'★★☆',skills:['Problématisation'],step:6},
  'entrainement|Plan':{objective:'Construire une architecture de réponse qui fait progresser la démonstration.',time:'15–20 min',difficulty:'★★☆',skills:['Structuration','Argumentation'],step:6},
  'entrainement|Préconisations':{objective:'Formuler des actions justifiées, contextualisées, priorisées et mesurables.',time:'20–30 min',difficulty:'★★★',skills:['Recommandation','KPI','Justification'],step:7},
  'entrainement|Chronométré':{objective:'Automatiser la méthode sous contrainte de temps et identifier les goulots d’étranglement.',time:'30 min puis progressif',difficulty:'★★★',skills:['Gestion du temps','Synthèse','Production'],step:8},
  'entrainement|Concours blanc':{objective:'Simuler une épreuve complète et s’autoévaluer après un délai.',time:'5 h',difficulty:'★★★',skills:['Endurance','Méthode','Mobilisation complète'],step:8}
}

export const tourismPedagogy={
  'tourisme|Fondamentaux':{
    objectives:['Lire correctement un indicateur touristique et son champ.','Relier demande, capacité, saisonnalité et expérience.','Éviter les généralisations à partir d’une seule donnée.'],
    recap:['Le tourisme est un système d’acteurs interdépendants.','Une nuitée ne mesure ni toute la demande ni toute la dépense.','Toujours préciser territoire, période et champ statistique.'],
    examTips:['Distinguer fait statistique et interprétation.','Comparer des sources seulement après avoir vérifié leur périmètre.','Relier les chiffres à un enjeu marketing précis.']
  },
  'tourisme|Hôtellerie':{
    objectives:['Analyser capacité, marque, prix, distribution et fidélité.','Comprendre le rôle des OTA et du direct.','Mobiliser RevPAR, expérience et portefeuille de marques.'],
    recap:['La chambre est un inventaire périssable.','Le canal de vente affecte marge, donnée et relation.','Une marque hôtelière doit rendre sa promesse visible dans l’expérience.'],
    examTips:['Ne pas réduire la performance au taux d’occupation.','Comparer le coût net des canaux.','Dater explicitement les cas Accor/OKKO anciens et actuels.']
  },
  'tourisme|Restauration':{
    objectives:['Relier carte, capacité, expérience et marge.','Comprendre les leviers du revenue management en restauration.','Distinguer croissance du CA et amélioration de rentabilité.'],
    recap:['CA = volume × panier, mais la marge dépend du mix et des coûts.','La durée d’occupation des tables est une variable de capacité.','Avis et réservation influencent acquisition et confiance.'],
    examTips:['Toujours demander les coûts avant de conclure sur la rentabilité.','Proposer des leviers autres que le prix.','Associer chaque recommandation à un KPI de marge ou d’expérience.']
  },
  'tourisme|Destinations & territoires':{
    objectives:['Analyser une destination comme offre collective.','Articuler image, flux, saisonnalité et gouvernance.','Intégrer habitants et capacité d’accueil.'],
    recap:['Une destination n’est pas contrôlée par un seul acteur.','La communication ne peut durablement contredire l’expérience.','La performance doit intégrer dépenses, flux et acceptabilité.'],
    examTips:['Nommer les parties prenantes.','Éviter “faire plus de communication” sans offre correspondante.','Distinguer attractivité et surfréquentation.']
  },
  'tourisme|Agences / TO / plateformes':{
    objectives:['Distinguer les rôles des intermédiaires.','Évaluer valeur créée et dépendance.','Comparer coût, audience, contrôle et données par canal.'],
    recap:['Une plateforme réduit certains coûts de recherche mais capte une partie de la valeur.','Les effets de réseau renforcent les grandes plateformes.','Le direct et l’indirect sont souvent complémentaires.'],
    examTips:['Ne pas recommander la désintermédiation par principe.','Intégrer DMA/DSA seulement quand ils éclairent le cas.','Comparer contribution nette plutôt que commissions seules.']
  },
  'tourisme|Expérience touristique':{
    objectives:['Cartographier l’expérience avant, pendant et après.','Identifier les moments de vérité.','Relier expérience, récupération de service et fidélité.'],
    recap:['L’expérience dépasse les points de contact contrôlés par une seule organisation.','Le souvenir final peut être influencé par quelques moments critiques.','Une récupération rapide peut restaurer contrôle et confiance.'],
    examTips:['Cartographier le parcours avec besoins et émotions, pas seulement canaux.','Choisir des KPI par moment critique.','Distinguer satisfaction globale et causes opérationnelles.']
  },
  'tourisme|Distribution & OTA':{
    objectives:['Construire un mix de distribution par segment.','Mesurer coût net et valeur relationnelle.','Comprendre les enjeux réglementaires de plateforme.'],
    recap:['Le nombre de réservations ne suffit pas pour évaluer un canal.','La dépendance est un risque même quand le volume est élevé.','Le direct nécessite aussi des coûts d’acquisition et de conversion.'],
    examTips:['Comparer marge, CAC, conversion et réachat.','Distinguer fait réglementaire et enquête en cours.','Ne pas présenter une procédure DSA comme une culpabilité établie.']
  },
  'tourisme|E-réputation':{
    objectives:['Lire une note avec volume, récence et dispersion.','Transformer les avis en causes actionnables.','Comprendre le rôle des réponses dans la confiance.'],
    recap:['La note moyenne masque les thèmes et les étapes du parcours.','La réputation doit être reliée aux opérations.','Les avis sont une preuve sociale mais peuvent être biaisés.'],
    examTips:['Coder les avis par thème.','Croiser avis et données opérationnelles.','Ne jamais inventer une causalité à partir de quelques commentaires.']
  },
  'tourisme|Revenue management':{
    objectives:['Comprendre la logique capacité-demande-prix.','Interpréter ADR, occupation et RevPAR.','Intégrer équité perçue et segmentation.'],
    recap:['Une capacité périssable exige anticipation et arbitrage.','RevPAR ne mesure pas toute la rentabilité.','Prix et disponibilité doivent être pilotés ensemble.'],
    examTips:['Toujours interpréter un calcul.','Comparer coûts variables et revenus annexes.','Ne pas confondre revenue management et hausse opportuniste des prix.']
  },
  'tourisme|Fidélisation & CRM':{
    objectives:['Distinguer satisfaction, réachat et fidélité.','Comprendre le CRM comme stratégie et processus.','Relier avantages, données et valeur client.'],
    recap:['Un programme ne vaut que par la valeur perçue et l’usage.','Le CRM ne se réduit pas au logiciel.','La donnée doit servir une finalité claire et licite.'],
    examTips:['Mesurer membres actifs plutôt que seuls inscrits.','Relier investissement relationnel à CLV ou rétention.','Intégrer protection des données dans les recommandations.']
  },
  'tourisme|Tourisme durable':{
    objectives:['Distinguer promesse, action et performance environnementale.','Choisir des preuves mesurables.','Identifier les risques de greenwashing.'],
    recap:['Le tourisme durable concerne opérations, mobilité et territoire.','Une certification n’épuise pas la question de l’impact.','Toute allégation doit avoir un périmètre et une preuve.'],
    examTips:['Éviter les promesses absolues.','Comparer intensité et impact absolu quand possible.','Relier durabilité à l’offre et au modèle économique.']
  },
  'tourisme|IA & nouvelles technologies':{
    objectives:['Évaluer un cas d’usage avant la technologie.','Identifier données, valeur, risques et KPI.','Distinguer pilote et déploiement à l’échelle.'],
    recap:['IA et IoT ne créent pas de valeur sans adoption.','La qualité des données conditionne la qualité du service.','Un gain doit être mesuré en temps, qualité, conversion ou coût.'],
    examTips:['Formuler le problème utilisateur avant la solution.','Prévoir erreurs, contrôle et gouvernance.','Ne pas citer l’IA comme recommandation autonome.']
  },
  'tourisme|Influence & réseaux sociaux':{
    objectives:['Comparer portée et qualité d’audience.','Définir le rôle du créateur dans le parcours.','Mesurer au-delà de l’engagement.'],
    recap:['L’audience la plus grande n’est pas toujours la plus pertinente.','Le contenu influence inspiration et preuve sociale.','La transparence commerciale est indispensable.'],
    examTips:['Préciser cible, format et KPI.','Intégrer droits d’usage des contenus.','Ne pas confondre likes et réservations.']
  },
  'tourisme|Luxe & tourisme':{
    objectives:['Comprendre la création de valeur premium.','Relier personnalisation, marque et excellence opérationnelle.','Identifier les preuves d’une montée en gamme.'],
    recap:['Le prix élevé doit être soutenu par une valeur crédible.','La personnalisation doit rester fluide et respectueuse.','L’expérience premium est un système, pas un décor.'],
    examTips:['Donner des preuves opérationnelles de montée en gamme.','Mesurer expérience et réachat.','Éviter de définir le luxe uniquement par le prix.']
  },
  'tourisme|Événementiel':{
    objectives:['Analyser l’événement comme produit et levier de destination.','Mesurer effets commerciaux et expérience.','Comprendre son rôle dans la désaisonnalisation.'],
    recap:['Un événement peut devenir un actif de marque.','Les flux et la capacité font partie de l’expérience.','Le volume d’entrées ne suffit pas pour juger le succès.'],
    examTips:['Séparer visiteurs incrémentaux et habituels.','Intégrer coûts et externalités.','Construire un tableau de bord commercial + expérience.']
  },
  'tourisme|Crises & tourisme':{
    objectives:['Distinguer faits confirmés, hypothèses et investigation.','Protéger la confiance sans spéculer.','Préparer reprise et résilience.'],
    recap:['La communication de crise ne remplace pas la gestion opérationnelle.','Rapidité et exactitude doivent être arbitrées ensemble.','Les dépendances concentrées augmentent la vulnérabilité.'],
    examTips:['Dater les informations de crise.','Ne pas transformer une enquête en conclusion de culpabilité.','Proposer assistance, mesure et scénario de reprise.']
  }
}

export const casePedagogy={
  'cas|Hôtellerie':{time:'35–45 min',difficulty:'★★★',skills:['Diagnostic','Marque','Distribution','CRM'],facts:['Chiffre d’affaires et indicateurs publiés par Accor.','Portefeuille multimarque et programme de fidélité documentés.'],interpretations:['Le portefeuille peut accroître la couverture mais aussi la complexité.'],hypotheses:['ALL réduit-il réellement le coût d’acquisition ?','La croissance du direct améliore-t-elle la contribution nette ?']},
  'cas|Plateformes':{time:'35–45 min',difficulty:'★★★',skills:['Plateforme','Porter','Régulation'],facts:['Booking Holdings publie 186,1 Md$ de gross bookings et 1,2 Md de nuitées 2025.','Booking.com est gatekeeper DMA et fait l’objet d’une procédure DSA ouverte le 21/10/2026.'],interpretations:['L’échelle renforce audience et pouvoir d’intermédiation.'],hypotheses:['Quelle part de valeur nette l’OTA apporte-t-elle à un hôtel donné ?']},
  'cas|Transport':{time:'30–45 min',difficulty:'★★☆',skills:['Réseau','Fidélité','Digital'],facts:['Données financières et réseau publiées par Air France-KLM.'],interpretations:['Le réseau peut renforcer fidélité et connectivité.'],hypotheses:['Quels segments valorisent le plus les avantages réseau ?']},
  'cas|Destinations touristiques':{time:'30–45 min',difficulty:'★★☆',skills:['Conjoncture','Segmentation','Territoire'],facts:['Recettes internationales et indicateurs de fréquentation datés 2026.'],interpretations:['L’activité reste solide mais hétérogène selon indicateurs.'],hypotheses:['Quels segments expliquent l’étalement saisonnier ?']},
  'cas|Parcs & loisirs':{time:'30–45 min',difficulty:'★★☆',skills:['Capacité','Expérience','Événementiel'],facts:['Occupation hôtelière et projet d’extension publiés par Compagnie des Alpes.'],interpretations:['L’hébergement soutient la stratégie de séjour.'],hypotheses:['Les 300 nouvelles chambres créeront-elles de la demande incrémentale ?']},
  'cas|Restauration':{time:'30 min',difficulty:'★★☆',skills:['CA','Marge','Capacité'],facts:['Évolution de chiffre d’affaires issue de l’Insee.'],interpretations:['La hausse du CA ne démontre pas une hausse de marge.'],hypotheses:['La progression vient-elle du volume, du prix ou du mix ?']},
  'cas|Croisières':{time:'30–45 min',difficulty:'★★☆',skills:['Écosystème','Capacité','Fidélité'],facts:['Données publiées par Royal Caribbean Group.'],interpretations:['L’intégration de destinations peut augmenter la captation de valeur.'],hypotheses:['La capacité nouvelle sera-t-elle remplie sans dégrader prix et expérience ?']},
  'cas|Acteurs publics':{time:'30 min',difficulty:'★★☆',skills:['Écosystème','Innovation','Impact'],facts:['France Tourisme Tech a accompagné 35 entreprises et mobilise près de 80 partenaires en 2026.'],interpretations:['L’acteur public peut réduire les coûts de coordination.'],hypotheses:['Combien d’expérimentations deviennent réellement des déploiements durables ?']},
  'cas|Start-up tourisme':{time:'30–45 min',difficulty:'★★★',skills:['Effectuation','Business model','Validation'],facts:['Données DGE sur levées, implantation et usages technologiques.'],interpretations:['L’IA est fréquente mais ne constitue pas une différenciation automatique.'],hypotheses:['Le CAC et la rétention rendent-ils le modèle viable ?']},
  'cas|Crises & controverses':{time:'30–45 min',difficulty:'★★★',skills:['Crise','Confiance','Régulation'],facts:['Procédure formelle DSA ouverte en octobre 2026.'],interpretations:['La fraude peut devenir un risque systémique de confiance.'],hypotheses:['Quelles mesures réduisent effectivement fraude et abandon ?']},
  'cas|Transformation digitale':{time:'30–45 min',difficulty:'★★☆',skills:['Adoption','ROI','Conduite du changement'],facts:['France Tourisme Tech documente plus de 80 mises en relation et plus de 55 expérimentations/partenariats d’open innovation selon ses bilans.'],interpretations:['Le nombre de pilotes ne mesure pas à lui seul la transformation.'],hypotheses:['Quel taux d’industrialisation et quels gains opérationnels ?']},
  'cas|Développement durable':{time:'30–45 min',difficulty:'★★★',skills:['Preuve','Greenwashing','KPI environnementaux'],facts:['Air France-KLM publie des engagements de renouvellement de flotte.'],interpretations:['Un engagement de moyen ne prouve pas une baisse absolue d’impact.'],hypotheses:['Comment évoluent émissions absolues et intensité par passager-km ?']}
}


export const tourismExerciseMeta={
  'tourisme|Fondamentaux':{objective:'Apprendre à comparer des indicateurs sans mélanger leurs champs.',time:'10 min',difficulty:'★★☆',skills:['Lecture statistique','Esprit critique'],step:4},
  'tourisme|Hôtellerie':{objective:'Construire un mix de distribution rentable et relationnel.',time:'15–20 min',difficulty:'★★☆',skills:['Distribution','KPI','CRM'],step:7},
  'tourisme|Restauration':{objective:'Améliorer la marge sans réduire le problème à une hausse générale des prix.',time:'15 min',difficulty:'★★☆',skills:['Marge','Capacité','Préconisation'],step:7},
  'tourisme|Destinations & territoires':{objective:'Désaisonnaliser une destination par segmentation, offre et coordination.',time:'20 min',difficulty:'★★☆',skills:['Territoire','Segmentation','Plan d’action'],step:7},
  'tourisme|Agences / TO / plateformes':{objective:'Comparer des canaux par valeur créée, coût et contrôle.',time:'15 min',difficulty:'★★☆',skills:['Distribution','Plateforme','Arbitrage'],step:5},
  'tourisme|Expérience touristique':{objective:'Cartographier un parcours et identifier des moments de vérité mesurables.',time:'15 min',difficulty:'★★☆',skills:['Parcours client','KPI'],step:5},
  'tourisme|Distribution & OTA':{objective:'Construire un tableau de bord qui dépasse le seul volume de réservations.',time:'15 min',difficulty:'★★☆',skills:['KPI','Rentabilité canal'],step:4},
  'tourisme|E-réputation':{objective:'Passer d’une baisse de note à un diagnostic opérationnel.',time:'15 min',difficulty:'★★☆',skills:['Avis','Diagnostic','Données'],step:5},
  'tourisme|Revenue management':{objective:'Interpréter le même RevPAR derrière deux modèles prix/occupation différents.',time:'15 min',difficulty:'★★★',skills:['Calcul','Interprétation','Capacité'],step:4},
  'tourisme|Fidélisation & CRM':{objective:'Créer de la fidélité sans dépendre d’une remise.',time:'10–15 min',difficulty:'★★☆',skills:['CRM','Fidélité','Comportement'],step:7},
  'tourisme|Tourisme durable':{objective:'Évaluer une promesse environnementale par des preuves et risques de greenwashing.',time:'15–20 min',difficulty:'★★★',skills:['Preuve','Durabilité','Esprit critique'],step:5},
  'tourisme|IA & nouvelles technologies':{objective:'Transformer une technologie en cas d’usage évalué.',time:'15–20 min',difficulty:'★★☆',skills:['Cas d’usage','Données','KPI','Risques'],step:7},
  'tourisme|Influence & réseaux sociaux':{objective:'Choisir une stratégie d’influence selon la cible et les KPI.',time:'15 min',difficulty:'★★☆',skills:['Influence','Ciblage','Mesure'],step:7},
  'tourisme|Luxe & tourisme':{objective:'Justifier une montée en gamme par des preuves de valeur.',time:'15 min',difficulty:'★★☆',skills:['Positionnement','Service','Preuve'],step:7},
  'tourisme|Événementiel':{objective:'Évaluer un événement par performance commerciale et expérience.',time:'15 min',difficulty:'★★☆',skills:['Événementiel','KPI','Expérience'],step:4},
  'tourisme|Crises & tourisme':{objective:'Prioriser les premières décisions marketing sans spéculer.',time:'15–20 min',difficulty:'★★★',skills:['Crise','Confiance','Priorisation'],step:7}
}


export const contestPedagogy={
  'concours|Épreuves 2027':{
    recap:['Trois écrits d’admissibilité et trois oraux d’admission.','L’option C Marketing structure l’étude de cas écrite et le cas pratique oral.','Droit, économie et management restent indispensables.'],
    examTips:['Construire un calendrier qui ne surinvestit pas le seul marketing.','S’entraîner en conditions de durée réelle.','Vérifier les règles officielles à chaque session.']
  },
  'concours|Programme officiel':{
    recap:['Le programme est une checklist de compétences, pas une liste de définitions.','L’option C combine stratégie, mix, études, outils quantitatifs et droit appliqué.','Le tourisme reste un terrain d’application parmi d’autres.'],
    examTips:['Pour chaque ligne du programme : savoir définir, expliquer, appliquer et illustrer.','Repérer les thèmes encore sans entraînement.','Conserver le programme officiel comme référence de périmètre.']
  },
  'concours|Option C Marketing':{
    recap:['L’épreuve exige théorie, calcul, données, diagnostic et recommandations.','Le sujet 2026 confirme la variété des tâches.','La mobilisation des concepts doit dépasser la paraphrase des annexes.'],
    examTips:['Préparer les notions avec un exemple hors tourisme et un exemple tourisme.','Travailler régulièrement les calculs.','Justifier le choix des modèles utilisés.']
  },
  'concours|Attentes du jury':{
    recap:['Le jury valorise précision, actualisation académique et interprétation des calculs.','Une recommandation doit être contextualisée et justifiée.','La récitation d’auteurs ne suffit pas.'],
    examTips:['Après chaque cas, utiliser une grille : définition, modèle, données, calculs, diagnostic, recommandations, sources.','Comparer une réponse descriptive à une réponse analytique.','Identifier les sous-questions non traitées.']
  },
  'concours|Méthodologie':{
    recap:['Planifier, mémoriser, veiller et s’entraîner de manière répétée.','Construire des dossiers de notions avec théorie, exemples et actualité.','Alterner entraînements courts et simulations longues.'],
    examTips:['Ne pas transposer mécaniquement une méthodologie d’agrégation interne.','Utiliser les conseils généraux du support fourni, pas ses règles d’épreuve.','Réviser avec récupération active plutôt qu’en relecture passive.']
  },
  'concours|Sujets officiels':{
    recap:['Les sujets officiels calibrent le niveau réel de l’épreuve.','Le sujet 2026 Coopérative U mobilise stratégie, calcul, local, digital et parcours.','La correction doit commencer après une vraie tentative.'],
    examTips:['Travailler d’abord sans corrigé.','Chronométrer lecture, calcul, plan et rédaction.','Comparer ensuite la qualité du raisonnement, pas seulement les réponses finales.']
  },
  'concours|Rapports de jury':{
    recap:['Les rapports constituent un cahier des charges indirect du concours.','Le dernier rapport externe disponible au 08/11/2026 reste 2025.','Les remarques doivent être transformées en critères d’autoévaluation.'],
    examTips:['Extraire les erreurs récurrentes et en faire une checklist.','Mettre à jour la fiche dès publication d’un nouveau rapport.','Distinguer conseils spécifiques à l’option C et remarques transversales.']
  },
  'concours|Pièges à éviter':{
    recap:['Le principal risque est de réciter au lieu d’analyser.','Une donnée sans source ni périmètre affaiblit la copie.','Une recommandation générique n’est pas une réponse au cas.'],
    examTips:['Avant de rendre : supprimer les passages applicables à n’importe quelle entreprise.','Vérifier que chaque calcul est interprété.','Signaler l’incertitude au lieu de l’inventer.']
  }
}

export const watchPedagogy={
  'veille|Marketing':{recap:['Une veille utile relie un fait daté à un concept.','La nouveauté n’est pas une preuve d’importance.'],examTips:['Conserver source, date, périmètre et limite.','Formuler une phrase d’utilisation possible dans une copie.']},
  'veille|Tourisme':{recap:['Croiser conjoncture, entreprises et acteurs publics.','Séparer tendances sectorielles et communication d’entreprise.'],examTips:['Mettre à jour les chiffres avant usage.','Éviter de généraliser une entreprise au secteur.']},
  'veille|Consommation':{recap:['Une tendance médiatique doit être confrontée à une donnée.','Attitude déclarée et comportement effectif peuvent diverger.'],examTips:['Chercher une source officielle qui confirme ou nuance.','Relier la tendance à un mécanisme marketing.']},
  'veille|Digital & IA':{recap:['Partir de l’usage et de la valeur, pas du buzz technologique.','Évaluer qualité des données, erreurs et adoption.'],examTips:['Donner un KPI de valeur.','Distinguer démonstration, pilote et industrialisation.']},
  'veille|Environnement':{recap:['Distinguer engagement, action et performance.','Un indicateur environnemental a toujours un périmètre.'],examTips:['Éviter les allégations absolues.','Comparer évolution et niveau absolu si possible.']},
  'veille|Réglementation':{recap:['Une procédure en cours n’est pas une condamnation.','Le droit peut modifier directement le mix marketing.'],examTips:['Citer l’autorité et la date.','Distinguer règle, recommandation et enquête.']},
  'veille|Entreprises à suivre':{recap:['Suivre quelques entreprises en profondeur produit de meilleurs exemples.','Un même acteur peut illustrer plusieurs notions.'],examTips:['Conserver un historique daté.','Noter ce qui est déclaré par l’entreprise et ce qui est vérifié indépendamment.']},
  'veille|Chiffres clés':{recap:['Un chiffre n’est utile qu’avec unité, période, périmètre et source.','Les chiffres d’entreprise ne sont pas des statistiques sectorielles.'],examTips:['Écrire la date dans la fiche.','Interpréter le chiffre avant de le mémoriser.']},
  'veille|Relier une actualité à une notion':{recap:['Fait → source → notion → mécanisme → limite.','L’exemple doit éclairer un raisonnement, pas remplacer la théorie.'],examTips:['Préparer une phrase de mobilisation en copie.','Conserver au moins une limite ou donnée manquante.']}
}


export const tourismDeepSections={
  'tourisme|Fondamentaux':[
    {heading:'Comprendre le système touristique',text:'Une consommation touristique est rarement produite par une seule organisation. Transport, hébergement, restauration, activités, espace public, information, habitants et intermédiaires contribuent à une expérience composite. Cette interdépendance implique qu’une défaillance extérieure à l’entreprise peut affecter sa satisfaction, tandis qu’une amélioration collective peut accroître la valeur de tous les acteurs.'},
    {heading:'Passer des volumes à la valeur',text:'Le nombre de nuitées ou d’arrivées mesure une partie de l’activité, mais ne renseigne pas directement sur la dépense, la marge, la durée, la pression territoriale ou la satisfaction. Une analyse marketing doit compléter les volumes par le mix de clientèles, la saisonnalité, la dépense, le canal de réservation et les comportements.'},
    {heading:'Limites et usage concours',text:'Éviter d’additionner des indicateurs dont les champs diffèrent. Dans une copie, préciser la source et le périmètre puis utiliser le chiffre pour soutenir un mécanisme : saisonnalité, segmentation, capacité ou arbitrage budgétaire. Le chiffre n’est jamais la conclusion.'}
  ],
  'tourisme|Hôtellerie':[
    {heading:'Le modèle économique derrière la chambre',text:'L’hôtellerie combine capacité fixe à court terme, coûts fixes élevés, service humain et inventaire périssable. La performance dépend donc simultanément du prix, du taux d’occupation, du coût de distribution, du mix de clientèle et des revenus annexes. Deux hôtels ayant le même RevPAR peuvent avoir des structures de marge et de risque très différentes.'},
    {heading:'Marque, distribution et relation',text:'Une chaîne ou un groupe multimarque crée de la valeur par notoriété, standard de service, fidélité, négociation et couverture de segments. Les OTA apportent audience et conversion mais captent commission et une partie de la relation. Le direct n’est supérieur que si son coût d’acquisition et de conversion reste maîtrisé.'},
    {heading:'Limites et usage concours',text:'Ne pas attribuer la performance d’un groupe à son programme de fidélité ou à sa stratégie de marque sans données causales. Dans un cas, distinguer indicateurs publiés, hypothèses explicatives et informations manquantes : part directe, coût par canal, taux de membres actifs, marge et réachat.'}
  ],
  'tourisme|Restauration':[
    {heading:'Une capacité qui se mesure en tables et en temps',text:'La capacité d’un restaurant dépend du nombre de places mais aussi de la durée d’occupation, du rythme de production, de la disponibilité du personnel et de la répartition des réservations. Le revenue management peut donc agir sur créneaux, durée, réservation, menus et conditions, pas uniquement sur le prix.'},
    {heading:'Menu engineering et contribution',text:'La carte est un portefeuille d’offres. Il faut comparer popularité et marge contributive des plats, tenir compte du food cost, du temps de préparation et du gaspillage. Une hausse du panier moyen n’est intéressante que si elle améliore la contribution et reste cohérente avec le positionnement.'},
    {heading:'Limites et usage concours',text:'Une hausse de chiffre d’affaires ne permet pas de conclure à une meilleure rentabilité. Dans une copie, demander ou estimer avec prudence volume de couverts, panier, marge, coûts variables et capacité ; proposer ensuite des leviers de mix, productivité, réservation et expérience.'}
  ],
  'tourisme|Destinations & territoires':[
    {heading:'Une offre collective difficile à contrôler',text:'La destination résulte d’un ensemble d’acteurs autonomes. L’organisme de destination peut coordonner, informer, promouvoir et parfois aménager, mais il ne contrôle pas directement la qualité de chaque hôtel, restaurant, transport ou interaction avec les habitants. La gouvernance est donc une variable marketing centrale.'},
    {heading:'Gérer les flux et pas seulement attirer',text:'Une stratégie d’attractivité doit tenir compte de la saison, des lieux saturés, de la capacité, des habitants et des retombées. Désaisonnaliser ne consiste pas à faire une promotion moins chère : il faut créer des motifs de visite crédibles pour d’autres segments et périodes.'},
    {heading:'Limites et usage concours',text:'Éviter de traiter le territoire comme une marque-produit contrôlée de bout en bout. Dans une copie, identifier les parties prenantes, leurs intérêts, la capacité d’accueil et les indicateurs de valeur : dépenses, durée, satisfaction, répartition des flux et acceptabilité.'}
  ],
  'tourisme|Agences / TO / plateformes':[
    {heading:'Des intermédiaires qui n’exercent pas la même fonction',text:'L’agence conseille et sécurise une décision ; le tour-opérateur assemble et prend une partie du risque de production ; l’OTA agrège l’offre et facilite comparaison et transaction ; une marketplace organise une rencontre entre plusieurs côtés du marché. Les confondre empêche d’analyser correctement la valeur créée.'},
    {heading:'Effets de réseau et dépendance',text:'Une plateforme gagne en attractivité lorsque davantage d’offre attire davantage de demande et inversement. Cette dynamique peut réduire les coûts de recherche pour le client mais renforcer le pouvoir de l’intermédiaire sur les fournisseurs, notamment quand l’accès à la demande et aux données devient difficile à reproduire.'},
    {heading:'Limites et usage concours',text:'La commission ne suffit pas à juger un canal. Comparer coût net, conversion, audience incrémentale, accès aux données, risque de dépendance et fidélisation. Une recommandation solide peut conclure à un mix plutôt qu’à la suppression de l’intermédiaire.'}
  ],
  'tourisme|Expérience touristique':[
    {heading:'L’expérience dépasse la prestation centrale',text:'Le souvenir d’un séjour se construit avant le départ, pendant les déplacements, au contact des prestataires puis après le retour. Les points de contact peuvent appartenir à la marque, à des partenaires, à d’autres clients ou à l’environnement. L’expérience doit donc être analysée dans le temps et comme un système.'},
    {heading:'Moments de vérité et récupération',text:'Tous les moments n’ont pas le même poids. Une arrivée difficile, une attente, un incident ou une interaction humaine peuvent structurer le souvenir. En cas de défaillance, rapidité, équité, information et marge de contrôle donnée au client influencent la récupération de confiance.'},
    {heading:'Limites et usage concours',text:'Une carte de parcours ne doit pas être une suite décorative de canaux. Pour chaque étape, préciser besoin, friction, émotion, acteur responsable, donnée et KPI. Dans une copie, prioriser les moments qui modifient réellement satisfaction ou conversion.'}
  ],
  'tourisme|Distribution & OTA':[
    {heading:'Piloter la contribution, pas le volume',text:'Un canal de distribution doit être évalué après commission, coût média, coût technologique, annulations, service, conversion et potentiel de réachat. Le direct peut produire davantage de données et de relation, mais il supporte ses propres coûts d’acquisition.'},
    {heading:'Régulation et évolution du rapport de force',text:'Le DMA encadre certaines pratiques des gatekeepers, notamment les clauses de parité de Booking.com dans l’Union européenne. Ces règles peuvent modifier les marges de manœuvre des hébergeurs sans supprimer pour autant le pouvoir de marché, les effets de réseau ou l’utilité commerciale de la plateforme.'},
    {heading:'Limites et usage concours',text:'Ne pas présenter une enquête DSA comme une condamnation ni une réforme comme disparition du pouvoir d’une plateforme. Dans une copie, distinguer règle établie, procédure en cours, comportement observé et conséquence marketing.'}
  ],
  'tourisme|E-réputation':[
    {heading:'De la note au diagnostic',text:'Une note agrégée mélange plusieurs dimensions et plusieurs périodes. L’analyse doit examiner récence, volume, dispersion, thèmes, type de clientèle et étape du parcours. Le texte des avis peut signaler une cause que la moyenne masque.'},
    {heading:'Répondre pour trois publics',text:'Une réponse à un avis s’adresse au client concerné, aux futurs lecteurs et aux équipes internes. Elle peut reconnaître un problème, expliquer une action et montrer la capacité de récupération. Elle devient inefficace si elle est standardisée, défensive ou déconnectée des opérations.'},
    {heading:'Limites et usage concours',text:'Les avis ne constituent pas un échantillon représentatif automatique : les personnes qui publient peuvent différer des autres clients. Dans une copie, croiser avis, réclamations et données opérationnelles avant de conclure.'}
  ],
  'tourisme|Revenue management':[
    {heading:'Pourquoi le temps change la valeur de l’inventaire',text:'Une chambre, un siège ou une table non vendus à la date de service perdent leur valeur commerciale. Le revenue management cherche donc à prévoir la demande et à réserver la capacité aux segments dont la contribution attendue est la plus pertinente, en jouant sur prix, conditions et disponibilité.'},
    {heading:'Prix, inventaire et perception d’équité',text:'La tarification différenciée peut être acceptée lorsqu’elle repose sur des règles compréhensibles — flexibilité, anticipation, service, période — mais être perçue comme injuste si les écarts semblent arbitraires. La perception de justice doit donc compléter l’optimisation de revenu.'},
    {heading:'Limites et usage concours',text:'Le RevPAR ne mesure ni coûts, ni restauration, ni autres revenus. Dans une copie, l’interpréter avec ADR, occupation, segment, canal, marge variable et expérience. Le meilleur taux d’occupation n’est pas nécessairement la meilleure performance.'}
  ],
  'tourisme|Fidélisation & CRM':[
    {heading:'Fidéliser n’est pas seulement récompenser',text:'La fidélité peut venir de satisfaction, confiance, habitude, coûts de changement ou attachement. Un programme relationnel cherche à augmenter la valeur perçue et la reconnaissance, mais des points non utilisés ou des avantages peu différenciants créent peu de valeur.'},
    {heading:'CRM comme processus stratégique',text:'Le CRM organise connaissance client, proposition de valeur, interactions multicanales et mesure. La donnée doit être exacte, utile et gouvernée ; la personnalisation doit produire un bénéfice identifiable plutôt qu’une impression de surveillance.'},
    {heading:'Limites et usage concours',text:'Nombre de membres, ouverture d’e-mails ou téléchargements d’application ne suffisent pas à prouver la fidélité. Regarder activité, fréquence, rétention, part de portefeuille, valeur client et coût du programme.'}
  ],
  'tourisme|Tourisme durable':[
    {heading:'Du discours au système d’impact',text:'L’impact touristique provient de la mobilité, du bâtiment, des achats, de l’eau, des déchets, des activités et des flux territoriaux. Une politique crédible hiérarchise les impacts matériels plutôt que de multiplier des gestes facilement communicables mais secondaires.'},
    {heading:'Mesurer une trajectoire',text:'Une intensité par nuitée ou passager peut baisser alors que l’impact absolu augmente avec la croissance du volume. Les deux lectures peuvent donc être nécessaires. Un label ou une certification apporte un cadre de preuve mais ne remplace pas l’analyse des résultats.'},
    {heading:'Limites et usage concours',text:'Éviter les notions vagues comme “écologique” ou “responsable” sans indicateur. Dans une copie, préciser périmètre, année de référence, mesure, action et risque de déplacement d’impact ou de greenwashing.'}
  ],
  'tourisme|IA & nouvelles technologies':[
    {heading:'Commencer par le problème utilisateur',text:'Un cas d’usage doit identifier utilisateur, tâche, friction, données disponibles, qualité attendue et indicateur de valeur. Une IA générative qui produit rapidement une réponse fausse peut dégrader davantage l’expérience qu’un processus humain plus lent.'},
    {heading:'Du pilote à l’industrialisation',text:'Un pilote démontre une possibilité dans un contexte limité. Le passage à l’échelle exige intégration SI, qualité des données, sécurité, coût, conduite du changement, supervision et responsabilité. Le taux d’usage réel est souvent plus instructif que le nombre de démonstrations.'},
    {heading:'Limites et usage concours',text:'Ne pas écrire “mettre de l’IA” comme recommandation. Décrire la tâche, la valeur, le contrôle humain, les erreurs possibles, les données et le KPI. Distinguer capacité technique et intérêt économique.'}
  ],
  'tourisme|Influence & réseaux sociaux':[
    {heading:'Choisir un créateur par fonction, pas par taille',text:'Une campagne peut chercher inspiration, crédibilité, contenu, trafic ou conversion. Le bon profil dépend de la cible et du rôle attendu. Une petite communauté très affinitaire peut produire plus de valeur qu’une audience massive peu pertinente.'},
    {heading:'Mesure et attribution',text:'Portée et engagement mesurent l’exposition et la réaction, pas nécessairement la réservation. Les liens UTM, codes, recherches de marque, enquêtes post-achat ou tests géographiques peuvent aider à approcher l’effet, sans prétendre à une attribution parfaite.'},
    {heading:'Limites et usage concours',text:'Intégrer transparence commerciale, droits d’usage des contenus et risque réputationnel. Une recommandation doit préciser créateur, cible, message, format, rôle dans le parcours et KPI.'}
  ],
  'tourisme|Luxe & tourisme':[
    {heading:'Une valeur multidimensionnelle',text:'Dans le luxe, la valeur vient de la qualité fonctionnelle mais aussi de la rareté, du statut, de la personnalisation, du temps gagné, de l’accès et de la cohérence symbolique. Le prix élevé peut renforcer certaines perceptions mais ne remplace pas la preuve de service.'},
    {heading:'La cohérence opérationnelle comme barrière',text:'Une promesse premium exige recrutement, formation, autonomie, processus, données et partenaires adaptés. Une expérience spectaculaire compensant mal des défaillances basiques produit une dissonance particulièrement forte lorsque les attentes sont élevées.'},
    {heading:'Limites et usage concours',text:'Éviter de définir le luxe par décoration et prix. Dans une copie, montrer comment chaque élément du mix et de la servuction soutient la promesse et comment l’établissement mesure satisfaction, réachat et contribution.'}
  ],
  'tourisme|Événementiel':[
    {heading:'Créer une raison de déplacement datée',text:'L’événement concentre une proposition de valeur dans le temps et peut déclencher un déplacement qui n’aurait pas eu lieu autrement. Il peut aussi renforcer l’image, générer du contenu, stimuler hébergement/restauration et créer une habitude de revisite.'},
    {heading:'Capacité, flux et externalités',text:'La réussite commerciale peut dégrader l’expérience si files, transport, sécurité ou nuisances ne sont pas maîtrisés. Le dispositif doit donc articuler marketing, opérations et territoire. Les retombées doivent être comparées aux coûts directs et aux externalités.'},
    {heading:'Limites et usage concours',text:'Ne pas évaluer un événement uniquement au nombre d’entrées. Mesurer visiteurs incrémentaux, dépense, occupation, satisfaction, attente, réclamation, intention de retour et retombées pour les partenaires.'}
  ],
  'tourisme|Crises & tourisme':[
    {heading:'La confiance comme actif vulnérable',text:'Une crise augmente l’incertitude et peut modifier rapidement le comportement. Les clients cherchent des informations, des garanties et des solutions. Une réponse marketing crédible dépend d’abord de faits opérationnels vérifiés et d’une coordination avec sécurité, juridique et direction.'},
    {heading:'Séquence de réponse',text:'Sécuriser et vérifier, informer les personnes exposées, fournir une assistance, adapter les campagnes incompatibles avec la situation, puis publier des mises à jour datées. Après stabilisation, suivre la confiance, les réclamations, les abandons et la reprise.'},
    {heading:'Limites et usage concours',text:'Éviter de spéculer, nier trop tôt ou confondre enquête et culpabilité. Dans une copie, distinguer faits établis, incertitudes, décisions immédiates et actions de restauration de la relation.'}
  ]
}
