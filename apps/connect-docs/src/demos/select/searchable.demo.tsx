import { Select } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const colaboradores = ['Ana Ribeiro', 'Bruno Alves', 'Carla Nogueira', 'Diego Martins', 'Elisa Prado', 'Felipe Costa', 'Marina Souza'];

export default function Demo() {
  return (
    <Select
      label="Colaborador"
      placeholder="Busque pelo nome"
      data={colaboradores}
      searchable
      nothingFoundMessage="Nenhum colaborador encontrado"
    />
  );
}
