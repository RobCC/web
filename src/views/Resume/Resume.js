import React, {
  useCallback, useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lottie from 'lottie-web';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';

import bouncingBall from '~/public/ae/ball.json';
import { toggleResume, isResumeOpen as selector } from '../../store/ducks/resume';
import MountAnimator from '../../utils/MountAnimator';

import styles from './resume.scss';

const Resume = () => {
  const reduxDispatch = useDispatch();
  const isResumeOpen = useSelector((store) => selector(store));
  const ballRef = useRef(null);

  const onAnimationFinished = useCallback((isOpened) => {
    if (isOpened) {
      lottie.loadAnimation({
        container: ballRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: bouncingBall,
      });
    }
  }, []);

  const hideResume = useCallback(() => {
    reduxDispatch(toggleResume());
  }, []);

  return (
    <MountAnimator
      mount={isResumeOpen}
      className={styles.resumeWrapper}
      inAnimation={styles.slideIn}
      outAnimation={styles.slideOut}
      animationFinishedCb={onAnimationFinished}
    >
      <button
        type="button"
        onClick={hideResume}
        className={styles.exitWrapper}
      >
        <NavigateBeforeSharpIcon className={styles.icon} />
      </button>
      <div className={styles.ball} ref={ballRef} />
      <div>Work in progress!</div>
      <div>
        In the meantime, you can visit the old
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://robcc.github.io/resume/"
        >
          site
        </a>.
      </div>
    </MountAnimator>
  );
};

export default Resume;
