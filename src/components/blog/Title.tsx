import styles from './blog.module.css';

const gradients = [
  ['hsl(209, 62%, 58%)', 'hsl(280, 54%, 64%)'],
  ['hsl(197, 57%, 39%)', 'hsl(54, 81%, 63%)'],
  ['hsl(5, 63.4%, 46.08%)', 'hsl(282, 43.57%, 47.25%)'],
  ['hsl(210, 29.03%, 24.31%)', 'hsl(204, 69.87%, 53.14%)'],
  ['hsl(303, 95.20%, 24.30%)', 'hsl(185, 84.80%, 41.20%)'],
  ['hsl(189, 86.93%, 70%)', 'hsl(34, 100%, 79.02%)'],
];

export default function Title({
  children,
}: React.PropsWithChildren<NonNullable<unknown>>) {
  return (
    <h1
      className={styles.title}
      style={{
        background: `linear-gradient(to right, ${gradients[(gradients.length * Math.random()) | 0].join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </h1>
  );
}
