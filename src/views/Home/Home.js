import React from 'react';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { tabList, tabMap } from '#/utils/content';
import { getCurrentTab } from '#/store/ducks/tabs';

import styles from './home.scss';

const files = [
  {
    id: tabList.greet,
    name: 'greet.js',
    icon: 'JS',
  },
  {
    id: tabList.contact,
    name: 'contact.css',
    icon: '#',
  },
];

const Home = () => {
  const currentTab = useSelector((store) => getCurrentTab(store));

  return (
    <div className={styles.homeWrapper}>
      <TabMenu tabs={files} />
      <Editor file={tabMap[currentTab]} />
    </div>
  );
};

export default Home;
