import { useState } from 'react'

import { formatPrimitiveValue, primitiveSamples } from './examples'
import { Button } from 'antd'
export function PrimitivesDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = primitiveSamples[selectedIndex]

  return (
    <div className="demo-card">
      <div>
        <Button>123</Button>
        <p className="demo-eyebrow">Primitives</p>
        <h3>观察一个值属于哪种原始类型</h3>
        <p>基础原始类型用来描述值的大类，而不是固定到某一个具体取值。</p>
      </div>

      <div className="demo-actions">
        {primitiveSamples.map((sample, index) => (
          <button
            className={index === selectedIndex ? 'demo-button' : 'demo-button secondary'}
            key={sample.label}
            type="button"
            onClick={() => setSelectedIndex(index)}
          >
            {sample.label}
          </button>
        ))}
      </div>

      <div className="demo-output">
        <div>值：{formatPrimitiveValue(selected.value)}</div>
        <div>类型：{selected.typeName}</div>
      </div>
    </div>
  )
}
