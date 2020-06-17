import React, {
  useReducer, useCallback, useRef, useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import lottie from 'lottie-web';

import bouncingBall from '~/public/ae/ball.json';
import { toggleResume, isResumeOpen as selector } from '../../store/ducks/resume';

import styles from './resume.scss';

const initialState = {
  show: false,
  animationInProgress: false,
};

const useIsMount = () => {
  const isMount = useRef(true);

  useEffect(() => {
    isMount.current = false;
  });

  return isMount.current;
};

function reducer(state, action) {
  switch (action.type) {
    case 'show':
      return {
        ...state,
        show: true,
        animationInProgress: true,
      };
    case 'hide':
      return {
        ...state,
        show: false,
        animationInProgress: true,
      };
    case 'animationFinished':
      return {
        ...state,
        animationInProgress: false,
      };
    default:
      throw new Error();
  }
}

const Resume = () => {
  const isMount = useIsMount();
  const reduxDispatch = useDispatch();
  const isResumeOpen = useSelector((store) => selector(store));
  const [{
    show, animationInProgress,
  }, dispatch] = useReducer(reducer, initialState);
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

  useEffect(() => {
    if (isMount) {
      return;
    }

    dispatch({
      type: isResumeOpen ? 'show' : 'hide',
    });
  }, [isResumeOpen]);

  const onUnmount = useCallback(() => {
    reduxDispatch(toggleResume());
  });

  const onAnimationEnd = useCallback(() => {
    dispatch({
      type: 'animationFinished',
    });
  });

  const classes = classNames(styles.wip, {
    [styles.slideIn]: show,
    [styles.slideOut]: !show,
  });

  return (show || animationInProgress) && (
    <div
      className={classes}
      ref={ballRef}
      onAnimationEnd={onAnimationEnd}
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
        <button type="button" onClick={onUnmount}>Unmount</button>
      </div>
      <div>Work in progress!</div>
    </div>
  );
};

export default Resume;
