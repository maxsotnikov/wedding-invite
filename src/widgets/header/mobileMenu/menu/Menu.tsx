import {Nav} from '@/widgets/header/navigation/Nav.tsx';
import style from './Menu.module.scss'
import s from '../../Header.module.scss'
import type {NavItem} from '@/features/nav/types.ts';

type Props = {
  isOpen: boolean;
  items: NavItem[];
  onAction?: (action: NavItem['action']) => void;
}

export const Menu = ({isOpen, items, onAction}:Props) => {
  return (
    <div className={`${style.menu} ${isOpen ? style.isOpen : ''}`} >
      <a href={'/'} className={s.title}>Максим & Инна</a>
      <Nav items={items} className={style.mobileNav} onAction={onAction}/>
    </div>
  );
};