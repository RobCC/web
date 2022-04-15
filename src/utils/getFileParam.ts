import type { Location as HistoryLocation } from 'history';

function getFileParam(location?: HistoryLocation) {
  const searchParam = location ? location.search : window.location.hash;

  const [, file = ''] = searchParam.split('file=');

  return decodeURIComponent(file);
}

export default getFileParam;
