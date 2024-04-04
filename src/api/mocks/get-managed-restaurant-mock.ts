import { http, HttpResponse } from 'msw'

import { GetManagerRestaurant } from '../get-manager-restaurant'

export const getManagerRestaurantInMock = http.get<
  never,
  never,
  GetManagerRestaurant
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-id',
    description: 'Manager restaurant custom',
    managerId: 'custom-id',
    name: 'Pizza Shop',
    updatedAt: null,
    createdAt: new Date(),
  })
})
