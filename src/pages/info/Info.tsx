import style from './Info.module.scss'
import {InfoBlock} from '@/shared/infoBlock/InfoBlock.tsx';
import {INFO_DATE} from '@/pages/info/model/InfoDate.tsx';

export const Info = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Информация</h2>
          <InfoBlock data={INFO_DATE}/>
        </div>
      </div>
    </section>
  );
};