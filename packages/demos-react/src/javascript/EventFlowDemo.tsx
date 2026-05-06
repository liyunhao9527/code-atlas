import { useState } from 'react'

export function EventFlowDemo() {
  const [logs, setLogs] = useState<string[]>([])

  function pushLog(message: string) {
    setLogs((items) => [message, ...items].slice(0, 6))
  }

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Event Flow</p>
        <h3>捕获与冒泡顺序</h3>
        <p>点击内层按钮，观察事件从外到内捕获，再从内到外冒泡。</p>
      </div>
      <div
        className="event-box event-box-outer"
        onClick={() => pushLog('outer bubble')}
        onClickCapture={() => pushLog('outer capture')}
      >
        outer
        <div
          className="event-box event-box-inner"
          onClick={() => pushLog('inner bubble')}
          onClickCapture={() => pushLog('inner capture')}
        >
          inner
          <button className="demo-button" type="button" onClick={() => pushLog('button click')}>
            触发事件
          </button>
        </div>
      </div>
      <ol className="demo-log">
        {logs.length > 0 ? logs.map((item, index) => <li key={`${item}-${index}`}>{item}</li>) : <li>等待点击。</li>}
      </ol>
    </div>
  )
}
