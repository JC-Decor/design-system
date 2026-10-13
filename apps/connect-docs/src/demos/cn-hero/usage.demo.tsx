import { AvatarStack, Hero, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Hero
      eyebrow="Painel do gestor"
      title="Bom dia, Ana 👋"
      sub="Você tem 4 aprovações pendentes e 2 feedbacks 1:1 agendados para esta semana."
      ctaPrimary="Ver aprovações"
      onCtaPrimary={() => {}}
      ctaSecondary="Minha equipe"
      footMeta={
        <>
          <AvatarStack people={[{ seed: 'MS', tone: 'green' }, { seed: 'RM', tone: 'lavender' }, { seed: 'JL', tone: 'yellow' }, { seed: 'TN', tone: 'coral' }]} />
          <Text fz="sm"><b>4</b> aniversariantes esta semana</Text>
        </>
      }
    />
  );
}
