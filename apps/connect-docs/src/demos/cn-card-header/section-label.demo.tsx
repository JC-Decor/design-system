import { CardFootLink, SectionLabel } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SectionLabel
      eyebrow="Pessoas"
      title="Aniversariantes do mês"
      sub="12 colaboradores fazem aniversário em outubro"
      action={<CardFootLink href="#aniversariantes">Ver todos</CardFootLink>}
    />
  );
}
