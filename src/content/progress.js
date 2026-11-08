const p=(title,intro,type,keyPoints=[])=>({
  label:'Suivi personnel',title,intro,keyPoints,sections:[],sources:[],progressType:type
})

export const progressPages = {
  'progression|Mes résultats': p(
    'Mes résultats aux QCM',
    'Cette vue regroupe les scores réellement obtenus dans les quiz interactifs.',
    'results',
    ['Un score n’est affiché qu’après réponse.','Le détail permet d’identifier les thèmes à retravailler.']
  ),
  'progression|Points faibles': p(
    'Points faibles détectés',
    'Les points faibles sont déduits uniquement des erreurs enregistrées dans les QCM et des flashcards marquées “à revoir”.',
    'weak',
    ['Une erreur isolée ne suffit pas à conclure à une faiblesse durable.','La rubrique sert à prioriser la révision, pas à produire une étiquette définitive.']
  ),
  'progression|Notions maîtrisées': p(
    'Notions maîtrisées',
    'Cette vue fait ressortir les quiz terminés avec un niveau élevé de réussite. Elle reste un indicateur de mémorisation et non une preuve de maîtrise complète en situation de concours.',
    'mastered',
    ['La maîtrise réelle doit aussi être testée par des cas et des réponses ouvertes.']
  ),
  'progression|À revoir': p(
    'À revoir en priorité',
    'Liste de révision construite à partir des erreurs, flashcards difficiles et favoris.',
    'review',
    ['Commencer par les notions récurrentes dans plusieurs erreurs.','Repasser ensuite par un exercice d’application, pas seulement par la relecture.']
  ),
  'progression|Historique QCM': p(
    'Historique des QCM',
    'Historique local des quiz réellement commencés et de leur dernier score enregistré.',
    'quizHistory',
    ['Le navigateur conserve la dernière tentative enregistrée pour chaque quiz.']
  ),
  'progression|Erreurs fréquentes': p(
    'Erreurs fréquentes',
    'Cette vue regroupe les questions auxquelles une mauvaise réponse a été enregistrée.',
    'errors',
    ['Lire l’explication de correction puis reformuler la règle sans regarder la réponse.']
  ),
  'progression|Cas réalisés': p(
    'Cas réalisés',
    'Un cas n’apparaît ici que lorsqu’il a été explicitement marqué comme réalisé.',
    'cases',
    ['Marquer un cas après avoir réellement produit une réponse, même courte.','Revenir sur les cas anciens pour vérifier si les concepts sont mieux mobilisés.']
  ),
  'progression|Flashcards difficiles': p(
    'Flashcards difficiles',
    'Les cartes marquées “À revoir” apparaissent ici pour une répétition ciblée.',
    'flashcards',
    ['Retirer une carte de cette liste uniquement après avoir retrouvé la réponse sans indice.']
  ),
  'progression|Favoris': p(
    'Mes favoris',
    'Liste des fiches marquées comme importantes pour la préparation.',
    'favorites',
    ['Les favoris sont enregistrés localement dans ce navigateur.']
  )
}
