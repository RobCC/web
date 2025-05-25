import styles from './image.module.css';

type Props = {
  alt: string;
  src: string;
  scale?: string;
  footer?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export default function Image({
  alt,
  src,
  width,
  height,
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
        width={width}
        height={height}
      />
      {footer ? <span className={styles.footer}>{footer}</span> : null}
    </>
  );
}
