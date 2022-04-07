import PropTypes from 'prop-types';
import React from 'react';

import EditorLine from '#/components/EditorLine/EditorLine';

function Editor({ file }) {
  const [, ...fileContent] = file;

  return (
    <div>
      {fileContent
        ? fileContent.map((line, i) => (
            <EditorLine
              key={line + i}
              lineNumber={i + 1}
              shouldAnimate={i === fileContent.length - 1}
              line={line}
            />
          ))
        : ''}
    </div>
  );
}

Editor.propTypes = {
  file: PropTypes.arrayOf(PropTypes.string),
};

export default Editor;
