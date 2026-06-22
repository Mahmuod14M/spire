export type FaVariant = 'solid' | 'regular';

export interface IconDef {
  name: string;
  variant?: FaVariant;
}

/** Font Awesome Free icon registry used across the app. */
export const ICONS = {
  menu: { name: 'bars' },
  search: { name: 'magnifying-glass' },
  bell: { name: 'bell', variant: 'regular' },
  user: { name: 'user-circle' },
  logo: { name: 'shapes' },
  sparkles: { name: 'wand-magic-sparkles' },
  microphone: { name: 'microphone' },
  send: { name: 'arrow-up' },
  close: { name: 'xmark' },
  back: { name: 'chevron-left' },
  expand: { name: 'up-right-from-square' },
  chevronDown: { name: 'chevron-down' },
  thumbsUp: { name: 'thumbs-up', variant: 'regular' },
  thumbsDown: { name: 'thumbs-down', variant: 'regular' },
  copy: { name: 'copy', variant: 'regular' },
  bookmark: { name: 'bookmark', variant: 'regular' },
  file: { name: 'file-lines', variant: 'regular' },
  fileDoc: { name: 'file-word' },
  fileCsv: { name: 'file-csv' },
  filePdf: { name: 'file-pdf' },
  filePpt: { name: 'file-powerpoint' },
  asterisk: { name: 'asterisk' },
  plus: { name: 'plus' },
  apps: { name: 'table-cells-large' },
  grid: { name: 'border-all' },
  headset: { name: 'headset' },
  home: { name: 'house' },
  briefcase: { name: 'briefcase' },
  folder: { name: 'folder', variant: 'regular' },
  documents: { name: 'file-lines', variant: 'regular' },
  tasks: { name: 'square-check' },
  star: { name: 'star', variant: 'regular' },
  calendar: { name: 'calendar', variant: 'regular' },
  shop: { name: 'store' },
  battery: { name: 'battery-three-quarters' },
  chart: { name: 'chart-line' },
  toggleOn: { name: 'toggle-on' },
  toggleOff: { name: 'toggle-off' },
  truck: { name: 'truck-fast' },
  users: { name: 'user-group' },
  cart: { name: 'cart-shopping' },
  boxes: { name: 'boxes-stacked' },
  wallet: { name: 'wallet' },
  laptop: { name: 'laptop-code' },
} as const satisfies Record<string, IconDef>;

export function faClasses(icon: IconDef, extra = ''): string {
  const variant = icon.variant ?? 'solid';
  const prefix = variant === 'regular' ? 'fa-regular' : 'fa-solid';
  return `${prefix} fa-${icon.name}${extra ? ` ${extra}` : ''}`;
}
