import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import File from '#/components/ExplorerFile/ExplorerFile';
import { getFilesFolders } from '#/explorer';

import styles from './explorerFolder.scss';

function Folder({ level = 0, name, items, parent = '' }) {
  const [isClosed, setIsClosed] = useState(true);
  const groupStyles = classNames(styles.group, {
    [styles.closed]: isClosed,
  });
  const [files, groups] = getFilesFolders(items);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  const onClick = useCallback(() => {
    setIsClosed(!isClosed);
  }, [isClosed]);

  return (
    <div className={groupStyles} title={name}>
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onClick}
        className={styles.title}
        style={{
          paddingLeft: 15 + level * 7,
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className={styles.caret} />
        {name}
      </div>
      {groups.map((groupName) => (
        <Folder
          key={`${fullName}/${groupName}`}
          name={groupName}
          parent={fullName}
          level={level + 1}
          items={items.get(groupName)}
        />
      ))}
      {files.map((fileName) => (
        <File
          key={`${fullName}/${fileName}`}
          name={fileName}
          parent={fullName}
          level={level + 1}
        />
      ))}
    </div>
  );
}

/* eslint-disable */
Folder.propTypes = {
  level: PropTypes.number,
  items: PropTypes.object,
  name: PropTypes.string,
  parent: PropTypes.string,
};

export default Folder;
