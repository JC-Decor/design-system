import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function CopyButtonPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="CopyButton"
      source="mantine"
      mantineName="copy-button"
      description="Copia um valor para a área de transferência. Não tem visual próprio: entrega copied/copy para você renderizar o botão da marca."
      importCode={`import { CopyButton } from '@jcdecor/ui';`}
    >
      <Section title="Cupom de desconto">
        <P>O padrão é trocar texto e ícone por alguns segundos após copiar ("Copiado!").</P>
        <Demo id="copy-button/coupon" />
      </Section>

      <Section title="Código de rastreio">
        <P>Com <code>ActionIcon</code> + <code>Tooltip</code> para uma ação discreta ao lado do valor.</P>
        <Demo id="copy-button/tracking" />
      </Section>

      <Section title="Pix copia e cola">
        <Demo id="copy-button/pix" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem estilos próprios — use <code>Button</code> ou <code>ActionIcon</code> do tema. Para o estado copiado, prefira{' '}
          <code>color="evergreen"</code> (sucesso).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'string', required: true, description: 'Texto copiado.' },
            { name: 'timeout', type: 'number', default: '1000', description: 'Tempo (ms) em que copied fica true.' },
            { name: 'children', type: '({ copied, copy }) => ReactNode', required: true, description: 'Função que renderiza o botão.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          A Clipboard API só funciona em HTTPS (ou localhost). Mantenha o valor visível ao lado do botão, para o usuário conferir o que foi
          copiado.
        </P>
      </Section>
    </DocPage>
  );
}
