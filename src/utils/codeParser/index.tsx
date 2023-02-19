import linkParser from './link';
import colorParser from './color';
import commentParser from './comment';

export * from './link';
export * from './color';
export * from './comment';

const PLACEHOLDERS = {
  link: linkParser.REGEX,
  color: colorParser.REGEX,
  comment: commentParser.REGEX,
};

const FULL_REGEX = new RegExp(
  [...Object.keys(PLACEHOLDERS)]
    .map((key: keyof typeof PLACEHOLDERS) => {
      const regex = PLACEHOLDERS[key];

      return regex.source;
    })
    .join('|'),
);

type Placeholders = keyof typeof PLACEHOLDERS;
type ParsingData = {
  [key in Placeholders]?: string;
} & {
  subString?: string;
  index?: number;
};

export function isComment(text = '') {
  const commentIdentifiers = ['*', '/*', '*/'];
  const isString = typeof text === 'string';

  return (
    isString &&
    commentIdentifiers.some((identifier) => text.trim().startsWith(identifier))
  );
}

export function createCodeText(text: string): string[] {
  const trimmedLines = text.split('\n').slice(1, -1);

  // Add a blank line at the end, 'cause that's the way to do it
  return [...trimmedLines, '\n'];
}

export function getParsingData(line: string): ParsingData {
  const results = line.match(FULL_REGEX);

  if (!results) {
    return {};
  }

  const { index, groups } = results;
  const [subString] = results;

  return {
    ...groups,
    index,
    subString,
  };
}

function parseLine(line: string, styles: CSSModule): string | JSX.Element {
  const { index, subString, link, color, comment } = getParsingData(line);

  if (index === undefined) {
    return line;
  }

  const textBeforeParse = line.slice(0, index);
  const textAfterParse = line.slice(index + subString.length, line.length);
  let parsedElement;

  if (color) {
    parsedElement = colorParser.parse(color, styles);
  } else if (link) {
    parsedElement = linkParser.parse(link, styles);
  } else if (comment) {
    // Pass subString instead of comment, since we want
    // to stylize the '//' as well
    parsedElement = commentParser.parse(subString, styles);
  }

  return (
    <>
      {textBeforeParse}
      {parsedElement}
      {parseLine(textAfterParse, styles)}
    </>
  );
}

export default parseLine;
