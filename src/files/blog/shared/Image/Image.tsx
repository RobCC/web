import styles from './image.scss';

type Props = {
  alt: string;
  src: string;
  scale?: string;
  style?: React.CSSProperties;
};

export default function Image({ alt, src, scale = '1x', style = {} }: Props) {
  return (
    <img
      className={styles.image}
      alt={alt}
      srcSet={`${src} ${scale}`}
      style={style}
    />
  );
}
