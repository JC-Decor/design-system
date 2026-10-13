import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function DrawerPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Drawer"
      source="mantine"
      mantineName="drawer"
      description="Painel que desliza da borda da tela. Ideal para editar um colaborador, filtrar listagens e ver detalhes sem perder o contexto da tabela."
      importCode={`import { Drawer } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';`}
    >
      <Section title="Edição de colaborador">
        <P>
          O padrão do Painel: a linha da tabela abre um drawer à direita com o cabeçalho do colaborador (avatar + matrícula), o formulário e as
          ações no rodapé. O Connect tem uma versão pronta deste padrão (drawer contextual) em Componentes Connect.
        </P>
        <Demo id="drawer/edit-employee" />
      </Section>

      <Section title="Filtros">
        <P>Em listagens de colaboradores, os filtros abrem pela direita e o botão principal mostra quantos resultados serão exibidos.</P>
        <Demo id="drawer/filters" />
      </Section>

      <Section title="Posições">
        <P>
          <code>position</code> aceita <code>left</code>, <code>right</code>, <code>top</code> e <code>bottom</code>. No mobile, <code>bottom</code>{' '}
          funciona como bottom sheet para ações rápidas.
        </P>
        <Demo id="drawer/positions" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Drawer compartilha as classes do Modal. O padding não é sobrescrito (fica no <code>md</code> do Mantine = 16px); passe <code>padding="xl"</code> para os 28px do painel do Connect.
        </P>
        <PropsTable
          rows={[
            { name: 'overlayProps', type: 'defaultProps', default: 'ink 36% · blur 2', description: 'Mesmo overlay do Modal: rgba(14,16,34,.36) com blur de 2px.' },
            { name: 'shadow', type: 'defaultProps', default: 'lg', description: '--ds-shadow-lg (shadow-3).' },
            { name: 'content / header', type: 'classNames', description: 'Fundo --ds-surface e borda 1px --ds-border-soft.' },
            { name: 'title', type: 'classNames', description: 'Título 18px/700, igual ao do Modal.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', required: true, description: 'Estado de abertura.' },
            { name: 'onClose', type: '() => void', required: true, description: 'Fecha no Esc, clique fora e botão fechar.' },
            { name: 'position', type: "'left' | 'right' | 'top' | 'bottom'", default: 'left', description: 'Borda de onde o painel entra.' },
            { name: 'size', type: 'MantineSize | string | number', default: 'md', description: 'Largura (laterais) ou altura (topo/base).' },
            { name: 'title', type: 'ReactNode', description: 'Título do cabeçalho.' },
            { name: 'offset', type: 'number | string', default: '0', description: 'Distância da borda; com radius cria um painel "flutuante".' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Edição e filtros entram pela direita; navegação (a sidebar no mobile), pela esquerda. O foco fica preso no drawer e <kbd>Esc</kbd> fecha. Não abra
          um modal por cima de um drawer — resolva a etapa dentro do próprio painel.
        </P>
      </Section>
    </DocPage>
  );
}
