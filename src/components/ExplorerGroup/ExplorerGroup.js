import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from 'Components/ExplorerItem/ExplorerItem';

import styles from './explorerGroup.scss';

const Group = ({ title, items }) => {
  const [isClosed, setIsClosed] = useState(false);
  const groupStyles = classNames(styles.group, {
    [styles.closed]: isClosed,
  });

  return (
    <div className={groupStyles}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsClosed(!isClosed)}
        onKeyDown={() => setIsClosed(!isClosed)}
        className={styles.title}
      >
        {title}
      </div>
      {items.map((fullFileName) => <Item key={fullFileName} name={fullFileName} />)}
    </div>
  );
};

/* eslint-disable */
Group.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Group;
