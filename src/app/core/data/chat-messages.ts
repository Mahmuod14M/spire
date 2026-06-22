import { ICONS } from '../../shared/icons';
import { ChatMessage } from '../models/chat-message';

const ASSISTANT_BODY =
  'Based on **HR policy** you are eligible for submitting a compensation request through Fusion platform, in accordance with the following';

export const CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    role: 'user',
    text: 'Out of Gate Analysis for 22-27 March',
  },
  {
    id: 'm2',
    role: 'assistant',
    text: ASSISTANT_BODY,
    showFeedback: true,
    actions: [
      { id: 'a1', label: 'Open Compensation Request in Fusion', icon: ICONS.file },
      { id: 'a2', label: 'View Detailed Weekly Breakdown', icon: ICONS.file },
    ],
  },
  {
    id: 'm3',
    role: 'user',
    text: 'Open Compensation Request in Fusion',
  },
  {
    id: 'm4',
    role: 'assistant',
    text: ASSISTANT_BODY,
    showFeedback: true,
    actions: [
      { id: 'a3', label: 'Open Compensation Request in Fusion', icon: ICONS.file },
      { id: 'a4', label: 'View Detailed Weekly Breakdown', icon: ICONS.file },
    ],
  },
];
