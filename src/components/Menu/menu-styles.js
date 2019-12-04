import { makeStyles } from '@material-ui/core/styles';

export const useDrawerStyles = makeStyles(() => ({
  paper: {
    backgroundColor: '#23241f',
  },
  drawer: {
    width: 200,
    flexShrink: 0,
    whiteSpace: 'nowrap',
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
