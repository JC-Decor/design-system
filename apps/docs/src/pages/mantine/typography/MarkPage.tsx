import { Mark } from '@jcdecor/ui';
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
      description="Marca-texto para destacar um trecho dentro de um parágrafo — prazos, condições e alertas curtos."
      importCode={`import { Mark } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Mark}
          name="Mark"
          controls={[
            { prop: 'color', type: 'color', initialValue: 'electric' },
            { prop: 'children', type: 'string', initialValue: 'entrega expressa' },
          ]}
        />
      </Section>

      <Section title="Uso">
        <P>
          O padrão é Electric — o amarelo da marca entra só como preenchimento, com texto <code>--ds-text</code>. Outras cores usam o tom 100
          da família no tema claro.
        </P>
        <Demo id="mark/basic" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: '--mark-bg-light', type: 'vars', description: 'Electric 200 (amarelo) ou tom 100 das demais cores.' },
            { name: '--mark-bg-dark', type: 'vars', description: 'Cor da família a 32% sobre a superfície escura — evita blocos amarelos ofuscantes.' },
            { name: 'root', type: 'classNames', description: 'Texto sempre --ds-text (o Mantine força preto), raio 3px e respiro lateral.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable rows={[{ name: 'color', type: 'MantineColor', default: "'electric'", description: 'Cor do destaque (yellow é alias de electric).' }]} />
      </Section>

      <Section title="Boas práticas">
        <P>
          Destaque no máximo um trecho por parágrafo. Mark é visual: se o destaque for importante (ex.: “últimas unidades”), o texto deve
          comunicar isso sozinho. Para termos de busca, use <code>Highlight</code>.
        </P>
      </Section>
    </DocPage>
  );
}
