import registryPhoto
  from '../../../../../assets/images/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
import dressCodePhoto
  from '../../../../../assets/images/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'
import style from './RegistrySection.module.scss'
import {Column} from '@/pages/home/main/sections/registry/column/Column.tsx';


export const RegistrySection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>

          {/* Левая колонка */}
          <Column
            title={'Регистрация'}
            buttonTitle={'Регистрация'}
            alt={'photo registration'}
            src={registryPhoto}
            description={'Хотя ваше присутствие на нашей свадьбе является величайшим подарком, если вы хотите разделить нашу радость через подарок, пожалуйста, посетите наш реестр.'}
          />

          {/* Правая колонка */}
          <Column
            title={'Дресс-код'}
            buttonTitle={'Вопросы'}
            alt={'photo dress-code'}
            src={dressCodePhoto}
            description={'Для этого грандиозного празднования любви, мы любезно просим вас принять элегантность случая, одевшись в формальный костюм.'}
          />

        </div>
      </div>
    </section>
  );
};