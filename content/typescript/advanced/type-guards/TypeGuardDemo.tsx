import { useState } from 'react'

type ResultItem = {
  input: string
  normalized: string
}

function normalizeValue(value: string | number): string {
  if (typeof value === 'number') {
    return `number:${value.toFixed(2)}`
  }

  return `string:${value.trim().toUpperCase()}`
}

export function TypeGuardDemo() {
  const [input, setInput] = useState('42')
  const [result, setResult] = useState<ResultItem | null>(null)

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">Type Guard</p>
        <h3>根据运行时判断缩小类型范围</h3>
      </div>
      <div className="demo-actions">
        <input
          className="demo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="demo-button"
          type="button"
          onClick={() => {
            const maybeNumber = Number(input)
            const value: string | number = Number.isNaN(maybeNumber) ? input : maybeNumber

            setResult({
              input,
              normalized: normalizeValue(value),
            })
          }}
        >
          运行类型守卫
        </button>
      </div>
      <div className="demo-output">
        {result ? (
          <>
            <div>输入值：{result.input}</div>
            <div>处理结果：{result.normalized}</div>
          </>
        ) : (
          <div>先输入一个值并运行示例。</div>
        )}
      </div>
    </div>
  )
}
