import { ColorSwatch, Group, MultiSelect, Text, type MultiSelectProps } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

/** Amostras de acabamento vindas do catálogo (cores do produto, não da UI). */
const acabamentos: Record<string, { label: string; amostra: string }> = {
  carvalho: { label: 'Carvalho natural', amostra: '#C8A27A' },
  nogueira: { label: 'Nogueira', amostra: '#6B4A33' },
  concreto: { label: 'Cinza concreto', amostra: '#9A9A96' },
  polar: { label: 'Branco polar', amostra: '#F2F0EB' },
  grafite: { label: 'Grafite', amostra: '#3B3D40' },
};

const renderOption: MultiSelectProps['renderOption'] = ({ option, checked }) => (
  <Group gap="sm" wrap="nowrap">
    <ColorSwatch color={acabamentos[option.value].amostra} size={18} />
    <Text fz="sm" fw={checked ? 600 : 400}>
      {option.label}
    </Text>
  </Group>
);

export default function Demo() {
  return (
    <MultiSelect
      label="Acabamentos"
      placeholder="Escolha os tons"
      data={Object.entries(acabamentos).map(([value, { label }]) => ({ value, label }))}
      defaultValue={['carvalho']}
      renderOption={renderOption}
    />
  );
}
