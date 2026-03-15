import clsx from 'clsx';
import styles from './blog.module.css';

export default function Title({
  children,
}: React.PropsWithChildren<NonNullable<unknown>>) {
  return (
    <h1 className={clsx(styles.title, styles[`gradient4`])}>
      {children}
      <span />
      <span />
      <span />
      <span />
    </h1>
  );
}
