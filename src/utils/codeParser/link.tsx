import classNames from 'classnames';

// Example: $["https://github.com/RobCC", https://github.com/RobCC, red]

const link = {
  regex: /\$\[(?<link>.*?)\]/,
  toDOM(snippet, theme) {
    const [text, url, color = 'blue'] = snippet.split(',').map(e => e.trim());

    return (
      <a
        className={classNames(theme.editorLink, theme.color, theme[color])}
        title={text}
        href={url}
        target={url[0] === '#' ? '' : '_blank'}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  },
  parse(text = '', url = '', color = '') {
    return `$[${text}, ${url}, ${color}]`;
  },
} satisfies ParserModule;

export default link;
