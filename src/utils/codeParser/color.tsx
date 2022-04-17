import classNames from 'classnames';

const REGEX = /\$\((?<color>.*?)\)/;

function parse(snippet: string, styles: CSSModule) {
  const [text, textColor] = snippet.split(',').map((e) => e.trim());

  const classes = classNames(styles.color, styles[textColor]);

  return <span className={classes}>{text}</span>;
}

export function color(text: string, textColor: string) {
  return `$(${text}, ${textColor})`;
}

export default {
  REGEX,
  parse,
};
