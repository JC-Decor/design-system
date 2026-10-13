import { useState } from 'react';
import { Button, Group, Radio, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Stack w="100%">
      <Radio.Group
        label="Turno do treinamento"
        value={value}
        onChange={setValue}
        error={submitted && !value ? 'Escolha um turno para se inscrever' : undefined}
        withAsterisk
      >
        <Group mt="xs">
          <Radio value="manha" label="Manhã (8h–12h)" />
          <Radio value="tarde" label="Tarde (13h–17h)" />
        </Group>
      </Radio.Group>
      <Button w="fit-content" onClick={() => setSubmitted(true)}>
        Inscrever-se
      </Button>
    </Stack>
  );
}
