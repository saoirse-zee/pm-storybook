import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FilterButton from './';

storiesOf('Atoms/FilterButton', module)
  .add('unselected', () => (
    <FilterButton label="Moon" isSelected={false} />
  ))
  .add('selected', () => (
    <FilterButton label="Moon" isSelected={true} />
  ));
