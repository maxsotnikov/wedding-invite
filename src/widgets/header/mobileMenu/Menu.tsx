import {Nav} from '@/widgets/header/navigation/Nav.tsx';
import style from './Menu.module.scss'
import s from '../Header.module.scss'

type Props = {
  isOpen: boolean;
}

const menuItems = [
  {title: 'Информация', link: '/'},
  {title: 'Наша история', link: '/'},
  {title: 'Подробнее', link: '/'},
  {title: 'Заполнить', link: '/', isButton: true},
]

export const Menu = ({isOpen}:Props) => {
  return (
    <div className={`${style.menu} ${isOpen ? style.isOpen : ''}`} >
      {/*<a href={'/'} className={s.title}>Максим & Инна</a>*/}
      <Nav items={menuItems} className={style.mobileNav}/>
    </div>
  );
};