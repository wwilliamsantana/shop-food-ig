import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodInMock } from './get-daily-revenue-in-period-mock'
import { getDayOrderAmountInMock } from './get-day-order-amount-mock'
import { getMonthCanceledOrdersAmountInMock } from './get-month-canceled-order-amount-mock'
import { geMonthOrderAmountInMock } from './get-month-order-amount-mock'
import { getMonthRevenueInMock } from './get-month-revenue-mock'
import { getPopularProductsInMock } from './get-popular-products-mock'
import { registerRestaurantInMock } from './register-restaurant-mock'
import { signInMock } from './sing-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantInMock,
  getDayOrderAmountInMock,
  getMonthCanceledOrdersAmountInMock,
  getMonthRevenueInMock,
  geMonthOrderAmountInMock,
  getDailyRevenueInPeriodInMock,
  getPopularProductsInMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
