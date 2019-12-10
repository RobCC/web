import React from 'react';

import lineStyles from 'Components/CodeLine/codeLine.scss';

const LINK_REGEX = /\$\[(.*)\]/;
const MARK_REGEX = /\$<(.*)>/;
const COMMENT_REGEX = /\/\/(.*)/;
const IMPORTANT_REGEX = /\$\((.*)\)/;
const TO_PARSE = /\$\[(.*?)\]|\$<(.*?)>|\/\/(.*)|\$\((.*)\)/;

const isComment = (text) => typeof text === 'string'
  && (text.startsWith('/*') || text.startsWith('*') || text.startsWith('*/'));

const filterResults = (parseResult) => parseResult.filter((e) => e !== undefined);

const parseMark = (text) => <span className={lineStyles.mark}>{text}</span>;

const parseLink = (text, url) => (
  <a
    className={lineStyles.editorLink}
    title={text}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

const parseComment = (text) => (<span className={lineStyles.comment}>{text}</span>);
const parseImportant = (text) => (<span className={lineStyles.important}>{text}</span>);

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
  } else if (fullParse.match(MARK_REGEX)) {
    parsedElement = parseMark(parseContent);
  } else if (fullParse.match(COMMENT_REGEX)) {
    parsedElement = parseComment(fullParse);
  } else if (fullParse.match(IMPORTANT_REGEX)) {
    parsedElement = parseImportant(parseContent);
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
