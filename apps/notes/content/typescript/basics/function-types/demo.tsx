import { Descriptions, Segmented } from 'antd'
import { useMemo, useState } from 'react'

import {
  calculateDisplayPrice,
  calculatePlanTotal,
  formatCompactPrice,
  formatPrice,
  functionExamples,
  levelLabels,
  planOptions,
  type Plan,
  type PriceFormatter,
} from './examples'

const formatterLabels = {
  compact: '紧凑格式',
  normal: '标准格式',
} as const

type FormatterMode = keyof typeof formatterLabels

const formatters: Record<FormatterMode, PriceFormatter> = {
  compact: formatCompactPrice,
  normal: formatPrice,
}

export function FunctionTypesDemo() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)
  const [formatterMode, setFormatterMode] = useState<FormatterMode>('normal')

  const selectedPlan = planOptions[selectedPlanIndex] as Plan
  const result = useMemo(() => calculatePlanTotal(selectedPlan), [selectedPlan])
  const displayPrice = useMemo(() => {
    return calculateDisplayPrice(selectedPlan, formatters[formatterMode])
  }, [formatterMode, selectedPlan])

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Function Types</p>
        <h3>观察函数的输入、输出和回调格式</h3>
        <p>切换套餐和格式化函数，看看参数类型、返回值类型和函数签名如何一起约束结果。</p>
      </div>

      <div>
        <p className="demo-label">Plan 参数</p>
        <Segmented
          onChange={(value) => setSelectedPlanIndex(Number(value))}
          options={planOptions.map((plan, index) => ({
            label: levelLabels[plan.level],
            value: index,
          }))}
          value={selectedPlanIndex}
        />
      </div>

      <div>
        <p className="demo-label">PriceFormatter 回调</p>
        <Segmented
          onChange={(value) => setFormatterMode(value as FormatterMode)}
          options={Object.entries(formatterLabels).map(([value, label]) => ({ label, value }))}
          value={formatterMode}
        />
      </div>

      <Descriptions
        bordered
        column={1}
        items={[
          { children: selectedPlan.basePrice, key: 'basePrice', label: 'basePrice: number' },
          { children: selectedPlan.seats ?? '默认 1', key: 'seats', label: 'seats?: number' },
          { children: result.total, key: 'total', label: '返回值 total' },
          { children: displayPrice, key: 'display', label: '最终展示' },
        ]}
        size="small"
      />

      <Descriptions
        bordered
        column={1}
        items={functionExamples.map((example) => ({
          children: <pre className="m-0 whitespace-pre-wrap text-xs">{example.code}</pre>,
          key: example.key,
          label: example.title,
        }))}
        size="small"
      />
    </div>
  )
}
