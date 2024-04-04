import { http, HttpResponse } from 'msw'

import { DeliverOrderProps } from '../deliver-order'

export const deliverOrderInMock = http.patch<DeliverOrderProps, never, never>(
  '/orders/:orderId/deliver',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
