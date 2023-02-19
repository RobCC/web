import type { KeyboardEvent } from 'react';

export const handleOnKeyDownButton =
  (handler: () => void) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handler();
    }
  };

export default {
  handleOnKeyDownButton,
};
