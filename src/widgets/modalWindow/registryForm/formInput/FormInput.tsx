import style from './FormInput.module.scss'

type Props = {
  labelTitle: string
  name: string
  value: string
  onChange: (value: string) => void
  isLowercase?: boolean;
}

export const FormInput = ({labelTitle, name, value, onChange, isLowercase}: Props) => {
  const handler = () => onChange(value.trim())

  return (
    <label className={style.label}>
      {labelTitle}
      <input
        name={name}
        value={value}
        onBlur={handler}
        onChange={e => onChange(e.currentTarget.value)}
        style={isLowercase ? { textTransform: 'lowercase' } : {}}
        className={style.input}
        required
      />
    </label>
  );
};