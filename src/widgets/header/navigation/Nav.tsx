import style from './Nav.module.scss'

export type NavItemProps = {
  title: string;
  link: string;
  isButton?: boolean;
}

type NavProps = {
  items: NavItemProps[];
  className?: string;
}

export const Nav = ({items, className}: NavProps) => {
  return (
    <nav className={className}>
      <ul className={style.list}>
        {items.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className={item.isButton ? ` ${style.button}` : ''}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};