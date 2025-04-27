import { useEffect, useRef } from 'react';
import { marked } from 'marked';

import styles from './projectReadme.module.scss';

type Props = {
  name: string;
  user?: string;
};

function getReadmeUrl(projectName: string, userName: string) {
  return `https://raw.githubusercontent.com/${userName}/${projectName}/master/README.md`;
}

function ProjectReadme({ name, user = 'RobCC' }: Props) {
  const div = useRef<HTMLDivElement>(null);
  const url = getReadmeUrl(name, user);

  useEffect(() => {
    async function fetchReadme() {
      const response = await fetch(url);

      if (!response.ok) {
        return;
      }

      const text = await response.text();

      if (div.current) {
        div.current.innerHTML = await marked.parse(text);
      }
    }

    void fetchReadme();
  }, [url]);

  return <div className={styles.wrapper} ref={div} />;
}

export default ProjectReadme;
