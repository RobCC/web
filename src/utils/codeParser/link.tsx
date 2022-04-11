import classNames from 'classnames';

// Example: $["https://github.com/RobCC", https://github.com/RobCC, red]

const REGEX = /\$\[(?<link>.*?)\]/;

function parse(link, styles: CSSModule) {
  const [text, url, color = 'blue'] = link.split(',').map((e) => e.trim());

  return (
    <a
      className={classNames(styles.editorLink, styles.color, styles[color])}
      title={text}
      href={url}
      target={url[0] === '#' ? '' : '_blank'}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export function createLink(text = '', url = '', color = '') {
  return `$[${text}, ${url}, ${color}]`;
}

export default {
  REGEX,
  parse,
};
