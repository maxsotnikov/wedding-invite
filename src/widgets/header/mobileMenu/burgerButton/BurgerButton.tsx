import style from './BurgerButton.module.scss'

type Props = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const BurgerButton = ({isOpen, onClick, className}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${isOpen ? style.open : ''} ${className}`}
    >
      <span className={style.line}></span>
      <span className={style.line}></span>
    </button>
  );
};