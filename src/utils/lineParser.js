import React from 'react';

const LINK_START = '$[';
const MARK_START = '$<';

const LINK_REGEX = /\[(.*)\]/;
const MARK_REGEX = /<(.*)>/;
const TO_PARSE = /((\$\[)|(\$<))?/;

const isComment = (text) => typeof text === 'string'
  && (text.startsWith('/*') || text.startsWith('*') || text.startsWith('*/'));

const hasLink = (text) => typeof text === 'string' && text.includes(LINK_START);

const hasMark = (text) => typeof text === 'string' && text.includes(MARK_START);

const parseLine = (line) => {
  // const parse = line.match(TO_PARSE);
};

const convertLink = (line) => {
  const linkData = line.match(LINK_REGEX).pop();
  const [text, url] = linkData.split(',');
  const preLink = line.slice(0, line.indexOf(LINK_START));
  const postLink = line.slice(line.indexOf(linkData) + linkData.length + 1, line.length);

  return (
    <pre>
      {preLink}
      <a title={text} href={url}>{text}</a>
      {postLink}
    </pre>
  );
};

const convertMark = (line) => {
  const markWord = line.match(MARK_REGEX).pop();
  const preLink = line.slice(0, line.indexOf(MARK_START));
  const postLink = line.slice(line.indexOf(markWord) + markWord.length + 1, line.length);

  return (
    <pre>
      {preLink}
      <i>{markWord}</i>
      {postLink}
    </pre>
  );
};

export default {
  isComment,
  hasLink,
  hasMark,
  convertLink,
  convertMark,
  parseLine,
};
