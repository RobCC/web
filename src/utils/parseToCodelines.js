/**
 * Transforms a multi-line string into an array of single-lined strings
 *
 * (Used as tagged template)
 */
export default (string) => {
  const trimmedLines = string.split('\n').slice(1, -1);

  if (trimmedLines[0] !== '!editor') {
    return [
      '!editor',
      ...trimmedLines,
    ];
  }

  return trimmedLines;
};
