import { IconDef } from '../../shared/icons';

export type ChatRole = 'user' | 'assistant';

export interface ChatAction {
  id: string;
  label: string;
  icon: IconDef;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  /** Rich text where `**bold**` segments are emphasised when rendered. */
  text: string;
  actions?: ChatAction[];
  /** Show the like/dislike/copy toolbar (assistant messages only). */
  showFeedback?: boolean;
}
