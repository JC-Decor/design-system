import { CouponCode } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function CouponCodePage() {
  return (
    <DocPage
      kicker="E-commerce"
      title="CouponCode"
      source="jc"
      sourcePath="packages/ui/src/components/CouponCode"
      description="Cupom com borda tracejada e botão de copiar: o botão fica verde com “Copiado!” por alguns instantes depois do clique."
      importCode={`import { CouponCode } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={CouponCode}
          name="CouponCode"
          controls={[
            { prop: 'code', type: 'string', initialValue: 'JCMAIO' },
            { prop: 'description', type: 'string', initialValue: '5% OFF na 1ª compra' },
            { prop: 'copyLabel', type: 'string', initialValue: 'Copiar' },
            { prop: 'copiedLabel', type: 'string', initialValue: 'Copiado!' },
          ]}
          previewWidth={360}
        />
      </Section>

      <Section title="Uso">
        <Demo id="coupon-code/usage" />
      </Section>

      <Section title="Callback ao copiar">
        <P><code>onCopy</code> recebe o código copiado — use para feedback extra ou analytics.</P>
        <Demo id="coupon-code/on-copy" />
      </Section>

      <Section title="No checkout">
        <Demo id="coupon-code/checkout" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'code', type: 'string', required: true, description: 'Código do cupom (exibido e copiado).' },
            { name: 'description', type: 'ReactNode', description: 'Benefício acima do código (ex.: "5% OFF na 1ª compra").' },
            { name: 'copyLabel', type: 'string', default: "'Copiar'", description: 'Texto do botão.' },
            { name: 'copiedLabel', type: 'string', default: "'Copiado!'", description: 'Texto do botão após copiar.' },
            { name: 'onCopy', type: '(code: string) => void', description: 'Chamado ao copiar.' },
            { name: '...BoxProps', type: 'BoxProps', description: 'Style props do Box.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
