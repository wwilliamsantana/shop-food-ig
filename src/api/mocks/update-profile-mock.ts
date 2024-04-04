import { http, HttpResponse } from 'msw'

import { UpdateProfileProps } from '../update-profile'

export const updateProfileInMock = http.put<never, UpdateProfileProps>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Will Pizza') {
      return new HttpResponse(null, {
        status: 200,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
