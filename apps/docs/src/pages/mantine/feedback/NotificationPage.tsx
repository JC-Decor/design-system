import { Notification } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor, useFramework } from '../../../kit/framework';
import { VueMount } from '../../../kit/VueMount';
import { Notifications as VueNotifications } from '@mantine-vue/notifications';
import '@mantine-vue/notifications/styles.css';

const vueNotificationsProps = { position: 'top-right' };

export default function NotificationPage() {
  const { framework } = useFramework();
  const vue = framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Notification"
      source="mantine"
      mantineName="notification"
      description="Card de notificação para confirmações passageiras: produto adicionado, cupom inválido, relatório exportado."
      importCode={
        vue
          ? `import { Notification } from '@jcdecor/vue';
import { notifications } from '@mantine-vue/notifications';`
          : `import { Notification } from '@jcdecor/ui';
import { notifications } from '@mantine/notifications';`
      }
    >
      {/* No modo Vue, os exemplos chamam o notifications do Mantine Vue: monta o <Notifications /> dele uma vez na página. */}
      {vue && <VueMount component={VueNotifications} props={vueNotificationsProps} />}
      <Section title="Playground">
        <Configurator
          component={Notification}
          name="Notification"
          previewWidth={400}
          baseProps={{ onClose: () => {} }}
          controls={[
            { prop: 'title', type: 'string', initialValue: 'Adicionado ao carrinho' },
            { prop: 'children', type: 'string', initialValue: 'Cortina Linho Cru 2,80 m × 2' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'loading', type: 'boolean', initialValue: false },
            { prop: 'withCloseButton', type: 'boolean', initialValue: true },
            { prop: 'withBorder', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Estático">
        <P>
          O componente <code>Notification</code> pode ser usado diretamente na página. A barra lateral (ou o ícone, quando informado) mostra a
          cor do status.
        </P>
        <Demo id="notification/static" />
      </Section>

      <Section title="Com notifications.show">
        <P>
          No app, dispare notificações com <code>notifications.show()</code> de{' '}
          <code>{vue ? '@mantine-vue/notifications' : '@mantine/notifications'}</code>. O <code>&lt;Notifications /&gt;</code> precisa estar
          montado uma vez na raiz (já está no <code>JcProvider</code> desta documentação).
        </P>
        <OnlyFor framework="vue">
          <P>
            No Vue, instale <code>@mantine-vue/notifications</code>, importe <code>@mantine-vue/notifications/styles.css</code> e coloque{' '}
            <code>&lt;Notifications /&gt;</code> dentro do <code>JcProvider</code>, no componente raiz. Ícones e conteúdo rico em{' '}
            <code>notifications.show()</code> são VNodes: <code>icon: h(IconCheck, {'{ size: 18 }'})</code>.
          </P>
        </OnlyFor>
        <Demo id="notification/show" />
      </Section>

      <Section title="Atualizar uma notificação">
        <P>
          Para operações demoradas, mostre uma notificação com <code>loading</code> e <code>autoClose={'{false}'}</code> e depois troque o
          conteúdo com <code>notifications.update()</code> usando o mesmo <code>id</code>.
        </P>
        <Demo id="notification/update" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio <code>md</code> (12px), fundo <code>--ds-surface</code>, borda <code>--ds-border-soft</code> e sombra <code>--ds-shadow-md</code>.
          Título em peso 600 e <code>--ds-text</code>, mensagem em <code>--ds-text-2</code>, para que o card se destaque sobre o conteúdo nos dois
          temas. No escuro, o ícone colorido recebe texto escuro, já que o preenchimento é o tom 400 da cor.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', vueType: 'string | slot #title', description: 'Título da notificação.' },
            { name: 'children / message', vueName: 'default slot / message', type: 'ReactNode', vueType: 'slot / string | VNode', description: 'Texto (children no componente, message em notifications.show).', vueDescription: 'Texto (slot padrão no componente, message em notifications.show).' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor da barra ou do ícone.' },
            { name: 'icon', type: 'ReactNode', vueType: 'slot #icon / VNode em notifications.show', description: 'Ícone no lugar da barra lateral.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra um loader no lugar do ícone.' },
            { name: 'withCloseButton', type: 'boolean', default: 'true', description: 'Botão de fechar.' },
            { name: 'autoClose', type: 'number | false', default: '4000', description: 'notifications.show: tempo até fechar sozinha.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Notificações somem sozinhas — não coloque nelas informação que o usuário precise consultar depois (use <code>Alert</code>). Uma frase
          curta basta; para erros, diga como resolver. Evite empilhar mais de três ao mesmo tempo.
        </P>
      </Section>
    </DocPage>
  );
}
