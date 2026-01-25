import style from './Header.module.scss'
import {Nav, type NavItemProps} from './navigation/Nav.tsx';
import {MobileMenu} from '@/widgets/header/mobileMenu/MobileMenu.tsx';

const leftNav: NavItemProps[] = [
  {title: 'Информация', link: '/'},
  {title: 'Наша история', link: '/'},
]
const rightNav: NavItemProps[] = [
  {title: 'Подробнее', link: '/'},
  {title: 'Заполнить', link: '/', isButton: true},
]

export const Header = () => {

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Nav items={leftNav} className={style.navLeft}/>
        <a href={'/'} className={style.title}>Максим & Инна</a>
        <Nav items={rightNav} className={style.navRight} />
        <MobileMenu/>
      </div>
    </header>
  );
};