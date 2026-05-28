import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const noteSchema = z.object({
  title: z.string(),
  summary: z.string(),
  domain: z.enum(['javascript', 'react', 'typescript']),
  domainLabel: z.string(),
  group: z.string(),
  groupLabel: z.string(),
  order: z.number(),
})

const notes = defineCollection({
  loader: glob({
    base: '../../content',
    pattern: '{javascript,react,typescript}/**/*.mdx',
  }),
  schema: noteSchema,
})

export const collections = { notes }
