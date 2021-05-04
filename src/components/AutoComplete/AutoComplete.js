import React from 'react';
import { top100Films } from '../../seed/data';
import Tabs from '../Tabs';
import { WithStyle, MakeStyle, StyledComponents } from './variants';

const MUiComponents = [
  {
    key: 'Autocomplete-1',
    title: 'WithStyle',
    Component: <WithStyle seedArray={top100Films} />,
  },
  {
    key: 'Autocomplete-2',
    title: 'makeStyles',
    Component: <MakeStyle seedArray={top100Films} />,
  },
  {
    key: 'Autocomplete-3',
    title: 'styled-components',
    Component: <StyledComponents seedArray={top100Films} />,
  },
];

const AutoComplete = () => {
  return <Tabs MUiComponents={MUiComponents} />;
};

export default AutoComplete;
