import styles from './wrapper.scss';

export default function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.wrapper}>{children}</div>;
}
