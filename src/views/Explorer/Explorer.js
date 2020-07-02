import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Item from 'Components/ExplorerItem/ExplorerItem';
import Group from 'Components/ExplorerGroup/ExplorerGroup';
import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import { getRootFiles } from '#/_files';

import styles from './explorer.scss';

const Explorer = () => {
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));
  const explorerClasses = classNames(styles.explorer, {
    [styles.active]: isExplorerOpen,
  });
  const fileNames = getRootFiles();

  return (
    <div className={explorerClasses}>
      {fileNames.map((fullFileName) => <Item key={fullFileName} name={fullFileName} />)}
      <Group name="Group 1" groups={['Sub-Group']} />
      <Item name="outside.json" />
    </div>
  );
};

export default Explorer;
