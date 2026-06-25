# Notes App

主笔记站，使用 Astro 渲染 `apps/notes/content/**/*.mdx`。

它不是 Astro 学习模块，而是整个项目的内容渲染层：

- `apps/notes/content/` 写笔记、文章 demo 和示例代码
- 文章专属 React demo 和对应 `index.mdx` 放在同一个文章目录
- `apps/notes/` 负责布局、路由、导航和构建

常用命令：

```bash
pnpm dev:notes
pnpm build:notes
```
