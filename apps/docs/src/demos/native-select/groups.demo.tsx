import { NativeSelect } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <NativeSelect
      label="Categoria"
      defaultValue="vinilico"
      data={[
        { group: 'Pisos', items: [{ label: 'Piso vinílico', value: 'vinilico' }, { label: 'Piso laminado', value: 'laminado' }] },
        { group: 'Paredes', items: [{ label: 'Papel de parede', value: 'papel' }, { label: 'Painel ripado', value: 'ripado' }] },
        { group: 'Janelas', items: [{ label: 'Cortina', value: 'cortina' }, { label: 'Persiana', value: 'persiana', disabled: true }] },
      ]}
    />
  );
}
