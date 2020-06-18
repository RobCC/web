import {
  useReducer, useCallback, useRef, useEffect,
} from 'react';

const useIsMount = () => {
  const isMount = useRef(true);

  useEffect(() => {
    isMount.current = false;
  });

  return isMount.current;
};

const ACTION_SHOW = 'show';
const ACTION_HIDE = 'hide';
const ACTION_ANIMATION_FINISHED = 'animationFinished';

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
      };
    default:
      throw new Error();
  }
}

function useAnimation(showTrigger) {
  const isFirstTrigger = useIsMount();
  const [state, dispatch] = useReducer(reducer, {
    show: showTrigger,
    animationInProgress: showTrigger,
  });
  const { show, animationInProgress } = state;

  useEffect(() => {
    if (isFirstTrigger) {
      return;
    }

    dispatch({
      type: showTrigger ? ACTION_SHOW : ACTION_HIDE,
    });
  }, [showTrigger]);

  const dispatchAnimationFinished = useCallback(() => {
    dispatch({ type: ACTION_ANIMATION_FINISHED });
  }, []);

  return {
    dispatchAnimationFinished,
    isMounted: show || animationInProgress,
    show,
  };
}

export default useAnimation;
