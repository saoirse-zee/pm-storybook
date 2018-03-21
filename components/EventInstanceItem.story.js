import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { constrainWidth } from '../storybook-utils/decorators';
import EventInstanceItem from '../components/EventInstanceItem';

storiesOf('Event instance item', module)
  .addDecorator(constrainWidth)
  .add('base case', () => (
    <EventInstanceItem
      date="May 1 7:30pm"
      isAvailable={true}
    />
  ));
