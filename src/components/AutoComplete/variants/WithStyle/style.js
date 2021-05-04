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

export { useStyles };
