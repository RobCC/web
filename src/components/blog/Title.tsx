import clsx from 'clsx';
import styles from './blog.module.css';

export default function Title({
  children,
}: React.PropsWithChildren<NonNullable<unknown>>) {
  const gradientIndex = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  return (
    <h1 className={clsx(styles.title, styles[`gradient${gradientIndex}`])}>
      {children}
    </h1>
  );
}
