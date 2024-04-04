import { http, HttpResponse } from 'msw'

import { GetOrdersProps } from '../get-orders'

type Orders = GetOrdersProps['orders']
type OrderStatus = GetOrdersProps['orders'][number]['status']

const statuses: OrderStatus[] = [
  'canceled',
  'delivered',
  'delivering',
  'pending',
  'processing',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order - ${i + 1}`,
    customerName: `Customer ${i + 1}`,
    total: 2400,
    status: statuses[i % 5],
    createdAt: new Date(),
  }
})

export const getOrdersInMock = http.get<never, never, GetOrdersProps>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredList = orders

    if (customerName) {
      filteredList = filteredList.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredList = filteredList.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredList = filteredList.filter((order) => order.status === status)
    }

    const paginationOrders = filteredList.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginationOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredList.length,
      },
    })
  },
)
