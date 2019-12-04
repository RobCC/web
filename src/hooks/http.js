import { useReducer, useCallback } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const httpReducer = (state, { type, data, errorMessage }) => {
  switch (type) {
    case 'SEND':
      return { ...state, loading: true, data: null };
    case 'RESPONSE':
      return { ...state, loading: false, data };
    case 'ERROR':
      return { loading: false, error: errorMessage };
    case 'CLEAR':
      return initialState;
    default:
      throw new Error('Should not be reached');
  }
};

const useHttp = () => {
  const [state, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = () => useCallback(dispatchHttp({ type: 'CLEAR' }), []);

  const sendRequest = useCallback(async (url, method, body) => {
    dispatchHttp({ type: 'SEND' });

    try {
      const response = await fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.json();

      dispatchHttp({ type: 'RESPONSE', data });
    } catch (e) {
      dispatchHttp({ type: 'ERROR', error: 'Something went wrong' });
    }
  }, []);

  return {
    ...state,
    sendRequest,
    clear,
    dummyRequest: () => {
      dispatchHttp({ type: 'SEND' });
    },
  };
};

export default useHttp;
