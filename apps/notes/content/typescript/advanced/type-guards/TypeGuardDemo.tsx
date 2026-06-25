import { Button, Descriptions, Input, Space } from 'antd'
import { useState } from 'react'

type ResultItem = {
  input: string
  normalized: string
}

function normalizeValue(value: string | number): string {
  if (typeof value === 'number') {
    return `number:${value.toFixed(2)}`
  }

  return `string:${value.trim().toUpperCase()}`
}

export function TypeGuardDemo() {
  const [input, setInput] = useState('42')
  const [result, setResult] = useState<ResultItem | null>(null)

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Type Guard</p>
        <h3>根据运行时判断缩小类型范围</h3>
      </div>
      <Space.Compact>
        <Input
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <Button
          htmlType="button"
          onClick={() => {
            const maybeNumber = Number(input)
            const value: string | number = Number.isNaN(maybeNumber) ? input : maybeNumber

            setResult({
              input,
              normalized: normalizeValue(value),
            })
          }}
          type="primary"
        >
          运行类型守卫
        </Button>
      </Space.Compact>
      <Descriptions
        bordered
        column={1}
        items={
          result
            ? [
                { children: result.input, key: 'input', label: '输入值' },
                { children: result.normalized, key: 'result', label: '处理结果' },
              ]
            : [{ children: '先输入一个值并运行示例。', key: 'empty', label: '状态' }]
        }
        size="small"
      />
    </div>
  )
}
