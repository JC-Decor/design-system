import { useState } from 'react';
import { formatCurrency } from '@jcdecor/ui';
import { AreaChart, ChartCard } from '@jcdecor/ui/charts';

const datasets: Record<string, { label: string; vendas: number }[]> = {
  '7d': [
    { label: 'Qui', vendas: 5820 },
    { label: 'Sex', vendas: 7140 },
    { label: 'Sáb', vendas: 9310 },
    { label: 'Dom', vendas: 6480 },
    { label: 'Seg', vendas: 5290 },
    { label: 'Ter', vendas: 6050 },
    { label: 'Qua', vendas: 6870 },
  ],
  '30d': [
    { label: 'Sem 1', vendas: 38200 },
    { label: 'Sem 2', vendas: 41900 },
    { label: 'Sem 3', vendas: 44750 },
    { label: 'Sem 4', vendas: 59380 },
  ],
  '12m': [
    { label: 'Out', vendas: 128400 },
    { label: 'Nov', vendas: 176900 },
    { label: 'Dez', vendas: 214300 },
    { label: 'Jan', vendas: 119800 },
    { label: 'Fev', vendas: 124500 },
    { label: 'Mar', vendas: 141200 },
    { label: 'Abr', vendas: 142300 },
    { label: 'Mai', vendas: 151800 },
    { label: 'Jun', vendas: 138600 },
    { label: 'Jul', vendas: 160200 },
    { label: 'Ago', vendas: 172900 },
    { label: 'Set', vendas: 184230 },
  ],
};

const descriptions: Record<string, string> = {
  '7d': 'Últimos 7 dias',
  '30d': 'Últimos 30 dias, por semana',
  '12m': 'Últimos 12 meses',
};

export default function Demo() {
  const [period, setPeriod] = useState('30d');
  const data = datasets[period];
  const total = data.reduce((sum, item) => sum + item.vendas, 0);

  return (
    <ChartCard
      kicker="Vendas"
      title="Receita do e-commerce"
      description={descriptions[period]}
      value={formatCurrency(total)}
      periods={['7d', '30d', '12m']}
      period={period}
      onPeriodChange={setPeriod}
    >
      <AreaChart
        data={data}
        dataKey="label"
        h={240}
        series={[{ name: 'vendas', label: 'Vendas' }]}
        valueFormatter={(value) => formatCurrency(value, { maximumFractionDigits: 0 })}
        yAxisProps={{ width: 90 }}
      />
    </ChartCard>
  );
}
