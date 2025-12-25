import s from '../Header.module.css'

export type NavItemProps = {
  title: string;
  link: string;
}

type NavProps = {
  items: NavItemProps[];
  className?: string;
}

export const Nav = ({items, className}: NavProps) => {
  return (
    <nav className={className}>
      <ul className={s.ul}>
        {items.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};