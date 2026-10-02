import { PromoBanner, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <PromoBanner variant="horizon" radius="md" highlight="cupom: JCMAIO">
        5% OFF na 1ª compra
      </PromoBanner>
      <PromoBanner variant="electric" radius="md" highlight="R$ 299">
        Frete grátis para Sul e Sudeste acima de
      </PromoBanner>
      <PromoBanner variant="obsidian" radius="md" highlight="até 40% OFF">
        Semana do piso vinílico:
      </PromoBanner>
    </Stack>
  );
}
