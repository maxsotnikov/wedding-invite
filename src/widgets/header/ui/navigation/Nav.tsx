import style from './Nav.module.scss'
import {NavLink} from 'react-router';

export type NavItem = {
  id: string;
  title: string;
  link: string;
}

export type NavState = {
  items: NavItem[];
}

type Props = {
  items: NavItem[];
  className: string;
  onClose?: () => void;
};

export const Nav = ({items, className, onClose}: Props) => {
  return (
    <nav className={className}>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link || '/'} onClick={onClose} className={({ isActive }) => isActive ? `${style.link} ${style.activeNavLink}` : style.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};