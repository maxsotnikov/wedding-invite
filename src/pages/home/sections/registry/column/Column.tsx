import style from './Column.module.scss';
import {Button} from '@/shared/button/Button.tsx';

type Props = {
  title: string;
  buttonTitle: string;
  src: string
  alt: string;
  text: string;
}

export const Column = ({src, alt, title, text, buttonTitle}: Props) => {
  return (
    <div className={style.column}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{title}</h2>
        <img
          src={src}
          alt={alt}
        />
        <p className={style.text}>{text}</p>
      </div>
      <Button title={buttonTitle} className={style.button}/>
    </div>
  );
};