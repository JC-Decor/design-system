import { EmptyStatePanel, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }}>
      <EmptyStatePanel
        module="feedback"
        title="Nenhum feedback 1:1 ainda"
        description="Registre a primeira conversa com seu gestor."
        actionLabel="Novo feedback"
        onAction={() => {}}
      />
      <EmptyStatePanel module="documents" compact title="Sem documentos pendentes" description="Tudo assinado por aqui." />
    </SimpleGrid>
  );
}
