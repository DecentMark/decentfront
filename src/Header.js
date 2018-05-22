import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import withHelper from './withHelper';

export default withHelper(
theme => ({
  bar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -theme.spacing.unit * 3/2,
    marginRight: theme.spacing.unit * 5/2,
  },
  button: {
    margin: theme.spacing.unit,
  },
}),
({ classes, pageName, userName }) => (
  <AppBar className={classes.bar} position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography className={classes.flex} variant="title" color="inherit">
        DecentMark{pageName ? " – " + pageName : ""}
      </Typography>
      <Button color="inherit">
        {userName ? userName : "Login"}
        <AccountIcon className={classes.button}/>
      </Button>
      <Typography variant="title" color="inherit">
        9:42 AM
      </Typography>
    </Toolbar>
  </AppBar>
),
{
  classes: PropTypes.object.isRequired,
  pageName: PropTypes.string,
  userName: PropTypes.string,
}
);
