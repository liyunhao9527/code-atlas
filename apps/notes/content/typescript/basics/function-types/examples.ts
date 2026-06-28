export type PriceLevel = 'basic' | 'pro' | 'team'

export type Plan = {
  basePrice: number
  level: PriceLevel
  seats?: number
}

export type PriceResult = {
  label: string
  total: number
}

export type PriceFormatter = (result: PriceResult) => string

export interface PriceCalculator {
  (plan: Plan, formatter?: PriceFormatter): string
}

export const planOptions: Plan[] = [
  { basePrice: 19, level: 'basic' },
  { basePrice: 49, level: 'pro', seats: 2 },
  { basePrice: 99, level: 'team', seats: 5 },
]

export const levelLabels: Record<PriceLevel, string> = {
  basic: '基础版',
  pro: '专业版',
  team: '团队版',
}

export function calculatePlanTotal({ basePrice, level, seats = 1 }: Plan): PriceResult {
  const seatMultiplier = level === 'team' ? seats : 1

  return {
    label: levelLabels[level],
    total: basePrice * seatMultiplier,
  }
}

export const formatPrice: PriceFormatter = (result) => {
  return `${result.label}: $${result.total}/月`
}

export const formatCompactPrice: PriceFormatter = ({ label, total }) => {
  return `${label} $${total}`
}

export const calculateDisplayPrice: PriceCalculator = (plan, formatter = formatPrice) => {
  return formatter(calculatePlanTotal(plan))
}

export function collectLabels(...plans: Plan[]) {
  return plans.map((plan) => levelLabels[plan.level])
}

export const functionExamples = [
  {
    code: "function add(a: number, b: number): number {\n  return a + b\n}",
    key: 'basic',
    title: '参数和返回值',
  },
  {
    code: "function greet(name = 'TypeScript') {\n  return `Hello, ${name}`\n}",
    key: 'default',
    title: '默认参数',
  },
  {
    code: "type Formatter = (value: number) => string\n\nconst money: Formatter = (value) => `$${value}`",
    key: 'alias',
    title: '函数类型别名',
  },
  {
    code: "type CalculateTotal = (price: number, count: number) => number\n\nconst calculateTotal: CalculateTotal = (price, count) => {\n  return price * count\n}",
    key: 'typed-arrow',
    title: '给箭头函数标注签名',
  },
  {
    code: "function mapNames(users: User[], pick: (user: User) => string) {\n  return users.map(pick)\n}",
    key: 'callback',
    title: '回调函数',
  },
] as const
