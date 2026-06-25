import { Button, InputNumber, Space, Statistic } from 'antd'
import { useState } from 'react'

export function StateCounterDemo() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">State Counter</p>
        <h3>状态驱动界面刷新</h3>
        <p>调节步长并点击按钮，观察同一个 state 如何驱动多个 UI 片段。</p>
      </div>
      <Space align="end" size="large" wrap>
        <Statistic title="当前值" value={count} />
        <div>
          <p className="demo-label">步长</p>
          <InputNumber min={1} onChange={(value) => setStep(Number(value) || 1)} value={step} />
        </div>
      </Space>
      <Space wrap>
        <Button htmlType="button" onClick={() => setCount((value) => value + step)} type="primary">
          增加
        </Button>
        <Button htmlType="button" onClick={() => setCount(0)}>
          重置
        </Button>
      </Space>
    </div>
  )
}
