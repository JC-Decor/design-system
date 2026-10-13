import { Avatar, Group, MultiSelect, Text, type MultiSelectProps } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const equipe: Record<string, { nome: string; cargo: string; color: string }> = {
  ana: { nome: 'Ana Ribeiro', cargo: 'Business Partner', color: 'lavender' },
  bruno: { nome: 'Bruno Alves', cargo: 'Analista de DP', color: 'blue' },
  carla: { nome: 'Carla Nogueira', cargo: 'Recrutadora', color: 'green' },
  diego: { nome: 'Diego Martins', cargo: 'Coordenador de RH', color: 'yellow' },
  elisa: { nome: 'Elisa Prado', cargo: 'Analista de Benefícios', color: 'coral' },
};

const renderOption: MultiSelectProps['renderOption'] = ({ option, checked }) => {
  const { nome, cargo, color } = equipe[option.value];
  return (
    <Group gap="sm" wrap="nowrap">
      <Avatar name={nome} color={color} size={28} radius="xl" />
      <div>
        <Text fz="sm" fw={checked ? 600 : 500}>
          {nome}
        </Text>
        <Text fz="xs" c="var(--ds-text-3)">
          {cargo}
        </Text>
      </div>
    </Group>
  );
};

export default function Demo() {
  return (
    <MultiSelect
      label="Participantes do 1:1"
      placeholder="Adicionar pessoas"
      data={Object.entries(equipe).map(([value, { nome }]) => ({ value, label: nome }))}
      defaultValue={['ana']}
      renderOption={renderOption}
    />
  );
}
