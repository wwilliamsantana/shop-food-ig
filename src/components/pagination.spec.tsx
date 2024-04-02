import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()
// Spies - Essa função de callback anota dentro dela, qunatas vezes foi chamada, parâmetros. Ela anota diversas informação

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  }) // Limpando as chamadas devido ser um spie de froma global, par anão ocorrer falsos positivos

  it('should display the right amount of pages results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={console.log}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextToPage = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextToPage)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousToPage = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousToPage)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousToPage = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(previousToPage)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })

  it('should be able to navigate to the init page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousToPage = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(previousToPage)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })
})
