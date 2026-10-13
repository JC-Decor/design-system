import { Badge } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function BadgePage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Badge"
      source="mantine"
      mantineName="badge"
      description="A pílula de status do Connect: 20px de altura, 10,5px em peso 600, variante light com os tons do painel — para status, prioridades e contagens."
      importCode={`import { Badge } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Badge}
          name="Badge"
          controls={[
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'dot', 'default', 'transparent'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'green' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'children', type: 'string', initialValue: 'Ativo' },
          ]}
        />
      </Section>

      <Section title="Cores e status">
        <P>
          Na variante <code>light</code> cada cor usa o tom do Connect: fundo <code>--cn-tone-*-bg</code> e texto <code>--cn-tone-*-fg</code>{' '}
          (navy usa <code>--ds-primary-soft</code> + <code>--ds-primary</code>). Os tons trocam sozinhos no tema escuro. As cores seguem os
          status de registros do Connect (<code>statuses</code>):
        </P>
        <Demo id="badge/colors" />
        <PropsTable
          rows={[
            { name: 'green', type: 'statuses.ativo', description: 'Ativo, aprovado, meta batida.' },
            { name: 'yellow', type: 'statuses.pendente', description: 'Pendente, aguardando aprovação, documento faltando.' },
            { name: 'coral', type: 'statuses.atrasado', description: 'Atrasado, recusado, afastado, erro.' },
            { name: 'blue', type: 'statuses.concl', description: 'Concluído, informativo, de férias.' },
            { name: 'lavender', type: 'statuses.pausado', description: 'Pausado, em espera, categorias neutras.' },
            { name: 'ink', type: 'statuses.rascunho', description: 'Rascunho, arquivado, metadados.' },
            { name: 'navy', type: 'primária', description: 'Novo, destaque da marca, filtros ativos.' },
          ]}
        />
      </Section>

      <Section title="Prioridades">
        <P>
          As prioridades do Connect (<code>priorities</code>) já trazem o tom e o rótulo: <code>high</code> → coral “Alta”, <code>med</code> →
          yellow “Média”, <code>low</code> → green “Baixa” e <code>info</code> → blue “Info”. Use{' '}
          <code>{'color={priorities[p].tone}'}</code> para não repetir o mapeamento.
        </P>
        <Demo id="badge/priorities" />
      </Section>

      <Section title="Variantes">
        <Demo id="badge/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>
          O tamanho <code>md</code> foi ajustado à pílula do Connect: 20px de altura, 10,5px de fonte e 9px de padding horizontal. Os demais
          tamanhos seguem a escala do Mantine.
        </P>
        <Demo id="badge/sizes" />
      </Section>

      <Section title="Com ícones">
        <Demo id="badge/sections" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'variant', type: 'defaultProps', default: "'light'", description: 'Tom do Connect (bg/fg) em vez da cor cheia.' },
            { name: 'radius', type: 'defaultProps', default: "'xl'", description: 'Pílula (999px).' },
            { name: 'size md', type: 'vars', description: '--badge-height 20px, --badge-fz 10.5px, --badge-padding-x 9px.' },
            { name: 'root', type: 'classNames', description: 'Peso 600, sem caixa-alta (text-transform: none), tracking 0.02em.' },
            { name: 'variant="filled"', type: 'variantColorResolver', description: 'Cor cheia com texto branco; amarelo usa o tom 400 com texto âmbar escuro (nunca branco).' },
          ]}
        />
        <P>
          Para o selo de status com ponto colorido e rótulo prontos a partir de <code>statuses</code>, use a versão em{' '}
          <em>Componentes Connect</em>.
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Badges não são clicáveis — para filtros use <code>Chip</code>. Mantenha o texto curto (1–2 palavras) e não dependa só da cor: o rótulo
          deve comunicar o status sozinho. Use sempre a mesma cor para o mesmo status em todo o painel.
        </P>
      </Section>
    </DocPage>
  );
}
