import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ MUiComponents }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange}>
          {MUiComponents.map(c => (
            <Tab label={c.title} key={c.key} />
          ))}
        </Tabs>
      </AppBar>
      {MUiComponents.map((c, i) => (
        <TabPanel value={value} index={i}>
          {c.Component}
        </TabPanel>
      ))}
    </div>
  );
}
