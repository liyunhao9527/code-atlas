# Content Workspace

这里是新的笔记正文目录。

主线写法：

- 使用 `.mdx` 写文章
- 用 frontmatter 描述标题、摘要、技术域、分组和排序
- 需要交互时，把 React demo 放在文章目录里，再从 MDX 相对引入

示例：

```text
apps/notes/content/javascript/basics/functions/
  index.mdx
  ClosureCounterDemo.tsx
```

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

import { ClosureCounterDemo } from './ClosureCounterDemo'

## 交互观察

<ClosureCounterDemo client:load />
```
