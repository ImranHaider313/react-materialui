import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useStyles } from './style';

const CustomisedAutoComplete = ({ seedArray }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      classes={classes}
      options={seedArray}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label='Combo box'
            variant='outlined'
            fullWidth
          />
        );
      }}
    />
  );
};

export default CustomisedAutoComplete;
