import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderInMock } from './approve-order.mock'
import { cancelOrderInMock } from './cancel-order-mock'
import { deliverOrderInMock } from './deliver-order-mock'
import { dispatchOrderInMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodInMock } from './get-daily-revenue-in-period-mock'
import { getDayOrderAmountInMock } from './get-day-order-amount-mock'
import { getManagerRestaurantInMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountInMock } from './get-month-canceled-order-amount-mock'
import { geMonthOrderAmountInMock } from './get-month-order-amount-mock'
import { getMonthRevenueInMock } from './get-month-revenue-mock'
import { getOrdersInMock } from './get-orders-mock'
import { getPopularProductsInMock } from './get-popular-products-mock'
import { getProfileDetailsInMock } from './get-profile-details-mock'
import { getProfileInMock } from './get-profile-mock'
import { registerRestaurantInMock } from './register-restaurant-mock'
import { signInMock } from './sing-in-mock'
import { updateProfileInMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantInMock,
  getDayOrderAmountInMock,
  getMonthCanceledOrdersAmountInMock,
  getMonthRevenueInMock,
  geMonthOrderAmountInMock,
  getDailyRevenueInPeriodInMock,
  getPopularProductsInMock,
  getManagerRestaurantInMock,
  getProfileInMock,
  updateProfileInMock,
  getOrdersInMock,
  getProfileDetailsInMock,
  approveOrderInMock,
  cancelOrderInMock,
  dispatchOrderInMock,
  deliverOrderInMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
