import style from './Location.module.scss'
import location from '@/assets/images/alejandro-luengo-Fm_TvVmuHq4-unsplash+(1).webp'

export const LocationSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>

          <div className={style.main}>
            <a
            href={'/'}
            className={style.a}
          >
            Усадьба Марьянино
          </a>
            <div>
              <h2 className={style.title}>Location</h2>
              <img
                src={location}
                className={style.img}
              />
            </div>
            <a
              href={'/'}
              className={style.a}
            >Место</a></div>
          <button className={style.button}>Проезд и проживание</button>
        </div>
      </div>
    </section>
  );
};