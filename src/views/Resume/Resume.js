import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import lottie from 'lottie-web';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import Wrapper from '#/components/ResumeStuff/Wrapper/Wrapper';

// TODO: change later
import { toggleResume, getIsResumeOpen } from '#/store/modules/resume.ts';
import MountAnimator from '#/utils/MountAnimator';

import styles from './resume.scss';

function Resume() {
  const [onScreen, setOnScreen] = useState(false);
  const reduxDispatch = useDispatch();
  const isResumeOpen = useSelector(getIsResumeOpen);

  const animationFinishedCb = useCallback((isShown) => {
    setOnScreen(isShown);
  }, []);

  const hideResume = useCallback(() => {
    reduxDispatch(toggleResume());
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
