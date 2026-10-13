import { ColorInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <ColorInput label="HEX" format="hex" defaultValue="#07016b" />
      <ColorInput label="RGBA (com transparência)" format="rgba" defaultValue="rgba(98, 84, 201, 0.6)" />
      <ColorInput label="HSL" format="hsl" defaultValue="hsl(143, 56%, 34%)" />
      <ColorInput label="Com erro" defaultValue="#zzz" error="Informe uma cor HEX válida" />
    </SimpleGrid>
  );
}
