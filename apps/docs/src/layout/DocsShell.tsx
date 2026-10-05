import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink as RouterNavLink, Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { ActionIcon, AppShell, Burger, SegmentedControl, Center, Collapse, Group, Loader, NavLink, ScrollArea, TableOfContents, ThemeToggle, Tooltip, Progress, UnstyledButton } from '@jcdecor/ui';
import { Spotlight, spotlight, type SpotlightActionGroupData } from '@mantine/spotlight';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { IconBrandGithub, IconBrandNpm, IconBrandReact, IconBrandVue, IconChevronRight, IconSearch } from '@tabler/icons-react';
import { useFramework, type Framework } from '../kit/framework';
import { JcLogo } from '@jcdecor/ui';
import { allPages, navigation } from '../nav';
import classes from './DocsShell.module.css';

/** Grupo do menu lateral; grupos "Mantine · …" começam fechados, exceto o da página atual. */
function NavGroupSection({ group, pathname }: { group: (typeof navigation)[number]; pathname: string }) {
  const containsActive = group.items.some((item) => item.path === pathname);
  const collapsible = group.label.startsWith('Mantine');
  const [open, setOpen] = useState(!collapsible || containsActive);
  useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  const links = group.items.map((item) => (
    <NavLink key={item.path} component={RouterNavLink} to={item.path} end label={item.title} active={pathname === item.path} className={classes.navLink} />
  ));

  if (!collapsible) {
    return (
      <div>
        <div className={classes.groupLabel}>{group.label}</div>
        {links}
      </div>
    );
  }
  return (
    <div>
      <UnstyledButton className={classes.groupToggle} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{group.label.replace('Mantine · ', '')}</span>
        <span className={classes.groupCount}>{group.items.length}</span>
        <IconChevronRight size={14} className={classes.groupChevron} data-open={open || undefined} />
      </UnstyledButton>
      <Collapse expanded={open}>{links}</Collapse>
    </div>
  );
}

export function DocsShell() {
  const [opened, { toggle, close }] = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const navigationState = useNavigation();
  const reinitToc = useRef<() => void>(() => {});
  const { framework, setFramework } = useFramework();
  useHotkeys([['mod+K', () => spotlight.open()]]);

  useEffect(() => {
    close();
    if (!location.hash) window.scrollTo({ top: 0 });
    const t = setTimeout(() => reinitToc.current(), 120);
    return () => clearTimeout(t);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const actions: SpotlightActionGroupData[] = navigation.map((group) => ({
    group: group.label,
    actions: group.items.map((item) => ({
      id: item.path,
      label: item.title,
      description: group.label,
      keywords: item.keywords,
      onClick: () => navigate(item.path),
    })),
  }));

  const index = allPages.findIndex((page) => page.path === location.pathname);
  const prev = index > 0 ? allPages[index - 1] : null;
  const next = index >= 0 && index < allPages.length - 1 ? allPages[index + 1] : null;

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 272, breakpoint: 'sm', collapsed: { mobile: !opened } }}>
      <AppShell.Header className={classes.header}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="#fff" aria-label="Menu" />
        <Link to="/" className={classes.brand}>
          <JcLogo variant="dark" size={30} />
          <span className={classes.dsLabel}>Design System</span>
          <span className={classes.version}>v0.1</span>
        </Link>
        <button type="button" className={classes.search} onClick={() => spotlight.open()}>
          <IconSearch size={16} />
          <span>Buscar componentes</span>
          <kbd>Ctrl K</kbd>
        </button>
        <Group gap={4} wrap="nowrap">
          <SegmentedControl
            size="xs"
            className={classes.frameworkSwitch}
            value={framework}
            onChange={(value) => setFramework(value as Framework)}
            aria-label="Framework dos exemplos"
            data={[
              { value: 'react', label: <Group gap={4} wrap="nowrap"><IconBrandReact size={14} />React</Group> },
              { value: 'vue', label: <Group gap={4} wrap="nowrap"><IconBrandVue size={14} />Vue</Group> },
            ]}
          />
          <Tooltip label="npm">
            <ActionIcon component="a" href={`https://www.npmjs.com/package/@jcdecor/${framework === 'vue' ? 'vue' : 'ui'}`} target="_blank" size="lg" className={`${classes.headerIcon} ${classes.headerExtra}`} aria-label="npm">
              <IconBrandNpm size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Repositório">
            <ActionIcon component="a" href="https://github.com/JC-Decor/design-system" target="_blank" size="lg" className={`${classes.headerIcon} ${classes.headerExtra}`} aria-label="Repositório">
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Tooltip>
          <ThemeToggle className={classes.headerIcon} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <ScrollArea className={classes.navbar} type="auto">
          {navigation.map((group, index) => (
            <div key={group.label}>
              {group.label.startsWith('Mantine') && !navigation[index - 1]?.label.startsWith('Mantine') && (
                <div className={classes.groupLabel}>Mantine temado</div>
              )}
              <NavGroupSection group={group} pathname={location.pathname} />
            </div>
          ))}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        {navigationState.state === 'loading' && (
          <Progress value={100} animated size={2} radius={0} pos="fixed" top={60} left={0} right={0} style={{ zIndex: 200 }} />
        )}
        <div className={classes.main}>
          <div className={classes.content} id="docs-content">
            <Suspense fallback={<Center py={80}><Loader /></Center>}>
              <Outlet />
            </Suspense>
            {index >= 0 && (
              <nav className={classes.pager} aria-label="Paginação">
                {prev ? (
                  <Link to={prev.path} className={classes.pagerLink}>
                    <small>← Anterior</small>
                    <strong>{prev.title}</strong>
                  </Link>
                ) : <span />}
                {next ? (
                  <Link to={next.path} className={classes.pagerLink} style={{ textAlign: 'right' }}>
                    <small>Próximo →</small>
                    <strong>{next.title}</strong>
                  </Link>
                ) : <span />}
              </nav>
            )}
          </div>
          <aside className={classes.toc}>
            <div className={classes.tocTitle}>Nesta página</div>
            <TableOfContents
              key={location.pathname}
              variant="light"
              size="sm"
              radius="sm"
              reinitializeRef={reinitToc}
              scrollSpyOptions={{ selector: '#docs-content [data-toc]' }}
              getControlProps={({ data }) => ({
                onClick: () => data.getNode().scrollIntoView({ behavior: 'smooth', block: 'start' }),
                children: data.value,
              })}
            />
          </aside>
        </div>
      </AppShell.Main>

      <Spotlight
        actions={actions}
        nothingFound="Nada encontrado"
        highlightQuery
        limit={12}
        searchProps={{ leftSection: <IconSearch size={18} />, placeholder: 'Buscar componentes, tokens, padrões…' }}
      />
    </AppShell>
  );
}
