import React from 'react';
import { useSelector } from 'react-redux';
import { v1 as generateId } from 'uuid';
import classNames from 'classnames';

import File from 'Components/ExplorerFile/ExplorerFile';
import FFile from 'Components/ExplorerItems/File/File';
import Group from 'Components/ExplorerGroup/ExplorerGroup';
import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import { getRootFiles } from '#/_files';

import styles from './explorer.scss';

import rootFiles from '#/fileExplorer/files/root';
import testFile from '#/fileExplorer/files/root/greet';

const Explorer = () => {
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));
  const explorerClasses = classNames(styles.explorer, {
    [styles.active]: isExplorerOpen,
  });
  const [files, groups] = getRootFiles();

  return (
    <div className={explorerClasses}>
      {groups.map((groupFullName) => <Group key={generateId()} name={groupFullName} />)}
      {files.map((fullFileName) => <File key={generateId()} name={fullFileName} />)}
      <FFile file={testFile} />
    </div>
  );
};

export default Explorer;
