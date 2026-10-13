import { Alert } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function AlertPage() {
  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Alert"
      source="mantine"
      mantineName="alert"
      description="Mensagens persistentes no contexto da página: status de solicitações, pendências de documentos e falhas de integração."
      importCode={`import { Alert } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Alert}
          name="Alert"
          previewWidth={440}
          controls={[
            { prop: 'title', type: 'string', initialValue: 'Documento pendente' },
            { prop: 'children', type: 'string', initialValue: 'Envie o comprovante de escolaridade até 30/10.' },
            { prop: 'color', type: 'color', initialValue: 'yellow' },
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'default', 'transparent', 'white'], initialValue: 'light' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'withCloseButton', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Status de solicitações">
        <P>
          Cada cor tem um papel fixo, o mesmo dos status do Connect: <code>blue</code> = informação/em análise, <code>green</code> = aprovado,{' '}
          <code>yellow</code> = pendente/atenção e <code>coral</code> = erro/atrasado. <code>navy</code> fica para avisos institucionais.
          Acompanhe sempre com um ícone, para que o status não dependa só da cor.
        </P>
        <Demo id="alert/request-status" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>light</code> é o padrão do tema. Reserve <code>filled</code> para avisos críticos que precisam se destacar da página.
        </P>
        <Demo id="alert/variants" />
      </Section>

      <Section title="Com ações e fechar">
        <P>
          Coloque botões pequenos no corpo do alerta para a próxima ação. Com <code>withCloseButton</code>, passe <code>onClose</code> e um{' '}
          <code>closeButtonLabel</code> em português.
        </P>
        <Demo id="alert/with-actions" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'variant', type: 'defaultProps', default: "'light'", description: 'Fundo e título no tom do Connect (--cn-tone-*-bg / -fg); navy usa --ds-primary-soft.' },
            { name: 'root', type: 'classNames', description: 'Raio --ds-radius (14px).' },
            { name: 'title', type: 'classNames', description: 'Peso 600.' },
            { name: 'message', type: 'classNames', description: 'Corpo em --ds-text (o Mantine usa preto/branco puros); filled e white mantêm a cor própria.' },
            { name: 'filled (escuro)', type: 'classNames', description: 'No tema escuro o fundo cheio é o tom 400 (claro), então o texto passa a ser escuro (≥ 4,5:1).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', description: 'Título do alerta, em peso 600.' },
            { name: 'icon', type: 'ReactNode', description: 'Ícone à esquerda (ex.: <Icon name="check" />).' },
            { name: 'color', type: 'MantineColor', default: "'navy'", description: 'Cor semântica do alerta.' },
            { name: 'variant', type: "'light' | 'filled' | 'outline' | 'default' | 'transparent' | 'white'", default: "'light'", description: 'Estilo visual.' },
            { name: 'withCloseButton', type: 'boolean', default: 'false', description: 'Mostra o botão de fechar.' },
            { name: 'onClose / closeButtonLabel', type: '() => void / string', description: 'Ação e rótulo acessível do botão de fechar.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Alert para mensagens que continuam valendo enquanto a pessoa está na página (uma pendência, um prazo); para confirmações
          passageiras de uma ação, use <code>notifications.show()</code>. Mensagens de erro devem dizer o que aconteceu e o que fazer em
          seguida (“Solicite o ajuste ao seu gestor”).
        </P>
      </Section>
    </DocPage>
  );
}
