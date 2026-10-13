import { useState } from 'react';
import { Button, DataTable, Icon, SelectionBanner, type RowId, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Pendencia {
  id: number;
  colaborador: string;
  documento: string;
  prazo: string;
}

const rows: Pendencia[] = [
  { id: 101, colaborador: 'Ana Souza', documento: 'Política de home office', prazo: '18/10' },
  { id: 102, colaborador: 'Bruno Lima', documento: 'Contrato de experiência', prazo: '20/10' },
  { id: 103, colaborador: 'Carla Dias', documento: 'Código de conduta 2025', prazo: '25/10' },
  { id: 104, colaborador: 'Diego Martins', documento: 'Termo de uso de equipamento', prazo: '30/10' },
];

const columns: TableColumn<Pendencia>[] = [
  { label: 'Colaborador', key: 'colaborador' },
  { label: 'Documento', key: 'documento' },
  { label: 'Prazo', key: 'prazo', align: 'right' },
];

export default function Demo() {
  const [selected, setSelected] = useState<RowId[]>([102]);
  const [allMatching, setAllMatching] = useState(false);

  return (
    <>
      <SelectionBanner
        selectedCount={selected.length}
        matchingTotal={37}
        allMatching={allMatching}
        showSelectAllMatching={!allMatching && selected.length === rows.length}
        entityLabel="assinatura"
        entityLabelPlural="assinaturas"
        onSelectAllMatching={() => setAllMatching(true)}
        onClear={() => {
          setSelected([]);
          setAllMatching(false);
        }}
        actions={<Button leftSection={<Icon name="send" size={15} />}>Reenviar lembrete</Button>}
      />
      <DataTable
        aria-label="Assinaturas pendentes"
        columns={columns}
        rows={rows}
        getRowId={(r) => r.id}
        selectable
        selectedRows={selected}
        onSelectedRowsChange={(ids) => {
          setSelected(ids);
          setAllMatching(false);
        }}
        rowAriaLabel={(r) => `${r.colaborador} — ${r.documento}`}
      />
    </>
  );
}
