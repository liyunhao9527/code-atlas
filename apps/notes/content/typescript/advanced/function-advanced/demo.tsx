import { Descriptions, Segmented } from 'antd'
import { useMemo, useState } from 'react'

import {
  advancedFunctionExamples,
  formatParsedInput,
  isNumberResult,
  parseInput,
  parsedInputFormatter,
  rawSamples,
  type RawInput,
} from './examples'

function formatRawInput(value: RawInput) {
  if (value === null) {
    return 'null'
  }

  if (value === '') {
    return '空字符串'
  }

  return String(value)
}

export function FunctionAdvancedDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedInput = rawSamples[selectedIndex] as RawInput

  const parsed = useMemo(() => parseInput(selectedInput), [selectedInput])
  const formatted = useMemo(() => parsedInputFormatter(parsed), [parsed])

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Advanced Function Types</p>
        <h3>观察一个解析函数如何带出更精确的类型</h3>
        <p>同一个输入解析场景里，会同时出现重载、类型谓词、工具类型和泛型函数。</p>
      </div>

      <div>
        <p className="demo-label">RawInput</p>
        <Segmented
          onChange={(value) => setSelectedIndex(Number(value))}
          options={rawSamples.map((sample, index) => ({
            label: formatRawInput(sample),
            value: index,
          }))}
          value={selectedIndex}
        />
      </div>

      <Descriptions
        bordered
        column={1}
        items={[
          { children: parsed.kind, key: 'kind', label: '解析结果 kind' },
          { children: formatParsedInput(parsed), key: 'format', label: '普通格式化' },
          { children: formatted, key: 'genericFormatter', label: '泛型 formatter' },
          {
            children: isNumberResult(parsed) ? parsed.value.toFixed(2) : '不是数字结果',
            key: 'predicate',
            label: '类型谓词收窄后',
          },
        ]}
        size="small"
      />

      <Descriptions
        bordered
        column={1}
        items={advancedFunctionExamples.map((example) => ({
          children: <pre className="m-0 whitespace-pre-wrap text-xs">{example.code}</pre>,
          key: example.key,
          label: example.title,
        }))}
        size="small"
      />
    </div>
  )
}
