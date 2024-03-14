import { api } from '@/lib/axios'

export interface getOrdersQuery {
  pageIndex?: number | null
}

export interface GetOrdersProps {
  orders: {
    orderId: string
    createdAt: Date
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: getOrdersQuery) {
  const response = await api.get<GetOrdersProps>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
