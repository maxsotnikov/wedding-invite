import style from './Header.module.scss'
import {Nav} from './navigation/Nav.tsx';
import {MobileMenu} from '@/widgets/header/mobileMenu/MobileMenu.tsx';
import {useState} from 'react';
import {selectNav} from '@/features/nav/navSelector.ts';
import {ModalWindow} from '@/widgets/modalWindow/ModalWindow.tsx';
import {useAppSelector} from '@/shared/hooks/hooks.ts';


export const Header = () => {
  const navState = useAppSelector(selectNav);
  // const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavAction = (action?: string) => {
    if (!action) return;
    switch (action) {
      case 'openForm':
        setIsModalOpen(true);
        break;
    }
  };

  const leftNav = navState.items.filter(i => i.position === 'left');
  const rightNav = navState.items.filter(i => i.position === 'right');

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <Nav
            items={leftNav}
            className={style.navLeft}
          />
          <a
            href={'/'}
            className={style.title}
          >Максим & Инна</a>
          <Nav
            items={rightNav}
            className={style.navRight}
            onAction={handleNavAction}
          />
          <MobileMenu />
        </div>
      </header>

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};