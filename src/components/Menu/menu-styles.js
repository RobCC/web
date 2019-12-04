import { makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 70;

export const useDrawerStyles = makeStyles(() => ({
  paper: {
    backgroundColor: '#272822',
    width: DRAWER_WIDTH,
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    width: DRAWER_WIDTH,
  },
}));
export const useListStyles = makeStyles(() => ({
  padding: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

export default {
  useDrawerStyles,
};
