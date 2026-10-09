// @generated sincronizado de packages/ui/src/chat/types.ts — edite lá e rode `npm run sync -w @jcdecor/vue`
export type ChatMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'error';

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  /** Cor do avatar com iniciais (cor do tema) */
  color?: string;
}

export interface ChatAttachment {
  name: string;
  url?: string;
  /** `image` exibe miniatura; `file` exibe chip com nome/tamanho */
  type?: 'image' | 'file';
  /** Tamanho em bytes */
  size?: number;
}

export interface ChatMessageData {
  id: string;
  authorId: string;
  text?: string;
  createdAt: Date | string | number;
  status?: ChatMessageStatus;
  attachments?: ChatAttachment[];
  /** Mensagem de sistema (centralizada, sem bolha) */
  system?: boolean;
  /** `plain` = sem bolha e em largura total (ex.: respostas longas de assistente com markdown/tabelas) @default 'bubble' */
  variant?: 'bubble' | 'plain';
}

export interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  color?: string;
  lastMessage?: string;
  lastMessageAt?: Date | string | number;
  unread?: number;
  online?: boolean;
  /** Selo/etiqueta (ex.: "Pedido #1234") */
  tag?: string;
}
