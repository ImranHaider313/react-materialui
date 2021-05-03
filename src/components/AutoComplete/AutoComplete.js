import React from 'react';
import TextField from '@material-ui/core/TextField';
import { AutoComplete } from './style';
import { top100Films } from '../../seed/data';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      transform: 'translate(34px, 20px) scale(1);',
    },
  },
  inputRoot: {
    color: 'purple',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 26,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'purple',
    },
  },
}));

const ComboBox = () => {
  const classes = useStyles();
  return (
    <AutoComplete
      classes={classes}
      options={top100Films}
      getOptionLabel={option => option.title}
      renderInput={params => (
        <TextField {...params} label='Combo box' variant='outlined' />
      )}
    />
  );
};

export default ComboBox;
