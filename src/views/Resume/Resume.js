import React, {
  useCallback, useRef, useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import lottie from 'lottie-web';

import bouncingBall from '~/public/ae/ball.json';
import { toggleResume, isResumeOpen as selector } from '../../store/ducks/resume';
import useAnimation from '../../utils/useAnimation';

import styles from './resume.scss';


const Resume = () => {
  const reduxDispatch = useDispatch();
  const isResumeOpen = useSelector((store) => selector(store));
  const {
    show,
    isMounted,
    dispatchAnimationFinished,
  } = useAnimation(isResumeOpen);
  const ballRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: ballRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: bouncingBall,
    });
  }, []);

  const hideResume = useCallback(() => {
    reduxDispatch(toggleResume());
  }, []);

  const classes = classNames(
    styles.wip,
    show ? styles.slideIn : styles.slideOut,
  );

  return isMounted && (
    <div
      className={classes}
      ref={ballRef}
      onAnimationEnd={dispatchAnimationFinished}
    >
      <div>
        In the meantime, you can visit the old
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://robcc.github.io/resume/"
        >
          site
        </a>.
        <button type="button" onClick={hideResume}>Unmount</button>
      </div>
      <div>Work in progress!</div>
    </div>
  );
};

export default Resume;
