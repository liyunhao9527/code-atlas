import { Button, Card, List } from 'antd'
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
      <Card
        className="bg-[#eef6ff]"
        onClick={() => pushLog('outer bubble')}
        onClickCapture={() => pushLog('outer capture')}
        size="small"
        title="outer"
      >
        <Card
          onClick={() => pushLog('inner bubble')}
          onClickCapture={() => pushLog('inner capture')}
          size="small"
          title="inner"
        >
          <Button htmlType="button" onClick={() => pushLog('button click')} type="primary">
            触发事件
          </Button>
        </Card>
      </Card>
      <List
        bordered
        dataSource={
          logs.length > 0
            ? logs.map((item, index) => ({ id: `${item}-${index}`, message: item }))
            : [{ id: 'empty', message: '等待点击。' }]
        }
        renderItem={(item) => <List.Item>{item.message}</List.Item>}
        size="small"
      />
    </div>
  )
}
