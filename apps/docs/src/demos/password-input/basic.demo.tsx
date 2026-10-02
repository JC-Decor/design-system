import { PasswordInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <PasswordInput
      label="Senha"
      description="Mínimo de 8 caracteres, com letras e números"
      placeholder="Sua senha"
      withAsterisk
    />
  );
}
