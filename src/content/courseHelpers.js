export const OFFICIAL = {
  type:'Officiel',
  name:'Programme 2027 — Agrégation externe économie-gestion, option C Marketing',
  url:'https://www.devenirenseignant.gouv.fr/media/20325/download',
  checked:'08/11/2026'
}

export const JURY = {
  type:'Officiel',
  name:'Rapport du jury externe économie-gestion 2025',
  url:'https://www.devenirenseignant.gouv.fr/media/18028/download',
  checked:'08/11/2026'
}

export const course = ({
  title,
  intro,
  objectives=[],
  keyPoints=[],
  sections=[],
  recap=[],
  examTips=[],
  sources=[]
}) => ({
  label:'Cours approfondi',
  title,
  intro,
  objectives,
  keyPoints,
  sections,
  recap,
  examTips,
  sources:[OFFICIAL,...sources]
})
