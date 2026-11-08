import { contestPages } from './content/contest'
import { marketingPages } from './content/marketing'
import { tourismPages } from './content/tourism'
import { authorsPages } from './content/authors'
import { trainingPages } from './content/training'
import { casePages } from './content/cases'
import { watchPages } from './content/watch'
import { libraryPages } from './content/library'
import { progressPages } from './content/progress'

export const contentPages = {
  ...contestPages,
  ...marketingPages,
  ...tourismPages,
  ...authorsPages,
  ...trainingPages,
  ...casePages,
  ...watchPages,
  ...libraryPages,
  ...progressPages
}
