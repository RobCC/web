import { makeStyles } from '@material-ui/core/styles';

export const useItemStyles = makeStyles(() => ({
  root: {
    color: 'white',
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

export const useIconStyles = makeStyles(() => ({
  root: {
    minWidth: 30,
    color: '#80827b',
    margin: '0 auto',
    '&:hover': {
      color: 'white',
    },
  },
}));

export default {
  useItemStyles,
  useIconStyles,
};
