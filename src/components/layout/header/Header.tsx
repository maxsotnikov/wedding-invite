import s from './Header.module.css'
import {Nav, type NavItemProps} from './navigation/Nav.tsx';

const leftNav: NavItemProps[] = [
  {title: 'Наша история', link: '/'},
  {title: 'Проезд и проживание', link: '/'},
  {title: 'Информация', link: '/'},
]
const rightNav: NavItemProps[] = [
  {title: 'FAQS', link: '/'},
  {title: 'Заполнить', link: '/'},
]

export const Header = () => {
  return (
    <header className={s.header}>
      <Nav items={leftNav} />
      <h1 className={s.h1}>МАКСИМ & ИННА</h1>
      <Nav
        items={rightNav}
        className={s.navRight}
      />
    </header>
  );
};