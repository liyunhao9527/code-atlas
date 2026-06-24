# Agent Instructions

This project also has `CLAUDE.md`. Keep `AGENTS.md` and `CLAUDE.md` synchronized when changing project conventions, content structure, commands, architecture notes, or agent-facing instructions.

If you update one of these files with a rule that affects how agents should work in this repository, update the other file in the same change.

## Project

Learn Front Every Day is a frontend learning notes monorepo. The notes app uses Astro + React + MDX + Tailwind CSS to render content from `content/`.

## Content Structure

`content/` is the source of truth for learning content. `apps/notes` is the renderer.

The TypeScript module homepage is driven by `content/typescript/learning-roadmap.ts`. Update that file when changing the TypeScript learning path, stage order, recommended topics, or demo ideas.

Use this structure for notes with interactive demos:

```text
content/{domain}/{group}/{topic}/
  note.mdx
  demo.tsx
  examples.ts
```

- `note.mdx`: note body, frontmatter, and demo import
- `demo.tsx`: interactive React component
- `examples.ts`: types, fixed options, sample data, and reusable example code

For learning topics, keep this loop clear:

```text
concept notes -> pure TypeScript examples -> interactive demo -> review notes
```

Use each file this way:

- `note.mdx`: explain the concept, summarize tradeoffs, and record review questions
- `examples.ts`: write pure TypeScript practice code, types, helpers, sample data, and reusable examples
- `demo.tsx`: turn examples into an interactive React demo; import types/data/helpers from `examples.ts` when useful

Example:

```text
content/typescript/basics/literal-types/
  note.mdx
  demo.tsx
  examples.ts
```

MDX imports demo components from `./demo`:

```mdx
import { LiteralTypesDemo } from './demo'

<LiteralTypesDemo client:load />
```

The demo file is named `demo.tsx`, but the exported React component still uses PascalCase, such as `LiteralTypesDemo`.

Pure notes without demos may use:

```text
content/{domain}/{group}/file.mdx
```

## Frontmatter

Every note must include:

```yaml
---
title: 标题
summary: 一句话描述这篇文章讲什么
domain: javascript | react | typescript
domainLabel: 显示用的领域名（如 TypeScript）
group: 分组标识（如 basics）
groupLabel: 显示用的分组名（如 TypeScript 基础）
order: 数字，决定排序
---
```

## Commands

```bash
pnpm dev
pnpm dev:notes
pnpm build:notes
pnpm lint
pnpm typecheck
```

Run `pnpm build:notes` after changing notes, demos, or content routing.

## Styling

The notes app supports Tailwind CSS and Sass. Keep shared site styles in `apps/notes/src/styles/global.css`.

For page-specific styles that are too verbose in plain CSS, prefer Astro scoped styles with Sass:

```astro
<style lang="scss">
  .page-block {
    &__item {
      color: var(--text);
    }
  }
</style>
```
