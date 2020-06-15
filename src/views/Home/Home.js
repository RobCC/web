import React from 'react';
import { useSelector } from 'react-redux';

import FileMenu from 'Components/FileTabMenu/FileTabMenu';
import Editor from 'Components/Editor/Editor';
import { tabList, tabMap } from '#/utils/content';
import { getCurrentTab } from '#/store/ducks/tabs';

import styles from './home.scss';

const files = [
  {
    id: tabList.greet,
    name: 'greet.js',
    extension: 'JS',
  },
  {
    id: tabList.contact,
    name: 'contact.css',
    extension: '#',
  },
];

const Home = () => {
  const currentTab = useSelector((store) => getCurrentTab(store));

  return (
    <div className={styles.homeWrapper}>
      <FileMenu tabs={files} />
      <Editor file={tabMap[currentTab]} />
    </div>
  );
};

export default Home;
