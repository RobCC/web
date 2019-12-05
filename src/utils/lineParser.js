import React from 'react';

const LINK_REGEX = /\$\[(.*)\]/;
const MARK_REGEX = /\$<(.*)>/;
const TO_PARSE = /\$\[(.*?)\]|\$<(.*?)>/;

const isComment = (text) => typeof text === 'string'
  && (text.startsWith('/*') || text.startsWith('*') || text.startsWith('*/'));

const filterResults = (parseResult) => parseResult.filter((e) => e !== undefined);

const parseMark = (text) => <i>{text}</i>;

const parseLink = (text, url) => (
  <a title={text} href={url} target="_blank" rel="noopener noreferrer">{text}</a>
);

const parseLine = (line) => {
  const parsingNeeded = line.match(TO_PARSE);

  if (!parsingNeeded) {
    return (<>{line}</>);
  }

  const [fullParse, parseContent] = filterResults(parsingNeeded);
  const parseIndex = line.indexOf(fullParse);
  const preParse = line.slice(0, parseIndex);
  const postParse = line.slice(line.indexOf(fullParse) + fullParse.length, line.length);
  let parsedElement;

  if (fullParse.match(LINK_REGEX)) {
    const [linkText, linkUrl] = parseContent.split(',');

    parsedElement = parseLink(linkText, linkUrl);
  }

  if (fullParse.match(MARK_REGEX)) {
    parsedElement = parseMark(parseContent);
  }

  return (
    <>
      {preParse}
      {parsedElement}
      {parseLine(postParse)}
    </>
  );
};

export default {
  isComment,
  parseLine,
};
