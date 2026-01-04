import s from './Location.module.css'
import location from '../../../../assets/images/alejandro-luengo-Fm_TvVmuHq4-unsplash+(1).webp'

export const LocationSection = () => {
  return (
    <section>
      <h2>Location</h2>
      <a href={'/'} className={s.a}>Усадьба Марьянино</a>
      <img src={location} className={s.img}/>
      <a href={'/'} className={s.a}>Место</a>
      <button >Проезд и проживание</button>
    </section>
  );
};