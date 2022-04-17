// Ignore. history is react-router-dom's dependency
// See: https://reactrouter.com/docs/en/v6/api#unstable_historyrouter
// eslint-disable-next-line import/no-extraneous-dependencies
import { createHashHistory } from 'history';

const history = createHashHistory({ window });

export default history;
