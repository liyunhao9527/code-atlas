import { Button, List, Space } from 'antd'
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
      <Space wrap>
        <Button htmlType="button" onClick={() => pushLog('触发了 click')}>
          click
        </Button>
        <Button htmlType="button" onMouseEnter={() => pushLog('触发了 mouseenter')}>
          mouseenter
        </Button>
        <Button htmlType="button" onFocus={() => pushLog('触发了 focus')}>
          focus
        </Button>
      </Space>
      <List
        bordered
        dataSource={log.length > 0 ? log : [{ id: 0, message: '先点击或聚焦按钮。' }]}
        renderItem={(item) => <List.Item>{item.message}</List.Item>}
        size="small"
      />
    </div>
  )
}
