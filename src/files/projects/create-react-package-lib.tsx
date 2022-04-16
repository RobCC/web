import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';

import fetchReadme from '#/utils/fetchReadme';
import { createFile } from '#/utils/explorer';
import styles from './projects.scss';

const name = 'create-react-package-lib';
const fileName = `${name}.js`;

function Content() {
  const div = useRef(null);

  useEffect(() => {
    fetchReadme(name).then((res) => {
      div.current.innerHTML = marked.parse(res);
    });
  }, []);

  return <div className={styles.wrapper} ref={div} />;
}

export default createFile(fileName, Content);
