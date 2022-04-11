import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import { getFilesFolders } from '#/explorer';
import { handleOnKeyDownButton } from '#/utils/a11y';
import File from '../File/File';

import styles from './folder.scss';

type Props = {
  level?: number;
  name: string;
  items: Map<string, any>;
  parent?: string;
};

export default function Folder({ level = 0, name, items, parent = '' }: Props) {
  const [isClosed, setIsClosed] = useState(true);
  const [files, folders] = getFilesFolders(items);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  const onClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={classNames(styles.group, {
        [styles.closed]: isClosed,
      })}
      title={name}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleOnKeyDownButton(onClick)}
        className={styles.title}
        style={{
          paddingLeft: 15 + level * 7,
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} className={styles.caret} />
        {name}
      </div>
      {folders.map((folderName) => (
        <Folder
          key={`${fullName}/${folderName}`}
          name={folderName}
          parent={fullName}
          level={level + 1}
          items={items.get(folderName)}
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
