import React from 'react';
import PropTypes from 'prop-types';
import withHelper from './withHelper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

export default withHelper(
theme => ({
  root: {
    position: 'static',
    zIndex: theme.zIndex.drawer + 1,
  }
}),
({ classes }) => (
  <BottomNavigation
    showLabels
    className={classes.root}
  >
    <Typography variant="title" color="inherit">
      Footer if needed.
    </Typography>
  </BottomNavigation>
),
{
  classes: PropTypes.object.isRequired,
});
