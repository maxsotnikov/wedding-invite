import style from './FormRadio.module.scss'
import type {FormRadioElement} from '@/widgets/modalWindow/types/formTypes.ts';

type Props = {
  title: string,
  name: string,
  options: FormRadioElement[]
  selectedOption: string
  onChange: (value: string) => void
}

export const FormRadio = ({
                            title,
                            name,
                            options,
                            selectedOption,
                            onChange
                          }: Props) => {
  return (
    <div className={style.mainWrapper}>
      <span className={style.title}>{title}</span>
      <div className={style.labelWrapper}>
        {options.map(option => (
          <label
            key={option.value}
            className={style.label}
          >
            <input
              id={`${name}-${option.value}`}
              type={'radio'}
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={e => onChange(e.currentTarget.value)}
              required
            />
            {option.labelTitle}
          </label>
        ))}
      </div>
    </div>
  );
};