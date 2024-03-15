import { api } from '@/lib/axios'

export interface getOrdersQuery {
  pageIndex?: number | null
  customerName?: string | null
  orderId?: string | null
  status?: string | null
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

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: getOrdersQuery) {
  const response = await api.get<GetOrdersProps>('/orders', {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  })

  return response.data
}
