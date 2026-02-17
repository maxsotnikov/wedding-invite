import photo1
  from '@/assets/images/homePage/bc08dfe0-12b6-444c-aeb0-9f5c690884f5.webp'
import mainPhoto
  from '@/assets/images/homePage/859895f6-b05a-422f-9f4c-c9fd58511dd2.webp'
import photo2
  from '@/assets/images/homePage/15767461-9e8a-40a1-90b2-abc8f00bd6ad.webp'
import style from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <img
            src={photo1}
            alt="photo"
            className={style.sidePhoto}
          />
          <div className={style.wrapper}>
            <img
              src={mainPhoto}
              alt="photo"
              className={style.mainPhoto}
            />
            <p className={style.text}>
              Мы приглашаем вас разделить с нами этот
              особенный день
            </p>
          </div>
          <img
            src={photo2}
            alt="photo"
            className={style.sidePhoto}
          />
          <h2 className={style.date}>10 · 05 · 2026</h2>
        </div>
      </div>
    </section>
  );
};