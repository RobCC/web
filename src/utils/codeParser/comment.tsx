const REGEX = /\/\/(?<comment>.*?)+/;

function parse(text: string, styles: CSSModule) {
  return <span className={styles.comment}>{text}</span>;
}

export function createComment(text = '') {
  return `// ${text}`;
}

export default {
  REGEX,
  parse,
};
