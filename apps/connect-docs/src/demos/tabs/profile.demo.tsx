import { Icon, Tabs, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Tabs defaultValue="visao-geral" w="100%">
      <Tabs.List>
        <Tabs.Tab value="visao-geral" leftSection={<Icon name="user" size={15} />}>
          Visão geral
        </Tabs.Tab>
        <Tabs.Tab value="documentos" leftSection={<Icon name="doc" size={15} />}>
          Documentos
        </Tabs.Tab>
        <Tabs.Tab value="ferias" leftSection={<Icon name="palm" size={15} />}>
          Férias
        </Tabs.Tab>
        <Tabs.Tab value="historico" leftSection={<Icon name="clock" size={15} />}>
          Histórico (12)
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="visao-geral" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Analista de RH em Pessoas & Cultura desde março de 2022. Gestor direto: Carlos Menezes.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="documentos" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Contrato de trabalho, ASO admissional e 3 holerites disponíveis para download.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="ferias" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Saldo de 18 dias. Próximas férias programadas de 18/11 a 02/12.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="historico" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Promoção a Analista Pleno em 01/2025 e mudança de equipe em 06/2024.
        </Text>
      </Tabs.Panel>
    </Tabs>
  );
}
