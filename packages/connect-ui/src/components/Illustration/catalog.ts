import { useMantineTheme } from '@mantine/core';

declare const __CONNECT_UI_VERSION__: string;

/**
 * Ilustrações do Connect (unDraw — licença livre para uso comercial, sem atribuição obrigatória: https://undraw.co/license).
 * Os SVGs vão no pacote em `@jcdecor/connect-ui/illustrations/<arquivo>.svg`; o JS só carrega a URL, nunca a arte.
 * Nomes iguais aos do `ILLUSTRATIONS` do connect-jc (camelCase e kebab-case).
 */
export const ILLUSTRATION_FILES = {
  news: 'news.svg',
  chat: 'casual-chat.svg',
  collaboration: 'collaboration.svg',
  engineeringTeam: 'engineering-team.svg',
  meetTeam: 'meet-the-team.svg',
  businessPlan: 'business-plan.svg',
  process: 'process.svg',
  logistics: 'logistics.svg',
  document: 'markdown-file.svg',
  approval: 'approve.svg',
  confirmed: 'order-confirmed.svg',
  profile: 'about-me.svg',
  dayOff: 'a-day-off.svg',
  walkingOutside: 'walking-outside.svg',
  questions: 'questions.svg',
  buildMode: 'build-mode.svg',
  signIn: 'sign-in.svg',
  dayDreaming: 'day-dreaming.svg',
  teamCollaboration: 'team-collaboration.svg',
  teamSpirit: 'team-spirit.svg',
  workFriends: 'work-friends.svg',
  notFound: 'page-not-found.svg',
  uniform: 'uniform.svg',

  'a-day-off': 'a-day-off.svg',
  'about-me': 'about-me.svg',
  approve: 'approve.svg',
  'build-mode': 'build-mode.svg',
  'business-plan': 'business-plan.svg',
  'casual-chat': 'casual-chat.svg',
  'day-dreaming': 'day-dreaming.svg',
  'engineering-team': 'engineering-team.svg',
  'markdown-file': 'markdown-file.svg',
  'meet-the-team': 'meet-the-team.svg',
  'order-confirmed': 'order-confirmed.svg',
  'page-not-found': 'page-not-found.svg',
  'sign-in': 'sign-in.svg',
  'team-collaboration': 'team-collaboration.svg',
  'team-spirit': 'team-spirit.svg',
  'walking-outside': 'walking-outside.svg',
  'work-friends': 'work-friends.svg',
} as const;

export type IllustrationName = keyof typeof ILLUSTRATION_FILES;
/** Nome do catálogo ou URL própria (SVG/PNG) */
export type IllustrationSource = IllustrationName | (string & {});

/** Nomes canônicos (um por arquivo, sem os aliases kebab-case) — útil para galerias. */
export const illustrationNames = (Object.keys(ILLUSTRATION_FILES) as IllustrationName[]).filter((name) => !name.includes('-'));

/** Padrão: os arquivos desta versão publicados no npm, via jsDelivr. */
export const DEFAULT_ILLUSTRATION_BASE_URL = `https://cdn.jsdelivr.net/npm/@jcdecor/connect-ui@${__CONNECT_UI_VERSION__}/illustrations/`;

export const isIllustrationName = (value: unknown): value is IllustrationName =>
  typeof value === 'string' && Object.prototype.hasOwnProperty.call(ILLUSTRATION_FILES, value);

/** URL de uma ilustração do catálogo; URLs próprias passam direto. */
export function illustrationUrl(source: IllustrationSource, baseUrl: string = DEFAULT_ILLUSTRATION_BASE_URL) {
  if (!isIllustrationName(source)) return source;
  return `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}${ILLUSTRATION_FILES[source]}`;
}

/**
 * Resolve nome → URL usando `theme.other.illustrationBaseUrl` quando definido
 * (ex.: para servir os SVGs do próprio app em vez do CDN).
 */
export function useIllustrationUrl(source: IllustrationSource | undefined) {
  const theme = useMantineTheme();
  if (!source) return undefined;
  return illustrationUrl(source, (theme.other?.illustrationBaseUrl as string | undefined) ?? DEFAULT_ILLUSTRATION_BASE_URL);
}
