import { api } from '@/lib/axios'

interface RegisterRestaurantProps {
  restaurantName: string
  managerName: string
  phone: number
  email: string
}

export async function registerRestaurant({
  email,
  managerName,
  restaurantName,
  phone,
}: RegisterRestaurantProps) {
  await api.post('/restaurants', {
    email,
    managerName,
    restaurantName,
    phone,
  })
}
