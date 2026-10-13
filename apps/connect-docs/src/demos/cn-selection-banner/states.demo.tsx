import { Button, Icon, SelectionBanner, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const common = {
  matchingTotal: 120,
  entityLabel: 'colaborador',
  entityLabelPlural: 'colaboradores',
  onSelectAllMatching: () => {},
  onClear: () => {},
};

export default function Demo() {
  return (
    <Stack gap={0}>
      <SelectionBanner {...common} selectedCount={1} allMatching={false} showSelectAllMatching={false} />
      <SelectionBanner
        {...common}
        selectedCount={20}
        allMatching={false}
        showSelectAllMatching
        actions={<Button leftSection={<Icon name="megaphone" size={15} />}>Enviar comunicado</Button>}
      />
      <SelectionBanner
        {...common}
        selectedCount={20}
        allMatching
        showSelectAllMatching={false}
        actions={
          <>
            <Button variant="ghost" leftSection={<Icon name="download" size={15} />}>
              Exportar
            </Button>
            <Button leftSection={<Icon name="megaphone" size={15} />}>Enviar comunicado</Button>
          </>
        }
      />
    </Stack>
  );
}
