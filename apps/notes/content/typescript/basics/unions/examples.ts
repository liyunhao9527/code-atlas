export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export const loadingStates = ['idle', 'loading', 'success', 'error'] as const satisfies LoadingState[]

export const loadingStateLabels: Record<LoadingState, string> = {
  error: '请求失败',
  idle: '等待开始',
  loading: '加载中',
  success: '加载成功',
}

export const loadingStateMessages: Record<LoadingState, string> = {
  error: '需要展示错误提示，并允许用户重试。',
  idle: '还没有开始请求，界面可以展示初始状态。',
  loading: '请求正在进行，界面应该避免重复提交。',
  success: '数据已经可用，可以渲染结果区域。',
}

export function getNextLoadingState(state: LoadingState): LoadingState {
  switch (state) {
    case 'idle':
      return 'loading'
    case 'loading':
      return 'success'
    case 'success':
      return 'error'
    case 'error':
      return 'idle'
  }
}
