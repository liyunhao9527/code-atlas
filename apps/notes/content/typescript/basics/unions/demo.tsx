import { Button, Descriptions, Space } from 'antd'
import { useState } from 'react'

import {
  getNextLoadingState,
  loadingStateLabels,
  loadingStateMessages,
  loadingStates,
  type LoadingState,
} from './examples'

export function UnionsDemo() {
  const [state, setState] = useState<LoadingState>('idle')

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Union Types</p>
        <h3>只允许切换到联合类型列出的状态</h3>
        <p>这里的请求状态只能是 idle、loading、success、error 其中之一。</p>
      </div>

      <Space wrap>
        {loadingStates.map((item) => (
          <Button
            htmlType="button"
            key={item}
            onClick={() => setState(item)}
            type={item === state ? 'primary' : 'default'}
          >
            {loadingStateLabels[item]}
          </Button>
        ))}
      </Space>

      <Button htmlType="button" onClick={() => setState(getNextLoadingState(state))}>
        切换到下一个状态
      </Button>

      <Descriptions
        bordered
        column={1}
        items={[
          { children: state, key: 'state', label: '当前状态' },
          { children: loadingStateMessages[state], key: 'message', label: '业务含义' },
        ]}
        size="small"
      />
    </div>
  )
}
