import style from './BurgerButton.module.scss'

type Props = {
  isOpen: boolean
  onClick: () => void
}

export const BurgerButton = ({isOpen, onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${isOpen ? style.open : ''}`}
    >
      <span className={style.line}></span>
      <span className={style.line}></span>
    </button>
  );
};