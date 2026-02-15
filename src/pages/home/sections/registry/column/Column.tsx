import style from './Column.module.scss';
import {Button} from '@/shared/button/Button.tsx';

type Props = {
  title: string;
  buttonTitle: string;
  onClick?: () => void
  as?: 'link'
  to?: string
  src: string
  alt: string;
  text: string;
}

export const Column = ({src, alt, title, text, buttonTitle, onClick, as, to}: Props) => {
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
      <Button title={buttonTitle} className={style.button} onClick={onClick} as={as} to={to!}/>
    </div>
  );
}; //Оператор "!" говорит TS: "Поверь мне, здесь не undefined"