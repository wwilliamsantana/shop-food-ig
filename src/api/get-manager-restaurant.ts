import { api } from '@/lib/axios'

export interface GetManagerRestaurant {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<GetManagerRestaurant>('/managed-restaurant')

  return response.data
}
