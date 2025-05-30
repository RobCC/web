import { useState, useEffect, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import hotkeys from 'hotkeys-js';
import { IconExplorer, IconSettings, IconUser } from '#/components/Icones';
import { sideBar } from '#/store';
import { fileSystem } from '#/store';

import styles from './activityBar.module.css';

type ActBarItemProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

const { openFile } = fileSystem;

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
    hotkeys('ctrl+,, cmd+,', e => {
      e.preventDefault();
      handleClick();
    });
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
 */
export default function ActivityBar() {
  const [currentOption, setCurrentOption] = useState(options.EXPLORER);

  useEffect(() => {
    hotkeys('ctrl+b,cmd+b', e => {
      e.preventDefault();
      sideBar.toggle();
    });
  }, []);

  return (
    <div className={styles.bar}>
      <ActBarItem
        label={options.EXPLORER}
        onClick={() => {
          sideBar.toggle();
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
