import { Checkbox, Descriptions, Input, List, Select } from 'antd'
import { useMemo, useState } from 'react'

type Mood = '专注' | '轻松' | '卡住'

const baseLessons = [
  { id: 'jsx-expression', title: '表达式', done: true },
  { id: 'jsx-condition', title: '条件渲染', done: false },
  { id: 'jsx-list', title: '列表与 key', done: false },
]

const moodMessages: Record<Mood, string> = {
  专注: '适合继续推进，先把一个例子写完整。',
  轻松: '可以多做一点变体，感受 JSX 写法的弹性。',
  卡住: '先缩小问题，只保留一个变量和一个渲染结果。',
}

export function JsxExpressionDemo() {
  const [name, setName] = useState('小林')
  const [mood, setMood] = useState<Mood>('专注')
  const [showDone, setShowDone] = useState(true)

  const visibleLessons = useMemo(
    () => baseLessons.filter((lesson) => showDone || !lesson.done),
    [showDone],
  )
  const completedCount = baseLessons.filter((lesson) => lesson.done).length

  return (
    <div className="demo-card">
      <div>
        <p className="demo-eyebrow">JSX Preview</p>
        <h3>让数据决定界面长相</h3>
        <p>修改姓名、状态和筛选条件，观察 JSX 如何根据表达式重新生成 UI。</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div>
          <p className="demo-label">姓名</p>
          <Input onChange={(event) => setName(event.target.value)} value={name} />
        </div>

        <div>
          <p className="demo-label">学习状态</p>
          <Select
            className="w-full"
            onChange={(value) => setMood(value)}
            options={[
              { label: '专注', value: '专注' },
              { label: '轻松', value: '轻松' },
              { label: '卡住', value: '卡住' },
            ]}
            value={mood}
          />
        </div>

        <div>
          <p className="demo-label">列表条件</p>
          <Checkbox checked={showDone} onChange={(event) => setShowDone(event.target.checked)}>
            显示已完成项
          </Checkbox>
        </div>
      </div>

      <Descriptions
        bordered
        column={1}
        items={[
          {
            children: (
              <>
                <strong>{name || '匿名同学'}</strong>
                <span> 现在的状态是 </span>
                <strong>{mood}</strong>
                <span>。{moodMessages[mood]}</span>
              </>
            ),
            key: 'state',
            label: '当前状态',
          },
          {
            children:
              completedCount > 0
                ? `已完成 ${completedCount} 个 JSX 练习点。`
                : '还没有完成的练习点。',
            key: 'progress',
            label: '练习进度',
          },
        ]}
        size="small"
      />

      <List
        bordered
        dataSource={visibleLessons}
        renderItem={(lesson) => (
          <List.Item>
            {lesson.title}
            {lesson.done ? '：已完成' : '：待练习'}
          </List.Item>
        )}
        size="small"
      />
    </div>
  )
}
