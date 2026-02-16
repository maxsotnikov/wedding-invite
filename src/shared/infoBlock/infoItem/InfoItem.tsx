import style from './InfoItem.module.scss';
import type {InfoBlockType} from '@/shared/types/infoTypes.ts';


export const InfoItem = ({id, title, subTitle, description}: InfoBlockType) => {
  return (
    <div className={style.infoItem}>
      <div className={style.titleWrapper}>
        <h3 className={style.title}>{title}</h3>
        {subTitle && <p className={style.subtitle}>{subTitle}</p>}
      </div>
      <ul className={style.list}>
        {description.map(item => (
          <li className={style.item} key={id}>
            <h4 className={style.question}>{item.questions}</h4>
            {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};