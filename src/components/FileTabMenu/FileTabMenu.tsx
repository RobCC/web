import { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';

import FileTab from '#/components/FileTab/FileTab';
import { fileSystem, sideBar } from '#/store';

import styles from './fileTabMenu.module.css';

const { useExplorerStore, isOpen } = sideBar;
const { useFileStore, getActiveFiles } = fileSystem;

export default function FileTabMenu() {
  const [showScrollbar, toggleScrollbar] = useState(false);
  const openFileNames = useFileStore(getActiveFiles);
  const isSideBarOpen = useExplorerStore(isOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const setScrollWidth = useCallback(() => {
    const $wrapper = wrapperRef.current;
    const $scroll = scrollRef.current;
    const { scrollWidth = 0, clientWidth = 0 } = $wrapper ?? {};

    $scroll!.style.width = `${(clientWidth * clientWidth) / scrollWidth}px`;
  }, []);

  const setScrollLeft = useCallback(() => {
    const $wrapper = wrapperRef.current;

    scrollRef.current!.style.left = `${
      ($wrapper!.scrollLeft * 100) / $wrapper!.scrollWidth
    }%`;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const $wrapper = e.currentTarget;

    $wrapper.scrollLeft += e.deltaY;

    if (scrollRef.current) {
      setScrollLeft();
    }
  }, []);

  useEffect(() => {
    const $wrapper = wrapperRef.current;
    const { scrollWidth = 0, clientWidth = 0 } = $wrapper ?? {};

    toggleScrollbar(scrollWidth > clientWidth);

    if (showScrollbar) {
      setScrollWidth();
    }
  }, [openFileNames]);

  useEffect(() => {
    if (showScrollbar) {
      setScrollWidth();
    }
  }, [showScrollbar]);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    setScrollWidth();
    setScrollLeft();
  }, [isSideBarOpen]);

  return (
    <div
      className={classNames(styles.tabMenu, {
        [styles.empty]: !openFileNames.length,
      })}
    >
      {showScrollbar ? <div ref={scrollRef} className={styles.scroll} /> : null}
      <div ref={wrapperRef} className={styles.wrapper} onWheel={onWheel}>
        {openFileNames.map(fullName => (
          <FileTab key={fullName} fullName={fullName} />
        ))}
      </div>
    </div>
  );
}
