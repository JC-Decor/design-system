import { IllustrationStrip, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Stack>
      <IllustrationStrip
        src="document"
        eyebrow="Documentos"
        title="Seu informe de rendimentos está disponível"
        desc="Baixe o PDF para declarar o imposto de renda. Ele fica guardado em Meus documentos."
      />
      <IllustrationStrip
        featured
        src="dayOff"
        eyebrow="Férias"
        title="Planeje seu descanso com antecedência"
        desc="Você tem 21 dias disponíveis até março. Combine as datas com seu gestor e envie a solicitação pelo painel."
      />
    </Stack>
  );
}
