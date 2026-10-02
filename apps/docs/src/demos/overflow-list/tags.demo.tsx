import { Badge, OverflowList, Paper, Text, Tooltip } from '@jcdecor/ui';

const tags = ['Sala de estar', 'Quarto', 'Escandinavo', 'Madeira', 'Freijó', 'Painel ripado', 'Iluminação LED', 'Home office', 'Sustentável', 'Fácil instalação', 'Antirriscos'];

export default function Demo() {
  return (
    <Paper withBorder p="md" w="100%" maw={520} style={{ resize: 'horizontal', overflow: 'hidden', minWidth: 200 }}>
      <Text fz="xs" c="var(--ds-text-3)" mb="xs">
        Arraste o canto para redimensionar
      </Text>
      <OverflowList
        data={tags}
        gap={6}
        renderItem={(tag) => (
          <Badge key={tag} color="obsidian">
            {tag}
          </Badge>
        )}
        renderOverflow={(ocultas) => (
          <Tooltip label={ocultas.join(', ')} multiline w={220}>
            <Badge variant="outline" color="obsidian" style={{ cursor: 'default' }}>
              +{ocultas.length}
            </Badge>
          </Tooltip>
        )}
      />
    </Paper>
  );
}
