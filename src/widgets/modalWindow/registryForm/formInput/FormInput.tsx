import style from './FormInput.module.scss'

type Props = {
  labelTitle: string
  name: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
  isLowercase?: boolean;
}

export const FormInput = ({labelTitle, name, value, onChange, isLowercase, placeholder}: Props) => {
  const handler = () => onChange(value.trim())

  return (
    <label className={style.label}>
      {labelTitle}
      <input
        name={name}
        value={value}
        onBlur={handler}
        placeholder={placeholder}
        onChange={e => onChange(e.currentTarget.value)}
        style={isLowercase ? { textTransform: 'lowercase' } : {}}
        className={style.input}
        required
      />
    </label>
  );
};