import { useState, useEffect, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import hotkeys from 'hotkeys-js';
import { IconExplorer, IconSettings, IconUser } from '#/components/Icones';
import { explorer } from '#/store';
import { file } from '#/store';

import styles from './activityBar.module.css';

type ActBarItemProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

const { openFile } = file;

function ActBarItem({
  label,
  isActive,
  onClick,
  children,
}: PropsWithChildren<ActBarItemProps>) {
  return (
    <button
      aria-label={label}
      className={classNames(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SettingsItem() {
  const navigate = useNavigate();
  const fileName = 'Settings';

  const handleClick = () => {
    const [, currentFileParam] = window.location.hash.split('#/');

    if (fileName === decodeURIComponent(currentFileParam)) {
      openFile(fileName);
    } else {
      navigate(`/${encodeURIComponent(fileName)}`);
    }
  };

  useEffect(() => {
    hotkeys('ctrl+,, cmd+,', handleClick);
  }, []);

  return (
    <ActBarItem label={fileName} onClick={handleClick}>
      <IconSettings />
    </ActBarItem>
  );
}

function ResumeItem() {
  const navigate = useNavigate();
  const fileName = 'Resume';

  const handleClick = () => {
    const [, currentFileParam] = window.location.hash.split('#/');

    if (fileName === decodeURIComponent(currentFileParam)) {
      openFile(fileName);
    } else {
      navigate(`/${encodeURIComponent(fileName)}`);
    }
  };

  return (
    <ActBarItem label={fileName} onClick={handleClick}>
      <IconUser />
    </ActBarItem>
  );
}

const options = {
  EXPLORER: 'Explorer',
};

/**
 * The left-most bar in the application, which contains icons for different views.
 *
 * TODO: Tooltip á la VSCode
 * TODO: brighten on hover
 */
export default function ActivityBar() {
  const [currentOption, setCurrentOption] = useState(options.EXPLORER);

  useEffect(() => {
    hotkeys('ctrl+b,cmd+b', () => explorer.toggleSideBar());
  }, []);

  return (
    <div className={styles.bar}>
      <ActBarItem
        label={options.EXPLORER}
        onClick={() => {
          explorer.toggleSideBar();
          setCurrentOption(options.EXPLORER);
        }}
        isActive={currentOption === options.EXPLORER}
      >
        <IconExplorer />
      </ActBarItem>
      <div className={styles.bottom}>
        <ResumeItem />
        <SettingsItem />
      </div>
    </div>
  );
}
