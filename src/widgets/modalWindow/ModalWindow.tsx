import style from './ModalWindow.module.scss';
import {Button} from '@/shared/button/Button.tsx';
import {type KeyboardEvent, useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {BurgerButton} from '@/widgets/header/mobileMenu/burgerButton/BurgerButton.tsx';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalWindow = ({isOpen, onClose}: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formRef.current) return

    emailjs
      .sendForm('service_k05yrpx', 'template_ft8t548', formRef.current, {
        publicKey: 'Y3ckFrswkXhxC46dT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          onClose()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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

  useEffect(() => {
    if(!isOpen) return;

    const onEsc = (e: KeyboardEvent) => {
      if(e.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [isOpen, onClose]);

  return (
    <div
      className={`${style.overlay} ${isOpen ? style.isOpen : ''}`}
      // onClick={onClose}
    >
      <div
        className={style.modal}
        onClick={e => e.stopPropagation()}
      >
        <BurgerButton isOpen={true} onClick={() => onClose()} className={style.closeButton}/>
        <h2>Регистрация</h2>
        <form className={style.form}
              ref={formRef} onSubmit={sendEmail}>
          <label>
            Имя
            <input
              type={'text'}
              name={'user_name'}
              required
              // placeholder={'Ваше имя'}
            />
          </label>
          <label>
            Фамилия
            <input
              type={'text'}
              name={'user_surname'}
              required
              // placeholder={'Ваша фамилия'}
            />
          </label>
          <label>
            Телеграм
            <input
              className={style.telegramInput}
              type={'text'}
              name={'email'}
              placeholder={'ваш телеграм @maxsotnikov'}
              required
            />
          </label>
          <Button
            title={'Отправить'}
            type={'submit'}
            className={style.button}
          />
        </form>

      </div>
    </div>
  )
}
