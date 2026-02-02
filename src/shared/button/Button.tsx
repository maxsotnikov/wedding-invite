import style from './Button.module.scss'

type Props = {
  title: string
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary';
}

export const Button = ({
                         title,
                         className,
                         onClick,
                         variant = 'primary'
                       }: Props) => {
  return <button
    onClick={onClick}
    className={`${style.button} ${style[variant]} ${className ?? ''}`}
    data-variant={variant}
  >{title}</button>;
};