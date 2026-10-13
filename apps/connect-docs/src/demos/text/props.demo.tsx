import { Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text fw={600}>Peso 600 · rótulos e nomes de colaboradores</Text>
      <Text fs="italic">Itálico · citações curtas</Text>
      <Text td="line-through" c="dimmed">
        Entrada às 08:00 (horário anterior)
      </Text>
      <Text tt="uppercase" fz="xs" fw={600} lts="0.06em" c="var(--ds-primary)">
        Rótulo em caixa-alta
      </Text>
      <Text truncate="end">
        Analista de Recursos Humanos Pleno · Gente & Gestão · Sede São Paulo · Jornada híbrida de 44 horas semanais
      </Text>
      <Text lineClamp={2} fz="sm" c="var(--ds-text-2)">
        A partir de 1º de novembro, o plano odontológico passa a cobrir dependentes sem carência, incluindo cônjuges e filhos de até 24 anos. A
        inclusão é feita pelo próprio Connect, em Benefícios › Dependentes.
      </Text>
    </Stack>
  );
}
