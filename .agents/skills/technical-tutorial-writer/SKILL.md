---
name: technical-tutorial-writer
description: Plan, write, review, or improve Code Atlas technical tutorials and learning notes. Use when creating or updating tutorial content, deciding whether to split a topic into basic and advanced articles, adding examples/demos/exercises, checking whether a technical article is complete for its audience, or updating the learning roadmap for notes under apps/notes/content/.
---

# Technical Tutorial Writer

Use this skill to turn a technical topic into a reader-centered Code Atlas tutorial. Optimize for a learning path, not a knowledge dump.

## Core Rule

Structure must serve the reader's understanding path.

- Put prerequisite concepts before dependent concepts, even if the prerequisite feels more advanced.
- Keep a basic article complete for daily use.
- Split advanced material when it makes the basic article harder for beginners.
- Use examples, demos, and exercises to prove the reader can apply the idea.

## Workflow

1. Inspect nearby notes, demos, examples, and the relevant roadmap file before writing.
2. List the topic's knowledge points broadly, then group them by reader difficulty.
3. Decide article scope:
   - **Basic article**: cover concepts needed for common daily use.
   - **Advanced article**: cover precision, abstraction, edge cases, and patterns that build on the basic article.
4. For each section, decide which reader question matters:
   - What is it?
   - Why does it exist?
   - How do I use it?
5. Write the article in natural tutorial prose. Do not include planning notes, AI prompt language, or meta-writing scaffolding.
6. Add pure TypeScript or framework examples in `examples.ts` when the note has a demo.
7. Add an interactive demo when it helps readers observe behavior, state, type relationships, or tradeoffs.
8. Add exercises with reference code when the topic is a learning article.
9. Update the roadmap when adding or reordering topics.
10. Run the repo's required build command after changing notes, demos, or content routing.

## Basic Article Pattern

Use this when the reader is learning the topic for the first time.

Recommended sections:

- Core understanding: define the concept in one or two practical sentences.
- First working example: show the smallest useful code.
- Common forms: introduce normal syntax and everyday variants.
- Real usage: show a realistic business or UI example.
- Common mistakes: include errors a learner is likely to make.
- Interactive observation: add a demo when behavior is easier to see than describe.
- Exercises: include tasks plus reference code.

Completion standard:

- A learner can solve common daily problems with this article alone.
- The article does not need to cover every advanced edge.
- The article should not require the advanced article to feel complete.

## Advanced Article Pattern

Use this when the topic has deeper techniques that would interrupt the basic article.

Recommended sections:

- Problem beyond the basics: explain what the basic article cannot express well.
- More precise relationships: show how types, data, control flow, or APIs connect.
- Abstractions and constraints: introduce reusable patterns carefully.
- Edge cases and misuse: explain when the powerful tool is the wrong tool.
- Realistic pattern: show how this appears in app code.
- Exercises: require the reader to apply the advanced idea, not just copy syntax.

Completion standard:

- A reader with basic knowledge learns a stronger modeling or implementation technique.
- Examples remain concrete enough to run or reason about.
- The article points to future topics without becoming an encyclopedia.

## Split Decision

Use this test:

- If content is necessary to use the topic in everyday code, keep it in the basic article.
- If content makes the topic more precise, abstract, reusable, or edge-case-safe, move it to advanced.
- If content requires several previous concepts, either move it later or create a prerequisite article first.

Example:

- TypeScript function basics: parameters, return values, inference, optional/default/rest/destructured parameters, function type aliases, callbacks, async `Promise<T>`.
- TypeScript function advanced: generics, constraints, overloads, type predicates, utility types, `never`, `this`, function composition.

## Code Atlas File Pattern

For interactive learning topics, prefer:

```text
apps/notes/content/{domain}/{group}/{topic}/
  note.mdx
  demo.tsx
  examples.ts
```

Use each file this way:

- `note.mdx`: prose, frontmatter, imports, exercises.
- `examples.ts`: pure examples, types, helpers, fixed data.
- `demo.tsx`: React demo that imports from `examples.ts`.

For pure notes without demos, a single `.mdx` file is acceptable.

## Writing Rules

- Write for the reader, not for the author.
- Do not paste planning checklists into the article body.
- Avoid labels like "AI prompt", "writing plan", "topic inventory", or "learning map" unless the article is actually about writing.
- Keep implementation details out of reader-facing prose unless the article is about that implementation. Do not explain that content uses MDX, Astro, routing, demos, or file names just because those are how the site is built.
- Remove AI-flavored filler: no promotional claims, vague summaries, grand conclusions, or sentences that merely say the article is "important" or "helps you understand" without adding concrete technical value.
- Write like a real technical post: start from the problem or concept, use direct explanations, show code when it clarifies the point, and keep transitions short.
- Prefer reader actions and outcomes over author actions. Use wording like "练习时可以观察..." instead of "写 demo 时记录...".
- Prefer concrete examples over abstract explanations.
- Explain tradeoffs only where they affect choices the reader will make.
- Use "练习" for learner tasks, not vague endings like "建议记录".
- Pair each exercise with reference code when the user asks for a tutorial.
- Keep section titles direct and scannable.

## Review Checklist

Before finishing, verify:

- Frontmatter is present and follows the repo schema.
- The article has a clear reader level: basic, advanced, or intentionally mixed.
- Basic and advanced material are not tangled.
- Examples compile or are plausible TypeScript/JS/React code.
- Demo imports and exported component names match the MDX import.
- Roadmap updates are made when adding a new TypeScript learning topic.
- `AGENTS.md` and `CLAUDE.md` only change when project conventions or agent instructions change, and stay synchronized if touched.
- Required build command has been run for content/demo/routing changes.
