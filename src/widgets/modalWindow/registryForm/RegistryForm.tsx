import style from './RegistryForm.module.scss';
import {Button} from '@/shared/button/Button.tsx';
import {type KeyboardEvent, useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FormInput} from './formInput/FormInput.tsx';

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const RegistryForm = ({onClose, isOpen}: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [telegram, setTelegram] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return

    emailjs
      .sendForm('service_k05yrpx', 'template_ft8t548', formRef.current, {
        publicKey: 'Y3ckFrswkXhxC46dT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if (formRef.current) formRef.current.reset() //очищаем форму после успешной отправки
          onClose()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    if (isOpen) {
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
    if (!isOpen) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [isOpen, onClose]);

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className={style.form}
    >
      <FormInput
        labelTitle={'Имя'}
        name={'user_name'}
        value={name}
        onChange={setName}
      />
      <FormInput
        labelTitle={'Фамилия'}
        name={'user_surname'}
        value={surname}
        onChange={setSurname}
      />
      <FormInput
        labelTitle={'Telegram'}
        name={'email'}
        value={telegram}
        onChange={setTelegram}
        isLowercase={true}
      />
      <Button
        title={'Отправить'}
        type={'submit'}
        className={style.button}
      />
    </form>
  );
};