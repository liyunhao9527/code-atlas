import { useState } from 'react'

export function EventPracticeDemo() {
  const [log, setLog] = useState<Array<{ id: number; message: string }>>([])

  function pushLog(message: string) {
    setLog((items) => [{ id: Date.now(), message }, ...items].slice(0, 5))
  }

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">React Events</p>
        <h3>把用户动作变成状态变化</h3>
      </div>
      <div className="demo-actions">
        <button className="demo-button secondary" type="button" onClick={() => pushLog('触发了 click')}>
          click
        </button>
        <button className="demo-button secondary" type="button" onMouseEnter={() => pushLog('触发了 mouseenter')}>
          mouseenter
        </button>
        <button className="demo-button secondary" type="button" onFocus={() => pushLog('触发了 focus')}>
          focus
        </button>
      </div>
      <ol className="demo-log">
        {log.length > 0 ? log.map((item) => <li key={item.id}>{item.message}</li>) : <li>先点击或聚焦按钮。</li>}
      </ol>
    </div>
  )
}
