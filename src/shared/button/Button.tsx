import style from './Button.module.scss'
import {Link} from 'react-router';

type CommonProps = {
  title: string
  className?: string
  variant?: 'primary' | 'secondary';
}

type ButtonProps = CommonProps & {
  onClick?: () => void
  type?: 'submit'
  as?: 'button' //дискриминатор для понятия кнопка это или ссылка
}

type LinkProps = CommonProps & {
  as: 'link'
  to: string
}

type Props = ButtonProps | LinkProps

export const Button = (props: Props) => {
  const {title, className, variant = 'primary', as} = props
  const styleButton = ` ${style[variant]} ${className ?? ''}`

  if (as === 'link') {
    return (
      <Link
        to={props.to}
        className={styleButton}
        data-variant={variant}
      >
        {title}
      </Link>
    )
  }

  return (
    <button
      onClick={props.onClick}
      className={styleButton}
      data-variant={variant}
      type={props.type ?? 'button'}
    >
      {title}
    </button>
  )
};