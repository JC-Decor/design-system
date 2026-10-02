import { TokenSwatch, Group } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group gap="sm">
      <TokenSwatch name="Horizon" value="#2663EB" cssVar="--dc-horizon" />
      <TokenSwatch name="Electric" value="#F7D759" cssVar="--dc-electric" />
      <TokenSwatch name="Evergreen" value="#1E8540" cssVar="--dc-evergreen" />
      <TokenSwatch name="Obsidian" value="#08154B" cssVar="--dc-obsidian" copy="cssVar" />
    </Group>
  );
}
