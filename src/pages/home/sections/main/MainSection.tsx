import firstPhoto
  from '@/assets/images/olga-solodilova-Idqe3vQ-8qo-unsplash.webp'
import mainPhoto
  from '@/assets/images/olga-solodilova-Ty1NNPJUsW8-unsplash.webp'
import thirdPhoto
  from '@/assets/images/olga-solodilova-LeQVHiw5nww-unsplash.webp'
import style from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <img src={firstPhoto} alt="photo" className={style.sidePhoto} />
          <div className={style.mainPhotoWrapper}>
            <img src={mainPhoto} alt="photo" className={style.mainPhoto} />
            <p className={style.text}>Мы приглашаем вас разделить с нами этот особенный день</p>
          </div>
          <img src={thirdPhoto} alt="photo" className={style.sidePhoto} />
          <h2 className={style.date}>10 · 05 ·2026</h2>
        </div>
      </div>
    </section>
  );
};