import { withStyles } from '@material-ui/core/styles';

export default (styles, component, propTypes) => {
  component.propTypes = propTypes;
  return withStyles(styles)(component)
}
