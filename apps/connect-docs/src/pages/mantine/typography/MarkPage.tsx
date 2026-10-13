import { Mark } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function MarkPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Mark"
      source="mantine"
      mantineName="mark"
      description="Marca-texto para destacar um trecho dentro de um parágrafo — prazos, regras e alertas curtos em comunicados e políticas."
      importCode={`import { Mark } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Mark}
          name="Mark"
          controls={[
            { prop: 'color', type: 'color', initialValue: 'yellow' },
            { prop: 'children', type: 'string', initialValue: 'até o dia 15' },
          ]}
        />
      </Section>

      <Section title="Uso">
        <P>
          O padrão é amarelo — entra só como preenchimento (yellow 200), com texto <code>--ds-text</code>. Outras cores usam o tom 100 da família
          no tema claro.
        </P>
        <Demo id="mark/basic" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: '--mark-bg-light', type: 'vars', description: 'yellow 200 (amarelo, também para orange) ou tom 100 das demais cores.' },
            { name: '--mark-bg-dark', type: 'vars', description: 'Cor da família a 32% sobre a superfície escura — evita blocos amarelos ofuscantes.' },
            { name: 'root', type: 'classNames', description: 'Texto sempre --ds-text (o Mantine força preto), raio 3px e respiro lateral.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable rows={[{ name: 'color', type: 'MantineColor', default: "'yellow'", description: 'Cor do destaque.' }]} />
      </Section>

      <Section title="Boas práticas">
        <P>
          Destaque no máximo um trecho por parágrafo. Mark é visual: se o destaque for importante (ex.: “prazo vence amanhã”), o texto deve
          comunicar isso sozinho. Para termos de busca, use <code>Highlight</code>.
        </P>
      </Section>
    </DocPage>
  );
}
