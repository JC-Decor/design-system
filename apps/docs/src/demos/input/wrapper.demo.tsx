import { Input, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack w="100%">
      <Input.Wrapper
        id="ambiente"
        label="Ambiente"
        description="Usado para recomendar produtos"
        error="Informe o ambiente que será reformado"
        withAsterisk
      >
        <Input id="ambiente" placeholder="Ex.: Sala de estar" error />
      </Input.Wrapper>
      <Input.Wrapper id="medida" label="Medida da parede" description="Largura × altura, em metros">
        <Input id="medida" placeholder="3,20 × 2,60" />
      </Input.Wrapper>
    </Stack>
  );
}
