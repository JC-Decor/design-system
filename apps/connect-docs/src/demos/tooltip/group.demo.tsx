import { ActionIcon, Group, Icon, type IconName, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tools: { label: string; icon: IconName }[] = [
  { label: 'Filtrar', icon: 'filter' },
  { label: 'Colunas', icon: 'sliders' },
  { label: 'Importar planilha', icon: 'upload' },
  { label: 'Exportar planilha', icon: 'download' },
  { label: 'Copiar link da lista', icon: 'link' },
  { label: 'Mais ações', icon: 'dots' },
];

export default function Demo() {
  return (
    // Depois do primeiro tooltip, os vizinhos abrem sem atraso.
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Group gap={6}>
        {tools.map(({ label, icon }) => (
          <Tooltip key={label} label={label}>
            <ActionIcon aria-label={label}>
              <Icon name={icon} size={16} />
            </ActionIcon>
          </Tooltip>
        ))}
      </Group>
    </Tooltip.Group>
  );
}
