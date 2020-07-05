import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v1 as generateId } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import File from 'Components/ExplorerFile/ExplorerFile';
import { getFilesFolders } from '#/_files';

import styles from './explorerGroup.scss';

const Group = ({
  level = 0, name, items, parent = '',
}) => {
  const [isClosed, setIsClosed] = useState(true);
  const groupStyles = classNames(styles.group, {
    [styles.closed]: isClosed,
  });
  const [files, groups] = getFilesFolders(items);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  return (
    <div className={groupStyles}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsClosed(!isClosed)}
        onKeyDown={() => setIsClosed(!isClosed)}
        className={styles.title}
        style={{
          paddingLeft: 15 + (level * 7),
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className={styles.caret} />
        {name}
      </div>
      {groups.map((groupName) => (
        <Group
          key={generateId()}
          name={groupName}
          parent={fullName}
          level={level + 1}
          items={items.get(groupName)}
        />
      ))}
      {files.map((fullFileName) => (
        <File
          key={fullFileName}
          name={fullFileName}
          parent={fullName}
          level={level + 1}
        />
      ))}
    </div>
  );
};

/* eslint-disable */
Group.propTypes = {
  level: PropTypes.number,
  items: PropTypes.object,
  name: PropTypes.string,
  parent: PropTypes.string,
}

export default Group;
