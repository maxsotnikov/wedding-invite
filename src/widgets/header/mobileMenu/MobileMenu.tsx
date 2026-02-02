import {BurgerButton} from './burgerButton/BurgerButton.tsx';
import {useEffect, useState} from 'react';
import {Menu} from './menu/Menu.tsx';
import style from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const[isOpen, setOpen] = useState(false);

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
    <div className={style.menu}>
      <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
      <Menu isOpen={isOpen} />
    </div>
  );
};