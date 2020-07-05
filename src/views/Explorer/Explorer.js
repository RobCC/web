import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import File from 'Components/ExplorerFile/ExplorerFile';
import Folder from 'Components/ExplorerFolder/ExplorerFolder';
import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import rootFiles, { getFilesFolders } from '#/_files';

import styles from './explorer.scss';

const Explorer = () => {
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));
  const explorerClasses = classNames(styles.explorer, {
    [styles.active]: isExplorerOpen,
  });
  const [files, groups] = getFilesFolders(rootFiles);

  return (
    <div className={explorerClasses}>
      {groups.map((groupFullName) => (
        <Folder
          key={groupFullName}
          name={groupFullName}
          items={rootFiles.get(groupFullName)}
        />
      ))}
      {files.map((fullFileName) => <File key={fullFileName} name={fullFileName} />)}
    </div>
  );
};

export default Explorer;
