import style from './Timer.module.scss'
import {Timer} from '@/layout/main/sections/timer/Timer/Timer.tsx';

export const TimerSection = () => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <h3 className={style.title}>Обратный отсчет</h3>
        <Timer date={new Date('2026-05-10T16:00:00Z')} />
      </div>
    </section>
  );
};