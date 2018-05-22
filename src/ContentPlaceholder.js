import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withHelper from './withHelper';

export default withHelper(
theme => ({
}),
({ classes, pageName, userName }) => (
  <Typography className={classes.flex} variant="title" color="inherit">
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
    Placeholder<br/>
  </Typography>
),
{
  classes: PropTypes.object.isRequired,
}
);
