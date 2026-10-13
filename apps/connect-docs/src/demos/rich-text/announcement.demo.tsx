import { Typography } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 680 };

export default function Demo() {
  return (
    <Typography>
      <h2>Semana da Saúde 2026: confira a programação</h2>
      <p>
        De 20 a 24 de outubro, todas as unidades recebem ações de bem-estar. A participação conta como horário de trabalho — combine com seu
        gestor o melhor momento para ir.
      </p>
      <img src="https://picsum.photos/seed/bem-estar/1200/600" alt="Colaboradores em aula de alongamento no pátio da sede" />
      <h3>Vacinação e check-up</h3>
      <p>
        A <strong>vacina da gripe</strong> será aplicada na segunda e na terça, das 9h às 16h. O check-up com a equipe de saúde ocupacional
        precisa de <em>agendamento prévio</em>.
      </p>
      <h3>Palestras</h3>
      <p>
        Saúde mental, ergonomia e finanças pessoais, sempre às 14h. Veja a <a href="#agenda">agenda completa no Connect</a>.
      </p>
      <h4>Resumo rápido</h4>
      <ul>
        <li>Segunda e terça: vacinação.</li>
        <li>Quarta e quinta: check-up agendado.</li>
        <li>Sexta: encerramento com café da manhã.</li>
      </ul>
    </Typography>
  );
}
