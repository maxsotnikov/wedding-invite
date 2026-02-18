import registryPhoto
  from '@/assets/images/homePage/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
import dressCodePhoto
  from '@/assets/images/homePage/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'
import style from './RegistrySection.module.scss'
import {Column} from './column/Column.tsx';
import {useState} from 'react';
import {ModalWindow} from '@/widgets/modalWindow/ModalWindow.tsx';
import {ROUTES} from '@/shared/config/routes.ts';


export const RegistrySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section>
        <div className={style.container}>
          <div className={style.content}>
            {/* Левая колонка */}
            <Column
              title={'Регистрация'}
              buttonTitle={'Регистрация'}
              onClick={() => setIsModalOpen(true)}
              alt={'photo registration'}
              src={registryPhoto}
              text={'Мы с нетерпением ждём встречи с вами в день нашей свадьбы. Будем признательны, если вы зарегистрируетесь и подтвердите своё присутствие'}
            />
            {/* Правая колонка */}
            <Column
              title={'Информация'}
              buttonTitle={'Вопросы'}
              as={'link'}
              to={ROUTES.info}
              alt={'photo dress-code'}
              src={dressCodePhoto}
              text={'Мы с любовью подготовили для вас всю информацию о нашей свадьбе, чтобы этот день был для вас максимально комфортным'}
            />
          </div>
        </div>
      </section>
      <ModalWindow
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /></>
  );
};