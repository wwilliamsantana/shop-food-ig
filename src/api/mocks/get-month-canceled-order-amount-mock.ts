import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountInMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: 2,
  })
})
