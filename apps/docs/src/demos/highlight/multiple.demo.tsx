import { Highlight } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Highlight
      highlight={['frete grátis', '10x sem juros', '5%']}
      highlightStyles={{ fontWeight: 600 }}
      ta="center"
    >
      Aproveite frete grátis acima de R$ 499, pagamento em 10x sem juros e 5% de desconto no Pix.
    </Highlight>
  );
}
