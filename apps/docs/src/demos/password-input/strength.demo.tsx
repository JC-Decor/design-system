import { useState } from 'react';
import { PasswordInput, Progress, Stack, Text } from '@jcdecor/ui';
import { IconCheck, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const requisitos = [
  { re: /.{8,}/, label: 'Pelo menos 8 caracteres' },
  { re: /[0-9]/, label: 'Um número' },
  { re: /[A-Z]/, label: 'Uma letra maiúscula' },
  { re: /[^A-Za-z0-9]/, label: 'Um símbolo (!, @, #…)' },
];

export default function Demo() {
  const [value, setValue] = useState('');
  const atendidos = requisitos.filter((r) => r.re.test(value)).length;
  const forca = (atendidos / requisitos.length) * 100;
  const color = forca === 100 ? 'evergreen' : forca > 50 ? 'electric' : 'danger';

  return (
    <Stack gap="xs" w="100%">
      <PasswordInput label="Crie sua senha" placeholder="Senha" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <Progress value={value ? forca : 0} color={color} size="sm" aria-label="Força da senha" />
      {requisitos.map((r) => {
        const ok = r.re.test(value);
        return (
          <Text key={r.label} fz="sm" c={ok ? 'var(--ds-success)' : 'var(--ds-text-3)'} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {ok ? <IconCheck size={14} /> : <IconX size={14} />} {r.label}
          </Text>
        );
      })}
    </Stack>
  );
}
