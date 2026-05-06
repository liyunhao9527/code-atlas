# Learn Front Every Day

一个为前端学习笔记、交互 demo、跨技术栈实验准备的 monorepo。

这个仓库现在拆成了四层：

- `apps/notes`：主笔记站，使用 Astro 渲染 MDX 内容
- `content/`：真正写笔记的地方，使用 Markdown/MDX
- `packages/demos-react`：MDX 笔记里可引用的 React 交互 demo
- `packages/shared`：共享类型和工具
- 根目录：工作区脚本、Turbo 流水线、格式化和基础 TypeScript 配置

## 当前结构

```text
.
├── apps
│   └── notes
├── content
│   ├── javascript
│   ├── react
│   └── typescript
├── packages
│   ├── demos-react
│   └── shared
```

新的主线是 `apps/notes` + `content/**/*.mdx`。

## 内容写法

普通笔记直接写 MDX：

```mdx
---
title: 函数与闭包
summary: 把函数调用、作用域链、闭包保存变量这三件事串起来。
domain: javascript
domainLabel: JavaScript
group: basics
groupLabel: JavaScript 基础
order: 2
---

import { ClosureCounterDemo } from '@learn/demos-react/javascript'

## 先用自己的话解释

闭包可以先理解成：函数记住了它创建时能访问到的外部变量。

<ClosureCounterDemo client:load />
```

推荐目录：

```text
content
├── javascript
│   ├── basics
│   └── browser
├── react
│   ├── basics
│   ├── advanced
│   └── architecture
└── typescript
    ├── basics
    └── advanced
```

## 架构原则

- 产品命名不绑定框架：主应用叫 `apps/notes`，Astro 只是实现细节
- 内容优先：笔记正文在 `content/**/*.mdx`，不再写进 TypeScript 对象
- 交互隔离：React demo 放在 `packages/demos-react`，由 MDX 按需引用
- 允许“笔记 + demo”共存：每篇文章既能写说明，也能挂交互组件

## 常用命令

```bash
pnpm dev
pnpm dev:notes
pnpm dev:all
pnpm build
pnpm build:notes
pnpm lint
pnpm typecheck
```

## 环境要求

- Node.js `>= 20.19.0`
- pnpm `>= 11.0.4`
