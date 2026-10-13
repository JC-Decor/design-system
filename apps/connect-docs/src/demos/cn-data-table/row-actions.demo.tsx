import { useState } from 'react';
import { CellTitle, DataTable, Text, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Comunicado {
  id: number;
  titulo: string;
  publico: string;
  leitura: string;
}

const rows: Comunicado[] = [
  { id: 1, titulo: 'Novo plano de benefícios', publico: 'Todos', leitura: '82%' },
  { id: 2, titulo: 'Escala de fim de ano', publico: 'Expedição', leitura: '64%' },
  { id: 3, titulo: 'Campanha de vacinação', publico: 'Todos', leitura: '91%' },
];

const columns: TableColumn<Comunicado>[] = [
  { label: 'Comunicado', key: 'titulo', render: (r) => <CellTitle icon="megaphone" tone="lavender" title={r.titulo} subtitle={`Público: ${r.publico}`} /> },
  { label: 'Leitura', key: 'leitura', align: 'right' },
];

export default function Demo() {
  const [log, setLog] = useState('Clique em uma linha ou no menu ⋮');

  return (
    <>
      <DataTable
        aria-label="Comunicados"
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        onRowClick={(r) => setLog(`Abrir: ${r.titulo}`)}
        rowAriaLabel={(r) => r.titulo}
        rowActions={(r) => [
          { key: 'editar', label: 'Editar', icon: 'pen', onSelect: () => setLog(`Editar: ${r.titulo}`) },
          { key: 'duplicar', label: 'Duplicar', icon: 'layers', onSelect: () => setLog(`Duplicar: ${r.titulo}`) },
          { key: 'sep', type: 'separator' },
          { key: 'arquivar', label: 'Arquivar', icon: 'trash', tone: 'danger', onSelect: () => setLog(`Arquivar: ${r.titulo}`) },
        ]}
      />
      <Text fz="sm" c="var(--ds-text-3)" px={28} py="sm">
        {log}
      </Text>
    </>
  );
}
