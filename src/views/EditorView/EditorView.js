import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TabMenu from 'Components/TabMenu/TabMenu';
import Editor from 'Components/Editor/Editor';
import { tabList, tabMap } from '#/utils/content';
import { getCurrentTab } from '#/store/ducks/tabs';

import styles from './editorView.scss';

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

const EditorView = ({ location }) => {
  // TODO: To be used
  /* eslint-disable */
  const [, ...path] = location.pathname.split('/');
  const currentTab = useSelector((store) => getCurrentTab(store));

  return (
    <div className={styles.wrapper}>
      <TabMenu tabs={files} />
      <Editor file={tabMap[currentTab]} />
    </div>
  );
};


EditorView.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default EditorView;
