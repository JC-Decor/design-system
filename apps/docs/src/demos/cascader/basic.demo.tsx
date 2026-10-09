import { Cascader, type CascaderOption } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const regioes: CascaderOption[] = [
  {
    value: 'sp',
    label: 'São Paulo',
    children: [
      {
        value: 'sao-paulo',
        label: 'São Paulo',
        children: [
          { value: 'moema', label: 'Moema' },
          { value: 'pinheiros', label: 'Pinheiros' },
          { value: 'tatuape', label: 'Tatuapé' },
        ],
      },
      {
        value: 'campinas',
        label: 'Campinas',
        children: [
          { value: 'cambui', label: 'Cambuí' },
          { value: 'barao-geraldo', label: 'Barão Geraldo' },
        ],
      },
    ],
  },
  {
    value: 'rj',
    label: 'Rio de Janeiro',
    children: [
      {
        value: 'rio',
        label: 'Rio de Janeiro',
        children: [
          { value: 'botafogo', label: 'Botafogo' },
          { value: 'barra', label: 'Barra da Tijuca' },
        ],
      },
      { value: 'niteroi', label: 'Niterói', children: [{ value: 'icarai', label: 'Icaraí' }] },
    ],
  },
  {
    value: 'pr',
    label: 'Paraná',
    children: [
      {
        value: 'curitiba',
        label: 'Curitiba',
        children: [
          { value: 'batel', label: 'Batel' },
          { value: 'agua-verde', label: 'Água Verde' },
        ],
      },
    ],
  },
  { value: 'am', label: 'Amazonas', disabled: true },
];

export default function Demo() {
  return (
    <Cascader
      label="Bairro de entrega"
      description="Estado → Cidade → Bairro"
      placeholder="Escolha o bairro"
      data={regioes}
      defaultValue={['sp', 'sao-paulo', 'pinheiros']}
      clearable
    />
  );
}
