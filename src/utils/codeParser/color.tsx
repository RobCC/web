import classNames from 'classnames';

const REGEX = /\$\((?<color>.*?)\)/;

function parse(snippet: string, styles: CSSModule) {
  const [color, text] = snippet.split(',').map((e) => e.trim());

  const classes = classNames(styles.color, styles[color]);

  return <span className={classes}>{text}</span>;
}

export function createColorTag(color: string, text: string) {
  return `$(${color}, ${text})`;
}

export default {
  REGEX,
  parse,
};
