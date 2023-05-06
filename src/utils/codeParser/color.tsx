import classNames from 'classnames';

const color = {
  regex: /\$\((?<color>.*?)\)/,
  toDOM(snippet, theme) {
    const [text, textColor] = snippet.split(',').map(e => e.trim());
    const classes = classNames(theme.color, theme[textColor]);

    return <span className={classes}>{text}</span>;
  },
  parse(text: string, textColor: string) {
    return `$(${text}, ${textColor})`;
  },
} satisfies ParserModule;

export default color;
