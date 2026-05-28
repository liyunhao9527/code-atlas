# Learn Front Every Day

前端学习笔记 monorepo，主站使用 Astro + React + MDX + Tailwind CSS 渲染笔记内容。

## 技术栈

- **主站**：Astro 6 + React 19 + MDX + Tailwind CSS 4
- **包管理**：pnpm 11 + Turborepo
- **语言**：TypeScript 5
- **Node**：>= 20.19.0

## 目录结构

```
.
├── apps/notes          # Astro 笔记站（唯一应用）
├── content/            # 所有笔记正文（MDX）
│   ├── javascript/
│   ├── react/
│   └── typescript/
└── packages/shared     # 共享类型和工具
```

**原则**：
- `content/` 是真正的内容仓库，`apps/notes` 只是渲染器
- 产品命名不绑定框架：`apps/notes` 而非 `apps/astro`
- 内容优先：笔记正文不再写进 TypeScript 对象

## 内容组织

### 目录层级

```
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

### 文件组织

- **纯笔记**：`content/{domain}/{group}/file.mdx`
- **带交互 demo 的笔记**：`content/{domain}/{group}/topic/index.mdx` + 同目录下的 `.tsx` demo 文件

示例：

```
content/react/basics/state/
  index.mdx
  StateCounterDemo.tsx
```

### MDX Frontmatter 规范

每篇笔记必须包含：

```yaml
---
title: 标题
summary: 一句话描述这篇文章讲什么
domain: javascript | react | typescript
domainLabel: 显示用的领域名（如 JavaScript）
group: 分组标识（如 basics）
groupLabel: 显示用的分组名（如 JavaScript 基础）
order: 数字，决定排序
---
```

### 交互 Demo

- 文章专属 demo 放在**同一目录**，由 MDX 相对引用
- React 组件使用 `client:load` 指令在 Astro 中激活交互

```mdx
import { ClosureCounterDemo } from './ClosureCounterDemo'

<ClosureCounterDemo client:load />
```

## 编码约定

- 使用 TypeScript，`strict` 模式
- 组件文件：PascalCase（如 `StateCounterDemo.tsx`）
- 工具/类型文件：camelCase
- 根 `tsconfig.json` 仅包含路径映射，实际编译配置在 `tsconfig.base.json`

## 常用命令

```bash
# 开发
pnpm dev              # 启动 notes 站
pnpm dev:notes        # 同上
pnpm dev:all          # 全量开发模式

# 构建与检查
pnpm build            # 全量构建
pnpm build:notes      # 仅构建 notes
pnpm lint             # ESLint
pnpm typecheck        # TypeScript 检查
```

## 架构原则

1. **就近组织**：文章专属 demo 和文章放在同一目录，避免跨目录引用
2. **允许"笔记 + demo"共存**：每篇文章既能写说明，也能挂交互组件
3. **内容驱动**：新增技术领域时，先在 `content/` 创建目录结构，再调整站点的导航/路由
4. **monorepo 轻量**：只有必要时才拆包，demo 组件优先放在 content 目录而非 packages
