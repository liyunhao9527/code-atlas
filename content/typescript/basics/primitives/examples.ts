export type PrimitiveSample = {
  label: string
  typeName: 'string' | 'number' | 'boolean' | 'null' | 'undefined'
  value: boolean | null | number | string | undefined
}

export const primitiveSamples: PrimitiveSample[] = [
  {
    label: '用户名',
    typeName: 'string',
    value: 'front-notes',
  },
  {
    label: '学习天数',
    typeName: 'number',
    value: 12,
  },
  {
    label: '是否完成',
    typeName: 'boolean',
    value: false,
  },
  {
    label: '可选头像',
    typeName: 'null',
    value: null,
  },
  {
    label: '未读取字段',
    typeName: 'undefined',
    value: undefined,
  },
]

export function formatPrimitiveValue(value: PrimitiveSample['value']) {
  if (value === undefined) {
    return 'undefined'
  }

  if (value === null) {
    return 'null'
  }

  return String(value)
}
