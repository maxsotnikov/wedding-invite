export type NavPosition = 'left' | 'right' | 'mobile'
export type NavAction = 'openForm';

export type NavItem = {
  id?: string;
  title: string;
  link?: string;
  isButton?: boolean;
  position?: NavPosition;
  action?: NavAction;
}

export type NavState = {
  items: NavItem[];
}