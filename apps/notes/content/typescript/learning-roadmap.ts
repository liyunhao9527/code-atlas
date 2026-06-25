export type RoadmapTopic = {
  id: string
  label: string
}

export type RoadmapStage = {
  demos: string[]
  goal: string
  title: string
  topics: RoadmapTopic[]
}

const topics = {
  'api-types': { id: 'api-types', label: '接口类型' },
  'arrays-tuples': { id: 'arrays-tuples', label: '数组和元组' },
  'conditional-types': { id: 'conditional-types', label: '条件类型' },
  'config-types': { id: 'config-types', label: '配置类型' },
  constraints: { id: 'constraints', label: '泛型约束' },
  'custom-hooks': { id: 'custom-hooks', label: '自定义 Hook 类型' },
  'discriminated-unions': { id: 'discriminated-unions', label: '可辨识联合' },
  'event-types': { id: 'event-types', label: '事件类型' },
  'function-types': { id: 'function-types', label: '函数类型' },
  generics: { id: 'generics', label: '泛型' },
  'generic-components': { id: 'generic-components', label: '泛型组件' },
  'indexed-access': { id: 'indexed-access', label: '索引访问类型' },
  'interfaces-vs-types': { id: 'interfaces-vs-types', label: 'interface 和 type' },
  'intersection-types': { id: 'intersection-types', label: '交叉类型' },
  keyof: { id: 'keyof', label: '键名类型' },
  'literal-types': { id: 'literal-types', label: '字面量类型' },
  'mapped-types': { id: 'mapped-types', label: '映射类型' },
  never: { id: 'never', label: 'never 类型' },
  'object-types': { id: 'object-types', label: '对象类型' },
  'path-alias': { id: 'path-alias', label: '路径别名' },
  primitives: { id: 'primitives', label: '基础原始类型' },
  'props-types': { id: 'props-types', label: 'Props 类型' },
  'ref-types': { id: 'ref-types', label: 'Ref 类型' },
  'schema-validation': { id: 'schema-validation', label: '运行时校验' },
  'state-types': { id: 'state-types', label: '状态类型' },
  'strict-mode': { id: 'strict-mode', label: '严格模式' },
  'type-guards': { id: 'type-guards', label: '类型守卫' },
  unions: { id: 'unions', label: '联合类型' },
  unknown: { id: 'unknown', label: 'unknown 类型' },
  'utility-types': { id: 'utility-types', label: '工具类型' },
} satisfies Record<string, RoadmapTopic>

export const typescriptRoadmap = {
  intro:
    '先理解一个类型概念，再写一个能跑的 demo，最后补一个 examples.ts 保存纯 TypeScript 示例。',
  noteQuestions: [
    '这个类型概念解决什么问题？',
    '它和普通 JavaScript 写法有什么区别？',
    '在 React 或真实业务里会出现在哪里？',
    '有哪些容易误用的边界？',
  ],
  recommendedOrder: [
    topics.primitives,
    topics['literal-types'],
    topics.unions,
    topics['arrays-tuples'],
    topics['object-types'],
    topics['function-types'],
    topics['type-guards'],
    topics['discriminated-unions'],
    topics.generics,
    topics['utility-types'],
  ],
  stages: [
    {
      demos: ['表单字段类型', '按钮尺寸、状态、主题选择', '商品列表、订单状态、用户角色'],
      goal: '能看懂和写出日常变量、函数、对象的类型。',
      title: '基础类型',
      topics: [
        topics.primitives,
        topics['literal-types'],
        topics.unions,
        topics['arrays-tuples'],
        topics['object-types'],
        topics['function-types'],
      ],
    },
    {
      demos: ['接口返回值状态展示', '表单输入解析', '根据不同 type 渲染不同卡片'],
      goal: '理解 TypeScript 如何根据判断语句推断更具体的类型。',
      title: '类型收窄',
      topics: [topics['type-guards'], topics['discriminated-unions'], topics.never, topics.unknown],
    },
    {
      demos: ['通用列表组件', '通用选择器', '表格列配置', '根据字段名读取对象值'],
      goal: '学会写可复用但不丢类型信息的函数、组件和工具类型。',
      title: '泛型',
      topics: [
        topics.generics,
        topics['generic-components'],
        topics.constraints,
        topics.keyof,
        topics['indexed-access'],
      ],
    },
    {
      demos: ['用户资料编辑表单', '权限菜单配置', '接口数据转换', '创建和编辑两种表单模式'],
      goal: '能用 TypeScript 描述更接近真实业务的数据结构。',
      title: '类型组合',
      topics: [
        topics['interfaces-vs-types'],
        topics['intersection-types'],
        topics['mapped-types'],
        topics['conditional-types'],
        topics['utility-types'],
      ],
    },
    {
      demos: ['搜索过滤', 'Todo', '表单校验', 'Tabs', 'Modal', '数据列表'],
      goal: '把类型用在真实组件开发里，而不是只停留在语法层面。',
      title: 'React + TypeScript',
      topics: [
        topics['props-types'],
        topics['event-types'],
        topics['state-types'],
        topics['ref-types'],
        topics['custom-hooks'],
      ],
    },
    {
      demos: ['模拟请求状态机', '用户权限配置', '主题配置系统', '本地存储读写封装'],
      goal: '把 TypeScript 变成工程约束，而不是只写显式类型。',
      title: '项目实践',
      topics: [
        topics['api-types'],
        topics['schema-validation'],
        topics['config-types'],
        topics['path-alias'],
        topics['strict-mode'],
      ],
    },
  ] satisfies RoadmapStage[],
  title: 'TypeScript 学习路线',
} as const
