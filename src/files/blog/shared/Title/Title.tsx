import React from 'react';
import styles from './title.scss';

export default function Title({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.title}>{children}</div>;
}
