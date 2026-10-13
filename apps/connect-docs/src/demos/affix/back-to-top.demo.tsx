import { Affix, Button, Icon, Text, Transition } from '@jcdecor/connect-ui';
import { useWindowScroll } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text fz="sm" c="var(--ds-text-2)">
        Role a página: o botão aparece no canto inferior direito depois de 400px.
      </Text>

      <Affix position={{ bottom: 24, right: 24 }}>
        <Transition transition="slide-up" mounted={scroll.y > 400}>
          {(transitionStyles) => (
            <Button style={transitionStyles} leftSection={<Icon name="arrow-up" size={16} />} onClick={() => scrollTo({ y: 0 })} radius="xl" variant="default">
              Voltar ao topo
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
