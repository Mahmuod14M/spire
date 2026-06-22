import { ICONS } from '../../shared/icons';
import { ServiceCategory } from '../models/service-category';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'fleet', name: 'Fleet & Transportation', icon: ICONS.truck, accent: '#19c6c6' },
  { id: 'hr', name: 'Human Resources', icon: ICONS.users, accent: '#ff7a59' },
  { id: 'procurement', name: 'Procurement & Sourcing', icon: ICONS.cart, accent: '#a855f7' },
  { id: 'logistics', name: 'Logistics & Inventory', icon: ICONS.boxes, accent: '#22c55e' },
  { id: 'finance', name: 'Finance & Payroll', icon: ICONS.wallet, accent: '#3b82f6' },
  { id: 'it', name: 'IT & Support', icon: ICONS.laptop, accent: '#f59e0b' },
];
