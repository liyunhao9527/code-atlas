import { useMemo, useState } from 'react'

function createCounter() {
  let count = 0

  return function add() {
    count += 1
    return count
  }
}

export function ClosureCounterDemo() {
  const counter = useMemo(() => createCounter(), [])
  const [values, setValues] = useState<number[]>([])

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Closure Counter</p>
        <h3>观察闭包保存的 count</h3>
        <p>每次点击都会调用同一个 inner 函数，它还能继续访问 outer 创建的 count。</p>
      </div>
      <button
        className="demo-button"
        type="button"
        onClick={() => setValues((items) => [counter(), ...items].slice(0, 6))}
      >
        调用 add()
      </button>
      <ol className="demo-log">
        {values.length > 0 ? (
          values.map((value, index) => <li key={`${value}-${index}`}>第 {values.length - index} 次结果：{value}</li>)
        ) : (
          <li>先点击按钮运行一次。</li>
        )}
      </ol>
    </div>
  )
}
