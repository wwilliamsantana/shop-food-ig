import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrders } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrders } = useQuery({
    queryKey: ['metrics', 'month-canceled-amount'],
    queryFn: getMonthCanceledOrders,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrders && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrders.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrders.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrders.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrders.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
