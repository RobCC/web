import React from 'react';
import { useSelector } from 'react-redux';

import FileTab from 'Components/FileTab/FileTab';
import getFileIcon from '#/utils/getFileIcon';
import { getOpenFiles } from '#/store/ducks/file';

import styles from './tabMenu.scss';

const FileTabMenu = () => {
  const openFiles = useSelector((store) => getOpenFiles(store));

  return (
    <div className={styles.tabMenu}>
      {
      openFiles.map((name) => <FileTab key={name} name={name} icon={getFileIcon(name)} />)
    }
    </div>
  );
};

export default FileTabMenu;
