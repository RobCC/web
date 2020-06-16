import React from 'react';
import classNames from 'classnames';

import styles from 'Components/EditorLine/editorLine.scss';

// https://github.com/tc39/proposal-regexp-named-groups - ?

const REGEX_MAP = {
  link: new RegExp(/\$\[(.*?)\]/),
  color: new RegExp(/\$\((.*?)\)/),
  comment: new RegExp(/\/\/(.*?)+/),
};

function getMapKV() {
  const keys = Object.keys(REGEX_MAP);
  const values = keys.map((k) => REGEX_MAP[k]);

  return {
    keys,
    values,
  };
}

const parseLink = (text, url) => (
  <a
    className={styles.editorLink}
    title={text}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

function isComment(text) {
  const commentIdentifiers = ['*', '/*', '*/'];
  const isString = typeof text === 'string';

  return isString && commentIdentifiers.some(
    (identifier) => text.startsWith(identifier),
  );
}

function parseComment(text) {
  return <span className={styles.comment}>{text}</span>;
}

function parseTextColor(color, text) {
  const classes = classNames(styles.color, styles[color]);
  return <span className={classes}>{text}</span>;
}

function needsParsing(line) {
  const { values } = getMapKV();
  const regexSources = values.map((rx) => rx.source);
  const allParsesRegex = new RegExp(regexSources.join('|'));
  const matchResults = line.match(allParsesRegex) || [];
  // destructuring order is the same as in the REGEX_MAP
  const [parse, link, color, comment] = matchResults;

  return {
    parseIndex: matchResults.index,
    matchFound: !!parse,
    parse,
    link,
    color,
    comment,
  };
}

const parseLine = (line) => {
  const {
    parseIndex,
    matchFound,
    parse,
    link,
    color,
    comment,
  } = needsParsing(line);

  if (!matchFound) {
    return line;
  }

  const textBeforeParse = line.slice(0, parseIndex);
  const textAfterParse = line.slice(parseIndex + parse.length, line.length);
  let parsedElement;

  if (link) {
    const [linkText, linkUrl] = link.split(',').map((e) => e.trim());

    parsedElement = parseLink(linkText, linkUrl);
  } else if (color) {
    const [colorValue, text] = color.split(',').map((e) => e.trim());

    parsedElement = parseTextColor(colorValue, text);
  } else if (comment) {
    parsedElement = parseComment(parse);
  }

  return (
    <>
      {textBeforeParse}
      {parsedElement}
      {parseLine(textAfterParse)}
    </>
  );
};

export default {
  parseLine,
  isComment,
};
