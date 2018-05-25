import React from 'react';
import PropTypes from 'prop-types';
import withRoot from './withRoot';
import withHelper from './withHelper';
import Header from './Header';
import Sidebar from './Sidebar';
// import Footer from './Footer';
import Home from './Home'

export default withRoot(withHelper(
theme => ({
  root:{
    display: 'flex',
    'flex-direction': 'column',
    height: '100vh',
  },
  horizontalContent: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: theme.spacing.unit * 3,
  }
}),
({ classes }) => (
  <div className={classes.root}>
    <Header pageName="CITS5501" userName="Name Here"/>
    <div className={classes.horizontalContent}>
      <Sidebar />
      <div className={classes.content}>
        <Home/>
      </div>
    </div>
  </div>
),
{
  classes: PropTypes.object.isRequired,
}
));
