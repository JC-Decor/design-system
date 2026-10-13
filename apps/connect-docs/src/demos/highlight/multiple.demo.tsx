import { Highlight } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Highlight highlight={['30 de novembro', 'dependentes', 'sem carência']} highlightStyles={{ fontWeight: 600 }} ta="center">
      Inclua seus dependentes no plano odontológico até 30 de novembro: a cobertura começa em dezembro, sem carência.
    </Highlight>
  );
}
