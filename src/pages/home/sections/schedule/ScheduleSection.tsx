import style from './SсheduleSection.module.scss'

export const ScheduleSection = () => {
  return (
    <section className={style.scheduleSection}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Программа дня</h2>
          <div className={style.schedule}>
            <div>
              <span>15:00</span>
              <span>Фуршет</span>
            </div>
            <div>
              <span>16:00</span>
              <span>Церемония</span>
            </div>
            <div>
              <span>17:00</span>
              <span>Праздничный ужин</span>
            </div>
            <div>
              <span>23:00</span>
              <span>Завершение банкета</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};