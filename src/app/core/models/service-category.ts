import { IconDef } from '../../shared/icons';

export interface ServiceCategory {
  id: string;
  name: string;
  icon: IconDef;
  /** Tailwind-friendly accent used for the icon chip background tint. */
  accent: string;
}
