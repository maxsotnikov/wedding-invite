import registryPhoto from '@/assets/images/homePage/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
import dressCodePhoto from '@/assets/images/homePage/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'
import style from './RegistrySection.module.scss'
import {Column} from './column/Column.tsx';


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
            text={'Хотя ваше присутствие на нашей свадьбе является величайшим подарком, если вы хотите разделить нашу радость через подарок, пожалуйста, посетите наш реестр.'}
          />
          {/* Правая колонка */}
          <Column
            title={'Дресс-код'}
            buttonTitle={'Вопросы'}
            alt={'photo dress-code'}
            src={dressCodePhoto}
            text={'Для этого грандиозного празднования любви, мы любезно просим вас принять элегантность случая, одевшись в формальный костюм.'}
          />
        </div>
      </div>
    </section>
  );
};