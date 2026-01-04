import s from './Header.module.scss'
import {Nav, type NavItemProps} from './navigation/Nav.tsx';

const leftNav: NavItemProps[] = [
  {title: 'Наша история', link: '/'},
  {title: 'Проезд и проживание', link: '/'},
  {title: 'Информация', link: '/'},
]
const rightNav: NavItemProps[] = [
  {title: 'Подробнее', link: '/'},
  {title: 'Заполнить', link: '/', isButton: true},
]

export const Header = () => {
  return (
    <header className={s.header}>
      <Nav items={leftNav} />
      <h1 className={s.title}>Максим & Инна</h1>
      <Nav
        items={rightNav}
        className={s.navRight}
      />
    </header>
  );
};