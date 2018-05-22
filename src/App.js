import React from 'react';
import PropTypes from 'prop-types';
import withRoot from './withRoot';
import withHelper from './withHelper';
import Header from './Header';
import Sidebar from './Sidebar';
//import Footer from './Footer';
import ContentPlaceholder from './ContentPlaceholder'

export default withRoot(withHelper(
theme => ({
  content: {
    'padding-top': 64,
    'padding-left': 240,
  }
}),
({ classes }) => (
  <React.Fragment>
    <Header pageName="CITS5501" userName="Name Here"/>
    <Sidebar />
    <div className={classes.content}>
      <ContentPlaceholder/>
    </div>
    {/*<Footer />*/}
  </React.Fragment>
),
{
  classes: PropTypes.object.isRequired,
}
));
