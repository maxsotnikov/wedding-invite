import style from './Column.module.scss';
import {Button} from '@/shared/Button.tsx';

type Props = {
  title: string;
  buttonTitle: string;
  src: string
  alt: string;
  description: string;
}

export const Column = ({src, alt, title, description, buttonTitle}: Props) => {
  return (
    <div className={style.column}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{title}</h2>
        <img
          src={src}
          alt={alt}
        />
        <p className={style.description}>{description}</p>
      </div>
      <Button title={buttonTitle} className={style.button}/>
    </div>
  );
};