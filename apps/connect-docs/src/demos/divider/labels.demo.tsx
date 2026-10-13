import { Divider, Icon, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="lg" w="100%">
      <Divider label="ou entre com" labelPosition="center" />
      <Divider label="Dados pessoais" labelPosition="left" />
      <Divider
        label={
          <>
            <Icon name="calendar" size={12} />
            <span style={{ marginLeft: 4 }}>Próximas férias</span>
          </>
        }
        labelPosition="right"
      />
    </Stack>
  );
}
