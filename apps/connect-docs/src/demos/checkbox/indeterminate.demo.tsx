import { useState } from 'react';
import { Checkbox, Stack } from '@jcdecor/connect-ui';

const initial = [
  { label: 'Férias · Mariana Costa (12 dias)', checked: true, key: 'ferias' },
  { label: 'Ajuste de ponto · Rafael Souza (08/10)', checked: false, key: 'ponto' },
  { label: 'Folga compensada · Júlia Lima (1 dia)', checked: true, key: 'folga' },
];

export default function Demo() {
  const [items, setItems] = useState(initial);
  const allChecked = items.every((item) => item.checked);
  const indeterminate = items.some((item) => item.checked) && !allChecked;

  return (
    <Stack gap="xs">
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Selecionar todas as solicitações"
        onChange={() => setItems((current) => current.map((item) => ({ ...item, checked: !allChecked })))}
      />
      <Stack gap="xs" ml={32}>
        {items.map((item, index) => (
          <Checkbox
            key={item.key}
            label={item.label}
            checked={item.checked}
            onChange={(event) => {
              const checked = event.currentTarget.checked;
              setItems((current) => current.map((it, i) => (i === index ? { ...it, checked } : it)));
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
