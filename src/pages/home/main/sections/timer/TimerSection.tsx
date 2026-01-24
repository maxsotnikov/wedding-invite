import style from './TimerSection.module.scss'
import {Timer} from '@/pages/home/main/sections/timer/Timer/Timer.tsx';

export const TimerSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Обратный отсчет</h2>
          <Timer date={new Date('2026-05-10T16:00:00+03:00')} />
        </div>
      </div>
    </section>
  );
};