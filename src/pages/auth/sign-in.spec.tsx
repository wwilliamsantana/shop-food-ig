import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { client } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  // Exemplo de situação quando o elemento precisa de algum tipo de Provider por fora para funcionar, utilizamos o option Wrapper do Render

  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={['/signin?email=johntest@hotmail.com']}
            >
              <QueryClientProvider client={client}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johntest@hotmail.com')
  })
})
