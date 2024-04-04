import { http, HttpResponse } from 'msw'

import { GetProfileProps } from '../get-profile'

export const getProfileInMock = http.get<never, never, GetProfileProps>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-id',
      email: 'johndoe@example.com',
      name: 'John Doe',
      phone: '1545454545',
      role: 'manager',
      updatedAt: null,
      createdAt: new Date(),
    })
  },
)
