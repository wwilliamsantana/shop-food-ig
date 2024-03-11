import { api } from '@/lib/axios'

interface SignInProps {
  email: string
}

export async function signIn({ email }: SignInProps) {
  await api.post('/authenticate', { email })
}
