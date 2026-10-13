import { useState } from 'react';
import { Box, Group, Kbd, Menu, Menubar, Paper, Text } from '@jcdecor/connect-ui';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconClipboard,
  IconCopy,
  IconDeviceFloppy,
  IconFileExport,
  IconFilePlus,
  IconFolderOpen,
  IconPrinter,
  IconScissors,
  IconTrash,
} from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

const shortcut = (keys: string) => (
  <Kbd size="xs" fw={500}>
    {keys}
  </Kbd>
);

export default function Demo() {
  const [panels, setPanels] = useState(['equipe', 'cargo']);
  const [period, setPeriod] = useState('mes');

  return (
    <Box p="lg">
      <Paper withBorder radius="lg" style={{ overflow: 'hidden' }}>
        <Group px="xs" py={6} gap="md" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
          <Text fw={700} fz="sm" px="xs" c="var(--ds-primary)">
            Relatórios
          </Text>
          <Menubar aria-label="Menu do editor de relatórios">
            <Menubar.Menu width={240}>
              <Menubar.Target>Arquivo</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item leftSection={<IconFilePlus size={16} />} rightSection={shortcut('⌘ N')}>
                  Novo relatório
                </Menu.Item>
                <Menu.Item leftSection={<IconFolderOpen size={16} />} rightSection={shortcut('⌘ O')}>
                  Abrir…
                </Menu.Item>
                <Menu.Item leftSection={<IconDeviceFloppy size={16} />} rightSection={shortcut('⌘ S')}>
                  Salvar
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<IconFileExport size={16} />}>Exportar planilha</Menu.Item>
                <Menu.Item leftSection={<IconPrinter size={16} />} rightSection={shortcut('⌘ P')}>
                  Imprimir
                </Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>

            <Menubar.Menu width={240}>
              <Menubar.Target>Editar</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item leftSection={<IconArrowBackUp size={16} />} rightSection={shortcut('⌘ Z')}>
                  Desfazer
                </Menu.Item>
                <Menu.Item leftSection={<IconArrowForwardUp size={16} />} rightSection={shortcut('⇧ ⌘ Z')} disabled>
                  Refazer
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<IconScissors size={16} />} rightSection={shortcut('⌘ X')}>
                  Recortar
                </Menu.Item>
                <Menu.Item leftSection={<IconCopy size={16} />} rightSection={shortcut('⌘ C')}>
                  Copiar
                </Menu.Item>
                <Menu.Item leftSection={<IconClipboard size={16} />} rightSection={shortcut('⌘ V')}>
                  Colar
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="coral" leftSection={<IconTrash size={16} />}>
                  Excluir colunas selecionadas
                </Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>

            <Menubar.Menu width={220}>
              <Menubar.Target>Exibir</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Label>Colunas</Menu.Label>
                <Menu.CheckboxGroup value={panels} onChange={setPanels}>
                  <Menu.CheckboxItem value="equipe">Equipe</Menu.CheckboxItem>
                  <Menu.CheckboxItem value="cargo">Cargo</Menu.CheckboxItem>
                  <Menu.CheckboxItem value="admissao">Admissão</Menu.CheckboxItem>
                </Menu.CheckboxGroup>
                <Menu.Divider />
                <Menu.Label>Período</Menu.Label>
                <Menu.RadioGroup value={period} onChange={setPeriod}>
                  <Menu.RadioItem value="semana">Semana</Menu.RadioItem>
                  <Menu.RadioItem value="mes">Mês</Menu.RadioItem>
                  <Menu.RadioItem value="trimestre">Trimestre</Menu.RadioItem>
                </Menu.RadioGroup>
              </Menubar.Dropdown>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Target disabled>Ajuda</Menubar.Target>
              <Menubar.Dropdown>
                <Menu.Item>Central de ajuda</Menu.Item>
              </Menubar.Dropdown>
            </Menubar.Menu>
          </Menubar>
        </Group>
        <Box p="lg" bg="var(--ds-surface)">
          <Text fz="sm" c="var(--ds-text-3)">
            Absenteísmo por equipe · período: {period} · {panels.length} colunas extras visíveis
          </Text>
        </Box>
      </Paper>
    </Box>
  );
}
