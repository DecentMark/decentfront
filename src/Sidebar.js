import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ClassIcon from '@material-ui/icons/Class';
import CreateIcon from '@material-ui/icons/Create';
import withHelper from './withHelper';

export default withHelper(
theme => ({
  root: {
    top: 64,
    width: 240,
  },
}),
({ classes }) => (
  <Drawer
    variant="persistent"
    anchor="left"
    open={true}
    classes={{paper: classes.root}}
  >
    <List>
      <ListItem button>
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="CITS5501" />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit Class">
            <CreateIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in="true" timeout="auto" unmountOnExit>
        <List dense="true">
          <ListItem button>
            <ListItemText primary="Change Class" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Assignments" />
      </ListItem>
      <Collapse in="true" timeout="auto" unmountOnExit>
        <List dense="true">
          <ListItem button>
            <ListItemText primary="Assignment 1" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Assignment">
                <CreateIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Assignment 2" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Assignment">
                <CreateIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Assignment 3" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Assignment">
                <CreateIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Assignment 4" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Assignment">
                <CreateIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="New Assignment" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    <Divider />
  </Drawer>
),
{
  classes: PropTypes.object.isRequired,
}
);