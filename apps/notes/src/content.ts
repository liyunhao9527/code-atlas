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
  javascript: '记录语言基础、浏览器环境、DOM 行为和可以直接验证的原生能力。',
  react: '沉淀组件、状态、事件、Hooks 和工程结构里的真实决策。',
  typescript: '整理类型系统、约束方式、类型推导和项目中的边界设计。',
}

export const domainOrder: DomainKey[] = ['javascript', 'react', 'typescript']

export function getNoteHref(note: NoteEntry) {
  return `/${note.id.replace(/\/index$/, '')}`
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
        entryPath: `/${domainKey}`,
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
