import {BurgerButton} from './burgerButton/BurgerButton.tsx';
import {useEffect, useState} from 'react';
import {Menu} from './menu/Menu.tsx';
import style from './MobileMenu.module.scss'
import type {NavAction, NavItem} from '@/features/nav/types.ts';

type Props = {
  items: NavItem[];
  onAction?: (action: NavItem['action']) => void;
}

export const MobileMenu = ({items, onAction}: Props) => {
  const[isOpen, setOpen] = useState(false);

  const handleAction = (action?: NavAction) => {
    onAction?.(action);
    setOpen(false); // закрываем меню
  };

  useEffect(() => {
    if(isOpen) {
      // Блокируем скролл и убираем возможные скачки верстки из-за исчезновения полосы прокрутки
      document.body.style.overflow = 'hidden';
    } else {
      // Возвращаем скролл
      document.body.style.overflow = '';
    }
    // Чистим эффект при размонтировании компонента (на всякий случай)
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={style.mobileMenu}>
      <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
      <Menu isOpen={isOpen} items={items} onAction={handleAction}/>
    </div>
  );
};