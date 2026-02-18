import style from './LocationSection.module.scss'
import location
  from '@/assets/images/homePage/location.jpg'
import {Button} from '@/shared/button/Button.tsx';
import {ROUTES} from '@/shared/config/routes.ts';
import {EXTERNAL_LINKS} from '@/shared/config/externalLinks.ts';

export const LocationSection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <a
            href={EXTERNAL_LINKS.manorWebsite}
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >Усадьба <br className={style.desktopBreak} /> Марьянино</a>
          <div className={style.wrapper}>
            <h2 className={style.title}>Локация</h2>
            <img
              src={location}
              alt={'photo location'}
            />
          </div>
          <a
            href={EXTERNAL_LINKS.manorMap}
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >Карта</a>
          <Button
            as={'link'}
            to={ROUTES.location}
            title={'Проезд и проживание'}
            className={style.button}
          />
        </div>
      </div>
    </section>
  );
};