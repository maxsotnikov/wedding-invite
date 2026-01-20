import style from './SсheduleSection.module.scss'
// import background from '@/assets/images/andres-molina-wIfDI58tCuU-unsplash.webp'

export const ScheduleSection = () => {
  return (
    <section className={style.scheduleSection}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Программа дня</h2>
          <div className={style.schedule}>
            <div>
              <h3>16:00</h3>
              <span>Фуршет</span>
            </div>
            <div>
              <h3>17:00</h3>
              <span>Церемония</span>
            </div>
            <div>
              <h3>18:30</h3>
              <span>Праздничный ужин</span>
            </div>
            <div>
              <h3>22:00</h3>
              <span>Завершение банкета</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};