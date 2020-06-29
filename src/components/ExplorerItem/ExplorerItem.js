import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { openChangeFile } from '#/store/ducks/file';
import { getFileName } from '#/_files';

import styles from './explorerItem.scss';

const ExplorerItem = ({ name }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(openChangeFile(name));
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.item}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {getFileName(name)}
    </div>
  );
};

ExplorerItem.propTypes = {
  name: PropTypes.string,
};

export default ExplorerItem;
