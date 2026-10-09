import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function ActionBarPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="ActionBar"
      source="mantine"
      mantineName="action-bar"
      description="Barra flutuante na base da tela com ações em massa para os itens selecionados. Novo no Mantine 9."
      importCode={`import { ActionBar } from '@jcdecor/ui';`}
    >
      <Section title="Ações em massa na tabela">
        <P>
          Selecione linhas para a barra aparecer centralizada a 30px da base da viewport. <code>{vue ? 'ActionBarDivider' : 'ActionBar.Divider'}</code> separa grupos e{' '}
          <code>{vue ? 'ActionBarCloseButton' : 'ActionBar.CloseButton'}</code> chama <code>{vue ? '@close' : 'onClose'}</code> — aqui ele limpa a seleção. Com <code>closeOnEscape</code>, <kbd>Esc</kbd> também
          limpa.
        </P>
        <Demo id="action-bar/bulk-actions" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: 'md', description: 'Raio de card (12px).' },
            { name: 'shadow', type: 'defaultProps', default: 'lg', description: '--ds-shadow-lg para destacar da página.' },
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface e borda --ds-border-soft.' },
            { name: 'divider', type: 'classNames', description: 'Divisor em --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', vueName: 'opened / v-model:opened', type: 'boolean', required: true, description: 'Visibilidade — normalmente selecao.length > 0.' },
            { name: 'onClose', vueName: '@close', type: '() => void', vueType: 'evento', description: 'Chamado pelo CloseButton e pelo Esc (com closeOnEscape).' },
            { name: 'closeOnEscape', type: 'boolean', default: 'false', description: 'Fecha com a tecla Esc.' },
            { name: 'position', type: 'AffixPosition', default: '{ bottom: 30, left: 0, right: 0 }', description: 'Posição fixa na viewport.' },
            { name: 'aria-label', type: 'string', default: "'Actions'", description: 'Rótulo do grupo de ações — traduza para pt-BR.' },
            { name: 'transitionProps', type: 'TransitionOverride', default: "{ transition: 'pop', duration: 200 }", description: 'Animação de entrada.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre sempre a contagem de itens selecionados, use no máximo 4 ações (o resto vai em um Menu "Mais") e deixe a destrutiva por último em{' '}
          <code>danger</code>, com confirmação. A barra não prende o foco: o usuário continua selecionando linhas enquanto ela está aberta.
        </P>
      </Section>
    </DocPage>
  );
}
