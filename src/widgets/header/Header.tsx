import style from './Header.module.scss'
import {Nav} from '@/widgets/header/ui/navigation/Nav.tsx';
import {MobileMenu} from '@/widgets/header/ui/mobileMenu/MobileMenu.tsx';
import {useState} from 'react';
import {selectNav} from '@/features/nav/navSelector.ts';
import {ModalWindow} from '@/widgets/modalWindow/ModalWindow.tsx';
import {useAppSelector} from '@/shared/hooks/hooks.ts';
import {Link} from 'react-router';

export const Header = () => {
  const navState = useAppSelector(selectNav);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavAction = (action?: string) => {
    if (!action) return;
    if (action === 'openForm') {
      setIsModalOpen(true)
    }
  };

  const leftNav = navState.items.filter(i => i.position === 'left');
  const rightNav = navState.items.filter(i => i.position === 'right');
  const mobileNav = navState.items;

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Nav
            items={leftNav}
            className={style.navLeft}
          />
          <Link
            to={'/'}
            className={style.title}
          >Максим & Инна</Link>
          <Nav
            items={rightNav}
            className={style.navRight}
            onAction={handleNavAction}
          />
          <MobileMenu
            items={mobileNav}
            onAction={handleNavAction}
          />
        </div>
      </header>

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};