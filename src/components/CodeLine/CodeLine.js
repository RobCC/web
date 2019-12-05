import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './codeLine.scss';

const isComment = (text) => typeof text === 'string'
  && (text.startsWith('/*') || text.startsWith('*') || text.startsWith('*/'));

const hasLink = (text) => typeof text === 'string' && text.includes('$[');

const convertLink = (line) => {
  const linkData = line.match(/\[(.*)\]/).pop();
  const [text, url] = linkData.split(',');
  const preLink = line.slice(0, line.indexOf('$['));
  const postLink = line.slice(line.indexOf(linkData) + linkData.length + 1, line.length);

  return (
    <pre>
      {preLink}
      <a title={text} href={url}>{text}</a>
      {postLink}
    </pre>
  );
};

const CodeLine = ({ lineNumber, children: line }) => {
  const lineStyles = classNames(styles.content, {
    [styles.comment]: isComment(line),
  });

  return (
    <div className={styles.line}>
      <span className={styles.number}>{lineNumber}</span>
      {hasLink(line)
        ? (convertLink(line))
        : (<pre className={lineStyles}>{line}</pre>
        )}
    </div>
  );
};

CodeLine.propTypes = {
  lineNumber: PropTypes.number,
  children: PropTypes.node,
};

export default CodeLine;
