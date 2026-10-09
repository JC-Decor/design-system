import { Stack } from '@jcdecor/ui';
import { TypingIndicator } from '@jcdecor/ui/chat';

export default function Demo() {
  return (
    <Stack gap="md" align="flex-start">
      <TypingIndicator />
      <TypingIndicator names={['Ana']} />
      <TypingIndicator names={['Ana', 'Bruno']} />
      <TypingIndicator names={['Ana', 'Bruno', 'Lucas']} />
    </Stack>
  );
}
