import { Descriptions, Segmented } from 'antd'
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
        <Segmented
          onChange={(value) => setSize(value as ButtonSize)}
          options={buttonSizes.map((item) => ({ label: sizeLabels[item], value: item }))}
          value={size}
        />
      </div>

      <div>
        <p className="demo-label">OrderStatus</p>
        <Segmented
          onChange={(value) => setStatus(value as OrderStatus)}
          options={orderStatuses.map((item) => ({ label: statusLabels[item], value: item }))}
          value={status}
        />
      </div>

      <Descriptions
        bordered
        column={1}
        items={[
          { children: preview, key: 'preview', label: '当前组合' },
          { children: statusMessages[status], key: 'message', label: '业务含义' },
        ]}
        size="small"
      />
    </div>
  )
}
