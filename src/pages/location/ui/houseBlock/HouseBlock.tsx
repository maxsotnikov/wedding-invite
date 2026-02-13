import style from './HouseBlock.module.scss'
import house1 from '@/assets/images/location/1__.jpeg.jpg';
import house2 from '@/assets/images/locationPage/IMG_4304__.jpeg.jpg'
import house3 from '@/assets/images/location/3___.jpeg.jpg'


export const HouseBlock = () => {
  return (
    <article className={style.houseBlock}>
      <div className={style.houseWrapper}>
        <img
          src={house1}
          alt={'house'}
        />
        <p>На территории есть уютные домики, где вы сможете с комфортом разместиться, отдохнуть и насладиться спокойной атмосферой.</p>
      </div>
      <div className={style.houseWrapper}>
        <p>В домике размещается от 10 до 16 человек</p>
        <img
          src={house2}
          alt={'house'}
          className={style.overlapBlock}
        />
      </div>
      <div className={style.houseWrapper}>
        <img
          src={house3}
          alt={'house'}
          // className={style.overlapBlock}
        />
        <p>На территории размещаются 3 гостевых домика общей вместимостью до 40 человек</p>
      </div>
    </article>
  );
};