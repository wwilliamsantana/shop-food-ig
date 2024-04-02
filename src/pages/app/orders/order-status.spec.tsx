import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />) // Renderizando o component
    // Wrapper methods: Find - Promise | Get - Search Element or Error | Query - Search Element or Null

    const statusText = wrapper.getByText('Pendente') // Verificando se existe um elemento com um texto "pendente"

    const badgeElement = wrapper.getByTestId('badge') // Procura o elemento pela class

    expect(statusText).toBeInTheDocument() // Verifica se o text está no documento
    expect(badgeElement).toHaveClass('bg-slate-400') // Verifica se está classe existe
  })

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />) // Renderizando o component
    // Wrapper methods: Find - Promise | Get - Search Element or Error | Query - Search Element or Null

    const statusText = wrapper.getByText('Cancelado') // Verificando se existe um elemento com um texto "pendente"

    const badgeElement = wrapper.getByTestId('badge') // Procura o elemento pela class

    expect(statusText).toBeInTheDocument() // Verifica se o text está no documento
    expect(badgeElement).toHaveClass('bg-rose-500') // Verifica se está classe existe
  })

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />) // Renderizando o component
    // Wrapper methods: Find - Promise | Get - Search Element or Error | Query - Search Element or Null

    const statusText = wrapper.getByText('Em entrega') // Verificando se existe um elemento com um texto "pendente"

    const badgeElement = wrapper.getByTestId('badge') // Procura o elemento pela class

    expect(statusText).toBeInTheDocument() // Verifica se o text está no documento
    expect(badgeElement).toHaveClass('bg-amber-500') // Verifica se está classe existe
  })

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />) // Renderizando o component
    // Wrapper methods: Find - Promise | Get - Search Element or Error | Query - Search Element or Null

    const statusText = wrapper.getByText('Em preparo') // Verificando se existe um elemento com um texto "pendente"

    const badgeElement = wrapper.getByTestId('badge') // Procura o elemento pela class

    expect(statusText).toBeInTheDocument() // Verifica se o text está no documento
    expect(badgeElement).toHaveClass('bg-amber-500') // Verifica se está classe existe
  })

  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />) // Renderizando o component
    // Wrapper methods: Find - Promise | Get - Search Element or Error | Query - Search Element or Null

    const statusText = wrapper.getByText('Entregue') // Verificando se existe um elemento com um texto "pendente"

    const badgeElement = wrapper.getByTestId('badge') // Procura o elemento pela class

    expect(statusText).toBeInTheDocument() // Verifica se o text está no documento
    expect(badgeElement).toHaveClass('bg-emerald-500') // Verifica se está classe existe
  })
})
