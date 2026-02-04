export type NavPosition = 'left' | 'right'
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