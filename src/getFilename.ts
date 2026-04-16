import { StudyFullInfo } from './shared-types/study'
import { KeycloakUser } from './shared-types/user'

function sanitizePathSegment(value: string): string {
  const cleaned = value.trim().replace(/[^a-zA-Z0-9._-]/g, '_')
  if (!cleaned || cleaned === '.' || cleaned === '..') return 'UNKNOWN'
  return cleaned
}

export function getFilename(
  study?: StudyFullInfo,
  participant?: KeycloakUser,
): string {
  if (!study || !participant) {
    throw new Error('Cannot generate filename: study or participant is missing')
  }
  const username = sanitizePathSegment(participant.username ?? participant.id ?? 'UNKNOWN')
  const studyTitleSlug = sanitizePathSegment(
    String(study.title ?? '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_'),
  )
  return `sub-${username}_ses-${studyTitleSlug}`
}
