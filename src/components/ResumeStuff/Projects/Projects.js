import React from 'react';
import PropTypes from 'prop-types';

import TabLink from 'Components/TabLink/TabLink';
import Section from '../Section/Section';

import styles from './projects.scss';

const Ecosystem = ({ onScreen }) => {
  console.log('projects');

  return (
    <Section title="Personal Projects">
      <div className={styles.wrapper}>
        <div className={styles.project}>
          <TabLink className={styles.title} href="https://github.com/RobCC/git-jira-hook">
            Git Jira Hook
          </TabLink>
          <div className={styles.content}>
            This enforces commit messages and branches to be written
            in a specific format (using JIRA),
            following a similar structure to the conventional commits.
            This is done through husky and the commit-msg hook.
          </div>
        </div>
        <div className={styles.project}>
          <TabLink
            className={styles.title}
            href="https://github.com/RobCC/create-react-package-lib"
          >
            Create React Package
          </TabLink>
          <div className={styles.content}>
            An environment generator to publish React packages to npm,
            with a ready-to-publish configuration
          </div>
        </div>
      </div>
    </Section>
  );
};

Ecosystem.propTypes = {
  onScreen: PropTypes.bool,
};

export default Ecosystem;
