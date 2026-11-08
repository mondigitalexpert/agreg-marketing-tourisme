import { foundationCourses } from './courses/foundations'
import { mixCourses } from './courses/mix'
import { sectoralCourses } from './courses/sectoral'
import { methodCourses } from './courses/methods'

export const marketingPages = {
  ...foundationCourses,
  ...mixCourses,
  ...sectoralCourses,
  ...methodCourses
}
