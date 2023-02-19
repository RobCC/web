import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import Wrapper from '#/components/ResumeStuff/Wrapper/Wrapper';

import { resume } from '#/store';
import MountAnimator from '#/utils/MountAnimator';

import styles from './resume.scss';

const { useResumeStore, toggleResume, getIsResumeOpen } = resume;

function Resume() {
  const [onScreen, setOnScreen] = useState(false);
  const isResumeOpen = useResumeStore(getIsResumeOpen);

  const animationFinishedCb = useCallback(isShown => {
    setOnScreen(isShown);
  }, []);

  const hideResume = useCallback(() => {
    toggleResume();
  }, []);

  return (
    <MountAnimator
      mount={isResumeOpen}
      className={styles.resumeWrapper}
      inAnimation={styles.slideIn}
      animationFinishedCb={animationFinishedCb}
      outAnimation={styles.slideOut}
    >
      <Wrapper onScreen={onScreen} />
      <button type="button" onClick={hideResume} className={styles.exitResume}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
      </button>
    </MountAnimator>
  );
}

export default Resume;
