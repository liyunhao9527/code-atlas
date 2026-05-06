export interface Topic {
  key: string
  label: string
  path: string
}

export interface TopicGroup {
  key: string
  label: string
  children: Topic[]
}

export interface TopicSection {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export interface TopicDoc {
  path: string
  label: string
  summary: string
  sections: TopicSection[]
  demoTitle?: string
  demoDescription?: string
}
