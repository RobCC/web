import PropTypes from 'prop-types';
import React from 'react';

import L from 'Components/CodeLine/CodeLine';

const Editor = ({ codeLines }) => (
  <>
    {codeLines.map((line, i) => (
      <L key={line} lineNumber={i + 1}>{line}</L>
    ))}
  </>
);

Editor.propTypes = {
  codeLines: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default Editor;
