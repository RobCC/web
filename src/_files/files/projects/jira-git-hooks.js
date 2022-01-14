import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import fetchReadme from '#/utils/fetchReadme';
import styles from '#/_files/files/projects/projects.scss';

const name = 'git-jira-hook';
const fileName = `${name}.js`;

function Content() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetchReadme(name).then(setText);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default [fileName, Content];
