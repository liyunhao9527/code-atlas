import { Button, Descriptions, Space } from 'antd'
import { useState } from 'react'

import { formatPrimitiveValue, primitiveSamples } from './examples'

export function PrimitivesDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = primitiveSamples[selectedIndex]

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Primitives</p>
        <h3>观察一个值属于哪种原始类型</h3>
        <p>基础原始类型用来描述值的大类，而不是固定到某一个具体取值。</p>
      </div>

      <Space wrap>
        {primitiveSamples.map((sample, index) => (
          <Button
            htmlType="button"
            key={sample.label}
            onClick={() => setSelectedIndex(index)}
            type={index === selectedIndex ? 'primary' : 'default'}
          >
            {sample.label}
          </Button>
        ))}
      </Space>

      <Descriptions
        bordered
        column={1}
        items={[
          { children: formatPrimitiveValue(selected.value), key: 'value', label: '值' },
          { children: selected.typeName, key: 'type', label: '类型' },
        ]}
        size="small"
      />
    </div>
  )
}
