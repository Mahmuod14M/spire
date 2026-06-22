import { IconDef } from '../../shared/icons';

export interface ContextFile {
  id: string;
  name: string;
  time: string;
  icon: IconDef;
  accent: string;
  enabled: boolean;
}
