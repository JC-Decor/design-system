import { useState } from 'react';
import { FilterChip, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const filtros = [
  { key: 'ferias', label: 'Férias', icon: 'palm', count: 6 },
  { key: 'ponto', label: 'Ajuste de ponto', icon: 'clock', count: 14 },
  { key: 'docs', label: 'Documentos', icon: 'doc', count: 3 },
  { key: 'uniformes', label: 'Uniformes', icon: 'shirt', count: 2 },
];

export default function Demo() {
  const [ativos, setAtivos] = useState<string[]>(['ponto']);
  const toggle = (key: string) => setAtivos((a) => (a.includes(key) ? a.filter((k) => k !== key) : [...a, key]));
  return (
    <Group justify="center">
      {filtros.map((f) => (
        <FilterChip key={f.key} tone="lavender" icon={f.icon} count={f.count} active={ativos.includes(f.key)} onClick={() => toggle(f.key)}>
          {f.label}
        </FilterChip>
      ))}
    </Group>
  );
}
