export type RawInput = string | number | null

export type ParsedInput =
  | {
      kind: 'empty'
      message: string
    }
  | {
      kind: 'number'
      value: number
    }
  | {
      kind: 'text'
      value: string
    }

export type Formatter<T> = (value: T) => string

export type Parser<TInput, TOutput> = (input: TInput) => TOutput

export type ParseParameters = Parameters<typeof parseInput>
export type ParseReturn = ReturnType<typeof parseInput>
export type AsyncParseReturn = Awaited<ReturnType<typeof parseInputAsync>>

export const rawSamples: RawInput[] = ['42', 'TypeScript', '', 128, null]

export function first<T>(items: T[]): T | undefined {
  return items[0]
}

export function getLabel<T extends { label: string }>(item: T): string {
  return item.label
}

export function isNumberResult(value: ParsedInput): value is Extract<ParsedInput, { kind: 'number' }> {
  return value.kind === 'number'
}

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`)
}

export function parseInput(input: number): Extract<ParsedInput, { kind: 'number' }>
export function parseInput(input: string): Extract<ParsedInput, { kind: 'empty' | 'number' | 'text' }>
export function parseInput(input: null): Extract<ParsedInput, { kind: 'empty' }>
export function parseInput(input: RawInput): ParsedInput
export function parseInput(input: RawInput): ParsedInput {
  if (input === null || input === '') {
    return {
      kind: 'empty',
      message: '没有可解析的输入',
    }
  }

  if (typeof input === 'number') {
    return {
      kind: 'number',
      value: input,
    }
  }

  const numericValue = Number(input)

  if (!Number.isNaN(numericValue)) {
    return {
      kind: 'number',
      value: numericValue,
    }
  }

  return {
    kind: 'text',
    value: input.trim(),
  }
}

export async function parseInputAsync(input: RawInput): Promise<ParsedInput> {
  return parseInput(input)
}

export function formatParsedInput(result: ParsedInput): string {
  switch (result.kind) {
    case 'empty':
      return result.message
    case 'number':
      return `数字：${result.value.toFixed(2)}`
    case 'text':
      return `文本：${result.value.toUpperCase()}`
    default:
      return assertNever(result)
  }
}

export function createFormatter<T>(formatter: Formatter<T>): Formatter<T> {
  return formatter
}

export const parsedInputFormatter = createFormatter(formatParsedInput)

export const advancedFunctionExamples = [
  {
    code: "function first<T>(items: T[]): T | undefined {\n  return items[0]\n}",
    key: 'generic',
    title: '泛型函数',
  },
  {
    code: "function getLabel<T extends { label: string }>(item: T): string {\n  return item.label\n}",
    key: 'constraint',
    title: '泛型约束',
  },
  {
    code: "function parseInput(input: number): NumberResult\nfunction parseInput(input: string): EmptyResult | NumberResult | TextResult\nfunction parseInput(input: string | number): ParsedInput {\n  // 实现签名写在最后\n}",
    key: 'overload',
    title: '函数重载',
  },
  {
    code: "function isNumberResult(value: ParsedInput): value is NumberResult {\n  return value.kind === 'number'\n}",
    key: 'predicate',
    title: '类型谓词',
  },
  {
    code: "type ParseParameters = Parameters<typeof parseInput>\ntype ParseReturn = ReturnType<typeof parseInput>\ntype AsyncParseReturn = Awaited<ReturnType<typeof parseInputAsync>>",
    key: 'utility',
    title: '工具类型',
  },
] as const
