import { Burger } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function BurgerPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Burger"
      source="mantine"
      mantineName="burger"
      description="Botão de menu (três linhas) que anima para um “X” quando aberto. Usado no cabeçalho mobile e para recolher a barra lateral."
      importCode={`import { Burger } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Burger}
          name="Burger"
          baseProps={{ 'aria-label': 'Abrir menu' }}
          controls={[
            { prop: 'opened', type: 'boolean', initialValue: false },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'lineSize', type: 'number', initialValue: 2, min: 1, max: 6 },
            { prop: 'color', type: 'color', initialValue: 'obsidian' },
          ]}
        />
      </Section>

      <Section title="Uso">
        <P>
          <OnlyFor framework="react">
            O Burger é controlado: guarde o estado com <code>useDisclosure</code> de <code>@mantine/hooks</code> e passe <code>opened</code> e{' '}
            <code>onClick</code>.
          </OnlyFor>
          <OnlyFor framework="vue">
            O Burger é controlado: guarde o estado com <code>useDisclosure</code> de <code>@mantine-vue/hooks</code> e passe{' '}
            <code>:opened</code> e <code>@click</code>.
          </OnlyFor>{' '}
          Sempre informe um <code>aria-label</code>.
        </P>
        <Demo id="burger/usage" />
      </Section>

      <Section title="Cabeçalho mobile">
        <P>
          Combine com <code>Collapse</code> ou <code>Drawer</code> para abrir o menu de categorias. Use <code>aria-expanded</code> para indicar o
          estado a leitores de tela.
        </P>
        <Demo id="burger/mobile-header" />
      </Section>

      <Section title="Tamanhos e cor">
        <Demo id="burger/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          As linhas usam <code>--ds-text</code> em vez do preto/branco puros do Mantine, acompanhando o texto principal nos dois temas. Sobre a
          barra navy (Obsidian) passe <code>color="white"</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', default: 'false', description: 'Mostra o estado “X” (menu aberto).' },
            { name: 'size', type: "MantineSize | number", default: "'md'", description: 'Largura das linhas (md = 24px).' },
            { name: 'lineSize', type: 'number', description: 'Espessura das linhas em px.' },
            { name: 'color', type: 'MantineColor', default: '--ds-text', description: 'Cor das linhas.' },
            { name: 'transitionDuration', type: 'number', default: '300', description: 'Duração da animação em ms.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use o Burger só quando não houver espaço para a navegação visível — no desktop, mostre as categorias diretamente. Mantenha a área de
          toque com pelo menos 40px (tamanho <code>md</code> ou maior em mobile).
        </P>
      </Section>
    </DocPage>
  );
}
