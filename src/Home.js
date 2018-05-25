import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import withHelper from './withHelper';

const items = [
{
  headline: "Assignments due",
  content: [
    {
      text: "Assignment 1 (in 3 days)", bar: 3/14*100,
    },
    {
      text: "Assignment 2 (in 10 days)", bar: 7/14*100,
    },
  ],
  button: "View Assignment 1",
},
{
  headline: "Grades",
  content: [
    {
      text: "You 90/100 (Student only)", bar: 90,
    },
    {
      text: "Average 68/100", bar: 68,
    },
    {
      text: "Median 72/100", bar: 72,
    },
  ],
  button: "View Results (Teacher only)",
},
{
  headline: "People",
  content: [
    {
      text: "82 Students"
    },
    {
      text: "3 Markers",
    },
    {
      text: "1 Teacher",
    },
  ],
  button: "View People",
},
]

export default withHelper(
theme => ({
  cardholder: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'justify-left',
    margin: theme.spacing.unit * 3,
  },
  card: {
    'flex-basis': 275,
    'min-height': 170,
    display: 'flex',
    'flex-direction': 'column',
    margin: 10,
  },
  content: {
    flex: 1,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'justify-start',
  },
  subContent: {
    'margin-top': 5,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}),
({ classes }) => (
  <React.Fragment>
    <Typography variant="title">
      Home Page
    </Typography>
    <div className={classes.cardholder}>
      {items.map(item =>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography variant="headline" component="h2">
              {item.headline}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {item.subtitle}
            </Typography>
            {item.content ? item.content.map((content)=><div className={classes.subContent}>
              {content.bar ? <LinearProgress color="secondary" variant="determinate" value={content.bar} /> : null}
              <Typography variant={item.contentType ? item.contentType : "body1"} component="p">
                {content.text}
              </Typography>
            </div>) : null}
            
          </CardContent>
          <CardActions>
            {item.button ? <Button size="small">{item.button}</Button> : null}
          </CardActions>
        </Card>
      )}
    </div>
  </React.Fragment>
),
{
  classes: PropTypes.object.isRequired,
}
);
