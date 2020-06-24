import React from 'react';
import PropTypes from 'prop-types';

import TabLink from 'Components/TabLink/TabLink';
import MountAnimator from '#/utils/MountAnimator';
import Section from '../Section/Section';

import styles from './projects.scss';

const Projects = ({ onScreen = false }) => (
  <MountAnimator
    mount={onScreen}
    className={styles.wrapper}
    inAnimation={styles.fadeInDown}
    outAnimation={styles.fadeOutDown}
  >
    <Section title="Personal Projects">
      <div className={styles.section}>
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
  </MountAnimator>
);

Projects.propTypes = {
  onScreen: PropTypes.bool,
};

export default Projects;
