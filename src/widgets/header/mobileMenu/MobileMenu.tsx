import {BurgerButton} from '@/widgets/header/mobileMenu/burgerButton/BurgerButton.tsx';
import {useState} from 'react';
import {Menu} from '@/widgets/header/mobileMenu/Menu.tsx';
import style from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const[isOpen, setOpen] = useState(false);

  return (
    <div className={style.menu}>
      <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
      <Menu isOpen={isOpen} />
    </div>
  );
};