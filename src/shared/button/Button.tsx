import style from './Button.module.scss'

type Props = {
  title: string
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary';
  type?: 'submit'
}

export const Button = ({
                         title,
                         className,
                         onClick,
                         variant = 'primary',
                         type,
                       }: Props) => {
  return <button
    onClick={onClick}
    className={`${style.button} ${style[variant]} ${className ?? ''}`}
    data-variant={variant}
    type={type}
  >{title}</button>;
};