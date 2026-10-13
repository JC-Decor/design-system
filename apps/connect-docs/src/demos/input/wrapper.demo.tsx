import { Input, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack w="100%">
      <Input.Wrapper
        id="cargo"
        label="Cargo"
        description="Aparece no perfil e no organograma"
        error="Informe o cargo do colaborador"
        withAsterisk
      >
        <Input id="cargo" placeholder="Ex.: Analista de RH" error />
      </Input.Wrapper>
      <Input.Wrapper id="centro-custo" label="Centro de custo" description="Código de 4 dígitos do departamento">
        <Input id="centro-custo" placeholder="Ex.: 2140" />
      </Input.Wrapper>
    </Stack>
  );
}
