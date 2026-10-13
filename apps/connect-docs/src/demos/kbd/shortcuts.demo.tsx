import { Group, Kbd, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const atalhos = [
  { acao: 'Buscar colaborador', teclas: ['Ctrl', 'K'] },
  { acao: 'Registrar ponto', teclas: ['Shift', 'P'] },
  { acao: 'Nova solicitação', teclas: ['Ctrl', 'Shift', 'N'] },
  { acao: 'Fechar painel', teclas: ['Esc'] },
];

export default function Demo() {
  return (
    <Stack gap="sm" w="100%">
      {atalhos.map((atalho) => (
        <Group key={atalho.acao} justify="space-between">
          <Text fz="sm" c="var(--ds-text-2)">
            {atalho.acao}
          </Text>
          <Group gap={4}>
            {atalho.teclas.map((tecla, i) => (
              <Group key={tecla} gap={4}>
                {i > 0 && (
                  <Text span fz="xs" c="var(--ds-text-3)">
                    +
                  </Text>
                )}
                <Kbd>{tecla}</Kbd>
              </Group>
            ))}
          </Group>
        </Group>
      ))}
    </Stack>
  );
}
