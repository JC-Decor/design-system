import { useState } from 'react';
import { ActionIcon, DropdownMenu, Group, Icon, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [last, setLast] = useState('nenhuma');

  return (
    <Group justify="center" gap="md">
      <DropdownMenu
        trigger={
          <ActionIcon aria-label="Ações do colaborador">
            <Icon name="dots-v" size={16} />
          </ActionIcon>
        }
        items={[
          { key: 'titulo', type: 'label', label: 'Ana Souza' },
          { key: 'perfil', label: 'Ver perfil', icon: 'user', onSelect: () => setLast('Ver perfil') },
          { key: 'ferias', label: 'Programar férias', icon: 'palm', onSelect: () => setLast('Programar férias') },
          { key: 'feedback', label: 'Agendar 1:1', icon: 'chat', onSelect: () => setLast('Agendar 1:1') },
          { key: 'docs', label: 'Enviar documento', icon: 'upload', disabled: true, onSelect: () => {} },
          { key: 'sep', type: 'separator' },
          { key: 'desligar', label: 'Iniciar desligamento', icon: 'trash', tone: 'danger', onSelect: () => setLast('Iniciar desligamento') },
        ]}
      />
      <Text fz="sm" c="var(--ds-text-3)">
        Última ação: {last}
      </Text>
    </Group>
  );
}
