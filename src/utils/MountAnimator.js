import React, { useReducer, useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useIsMount = () => {
  const isMount = useRef(true);

  useEffect(() => {
    isMount.current = false;
  });

  return isMount.current;
};

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const ACTION_SHOW = 'show';
const ACTION_HIDE = 'hide';
const ACTION_ANIMATION_FINISHED = 'animationFinished';
const ACTION_CALLBACK_TRIGGERED = 'callbackTriggered';

function reducer(state, action) {
  switch (action.type) {
    case ACTION_SHOW:
      return {
        ...state,
        show: true,
        animationInProgress: true,
      };
    case ACTION_HIDE:
      return {
        ...state,
        show: false,
        animationInProgress: true,
      };
    case ACTION_ANIMATION_FINISHED:
      return {
        ...state,
        animationInProgress: false,
        triggerCallback: true,
      };
    case ACTION_CALLBACK_TRIGGERED:
      return {
        ...state,
        triggerCallback: false,
      };
    default:
      throw new Error();
  }
}

function MountAnimator({
  children,
  mount,
  className,
  inAnimation,
  outAnimation,
  animationFinishedCb,
  style = {},
}) {
  const parentRef = useRef(null);
  const prevMount = usePrevious(mount);
  const isFirstTrigger = useIsMount();
  const [state, dispatch] = useReducer(reducer, {
    show: mount,
    animationInProgress: mount,
    triggerCallback: false,
  });
  const { show, animationInProgress, triggerCallback } = state;
  const showRef = useRef(show);

  useEffect(() => {
    if (isFirstTrigger || mount === prevMount || animationInProgress) {
      return;
    }

    const newState = !show;

    showRef.current = newState;

    dispatch({
      type: newState ? ACTION_SHOW : ACTION_HIDE,
    });
  }, [mount, animationInProgress]);

  useEffect(() => {
    if (isFirstTrigger || !triggerCallback) {
      return;
    }

    if (animationFinishedCb) {
      animationFinishedCb(showRef.current);
    }

    dispatch({ type: ACTION_CALLBACK_TRIGGERED });
  }, [triggerCallback, animationFinishedCb]);

  const onAnimationEnd = useCallback((event) => {
    const { target } = event;
    const { current } = parentRef;

    if (target === current) {
      dispatch({ type: ACTION_ANIMATION_FINISHED });
    }
  }, []);

  const classes = classNames(className, show ? inAnimation : outAnimation);

  return show || animationInProgress ? (
    <div
      style={style}
      ref={parentRef}
      className={classes}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
}

/* eslint-disable react/forbid-prop-types */
MountAnimator.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  mount: PropTypes.bool.isRequired,
  className: PropTypes.string,
  inAnimation: PropTypes.string.isRequired,
  animationFinishedCb: PropTypes.func,
  outAnimation: PropTypes.string.isRequired,
};

export default MountAnimator;
