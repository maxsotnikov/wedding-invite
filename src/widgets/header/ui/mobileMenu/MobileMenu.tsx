import {BurgerButton} from '@/shared/burgerButton/BurgerButton.tsx';
import {Menu} from './menu/Menu.tsx';
import style from './MobileMenu.module.scss'
import type {NavItem} from '@/widgets/header/ui/navigation/Nav.tsx';

type Props = {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const MobileMenu = ({items, isOpen, onToggle, onClose, onRegisterClick}: Props) => {
  return (
    <div className={style.mobileMenu}>
      <BurgerButton
        isOpen={isOpen}
        onClick={onToggle}
      />
      <Menu
        isOpen={isOpen}
        items={items}
        onClick={onRegisterClick}
        onClose={onClose}
      />
    </div>
  );
};