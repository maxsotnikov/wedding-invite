import style from './Location.module.scss'
import location
  from '@/assets/images/XXXL (1) (1).webp'
import {Button} from '@/shared/Button.tsx';

export const LocationSection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.main}>
            <a
              href={'/'}
              className={style.link}
            >
              Усадьба <br className={style.desktopBreak}/> Марьянино
            </a>
            <div className={style.wrapper}>
              <h2 className={style.title}>Локация</h2>
              <img
                src={location}
                alt={'photo location'}
              />
            </div>
            <a
              href={'/'}
              className={style.link}
            >Карта</a></div>
          <Button title={'Проезд и проживание'}/>
        </div>
      </div>
    </section>
  );
};