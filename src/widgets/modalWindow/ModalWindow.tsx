import style from './ModalWindow.module.scss';
import {BurgerButton} from '@/widgets/header/mobileMenu/burgerButton/BurgerButton.tsx';
import {RegistryForm} from './registryForm/RegistryForm.tsx';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({isOpen, onClose}: Props) => {
  return (
    <div className={`${style.overlay} ${isOpen ? style.isOpen : ''}`}>
      <div
        className={style.modal}
        onClick={e => e.stopPropagation()}
      >
        <BurgerButton
          isOpen={true}
          onClick={() => onClose()}
          className={style.closeButton}
        />
        <h2>Регистрация</h2>
        <RegistryForm
          onClose={onClose}
          isOpen={isOpen}
        />
      </div>
    </div>
  )
}
