import classNames from 'classnames';

import styles from './image.scss';

type Props = {
  alt: string;
  src: string;
  scale?: string;
  style?: React.CSSProperties;
  center?: boolean;
};

export default function Image({
  alt,
  src,
  scale = '1x',
  style = {},
  center = false,
}: Props) {
  return (
    <img
      className={classNames(styles.image, {
        [styles.center]: center,
      })}
      alt={alt}
      srcSet={`${src} ${scale}`}
      style={style}
    />
  );
}
