import { Button } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc
<Btn kind="primary" icon="plus">Nova meta</Btn>
<Btn kind="ghost" iconRight="chev">Filtrar</Btn>
<Btn kind="outline">Exportar</Btn>
<Btn kind="danger" icon="trash">Excluir</Btn>
<IconBtn icon="dots" label="Mais ações" />

// @jcdecor/connect-ui
<Button leftSection={<Icon name="plus" size={15} />}>Nova meta</Button>
<Button variant="ghost" rightSection={<Icon name="chev" size={15} />}>Filtrar</Button>
<Button variant="outline">Exportar</Button>
<Button variant="danger" leftSection={<Icon name="trash" size={15} />}>Excluir</Button>
<ActionIcon aria-label="Mais ações"><Icon name="dots" size={15} /></ActionIcon>`;

export default function ButtonPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="Button"
      source="mantine"
      mantineName="button"
      description="Botões do Connect: primário navy com sombra colorida, ghost sobre a superfície, contorno neutro, perigo em coral e as variantes subtle/light do Mantine."
      importCode={`import { Button } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Button}
          name="Button"
          controls={[
            { prop: 'variant', type: 'select', data: ['filled', 'ghost', 'outline', 'danger', 'subtle', 'light', 'default', 'transparent'], initialValue: 'filled' },
            { prop: 'color', type: 'color', initialValue: 'navy' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
            { prop: 'loading', type: 'boolean', initialValue: false },
            { prop: 'fullWidth', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Aprovar férias' },
          ]}
        />
      </Section>

      <Section title="Variantes do Connect">
        <P>
          Os <code>kind</code> do <code>&lt;Btn&gt;</code> do Connect viraram variantes do Mantine, resolvidas pelo{' '}
          <code>variantColorResolver</code> do tema. Use no máximo uma ação <code>filled</code> por bloco.
        </P>
        <Demo id="button/variants" />
        <PropsTable
          rows={[
            { name: 'filled', type: '.btn-primary', default: 'padrão', description: 'Fundo navy, texto branco, sombra na cor do fundo e elevação de 1px no hover.' },
            { name: 'ghost', type: '.btn-ghost', description: 'Superfície com borda --line (--ds-border-soft), texto ink-2; hover em --ds-surface-2. Ação secundária.' },
            { name: 'default', type: '.btn-ghost', description: 'Mesmo visual de ghost (nome padrão do Mantine).' },
            { name: 'outline', type: '.btn-outline', description: 'Sem color: contorno neutro de 1,5px (--ds-border) e texto ink-2. Com color: contorno e texto na cor, hover no tom light.' },
            { name: 'danger', type: '.btn-danger', description: 'Fundo coral (#D94B36), texto branco, mesma sombra e elevação do primário. Ações destrutivas.' },
            { name: 'subtle', type: '—', description: 'Sem fundo nem borda; texto ink-2 e hover em --ds-surface-2. Ações terciárias (Cancelar, Voltar).' },
            { name: 'light', type: 'tags / chips', description: 'Fundo e texto do tom da cor. Filtros e estados ativos.' },
          ]}
        />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>md</code> (padrão) = 40px e 13,5px/600, o <code>.btn</code> do Connect; <code>sm</code> = 34px, o <code>.btn-sm</code>, para
          cabeçalhos de card e tabelas. Também há <code>xs</code> 28px, <code>lg</code> 46px e <code>xl</code> 52px.
        </P>
        <Demo id="button/sizes" />
      </Section>

      <Section title="Ícones e loading">
        <P>
          Os <code>icon</code>/<code>iconRight</code> do Connect viram <code>leftSection</code>/<code>rightSection</code>, com o{' '}
          <code>Icon</code> do Connect em 15px.
        </P>
        <Demo id="button/sections" />
      </Section>

      <Section title="Desabilitado e carregando">
        <P>Desabilitado mantém as cores da variante com 45% de opacidade, sem a sombra de elevação no hover.</P>
        <Demo id="button/states" />
      </Section>

      <Section title="Cores">
        <P>
          Qualquer cor do Connect funciona com <code>filled</code>, <code>light</code> e <code>outline</code>. O amarelo cheio usa texto âmbar
          escuro (nunca branco) para manter o contraste.
        </P>
        <Demo id="button/colors" />
      </Section>

      <Section title="Largura total">
        <Demo id="button/full-width" />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          <code>&lt;Btn kind="primary"&gt;</code> → <code>&lt;Button&gt;</code> (filled é o padrão), <code>kind="ghost" | "outline" | "danger"</code>{' '}
          → <code>variant</code> de mesmo nome, <code>icon</code>/<code>iconRight</code> → <code>leftSection</code>/<code>rightSection</code> com{' '}
          <code>&lt;Icon name size={'{15}'} /&gt;</code>, <code>title</code> → <code>title</code>. <code>&lt;IconBtn icon label&gt;</code> →{' '}
          <code>&lt;ActionIcon aria-label&gt;</code>, cuja variante padrão já é o <code>.ic-btn</code> (32px).
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
        <Demo id="button/migration" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Alturas e fontes por tamanho vêm de <code>controls.ts</code> (xs 28 · sm 34 · md 40 · lg 46 · xl 52px), peso 600 e letter-spacing
          −0,005em. <code>filled</code> e <code>danger</code> ganham sombra de 8px/18px misturando 22% da cor do fundo e, no hover, sobem 1px
          com sombra maior (32%); no escuro usam <code>--cn-btn-shadow</code>. No escuro o texto do <code>filled</code> vira{' '}
          <code>--cn-on-filled</code>, já que o tom de fundo fica claro. O <code>outline</code> sem cor escurece levemente a borda em direção
          ao primário no hover. Raio padrão <code>sm</code> (10px).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'filled' | 'ghost' | 'outline' | 'danger' | 'subtle' | 'light' | …", default: "'filled'", description: 'Hierarquia visual do botão.' },
            { name: 'color', type: 'MantineColor', default: "'navy'", description: 'Cor do tema (filled, outline, light, subtle).' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'xs 28 · sm 34 · md 40 · lg 46 · xl 52px.' },
            { name: 'leftSection / rightSection', type: 'ReactNode', description: 'Ícones antes/depois do texto.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra Loader e bloqueia cliques.' },
            { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Ocupa toda a largura.' },
            { name: 'component', type: 'ElementType', description: 'Renderiza como link (a, Link do router…).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Um <code>filled</code> por bloco, acompanhado de <code>ghost</code> ou <code>subtle</code>. Reserve <code>danger</code> para ações
          destrutivas (excluir, desligar, recusar) e confirme com um modal. Rótulos são verbos curtos: "Aprovar", "Salvar alterações", "Enviar
          comunicado".
        </P>
      </Section>
    </DocPage>
  );
}
