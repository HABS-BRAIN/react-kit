import { StudyFullInfo } from './shared-types/study'
import { KeycloakUser } from './shared-types/user'

export function getFilename(
  study?: StudyFullInfo,
  participant?: KeycloakUser,
): string {
  if (!study || !participant) {
    throw new Error('Cannot generate filename: study or participant is missing')
  }
  return `${study.title.toLowerCase().replace(/\s+/g, '_')}---${participant.username}`
}
