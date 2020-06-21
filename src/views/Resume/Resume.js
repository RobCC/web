import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import lottie from 'lottie-web';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Wrapper from 'Components/ResumeStuff/Wrapper/Wrapper';
import { toggleResume, isResumeOpen as selector } from '../../store/ducks/resume';
import MountAnimator from '../../utils/MountAnimator';

import styles from './resume.scss';

const Resume = () => {
  const [onScreen, setOnScreen] = useState(false);
  const reduxDispatch = useDispatch();
  const isResumeOpen = useSelector((store) => selector(store));

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
      <button
        type="button"
        onClick={hideResume}
        className={styles.exitResume}
      >
        <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
      </button>
    </MountAnimator>
  );
};

export default Resume;
