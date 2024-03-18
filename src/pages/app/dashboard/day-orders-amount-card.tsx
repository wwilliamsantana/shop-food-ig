import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrderAmountCard() {
  const { data: dayOrderAmount } = useQuery({
    queryKey: ['metrics', 'day-order-amount'],
    queryFn: getDayOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils size={16} className="text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrderAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrderAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrderAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
