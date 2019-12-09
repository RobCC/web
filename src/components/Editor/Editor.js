import PropTypes from 'prop-types';
import generateId from 'uuid/v1';
import React from 'react';

import L from 'Components/CodeLine/CodeLine';

const Editor = ({ codeLines }) => (
  <div>
    {codeLines.map((line, i) => (
      <L key={generateId()} lineNumber={i + 1} isAnimated={i === codeLines.length - 1}>{line}</L>
    ))}
  </div>
);

Editor.propTypes = {
  codeLines: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default Editor;
