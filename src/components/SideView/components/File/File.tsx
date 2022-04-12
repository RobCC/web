import { useCallback } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStore, { getCurrentFile } from '#/store';
import { getShortName, getFileIcon } from '#/explorer';
import { handleOnKeyDownButton } from '#/utils/a11y';

import styles from './file.scss';

type Props = {
  /** Depth level on the file system */
  level?: number;
  /** File name */
  name: string;
  /** Parent folder */
  parent?: string;
};

const INITIAL_PADDING = 15;
const LEVEL_PADDING_DELTA = 8;

export default function File({ level = 0, name, parent = '' }: Props) {
  const navigate = useNavigate();
  const currentTab = useStore(getCurrentFile);
  const { extension, icon, iconStyles, isStringIcon } = getFileIcon(name);
  const shortName = getShortName(name);
  const fullName = `${parent}${parent ? '/' : ''}${name}`;

  const onClick = useCallback(() => {
    const [hash] = window.location.hash.split('?');
    const [, location = '/'] = hash.split('#');

    // Using this instead of useSearchParams, since that one
    // navigates to root, resetting hash
    navigate(`${location}?file=${fullName}`);
  }, [fullName]);

  const explorerIconClasses = classNames(iconStyles, {
    [styles.icon]: isStringIcon,
    [styles.logoIcon]: !isStringIcon,
    [styles.json]: extension === 'json',
  });

  return (
    <div
      role="button"
      title={fullName}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleOnKeyDownButton(onClick)}
      className={classNames(styles.item, {
        [styles.active]: fullName === currentTab,
      })}
      style={{
        paddingLeft: INITIAL_PADDING + level * LEVEL_PADDING_DELTA,
      }}
    >
      {isStringIcon ? (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>{icon}</div>
        </div>
      ) : (
        <div className={styles.iconWrapper}>
          <div className={explorerIconClasses}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      )}
      {shortName}
    </div>
  );
}
