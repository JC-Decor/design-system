import { Alert } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function AlertPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Alert"
      source="mantine"
      mantineName="alert"
      description="Mensagens persistentes no contexto da página: status do pedido, avisos de estoque e erros de integração."
      importCode={`import { Alert } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Alert}
          name="Alert"
          previewWidth={440}
          controls={[
            { prop: 'title', type: 'string', initialValue: 'Estoque baixo' },
            { prop: 'children', type: 'string', initialValue: 'Restam apenas 4 caixas do piso Carvalho Natural.' },
            { prop: 'color', type: 'color', initialValue: 'electric' },
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'default', 'transparent', 'white'], initialValue: 'light' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'withCloseButton', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Status do pedido">
        <P>
          Cada cor tem um papel fixo: <code>horizon</code> = informação, <code>evergreen</code> = sucesso, <code>electric</code> = atenção e{' '}
          <code>danger</code> = erro. Acompanhe sempre com um ícone, para que o status não dependa só da cor.
        </P>
        <Demo id="alert/order-status" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>light</code> é o padrão do DS. Reserve <code>filled</code> para avisos críticos que precisam se destacar da página.
        </P>
        <Demo id="alert/variants" />
      </Section>

      <Section title="Com ações e fechar">
        <P>
          Coloque botões pequenos no corpo do alerta para a próxima ação. Com <code>withCloseButton</code>, passe <code>{vue ? '@close' : 'onClose'}</code> e um{' '}
          <code>closeButtonLabel</code> em português.
        </P>
        <Demo id="alert/with-actions" />
      </Section>

      <Section title="No tema JC">
        <P>
          Variante padrão <code>light</code> com as cores das tags (<code>--ds-tag-*</code>), raio <code>--ds-radius</code> (12px) e título em
          peso 600. Na variante <code>light</code> o corpo do texto usa <code>--ds-text</code> para leitura confortável, enquanto o título e o
          ícone mantêm a cor do status. Em <code>electric</code>, título e ícone usam o tom âmbar 700 (nunca amarelo sobre claro).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', vueType: 'string | slot #title', description: 'Título do alerta, em peso 600.' },
            { name: 'icon', type: 'ReactNode', vueType: 'VNode | slot #icon', description: 'Ícone à esquerda (use ícones Tabler de status).' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor semântica do alerta.' },
            { name: 'variant', type: "'light' | 'filled' | 'outline' | 'default' | 'transparent' | 'white'", default: "'light'", description: 'Estilo visual.' },
            { name: 'withCloseButton', type: 'boolean', default: 'false', description: 'Mostra o botão de fechar.' },
            { name: 'onClose / closeButtonLabel', vueName: '@close / closeButtonLabel', type: '() => void / string', description: 'Ação e rótulo acessível do botão de fechar.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Alert para mensagens que continuam valendo enquanto o usuário está na página; para confirmações passageiras de uma ação, use{' '}
          <code>notifications.show()</code>. Mensagens de erro devem dizer o que aconteceu e o que fazer em seguida.
        </P>
      </Section>
    </DocPage>
  );
}
