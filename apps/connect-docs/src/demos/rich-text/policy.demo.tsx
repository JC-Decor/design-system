import { Typography } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 680 };

export default function Demo() {
  return (
    <Typography>
      <h2>Política de férias</h2>
      <p>
        Todo colaborador tem direito a <strong>30 dias de férias</strong> a cada 12 meses de trabalho, que podem ser divididos em até três
        períodos, conforme a <a href="#clt">CLT, art. 134</a>.
      </p>
      <h3>Como solicitar</h3>
      <ol>
        <li>
          Acesse <a href="#ferias">Férias › Nova solicitação</a> no Connect.
        </li>
        <li>
          Escolha o período e, se quiser, o abono de até 10 dias. Guarde o protocolo, por exemplo <code>FER-2026-0318</code>.
        </li>
        <li>Aguarde a aprovação do seu gestor.</li>
        <li>Confira o aviso e o demonstrativo em Documentos.</li>
      </ol>
      <blockquote>Um dos períodos precisa ter no mínimo 14 dias corridos; os demais, no mínimo 5 dias cada.</blockquote>
      <h3>Prazos</h3>
      <table>
        <thead>
          <tr>
            <th>Etapa</th>
            <th>Prazo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solicitação</td>
            <td>30 dias antes do início</td>
          </tr>
          <tr>
            <td>Aprovação do gestor</td>
            <td>Até 5 dias úteis</td>
          </tr>
          <tr>
            <td>Pagamento</td>
            <td>Até 2 dias antes do início</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>As férias não podem começar nos 2 dias que antecedem feriado ou descanso semanal.</li>
        <li>
          Solicitações enviadas <mark>até o dia 15</mark> entram na folha do mesmo mês.
        </li>
      </ul>
      <hr />
      <p>
        Dúvidas? Fale com o RH pelo chat ou pressione <kbd>Ctrl</kbd> + <kbd>K</kbd> e busque por “férias”.
      </p>
    </Typography>
  );
}
