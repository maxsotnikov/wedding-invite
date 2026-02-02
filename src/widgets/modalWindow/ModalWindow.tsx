import style from './ModalWindow.module.scss';
import {Button} from '@/shared/button/Button.tsx';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className={style.overlay} onClick={onClose}>
          <div className={style.modal} onClick={e => e.stopPropagation()}>
            <button onClick={onClose}>x</button>
            <h2>Форма</h2>
            <input type={'text'} placeholder={'Ваше имя'}/>
            <input type={'text'} placeholder={'Ваша фамилия'}/>
            <input type={'text'} placeholder={'Ваш telegram'}/>
            <Button title={'Отправить'}/>
          </div>
        </div>
      )}
    </>
  )
}
