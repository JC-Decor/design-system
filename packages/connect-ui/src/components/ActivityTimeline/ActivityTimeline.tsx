import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { PrioName, ToneName } from '../../theme/tokens';
import { PersonAvatar } from '../PersonAvatar';
import { PrioBadge } from '../PrioBadge';
import classes from './ActivityTimeline.module.css';

export type ActivityTimelineTone = 'green' | 'lavender' | 'yellow' | 'blue' | 'coral';

const TONE_PRIO: Record<ActivityTimelineTone, PrioName> = { coral: 'high', yellow: 'med', green: 'low', blue: 'info', lavender: 'info' };

export interface ActivityTimelineEvent {
  /** Quando (texto já formatado: "Hoje, 09:42") */
  when: string;
  /** Quem sofreu a ação */
  who: { seed: string; tone: ToneName | (string & {}); name: string; src?: string };
  /** O que aconteceu ("mudou para") */
  what: string;
  /** Novo estado, mostrado num selo */
  to: string;
  /** Quem executou */
  by: string;
  /** Cor do selo: coral = alta, yellow = média, green = baixa, blue/lavender = info */
  tone: ActivityTimelineTone;
}

export interface ActivityTimelineProps extends BoxProps, ElementProps<'ol'> {
  events: ActivityTimelineEvent[];
  /** Diâmetro dos avatares @default 36 */
  avatarSize?: number;
}

/** Linha do tempo de atividades do Connect (antigo `Timeline`): avatar, frase com selo de estado e metadados mono. */
export function ActivityTimeline({ events, avatarSize = 36, className, ...others }: ActivityTimelineProps) {
  return (
    <Box component="ol" className={clsx(classes.root, className)} {...others}>
      {events.map((e, i) => (
        <li key={`${e.when}-${i}`} className={classes.row}>
          <div className={classes.side}>
            <PersonAvatar size={avatarSize} seed={e.who.seed} tone={e.who.tone as ToneName} src={e.who.src} alt={e.who.name} />
            <div className={classes.line} />
          </div>
          <div className={classes.body}>
            <div className={classes.text}>
              <b>{e.who.name}</b> {e.what} <PrioBadge tone={TONE_PRIO[e.tone] ?? 'info'} className={classes.badge}>{e.to}</PrioBadge>
            </div>
            <div className={classes.meta}>
              {e.when} · por {e.by}
            </div>
          </div>
        </li>
      ))}
    </Box>
  );
}
ActivityTimeline.displayName = '@jcdecor/connect-ui/ActivityTimeline';
