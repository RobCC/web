import { makeStyles } from '@material-ui/core/styles';

export const useItemStyles = makeStyles(() => ({
  root: {
    color: 'white',
    paddingTop: 16,
    paddingBottom: 16,
    borderLeft: '2px solid transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      '& $itemIcon': {
        color: 'white',
      },
    },
  },
  itemIcon: {
    minWidth: 30,
    color: '#80827b',
    margin: '0 auto',
  },
  selected: {
    backgroundColor: 'transparent !important',
    borderLeft: '2px solid white',
  },
}));

export default {
  useItemStyles,
};
