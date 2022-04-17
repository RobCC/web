import { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';

import FileTab from '#/components/FileTab/FileTab';
import useStore, { getOpenedFiles, getIsSideViewOpen } from '#/store';

import styles from './fileTabMenu.scss';

export default function FileTabMenu() {
  const [showScrollbar, toggleScrollbar] = useState(false);
  const openFiles = useStore(getOpenedFiles);
  const isSideViewOpen = useStore(getIsSideViewOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const setScrollWidth = useCallback(() => {
    const $wrapper = wrapperRef.current;
    const $scroll = scrollRef.current;
    const { scrollWidth, clientWidth } = $wrapper;

    $scroll.style.width = `${(clientWidth * clientWidth) / scrollWidth}px`;
  }, []);

  const setScrollLeft = useCallback(() => {
    const $wrapper = wrapperRef.current;

    scrollRef.current.style.left = `${
      ($wrapper.scrollLeft * 100) / $wrapper.scrollWidth
    }%`;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const $wrapper = e.currentTarget;

    // eslint-disable-next-line no-param-reassign
    $wrapper.scrollLeft += e.deltaY;

    if (scrollRef.current) {
      setScrollLeft();
    }
  }, []);

  useEffect(() => {
    const $wrapper = wrapperRef.current;
    const { scrollWidth, clientWidth } = $wrapper;

    toggleScrollbar(scrollWidth > clientWidth);

    if (showScrollbar) {
      setScrollWidth();
    }
  }, [openFiles]);

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
  }, [isSideViewOpen]);

  return (
    <div
      className={classNames(styles.tabMenu, {
        [styles.empty]: !openFiles.length,
      })}
    >
      {showScrollbar ? <div ref={scrollRef} className={styles.scroll} /> : null}
      <div ref={wrapperRef} className={styles.wrapper} onWheel={onWheel}>
        {openFiles.map((fullName) => (
          <FileTab key={fullName} fullName={fullName} />
        ))}
      </div>
    </div>
  );
}
