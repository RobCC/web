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
    '&::before': {
      content: '""',
      background: 'white',
      height: '100%',
      left: -2,
      top: 0,
      position: 'absolute',
      width: 2,
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
    '&::before': {
      left: 0,
    },
    '& $itemIcon': {
      color: 'white',
    },
  },
}));

export default {
  useItemStyles,
};
