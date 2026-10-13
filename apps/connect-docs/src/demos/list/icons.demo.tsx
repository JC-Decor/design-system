import { Icon, List, ThemeIcon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <List
      spacing="sm"
      center
      icon={
        <ThemeIcon color="green" variant="light" size={24} radius="xl">
          <Icon name="check" size={14} />
        </ThemeIcon>
      }
    >
      <List.Item>Vale-refeição e vale-alimentação flexíveis</List.Item>
      <List.Item>Plano de saúde e odontológico para dependentes</List.Item>
      <List.Item>Day off no mês do aniversário</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="coral" variant="light" size={24} radius="xl">
            <Icon name="x" size={14} />
          </ThemeIcon>
        }
      >
        Auxílio home office (apenas para o modelo remoto)
      </List.Item>
    </List>
  );
}
