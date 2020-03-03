import { blueGrey } from '@material-ui/core/colors';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: blueGrey ,
    '&:hover': {
      color: theme.palette.common.grey,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

export default styles;