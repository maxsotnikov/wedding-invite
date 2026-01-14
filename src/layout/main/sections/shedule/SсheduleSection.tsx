import style from './SсheduleSection.module.scss'
// import background from '@/assets/images/andres-molina-wIfDI58tCuU-unsplash.webp'

export const SсheduleSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.titleWrapper}>
            <h3 className={style.subtitle}>Here's a sneak peek of</h3>
            <h2 className={style.title}>our special day's schedule</h2>
          </div>
          <div className={style.schedule}>
            <div>
              <h3>4.00PM</h3>
              <span>Ceremony</span>
            </div>
            <div>
              <h3>5.00PM</h3>
              <span>Cocktail</span>
            </div>
            <div>
              <h3>6.30PM</h3>
              <span>Dinner</span>
            </div>
            <div>
              <h3>10.00PM</h3>
              <span>Dancing & fireworks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};