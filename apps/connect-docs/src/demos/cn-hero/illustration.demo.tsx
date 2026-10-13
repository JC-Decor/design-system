import { Hero } from '@jcdecor/connect-ui';
import ferias from '../cn-illustration/assets/ferias.svg';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Hero
      compact
      eyebrow="Férias"
      title="21 dias disponíveis"
      sub="Seu período aquisitivo vence em março. Que tal já planejar?"
      ctaPrimary="Solicitar férias"
      illustration={ferias}
    />
  );
}
