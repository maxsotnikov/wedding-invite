import style from './ModalWindow.module.scss';
import {BurgerButton} from '@/shared/burgerButton/BurgerButton.tsx';
import {RegistryForm} from './registryForm/RegistryForm.tsx';
import {useEffect} from 'react';

type Props = {
  isModalOpen: boolean;
  isMobileMenuOpen?: boolean;
  onClose: () => void;
};

export const ModalWindow = ({isModalOpen,isMobileMenuOpen, onClose}: Props) => {
  useEffect(() => {
    // Блокируем скролл и убираем возможные скачки верстки из-за исчезновения полосы прокрутки
    document.body.style.overflow =
      isModalOpen || isMobileMenuOpen ? 'hidden' : '';

    return () => {
      // Чистим эффект при размонтировании компонента (на всякий случай)
      document.body.style.overflow = '';
    };
  }, [isModalOpen, isMobileMenuOpen]);

  return (
    <div className={`${style.overlay} ${isModalOpen ? style.isOpen : ''}`}>
      <div
        className={style.modal}
        onClick={e => e.stopPropagation()}
      >
        <h2 className={style.title}>Регистрация</h2>
        <BurgerButton
          isOpen={true}
          onClick={() => onClose()}
          className={style.closeButton}
        />
        <RegistryForm
          onClose={onClose}
          isOpen={isModalOpen}
          className={style.navWrapper}
        />
      </div>
    </div>
  )
}
