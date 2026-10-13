import { useState } from 'react';
import { Button, ContextualDrawer, Group, Text, type ContextualDrawerSide, type ContextualDrawerSize } from '@jcdecor/connect-ui';

export default function Demo() {
  const [config, setConfig] = useState<{ size: ContextualDrawerSize; side: ContextualDrawerSide } | null>(null);

  return (
    <Group justify="center">
      <Button variant="ghost" onClick={() => setConfig({ size: 'sm', side: 'right' })}>
        size="sm"
      </Button>
      <Button variant="ghost" onClick={() => setConfig({ size: 'md', side: 'right' })}>
        size="md" (expandido)
      </Button>
      <Button variant="ghost" onClick={() => setConfig({ size: 'md', side: 'left' })}>
        side="left"
      </Button>

      <ContextualDrawer
        open={config !== null}
        onOpenChange={(open) => !open && setConfig(null)}
        size={config?.size}
        side={config?.side}
        title="Detalhes do treinamento"
        description="Integração de novos colaboradores · 4h · obrigatório"
      >
        <Text fz="sm" c="var(--ds-text-2)">
          O painel ocupa a tela quase inteira e deixa uma folga em volta (<code>--cn-overlay-gap</code>), para a lista de trás
          continuar visível. Só o tamanho <code>sm</code> continua estreito (até 360px), para confirmações e decisões rápidas.
        </Text>
      </ContextualDrawer>
    </Group>
  );
}
