import style from './FormRadio.module.scss'

type Props = {
  labelTitle: string,
  name: string,
}

export const FormRadio = ({labelTitle, name}: Props) => {
  return (
    <div>
      <span className={style.option}>{labelTitle}</span>

      <label className={style.label}>
        <input type={'radio'} name={name}/>
        <span>Да</span>
      </label>
      <label className={style.label}>
        <input type={'radio'} name={name}/>
        <span>Нет</span>
      </label>
    </div>
  );
};