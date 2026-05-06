# Notes App

主笔记站，使用 Astro 渲染 `content/**/*.mdx`。

它不是 Astro 学习模块，而是整个项目的内容渲染层：

- `content/` 写笔记
- `packages/demos-react/` 放 MDX 可引用的 React demo
- `apps/notes/` 负责布局、路由、导航和构建

常用命令：

```bash
pnpm dev:notes
pnpm build:notes
```
