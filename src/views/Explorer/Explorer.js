import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import styles from './explorer.scss';

const Explorer = () => {
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));
  const explorerClasses = classNames(styles.explorer, {
    [styles.active]: isExplorerOpen,
  });

  return (
    <div className={explorerClasses}>
      [WIP]
    </div>
  );
};

export default Explorer;
