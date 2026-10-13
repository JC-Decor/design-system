import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Avatar } from '@mantine/core';
import clsx from 'clsx';
import { tones } from '../../theme/tokens';
import type { UserConfig } from '../AppSidebar/AppSidebar.types';
import { DropdownMenu, type DropdownMenuEntry } from '../DropdownMenu';
import type { GlobalSearchBoxProps } from '../GlobalSearchBox';
import { Icon } from '../Icon';
import { ThemeToggle } from '../ThemeToggle';
import { useAvatarSrc } from '../../utils/avatar';
import classes from './AppHeader.module.css';

export interface HeaderActionProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  /** Nome de ícone do Connect ou nó React */
  icon: string | ReactNode;
  /** Rótulo acessível (aria-label e title) */
  label: string;
  /** Contador no canto (ex.: notificações não lidas). `0`/vazio esconde. */
  badge?: ReactNode;
}

/** Botão de ícone do cabeçalho (`.hd-icon`) com selo opcional (`.hd-badge`). Pode ser gatilho de Menu/Popover. */
export function HeaderAction({ icon, label, badge, className, type = 'button', ...others }: HeaderActionProps) {
  const showBadge = badge !== undefined && badge !== null && badge !== false && badge !== 0 && badge !== '';
  return (
    <button
      type={type}
      className={clsx(classes.icon, className)}
      aria-label={showBadge ? `${label} (${badge})` : label}
      title={label}
      {...others}
    >
      {typeof icon === 'string' ? <Icon name={icon} size={18} /> : icon}
      {showBadge && (
        <span className={classes.badge} aria-hidden="true">
          {badge}
        </span>
      )}
    </button>
  );
}
HeaderAction.displayName = '@jcdecor/connect-ui/HeaderAction';

export interface AppHeaderProps {
  title?: ReactNode;
  /** Linha mono abaixo do título */
  subtitle?: ReactNode;
  /** Trilha acima do título; o último item é a página atual */
  breadcrumb?: ReactNode[];
  /** Usuário do chip à direita (avatar com iniciais `seed` no tom `tone`, ou `picture`) */
  user?: UserConfig;
  /** Itens do menu do usuário (Meu perfil, Preferências, Sair…). Sem itens, o chip não abre menu. */
  userMenuItems?: DropdownMenuEntry[];
  /** Mostra o botão hambúrguer (mobile) */
  showMenuButton?: boolean;
  menuOpen?: boolean;
  onMenuToggle?: () => void;
  /** id da sidebar controlada pelo hambúrguer @default 'app-sidebar' */
  menuControls?: string;
  /** Busca (normalmente `<GlobalSearchBox />`). No modo compacto vira um botão que expande a busca. */
  search?: ReactNode;
  /** Busca recolhida atrás de um ícone (mobile) @default showMenuButton */
  compactSearch?: boolean;
  /** Ícones à direita (ex.: `<HeaderAction icon="bell" label="Notificações" badge={3} />`) */
  actions?: ReactNode;
  /** Mostra o ThemeToggle antes das ações @default true */
  withThemeToggle?: boolean;
  /** Conteúdo extra abaixo da linha principal (ex.: abas da página) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

function UserChipContent({ user, withMenu }: { user?: UserConfig; withMenu: boolean }) {
  const tone = user?.tone ?? 'lavender';
  const src = useAvatarSrc(user?.picture);
  return (
    <>
      <Avatar
        size={36}
        radius="xl"
        src={src}
        alt={user?.name ?? 'Usuário'}
        variant="light"
        color={tones[tone].color}
        className={classes.avatar}
      >
        {user?.seed ?? 'A'}
      </Avatar>
      <span className={classes.userMeta}>
        <span className={classes.userName}>{user?.name ?? 'Usuário'}</span>
        {user?.role && <span className={classes.userRole}>{user.role}</span>}
      </span>
      {withMenu && <Icon name="chev" size={16} className={classes.userChevron} />}
    </>
  );
}

/** Chip clicável do usuário (gatilho do menu; recebe ref/aria do Menu). */
function UserChipButton({ user, className, ...others }: { user?: UserConfig } & ComponentPropsWithRef<'button'>) {
  return (
    <button type="button" className={clsx(classes.user, className)} aria-label="Menu do usuário" {...others}>
      <UserChipContent user={user} withMenu />
    </button>
  );
}

/**
 * Cabeçalho do Connect (`.hd`): trilha + título + subtítulo, busca, ações com selo, tema e chip do usuário.
 * Apresentacional: notificações, autenticação e navegação ficam com quem usa (via props/slots).
 */
export function AppHeader({
  title,
  subtitle,
  breadcrumb,
  user,
  userMenuItems,
  showMenuButton = false,
  menuOpen,
  onMenuToggle,
  menuControls = 'app-sidebar',
  search,
  compactSearch = showMenuButton,
  actions,
  withThemeToggle = true,
  children,
  className,
  style,
}: AppHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);
  useEffect(() => {
    if (!compactSearch) setSearchOpen(false);
  }, [compactSearch]);

  // No modo compacto, injeta expanded/inputRef/onCloseExpanded no GlobalSearchBox recebido
  const expandedSearch =
    isValidElement(search) && searchOpen
      ? cloneElement(search as ReactElement<GlobalSearchBoxProps>, {
          expanded: true,
          inputRef: searchInputRef,
          onCloseExpanded: () => setSearchOpen(false),
        })
      : search;

  const withMenu = Boolean(userMenuItems?.length);

  return (
    <header className={clsx(classes.root, className)} style={style}>
      {showMenuButton && (
        <button
          type="button"
          className={classes.menuButton}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={!!menuOpen}
          aria-controls={menuControls}
          onClick={onMenuToggle}
        >
          <Icon name="menu" size={20} />
        </button>
      )}

      <div className={classes.titleBlock}>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className={classes.crumbs} aria-label="Trilha de navegação">
            {breadcrumb.map((c, i) => {
              const last = i === breadcrumb.length - 1;
              return (
                <span key={i} className={classes.crumb}>
                  <span data-current={last || undefined} aria-current={last ? 'page' : undefined}>
                    {c}
                  </span>
                  {!last && <Icon name="chev-r" size={11} />}
                </span>
              );
            })}
          </nav>
        )}
        {title && <h1 className={classes.title}>{title}</h1>}
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      </div>

      {search &&
        (compactSearch ? (
          <>
            <button
              type="button"
              className={clsx(classes.icon, classes.searchToggle)}
              aria-label={searchOpen ? 'Fechar busca' : 'Abrir busca'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name="search" size={18} />
            </button>
            {searchOpen && expandedSearch}
          </>
        ) : (
          search
        ))}

      <div className={classes.right}>
        {withThemeToggle && <ThemeToggle />}
        {actions}
        {(user || withMenu) && (
          <>
            <div className={classes.sep} />
            {withMenu ? (
              <DropdownMenu align="end" width={200} items={userMenuItems!} trigger={<UserChipButton user={user} />} />
            ) : (
              <div className={classes.user} data-static>
                <UserChipContent user={user} withMenu={false} />
              </div>
            )}
          </>
        )}
      </div>
      {children && <div className={classes.extra}>{children}</div>}
    </header>
  );
}
AppHeader.displayName = '@jcdecor/connect-ui/AppHeader';
