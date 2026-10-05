import { PinInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function PinInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="PinInput"
      source="mantine"
      mantineName="pin-input"
      description="Caixas individuais para códigos curtos de tamanho fixo: verificação por SMS/e-mail, cupons e PINs. O foco avança sozinho a cada caractere."
      importCode={`import { PinInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PinInput}
          name="PinInput"
          baseProps={{ ariaLabel: 'Código de verificação' }}
          controls={[
            { prop: 'length', type: 'number', initialValue: 4, min: 1, max: 8, step: 1 },
            { prop: 'type', type: 'segmented', data: ['alphanumeric', 'number'], initialValue: 'alphanumeric' },
            { prop: 'placeholder', type: 'string', initialValue: '○' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'mask', type: 'boolean', initialValue: false },
            { prop: 'error', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Código por SMS">
        <P>
          <code>type="number"</code> abre o teclado numérico e <code>oneTimeCode</code> ativa o preenchimento automático do código recebido por SMS
          (iOS/Android). <OnlyFor framework="react"><code>onComplete</code></OnlyFor><OnlyFor framework="vue"><code>@complete</code></OnlyFor> dispara quando todas as caixas estão preenchidas.
        </P>
        <Demo id="pin-input/otp" />
      </Section>

      <Section title="Cupom de desconto">
        <Demo id="pin-input/coupon" />
      </Section>

      <Section title="Máscara, erro, sucesso e desabilitado">
        <Demo id="pin-input/states" />
      </Section>

      <Section title="Tamanhos">
        <P>As caixas são quadradas com a altura dos campos (md = 40px) e texto de 16px.</P>
        <Demo id="pin-input/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Cada caixa é um <code>Input</code>, então herda borda, foco Horizon com anel <code>--ds-primary-soft</code> e erro em{' '}
          <code>--ds-error</code>. O DS adiciona tamanho padrão <code>md</code>, texto em peso 600 e o estado <code>success</code> com borda{' '}
          <code>--ds-success</code>.
          <OnlyFor framework="vue">{' '}O <code>PinInput</code> do Mantine Vue ainda não tem a prop <code>success</code>: aplique a borda com{' '}
            <code>{`:styles="{ input: { borderColor: 'var(--ds-success)' } }"`}</code>.</OnlyFor>
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'length', type: 'number', default: '4', description: 'Quantidade de caixas.' },
            { name: 'type', type: "'alphanumeric' | 'number' | RegExp", default: 'alphanumeric', description: 'Caracteres aceitos.' },
            { name: 'value / onChange', vueName: 'v-model', type: 'string', description: 'Uso controlado.' },
            { name: 'onComplete', vueName: '@complete', type: '(value: string) => void', description: 'Todas as caixas preenchidas.' },
            { name: 'oneTimeCode', type: 'boolean', default: 'false', description: 'autocomplete="one-time-code".' },
            { name: 'mask', type: 'boolean', default: 'false', description: 'Oculta os caracteres (PIN).' },
            { name: 'error / success', type: 'boolean', description: 'Estados de validação.', vueName: 'error', vueDescription: 'Estado de erro (success ainda não existe no Mantine Vue — use styles).' },
            { name: 'ariaLabel', type: 'string', description: 'Nome acessível das caixas.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Tenha sempre um texto explicando de onde vem o código e um link “Reenviar”. Passe <code>ariaLabel</code> — as caixas não têm label visível.
          Permita colar o código inteiro (já suportado) e não limpe as caixas ao errar: mostre a mensagem e deixe o cliente corrigir.
        </P>
      </Section>
    </DocPage>
  );
}
