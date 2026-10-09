import { Typography } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 680 };

export default function Demo() {
  return (
    <Typography>
      <h2>Política de troca e devolução</h2>
      <p>
        Queremos que você ame cada produto. Se algo não saiu como esperado, você tem até <strong>30 dias corridos</strong> após o recebimento
        para solicitar a troca ou a devolução, conforme o <a href="#cdc">Código de Defesa do Consumidor</a>.
      </p>
      <h3>Como solicitar</h3>
      <ol>
        <li>
          Acesse <a href="#pedidos">Meus pedidos</a> e escolha o item.
        </li>
        <li>
          Informe o motivo e o código do pedido, por exemplo <code>#10482</code>.
        </li>
        <li>Embale o produto na caixa original, sem sinais de uso.</li>
        <li>Agende a coleta gratuita ou leve a uma agência dos Correios.</li>
      </ol>
      <blockquote>
        Produtos cortados sob medida, como papel de parede fracionado e carpetes, só podem ser trocados em caso de defeito.
      </blockquote>
      <h3>Prazos de reembolso</h3>
      <table>
        <thead>
          <tr>
            <th>Forma de pagamento</th>
            <th>Prazo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pix</td>
            <td>Até 2 dias úteis</td>
          </tr>
          <tr>
            <td>Cartão de crédito</td>
            <td>Até 2 faturas</td>
          </tr>
          <tr>
            <td>Boleto</td>
            <td>Até 5 dias úteis, por depósito</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>A primeira troca tem frete grátis.</li>
        <li>
          Itens com <mark>avaria no transporte</mark> devem ser informados em até 7 dias.
        </li>
      </ul>
      <hr />
      <p>
        Dúvidas? Fale com a gente pelo chat ou pressione <kbd>Ctrl</kbd> + <kbd>K</kbd> e busque por “troca”.
      </p>
    </Typography>
  );
}
