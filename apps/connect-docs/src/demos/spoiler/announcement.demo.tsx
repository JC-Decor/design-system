import { Spoiler, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Spoiler maxHeight={72} showLabel="Ler comunicado completo" hideLabel="Mostrar menos">
      <Text fz="sm" c="var(--ds-text-2)">
        A partir de 1º de novembro, o plano odontológico passa a cobrir dependentes sem carência, incluindo cônjuges e filhos de até 24 anos.
        A inclusão é feita pelo próprio Connect, em Benefícios › Dependentes.
      </Text>
      <Text fz="sm" c="var(--ds-text-2)" mt="sm">
        Quem já tem dependentes cadastrados no plano de saúde não precisa fazer nada: a migração é automática e a nova carteirinha digital
        aparece no app em até 5 dias úteis. O desconto em folha permanece o mesmo para o titular.
      </Text>
      <Text fz="sm" c="var(--ds-text-2)" mt="sm">
        Dúvidas? Fale com o time de Benefícios pelo chat do Connect ou pelo ramal 4410.
      </Text>
    </Spoiler>
  );
}
