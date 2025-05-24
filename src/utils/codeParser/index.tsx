import { type JSX } from 'react';

import linkParser from './link';
import colorParser from './color';
import commentParser from './comment';

export { default as linkParser } from './link';
export { default as colorParser } from './color';
export { default as commentParser } from './comment';

const PLACEHOLDERS = {
  link: linkParser.regex,
  color: colorParser.regex,
  comment: commentParser.regex,
};

const FULL_REGEX = new RegExp(
  [...(Object.keys(PLACEHOLDERS) as Array<keyof typeof PLACEHOLDERS>)]
    .map(key => {
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
  if (typeof text !== 'string') {
    return false;
  }

  return ['*', '/*', '*/'].some(identifier =>
    text.trim().startsWith(identifier),
  );
}

export function toCodeLines(text: string) {
  let trimmedLines = text.split('\n');

  if (trimmedLines[0] === '') {
    trimmedLines = trimmedLines.slice(1);
  }

  // Add a blank line at the end, 'cause that's the way to do it
  if (trimmedLines[trimmedLines.length - 1] !== '') {
    trimmedLines.push('\n');
  }

  return trimmedLines;
}

function getParsingData(line: string): ParsingData {
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

export function parseLine(
  line: string,
  styles: Record<string, string>,
): string | JSX.Element {
  const { index, subString, link, color, comment } = getParsingData(line);

  if (index === undefined) {
    return line;
  }

  const textBeforeParse = line.slice(0, index);
  const textAfterParse = line.slice(index + subString!.length, line.length);
  let parsedElement;

  if (color) {
    parsedElement = colorParser.toDOM(color, styles);
  } else if (link) {
    parsedElement = linkParser.toDOM(link, styles);
  } else if (comment) {
    // Pass subString instead of comment, since we want
    // to stylize the '//' as well
    parsedElement = commentParser.toDOM(subString!, styles);
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
