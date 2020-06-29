import PropTypes from 'prop-types';
import { v1 as generateId } from 'uuid';
import React from 'react';

import EditorLine from 'Components/EditorLine/EditorLine';

const Editor = ({ file }) => (
  <div>
    {file ? file.map((line, i) => (
      <EditorLine
        key={generateId()}
        lineNumber={i + 1}
        shouldAnimate={i === file.length - 1}
        line={line}
      />
    )) : ''}
  </div>
);

Editor.propTypes = {
  file: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default Editor;
