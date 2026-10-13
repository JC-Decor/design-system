import { TokenSwatch, Group } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group gap="sm">
      <TokenSwatch name="Navy" value="#07016B" cssVar="--cn-navy" />
      <TokenSwatch name="Ink" value="#1A1B2E" cssVar="--cn-ink" />
      <TokenSwatch name="Lavender 600" value="#6254C9" cssVar="--cn-lavender-600" />
      <TokenSwatch name="Coral 500" value="#D94B36" cssVar="--cn-coral-500" copy="cssVar" />
    </Group>
  );
}
