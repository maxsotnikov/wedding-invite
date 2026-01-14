import style from '@/layout/main/sections/timer/Timer.module.scss';
import {useEffect, useState} from 'react';
import {
  calculateDiff
} from '@/layout/main/sections/timer/Timer/features/calculateDIff.ts';
import {
  pluralize
} from '@/layout/main/sections/timer/Timer/features/pluralize.ts';

type Props = {
  date: Date
}

export const Timer = ({date}: Props) => {
  const finishTime = date.getTime()

  const [[days, hours, minutes, seconds], setDiff] = useState<Array<number>>(() => calculateDiff(finishTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const diff = calculateDiff(finishTime);
      setDiff(diff);
      if (finishTime <= Date.now()) clearInterval(intervalId);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [finishTime])

  return (
    <div className={style.timer}>
      <div>
        <span>{days}</span>
        <span>{pluralize(days, ['день', 'дня', 'дней'])}</span>
      </div>
      <div>
        <span>{hours}</span>
        <span>{pluralize(hours, ['час', 'часа', 'часов'])}</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>{pluralize(minutes, ['минута', 'минуты', 'минут'])}</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span>{pluralize(seconds, ['секунда', 'секунды', 'секунд'])}</span>
      </div>
    </div>
  );
};