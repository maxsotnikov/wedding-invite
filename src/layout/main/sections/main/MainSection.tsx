import firstPhoto
  from '@/assets/images/olga-solodilova-Idqe3vQ-8qo-unsplash.webp'
import secondPhoto
  from '@/assets/images/olga-solodilova-Ty1NNPJUsW8-unsplash.webp'
import thirdPhoto
  from '@/assets/images/olga-solodilova-LeQVHiw5nww-unsplash.webp'
import style from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section className={style.mainSection}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img
            src={firstPhoto}
            alt=""
            className={style.img}
          />

          <div className={style.wrap}>
            <img
            src={secondPhoto}
            alt=""
            className={style.img}
          />
            <p className={style.text}>Join us as we embark on a journey of love, joy, and eternal happiness.</p>
          </div>
          <img
            src={thirdPhoto}
            alt=""
            className={style.img}
          />
          <h2 className={style.date}>10 · 05 ·2026</h2>
        </div>
      </div>

    </section>
  );
};