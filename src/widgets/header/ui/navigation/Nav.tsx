import style from './Nav.module.scss'
import {Button} from '@/shared/button/Button.tsx';
import type {NavItem} from '@/features/nav/types.ts';
import {Link} from 'react-router';

type Props = {
  items: NavItem[];
  className: string;
  onAction?: (action: NavItem['action']) => void;
};

export const Nav = ({items, onAction, className}: Props) => {
  return (
    <nav className={className}>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.id}>
            {item.isButton ? (
              <Button
                title={item.title}
                onClick={() => onAction && onAction(item.action)} //onAction?.(item.action) можно вот так записать
                variant={'secondary'}
              />
            ) : (
              <Link
                to={item.link || '/'}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};