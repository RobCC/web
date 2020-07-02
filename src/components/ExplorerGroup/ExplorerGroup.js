import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Item from 'Components/ExplorerItem/ExplorerItem';
import { getShortName, getFilesByPath } from '#/_files';

import styles from './explorerGroup.scss';

const Group = ({
  level = 0, name, groups = [],
}) => {
  const [isClosed, setIsClosed] = useState(true);
  const groupStyles = classNames(styles.group, {
    [styles.closed]: isClosed,
  });
  const [shortName] = getShortName(name);
  const groupFiles = getFilesByPath(name);

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
        {shortName}
      </div>
      {groups.map((groupName) => (
        <Group
          key={`${name}/${groupName}`}
          name={`${name}/${groupName}`}
          level={level + 1}
        />
      ))}
      {groupFiles.map((fullFileName) => (
        <Item
          key={fullFileName}
          name={fullFileName}
          level={level + 1}
        />
      ))}
    </div>
  );
};

/* eslint-disable */
Group.propTypes = {
  level: PropTypes.number,
  name: PropTypes.string,
  groups: PropTypes.array,
}

export default Group;
