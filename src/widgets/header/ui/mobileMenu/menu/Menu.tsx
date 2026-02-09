import {Nav, type NavItem} from '@/widgets/header/ui/navigation/Nav.tsx';
import style from './Menu.module.scss'
import s from '../../../Header.module.scss'
import {Button} from '@/shared/button/Button.tsx';

type Props = {
  isOpen: boolean;
  items: NavItem[];
  onClick: () => void;
  onClose: () => void;
}

export const Menu = ({isOpen, items, onClick, onClose}:Props) => {
  return (
    <div className={`${style.menu} ${isOpen ? style.isOpen : ''}`} >
      <h2 className={s.title}>Максим & Инна</h2>
      <div className={style.navWrapper}>
        <Nav
        items={items}
        className={style.mobileNav}
        onClose={onClose}
      />
        <Button
          title={'Регистрация'}
          variant={'secondary'}
          className={style.button}
          onClick={onClick}
        />
      </div>
    </div>
  );
};