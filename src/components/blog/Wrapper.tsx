import styles from './blog.module.css';

export default function Wrapper({
  children,
}: React.PropsWithChildren<NonNullable<unknown>>) {
  return <article className={styles.wrapper}>{children}</article>;
}
