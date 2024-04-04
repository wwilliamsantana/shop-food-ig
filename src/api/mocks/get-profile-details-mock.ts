import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsRequest,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getProfileDetailsInMock = http.get<
  GetOrderDetailsRequest,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '55454554545',
    },
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: {
          name: 'Pizza Pepperoni',
        },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: {
          name: 'Pizza Frango',
        },
        quantity: 2,
      },
    ],
  })
})
