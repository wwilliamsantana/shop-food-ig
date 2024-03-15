import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const OrderTableSchema = z.object({
  orderId: z.string(),
  customerName: z.string(),
  status: z.string(),
})

type OrderTableProps = z.infer<typeof OrderTableSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } = useForm<OrderTableProps>({
    resolver: zodResolver(OrderTableSchema),
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? '',
      status: status ?? 'all',
    },
  })

  function handleFilter({ customerName, orderId, status }: OrderTableProps) {
    setSearchParams((state) => {
      if (orderId) {
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      if (customerName) {
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleCleanFilter() {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')

      return state
    })
    reset({
      customerName: '',
      orderId: '',
      status: '',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />
      <Controller
        control={control}
        name="status"
        render={({ field: { onChange, value, disabled } }) => {
          return (
            <Select
              onValueChange={onChange}
              value={value}
              disabled={disabled}
              defaultValue="all"
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Todos os status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />

      <Button size={'xs'} variant={'secondary'} type="submit">
        <Search size={16} className="mr-2" />
        Filtrar resultados
      </Button>
      <Button
        size={'xs'}
        variant={'outline'}
        type="button"
        onClick={handleCleanFilter}
      >
        <X size={16} className="mr-2" />
        Remover os filtros
      </Button>
    </form>
  )
}
