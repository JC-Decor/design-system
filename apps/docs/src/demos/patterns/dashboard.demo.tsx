import { useState } from 'react';
import {
  Button,
  Card,
  Grid,
  KpiCard,
  KpiGroup,
  PageHeader,
  Select,
  Stack,
  Text,
  DataTable,
  formatCompact,
} from '@jcdecor/ui';
import { AreaChart, ChartCard, DonutChart, Sparkline } from '@jcdecor/ui/charts';
import {
  IconDownload,
  IconEye,
  IconShoppingBag,
  IconTrendingDown,
  IconCash,
} from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

const acessos = {
  '30d': [
    { label: '01/09', organico: 2410, pago: 1290, social: 880 },
    { label: '08/09', organico: 2580, pago: 1340, social: 910 },
    { label: '15/09', organico: 2390, pago: 1480, social: 1040 },
    { label: '22/09', organico: 2720, pago: 1210, social: 1120 },
    { label: '29/09', organico: 2650, pago: 1170, social: 980 },
  ],
  '60d': [
    { label: 'Ago S1', organico: 2810, pago: 1450, social: 960 },
    { label: 'Ago S2', organico: 2760, pago: 1520, social: 1010 },
    { label: 'Ago S3', organico: 2940, pago: 1380, social: 990 },
    { label: 'Ago S4', organico: 2870, pago: 1410, social: 1070 },
    { label: 'Set S1', organico: 2580, pago: 1340, social: 910 },
    { label: 'Set S2', organico: 2390, pago: 1480, social: 1040 },
    { label: 'Set S3', organico: 2720, pago: 1210, social: 1120 },
    { label: 'Set S4', organico: 2650, pago: 1170, social: 980 },
  ],
};

const canais = [
  { name: 'Orgânico', value: 24100 },
  { name: 'Pago', value: 12900 },
  { name: 'Social', value: 8800 },
  { name: 'E-mail', value: 4100 },
  { name: 'Direto', value: 5059 },
];

interface Keyword {
  termo: string;
  cliques: number;
  impressoes: number;
  ctr: number;
  posicao: number;
}

const keywords: Keyword[] = [
  { termo: 'piso vinílico', cliques: 4820, impressoes: 61200, ctr: 7.9, posicao: 2.1 },
  { termo: 'papel de parede sala', cliques: 3110, impressoes: 48900, ctr: 6.4, posicao: 3.4 },
  { termo: 'cortina blackout', cliques: 2740, impressoes: 52300, ctr: 5.2, posicao: 4.0 },
  { termo: 'grama sintética preço', cliques: 1980, impressoes: 30100, ctr: 6.6, posicao: 2.8 },
  { termo: 'painel ripado', cliques: 1720, impressoes: 27400, ctr: 6.3, posicao: 3.1 },
  {
    termo: 'piso vinílico colado ou clicado',
    cliques: 1260,
    impressoes: 19800,
    ctr: 6.4,
    posicao: 2.5,
  },
  { termo: 'cortina sob medida', cliques: 980, impressoes: 21700, ctr: 4.5, posicao: 5.6 },
  { termo: 'rodapé poliestireno', cliques: 640, impressoes: 11300, ctr: 5.7, posicao: 4.2 },
];

export default function Demo() {
  const [period, setPeriod] = useState<'30d' | '60d'>('60d');

  return (
    <Stack gap="lg">
      <PageHeader
        mb={0}
        kicker="Marketing"
        title="Desempenho do site"
        description="Acessos, conversão e busca orgânica da loja jcdecor.com.br."
        breadcrumbs={[{ label: 'Painel', href: '#' }, { label: 'Marketing' }]}
        actions={
          <>
            <Select
              w={120}
              value={period}
              onChange={(v) => v && setPeriod(v as '30d' | '60d')}
              allowDeselect={false}
              data={[
                { value: '30d', label: '30 dias' },
                { value: '60d', label: '60 dias' },
              ]}
            />
            <Button variant="default" leftSection={<IconDownload size={16} />}>
              Exportar
            </Button>
          </>
        }
      />

      <KpiGroup>
        <KpiCard
          label="Acessos (60d)"
          value={54959}
          icon={<IconEye size={18} />}
          chart={<Sparkline data={[6820, 7010, 7150, 7120, 6830, 6910, 6640, 6479]} />}
        />
        <KpiCard
          label="Variação"
          value="-5,6%"
          delta={-5.6}
          colorValue
          deltaLabel="vs. 60 dias anteriores"
          icon={<IconTrendingDown size={18} />}
        />
        <KpiCard
          label="Pedidos"
          value={1284}
          delta={8.2}
          deltaLabel="vs. período anterior"
          icon={<IconShoppingBag size={18} />}
        />
        <KpiCard
          label="Receita"
          value={`R$ ${formatCompact(335430)}`}
          delta={12.4}
          deltaLabel="vs. período anterior"
          icon={<IconCash size={18} />}
        />
      </KpiGroup>

      <Grid type="container" breakpoints={{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }} gap="lg">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <ChartCard
            h="100%"
            kicker="Tráfego"
            title="Acessos por semana"
            description="Orgânico, Pago e Social"
            periods={['30d', '60d']}
            period={period}
            onPeriodChange={(p) => setPeriod(p as '30d' | '60d')}
          >
            <AreaChart
              data={acessos[period]}
              dataKey="label"
              h={260}
              type="stacked"
              withLegend
              series={[
                { name: 'organico', label: 'Orgânico' },
                { name: 'pago', label: 'Pago' },
                { name: 'social', label: 'Social' },
              ]}
            />
          </ChartCard>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <ChartCard
            h="100%"
            kicker="Canais"
            title="Origem dos acessos"
            description="Últimos 60 dias"
          >
            <Stack align="center" gap="md">
              <DonutChart data={canais} chartLabel="54.959" size={190} />
              <Text fz="xs" c="var(--ds-text-3)" ta="center">
                Orgânico segue como principal canal: 44% dos acessos.
              </Text>
            </Stack>
          </ChartCard>
        </Grid.Col>
      </Grid>

      <Card>
        <Text fw={600} fz="var(--type-subheadline-lg)" mb="md">
          Principais palavras-chave
        </Text>
        <DataTable
          plain
          data={keywords}
          rowKey={(row) => row.termo}
          initialSort={{ key: 'cliques', direction: 'desc' }}
          pageSize={5}
          columns={[
            { key: 'termo', header: 'Palavra-chave', sortable: true },
            { key: 'cliques', header: 'Cliques', numeric: true, sortable: true },
            { key: 'impressoes', header: 'Impressões', numeric: true, sortable: true },
            {
              key: 'ctr',
              header: 'CTR',
              numeric: true,
              sortable: true,
              render: (row) => `${row.ctr.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%`,
            },
            {
              key: 'posicao',
              header: 'Posição média',
              numeric: true,
              sortable: true,
              format: { minimumFractionDigits: 1 },
            },
          ]}
        />
      </Card>
    </Stack>
  );
}
