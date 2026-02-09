import style from './ModalWindow.module.scss';
import {BurgerButton} from '@/shared/burgerButton/BurgerButton.tsx';
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
        <h2 className={style.title}>Регистрация</h2>
        <div className={style.navWrapper}>
          <BurgerButton
          isOpen={true}
          onClick={() => onClose()}
          className={style.closeButton}
        />
          <RegistryForm
            onClose={onClose}
            isOpen={isOpen}
          /></div>
      </div>
    </div>
  )
}
