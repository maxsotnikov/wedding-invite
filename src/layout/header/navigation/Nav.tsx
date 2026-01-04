import s from './Nav.module.scss'

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
      <ul className={s.list}>
        {items.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className={s.link + (item.isButton ? ` ${s.button}` : '')}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};