import { Code } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function CodePage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Code"
      source="mantine"
      mantineName="code"
      description="Trechos monoespaçados inline ou em bloco — cupons, códigos de produto, IDs de pedido e exemplos de código."
      importCode={`import { Code } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Code}
          name="Code"
          controls={[
            { prop: 'block', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'PRIMAVERA10' },
          ]}
        />
      </Section>

      <Section title="Inline">
        <P>
          O tamanho é relativo ao texto ao redor (<code>0.875em</code>), então funciona em parágrafos de 14px ou 18px sem ajustes.
        </P>
        <Demo id="code/inline" />
      </Section>

      <Section title="Bloco">
        <P>
          <code>block</code> renderiza um <code>pre</code>. Para destaque de sintaxe e botão de copiar, use o pacote{' '}
          <code>@mantine/code-highlight</code>.
        </P>
        <Demo id="code/block" />
      </Section>

      <Section title="Cores">
        <P>
          A prop <code>color</code> define o fundo; com os tokens de tag (<code>--ds-tag-*-bg</code>/<code>-color</code>) o contraste é garantido
          nos dois temas.
        </P>
        <Demo id="code/colors" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface-2, texto --ds-text, borda 1px --ds-border-soft, raio 6px, 0.875em.' },
            { name: 'block', type: 'classNames', description: 'Raio --ds-radius-sm (8px), padding 16px, 14px com entrelinha 1,6.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'block', type: 'boolean', default: 'false', description: 'Renderiza como bloco (pre).' },
            { name: 'color', type: 'MantineColor | string', description: 'Cor de fundo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Code para valores que o usuário vai copiar ou digitar (cupons, códigos). Em textos para clientes, combine com{' '}
          <code>CopyButton</code> quando o valor for longo.
        </P>
      </Section>
    </DocPage>
  );
}
