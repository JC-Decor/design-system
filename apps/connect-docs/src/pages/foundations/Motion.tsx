import { density, motion } from '@jcdecor/connect-ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

export default function Motion() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Movimento & densidade"
      description="Transições curtas e discretas (120–320ms) e três densidades de painel controladas por uma variável: --cn-pad."
    >
      <Section title="Movimento">
        <P>
          Os valores vêm do <code>motion.css</code> do Connect e estão em <code>motion</code> de <code>@jcdecor/connect-ui/tokens</code>. Os componentes
          temados (botões, campos, cards) já usam <code>--cn-t</code>.
        </P>
        <PropsTable
          rows={[
            { name: 'motion.fast', type: '—', default: motion.fast, description: 'Micro-interações: hover de ícones, check, toggle.' },
            { name: 'motion.normal', type: '--cn-t', default: `${motion.normal} ${motion.easeStandard}`, description: 'Padrão: hover de botões e cards, cores, bordas, sombras.' },
            { name: 'motion.slow', type: '--cn-t-slow', default: `${motion.slow} ${motion.easeStandard}`, description: 'Entradas maiores: drawers, painéis expansíveis.' },
            { name: 'motion.easeStandard', type: '—', default: motion.easeStandard, description: 'Curva padrão (desacelera no fim).' },
            { name: 'motion.easeEmphasis', type: '--cn-ease-emphasis', default: motion.easeEmphasis, description: 'Ênfase: elementos que entram na tela.' },
          ]}
        />
        <Demo id="motion/transition" description="Passe o mouse sobre os cards." />
        <CodeBlock
          language="css"
          code={`.cardAtalho {
  transition: transform var(--cn-t), box-shadow var(--cn-t);
}
.cardAtalho:hover {
  transform: translateY(-2px);
  box-shadow: var(--ds-shadow-md);
}
.gaveta { transition: transform var(--cn-t-slow); }

/* Respeite quem prefere menos movimento */
@media (prefers-reduced-motion: reduce) {
  .cardAtalho, .gaveta { transition: none; }
}`}
        />
        <P>
          Anime só <code>transform</code>, <code>opacity</code>, cores e sombras — nunca largura/altura em listas grandes. Para as transições do próprio
          Mantine, <code>theme.respectReducedMotion</code> desliga as animações quando o sistema pede menos movimento.
        </P>
      </Section>

      <Section title="Densidade">
        <P>
          O painel do Connect tem três densidades (<code>.density-*</code> no app original). No DS elas viram a variável <code>--cn-pad</code> e as
          classes globais <code>.cn-density-*</code>, que redefinem a variável para tudo o que estiver dentro. O padrão (sem classe) é regular.
        </P>
        <PropsTable
          rows={[
            { name: '.cn-density-compact', type: '--cn-pad', default: density.compact, description: 'Tabelas longas, telas de operação.' },
            { name: '.cn-density-regular', type: '--cn-pad', default: density.regular, description: 'Padrão (= padding lg do Card).' },
            { name: '.cn-density-comfy', type: '--cn-pad', default: density.comfy, description: 'Telas de leitura, boas-vindas.' },
          ]}
        />
        <Demo id="motion/density" />
        <P>
          O <code>Card</code> do Mantine usa <code>padding="lg"</code> (22px) fixo; para que um bloco acompanhe a densidade, use{' '}
          <code>p="var(--cn-pad)"</code> (ou <code>padding: var(--cn-pad)</code> no CSS) e aplique a classe num ancestral — por exemplo, no{' '}
          <code>&lt;main&gt;</code> da página.
        </P>
        <CodeBlock
          code={`<main className="cn-density-compact">
  <Paper withBorder radius="lg" p="var(--cn-pad)">…</Paper>
</main>`}
        />
      </Section>
    </DocPage>
  );
}
