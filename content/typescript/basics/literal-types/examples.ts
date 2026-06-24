export type ButtonSize = 'small' | 'medium' | 'large'
export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'cancelled'

export const buttonSizes = ['small', 'medium', 'large'] as const
export const orderStatuses = ['pending', 'paid', 'shipped', 'cancelled'] as const

export const sizeLabels: Record<ButtonSize, string> = {
  small: '小按钮',
  medium: '中按钮',
  large: '大按钮',
}

export const statusLabels: Record<OrderStatus, string> = {
  pending: '待支付',
  paid: '已支付',
  shipped: '已发货',
  cancelled: '已取消',
}

export const statusMessages: Record<OrderStatus, string> = {
  pending: '订单还不能发货，需要先完成支付。',
  paid: '订单可以进入发货流程。',
  shipped: '订单已经发出，只能查看物流。',
  cancelled: '订单已取消，不能继续处理。',
}
