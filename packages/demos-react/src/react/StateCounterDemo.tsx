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
      <div className="counter-row">
        <div>
          <span className="demo-label">当前值</span>
          <strong className="counter-value">{count}</strong>
        </div>
        <label className="demo-field">
          步长
          <input min="1" type="number" value={step} onChange={(event) => setStep(Number(event.target.value) || 1)} />
        </label>
      </div>
      <div className="demo-actions">
        <button className="demo-button" type="button" onClick={() => setCount((value) => value + step)}>
          增加
        </button>
        <button className="demo-button secondary" type="button" onClick={() => setCount(0)}>
          重置
        </button>
      </div>
    </div>
  )
}
