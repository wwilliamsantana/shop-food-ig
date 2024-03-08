import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Pepperoni', amount: 12 },
  { product: 'Mussarela', amount: 20 },
  { product: 'Frango', amount: 60 },
  { product: '4 queijos', amount: 50 },
  { product: 'Marguerita', amount: 20 },
]

const COLORS = [
  colors.blue[500],
  colors.gray[500],
  colors.yellow[500],
  colors.rose[500],
  colors.green[500],
]

export function PopularProductsChart() {
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
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
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
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
              strokeWidth={8}
            >
              {data.map((_, i) => {
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
      </CardContent>
    </Card>
  )
}
