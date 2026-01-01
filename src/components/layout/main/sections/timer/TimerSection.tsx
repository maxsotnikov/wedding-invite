import s from './Timer.module.css'
import background from '../../../../../assets/images/tasha-marie-kCdjXEsCm2I-unsplash.webp'

export const TimerSection = () => {
  return (
    <section className={s.section}>
      <img src={background}/>
      <h3>Обратный отсчет</h3>
      <div>
        <div>
          <span>120</span>
          <span>дней</span>
        </div>
        <div>
          <span>20</span>
          <span>часов</span>
        </div>
        <div>
          <span>30</span>
          <span>минут</span>
        </div>
        <div>
          <span>30</span>
          <span>секунд</span>
        </div>
      </div>
    </section>
  );
};