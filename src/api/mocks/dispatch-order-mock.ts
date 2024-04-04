import { http, HttpResponse } from 'msw'

import { DispatchOrderProps } from '../dispatch-order'

export const dispatchOrderInMock = http.patch<DispatchOrderProps, never, never>(
  '/orders/:orderId/dispatch',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
