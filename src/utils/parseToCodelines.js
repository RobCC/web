/**
 * Transforms a multi-line string into an array of single-lined strings
 *
 * (Used as tagged template)
 */
export default ([string]) => string.split('\n').slice(1, -1);
