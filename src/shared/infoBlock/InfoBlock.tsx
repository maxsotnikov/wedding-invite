import {InfoItem} from '@/shared/infoBlock/infoItem/InfoItem.tsx';
import style from './InfoBlock.module.scss'
import type {InfoBlockType} from '@/shared/types/infoTypes.ts';

type Props = {
  data: InfoBlockType[]
}

export const InfoBlock = ({data}: Props) => {
  return (
    <div className={style.infoBlock}>
      {data.map(item => (
        <InfoItem key={item.id} title={item.title} subTitle={item.subTitle} description={item.description} id={item.id} />
      ))}
    </div>
  );
};