import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import File from '#/components/ExplorerFile/ExplorerFile';
import Folder from '#/components/ExplorerFolder/ExplorerFolder';
import { isExplorerOpen as isExplorerOpenFn } from '#/store/ducks/explorer';
import { openChangeFile } from '#/store/ducks/file';
import rootFiles, { getFilesFolders } from '#/explorer';

import styles from './explorer.scss';

function ExplorerView() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const isExplorerOpen = useSelector((state) => isExplorerOpenFn(state));
  const explorerClasses = classNames(styles.explorer, {
    [styles.active]: isExplorerOpen,
  });
  const [files, folders] = getFilesFolders(rootFiles);

  useEffect(() => {
    const fileParam = params.get('file');

    if (fileParam) {
      dispatch(openChangeFile(fileParam));
    }
  }, [dispatch, params]);

  return (
    <div className={explorerClasses}>
      <div className={styles.title}>EXPLORER</div>
      {folders.map((groupFullName) => (
        <Folder
          key={groupFullName}
          name={groupFullName}
          items={rootFiles.get(groupFullName)}
        />
      ))}
      {files.map((fullFileName) => (
        <File key={fullFileName} name={fullFileName} />
      ))}
    </div>
  );
}

export default ExplorerView;
