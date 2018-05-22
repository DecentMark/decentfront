import React from 'react';
import PropTypes from 'prop-types';
import withHelper from './withHelper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

export default withHelper(
theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    width: '100%',
    bottom: 0,
  }
}),
({ classes }) => (
  <BottomNavigation
    showLabels
    className={classes.root}
  >
    <Typography variant="title" color="inherit">
      7:30 AM
    </Typography>
  </BottomNavigation>
),
{
  classes: PropTypes.object.isRequired,
});
