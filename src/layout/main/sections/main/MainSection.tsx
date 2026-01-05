import firstPhoto
  from '../../../../assets/images/olga-solodilova-Idqe3vQ-8qo-unsplash.webp'
import secondPhoto
  from '../../../../assets/images/olga-solodilova-Ty1NNPJUsW8-unsplash.webp'
import thirdPhoto
  from '../../../../assets/images/olga-solodilova-LeQVHiw5nww-unsplash.webp'
import s from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section>
      <div className={s.contentWrapper}>
        <div className={s.imageWrapper}>
          <img
            src={firstPhoto}
            alt=""
            className={s.img}
          />
          <img
            src={secondPhoto}
            alt=""
            className={s.img}
          />
          <img
            src={thirdPhoto}
            alt=""
            className={s.img}
          />
        </div>
        <h2 className={s.date}>10 · 05 ·2026</h2>
        <p className={s.text}>Join us as we embark on a journey of love, joy,
          and eternal happiness.</p>
      </div>

    </section>
  );
};