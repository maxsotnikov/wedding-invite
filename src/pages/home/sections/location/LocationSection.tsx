import style from './Location.module.scss'
import location
  from '@/assets/images/XXXL (1) (1).webp'
import {Button} from '@/shared/button/Button.tsx';

export const LocationSection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.main}>
            <a
              href={'https://usadba-m.by/'}
              target="_blank"
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
              href={'https://yandex.by/maps/org/usadba_maryanino/74793706989/?ll=27.726079%2C54.054349&z=11'}
              target="_blank"
              className={style.link}
            >Карта</a>
          </div>
          <Button as={'link'} to={'/location'} title={'Проезд и проживание'}/>
        </div>
      </div>
    </section>
  );
};