import { useQuery } from '@tanstack/react-query'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.blue[500],
  colors.gray[500],
  colors.yellow[500],
  colors.rose[500],
  colors.green[500],
]

export function PopularProductsChart() {
  const { data: popularProductsFn } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="j flex-row items-center pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {popularProductsFn && (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={popularProductsFn}
                dataKey="amount"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {popularProductsFn[index].product.length > 12
                        ? popularProductsFn[index].product
                          .substring(0, 12)
                          .concat('...')
                        : popularProductsFn[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
                strokeWidth={8}
              >
                {popularProductsFn.map((_, i) => {
                  return (
                    <Cell
                      key={`cell-${i}`}
                      fill={COLORS[i]}
                      className="stroke-background"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
