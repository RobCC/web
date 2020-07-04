import React from 'react';
import classNames from 'classnames';
import { v1 as generateId } from 'uuid';
import { useSelector } from 'react-redux';

import FileTab from 'Components/FileTab/FileTab';
import { getOpenFiles } from '#/store/ducks/file';

import styles from './tabMenu.scss';

const FileTabMenu = () => {
  const openFiles = useSelector((store) => getOpenFiles(store));

  return (
    <div
      className={classNames(styles.tabMenu, {
        [styles.empty]: !openFiles.length,
      })}
    >
      {
        openFiles.map((name) => <FileTab key={generateId()} name={name} />)
      }
    </div>
  );
};

export default FileTabMenu;
