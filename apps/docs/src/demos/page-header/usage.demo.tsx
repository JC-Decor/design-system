import { PageHeader, Button } from '@jcdecor/ui';
import { IconDownload, IconPlus } from '@tabler/icons-react';

export default function Demo() {
  return (
    <PageHeader
      mb={0}
      kicker="Painéis"
      title="Vendas por categoria"
      description="Receita, pedidos e ticket médio dos últimos 30 dias."
      actions={
        <>
          <Button variant="outline" leftSection={<IconDownload size={18} />}>
            Exportar
          </Button>
          <Button leftSection={<IconPlus size={18} />}>Nova meta</Button>
        </>
      }
    />
  );
}
