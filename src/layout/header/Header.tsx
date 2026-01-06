import s from './Header.module.scss'
import {Nav, type NavItemProps} from './navigation/Nav.tsx';

const leftNav: NavItemProps[] = [
  {title: 'Информация', link: '/'},
  // {title: 'Проезд и проживание', link: '/'},
  {title: 'Наша история', link: '/'},
]
const rightNav: NavItemProps[] = [
  {title: 'Подробнее', link: '/'},
  {title: 'Заполнить', link: '/', isButton: true},
]

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Nav items={leftNav} className={s.navLeft}/>
        <h1 className={s.title}>Максим & Инна</h1>
        <Nav
          items={rightNav}
          className={s.navRight}
        />
      </div>

    </header>
  );
};