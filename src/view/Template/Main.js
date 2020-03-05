import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.paper}>
      <div className={classes.contentWrapper}>
         <img src="/image/bil.jpeg" alt="profile" width="900" height="400" />
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);