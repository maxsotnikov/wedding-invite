import style from './TimerSection.module.scss'
import {Timer} from './Timer/Timer.tsx';

export const TimerSection = () => {
  return (
    <section className={style.timerSection}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Обратный отсчет</h2>
          <Timer date={new Date('2026-05-10T16:00:00+03:00')} />
        </div>
      </div>
    </section>
  );
};