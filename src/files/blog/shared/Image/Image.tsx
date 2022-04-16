import styles from './image.scss';

type Props = {
  alt: string;
  src: string;
  scale?: string;
  footer?: string;
  style?: React.CSSProperties;
};

export default function Image({
  alt,
  src,
  scale = '1x',
  footer = '',
  style = {},
}: Props) {
  return (
    <>
      <img
        className={styles.image}
        alt={alt}
        srcSet={`${src} ${scale}`}
        style={style}
      />
      {footer ? <span className={styles.footer}>{footer}</span> : null}
    </>
  );
}
