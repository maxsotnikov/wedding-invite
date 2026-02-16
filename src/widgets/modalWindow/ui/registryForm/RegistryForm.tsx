import style from './RegistryForm.module.scss';
import {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FormInput} from './formInput/FormInput.tsx';
import {Button} from '@/shared/button/Button.tsx';
import {
  FormRadio
} from '@/widgets/modalWindow/ui/registryForm/formRadio/FormRadio.tsx';
import {FORM_RADIO} from '@/widgets/modalWindow/model/FormDate.ts';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  className: string;
}

export const RegistryForm = ({onClose, isOpen, className}: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [telegram, setTelegram] = useState('')
  const [radioValues, setRadioValues] = useState<Record<string, string>>({overnight:'', transport:''})

  const handleRadioChange = (name: string, value: string) => {
    setRadioValues(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return

    const formData = new FormData(formRef.current);
    console.log('Данные перед отправкой:', Object.fromEntries(formData));

    emailjs
      .sendForm('service_k05yrpx', 'template_ft8t548', formRef.current, {
        publicKey: 'Y3ckFrswkXhxC46dT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // 1. Очищаем React-стейты (это самое важное!)
          setName('');
          setSurname('');
          setTelegram('');
          setRadioValues({overnight:'', transport: ''});
          //очищаем форму после успешной отправки
          if (formRef.current) formRef.current.reset()
          onClose()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
      className={`${style.form} ${className}`}
    >
      <div className={style.formInputWrapper}>
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
          placeholder={'@maxsotnikov'}
          onChange={setTelegram}
          isLowercase={true}
        />
        {FORM_RADIO.map(element => (
          <FormRadio
            key={element.name}
            title={element.title}
            name={element.name}
            options={element.options}
            selectedOption={radioValues[element.name]}
            onChange={(value) => handleRadioChange(element.name, value)}
          />
        ))}
      </div>
      <Button
        title={'Отправить'}
        type={'submit'}
        className={style.button}
      />
    </form>
  );
};