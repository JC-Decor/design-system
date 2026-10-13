import { Blockquote, Icon, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xl" w="100%" pt="sm">
      <Blockquote icon={<Icon name="sparkle" size={18} />} iconSize={36}>
        Dica: solicite férias com 30 dias de antecedência para garantir o pagamento antes do início.
      </Blockquote>
      <Blockquote color="green" icon={<Icon name="heart" size={18} />} iconSize={36}>
        Novidade: o plano odontológico agora cobre dependentes sem carência.
      </Blockquote>
      <Blockquote color="coral" icon={<Icon name="shield" size={18} />} iconSize={36}>
        Nunca compartilhe sua senha do Connect — o RH não pede senhas por e-mail ou telefone.
      </Blockquote>
    </Stack>
  );
}
