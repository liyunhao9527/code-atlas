import type { CollectionEntry } from 'astro:content'

export type NoteEntry = CollectionEntry<'notes'>
export type DomainKey = NoteEntry['data']['domain']

export type TopicLink = {
  href: string
  id: string
  order: number
  title: string
}

export type TopicGroup = {
  key: string
  label: string
  topics: TopicLink[]
}

export type DomainNavItem = {
  description: string
  entryPath: string
  groups: TopicGroup[]
  key: DomainKey
  label: string
  notes: NoteEntry[]
}

export const domainDescriptions: Record<DomainKey, string> = {
  javascript: '梳理语言基础、浏览器环境和 DOM 交互，帮助你把运行机制和实际用法连起来。',
  react: '围绕组件、状态、事件和 Hooks 建立理解，练习把界面拆成清晰、可维护的部分。',
  typescript: '从基础类型到项目实践，理解类型系统如何帮助你表达约束、发现问题和整理代码边界。',
}

export const domainOrder: DomainKey[] = ['javascript', 'react', 'typescript']

export function withBase(path: string) {
  const baseUrl = import.meta.env.BASE_URL
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase
}

export function getNotePath(note: NoteEntry) {
  return `/${note.id.replace(/\/(index|note)$/, '')}`
}

export function getNoteHref(note: NoteEntry) {
  return withBase(getNotePath(note))
}

export function buildDomains(notes: NoteEntry[]): DomainNavItem[] {
  return domainOrder
    .map((domainKey) => {
      const domainNotes = notes
        .filter((note) => note.data.domain === domainKey)
        .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title))

      if (domainNotes.length === 0) {
        return undefined
      }

      const groupMap = new Map<string, TopicGroup>()

      for (const note of domainNotes) {
        const groupKey = note.data.group
        const existingGroup = groupMap.get(groupKey)
        const topic = {
          href: getNoteHref(note),
          id: note.id,
          order: note.data.order,
          title: note.data.title,
        }

        if (existingGroup) {
          existingGroup.topics.push(topic)
        } else {
          groupMap.set(groupKey, {
            key: groupKey,
            label: note.data.groupLabel,
            topics: [topic],
          })
        }
      }

      const groups = Array.from(groupMap.values()).map((group) => ({
        ...group,
        topics: group.topics.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
      }))

      return {
        description: domainDescriptions[domainKey],
        entryPath: withBase(`/${domainKey}`),
        groups,
        key: domainKey,
        label: domainNotes[0].data.domainLabel,
        notes: domainNotes,
      }
    })
    .filter((domain): domain is DomainNavItem => Boolean(domain))
}

export function getDomainByKey(domains: DomainNavItem[], key: DomainKey) {
  return domains.find((domain) => domain.key === key)
}
