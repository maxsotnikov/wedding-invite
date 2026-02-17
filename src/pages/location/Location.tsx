import style from './Location.module.scss'
import {InfoBlock} from '@/shared/infoBlock/InfoBlock.tsx';
import {LOCATION_DATE} from '@/pages/location/model/locationDate.tsx';

export const Location = () => {
  return (
    <main>
      <section className={style.location}>
        <div className={style.container}>
          <div className={style.content}>
            <h2 className={style.title}>Проезд и проживание</h2>
            <InfoBlock data={LOCATION_DATE} />
          </div>
        </div>
      </section>
    </main>
  )
}