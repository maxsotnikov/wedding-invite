import style from './Header.module.scss'
import {Nav} from '@/widgets/header/ui/navigation/Nav.tsx';
import {MobileMenu} from '@/widgets/header/ui/mobileMenu/MobileMenu.tsx';
import {useState} from 'react';
import {selectNav} from '@/features/nav/navSelector.ts';
import {ModalWindow} from '@/widgets/modalWindow/ModalWindow.tsx';
import {useAppSelector} from '@/shared/hooks/hooks.ts';
import {Link} from 'react-router';
import {Button} from '@/shared/button/Button.tsx';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navState = useAppSelector(selectNav);
  const nav = navState.items;

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Nav
            items={nav}
            className={style.nav}
          />
          <Link
            to={'/'}
            className={style.title}
          >Максим & Инна</Link>
          <Button
            title={'Регистрация'}
            variant={'secondary'}
            className={style.button}
            onClick={() => setIsModalOpen(true)}
          />
          <MobileMenu
            isOpen={isMobileMenuOpen}
            items={nav}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onClose={() => setIsMobileMenuOpen(false)}
            onRegisterClick={() => {
              setIsMobileMenuOpen(false) //при закрытии модального окна закроется и мобильное меню
              setIsModalOpen(true);
            }}
          />
        </div>
      </header>
      <ModalWindow
        isModalOpen={isModalOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};