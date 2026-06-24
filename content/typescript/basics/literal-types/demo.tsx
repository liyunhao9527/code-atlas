import { useMemo, useState } from 'react'

import {
  buttonSizes,
  orderStatuses,
  sizeLabels,
  statusLabels,
  statusMessages,
  type ButtonSize,
  type OrderStatus,
} from './examples'

export function LiteralTypesDemo() {
  const [size, setSize] = useState<ButtonSize>('medium')
  const [status, setStatus] = useState<OrderStatus>('pending')

  const preview = useMemo(() => {
    return `${sizeLabels[size]} / ${statusLabels[status]}`
  }, [size, status])

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Literal Types</p>
        <h3>只能选择类型允许的固定值</h3>
        <p>按钮尺寸和订单状态都被限制在明确的字面量联合里。</p>
      </div>

      <div>
        <p className="demo-label">ButtonSize</p>
        <div className="demo-actions">
          {buttonSizes.map((item) => (
            <button
              className={item === size ? 'demo-button' : 'demo-button secondary'}
              key={item}
              type="button"
              onClick={() => setSize(item)}
            >
              {sizeLabels[item]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="demo-label">OrderStatus</p>
        <div className="demo-actions">
          {orderStatuses.map((item) => (
            <button
              className={item === status ? 'demo-button' : 'demo-button secondary'}
              key={item}
              type="button"
              onClick={() => setStatus(item)}
            >
              {statusLabels[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-output">
        <div>当前组合：{preview}</div>
        <div>业务含义：{statusMessages[status]}</div>
      </div>
    </div>
  )
}
