import { ColorInput, SimpleGrid } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <ColorInput label="HEX" format="hex" defaultValue="#2f3e46" />
      <ColorInput label="RGBA (com transparência)" format="rgba" defaultValue="rgba(201, 162, 126, 0.6)" />
      <ColorInput label="HSL" format="hsl" defaultValue="hsl(28, 40%, 64%)" />
      <ColorInput label="Com erro" defaultValue="#zzz" error="Informe uma cor HEX válida" />
    </SimpleGrid>
  );
}
