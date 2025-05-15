import styles from './wrapper.module.css';

export default function Wrapper({
  children,
}: React.PropsWithChildren<NonNullable<unknown>>) {
  return <div className={styles.wrapper}>{children}</div>;
}
