type Props = {
  title: string
  className?: string
}

export const Button = ({title, className}: Props) => {
  return <button className={className}>{title}</button>;
};