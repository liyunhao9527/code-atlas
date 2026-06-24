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

      <div className="demo-actions">
        {loadingStates.map((item) => (
          <button
            className={item === state ? 'demo-button' : 'demo-button secondary'}
            key={item}
            type="button"
            onClick={() => setState(item)}
          >
            {loadingStateLabels[item]}
          </button>
        ))}
      </div>

      <button className="demo-button secondary" type="button" onClick={() => setState(getNextLoadingState(state))}>
        切换到下一个状态
      </button>

      <div className="demo-output">
        <div>当前状态：{state}</div>
        <div>业务含义：{loadingStateMessages[state]}</div>
      </div>
    </div>
  )
}
