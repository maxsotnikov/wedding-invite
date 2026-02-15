import photo1
  from '@/assets/images/homePage/olga-solodilova-Idqe3vQ-8qo-unsplash.webp'
import mainPhoto
  from '@/assets/images/homePage/olga-solodilova-Ty1NNPJUsW8-unsplash.webp'
import photo2
  from '@/assets/images/homePage/olga-solodilova-LeQVHiw5nww-unsplash.webp'
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