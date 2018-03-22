import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { pad, background, constrainWidth } from '../../storybook-utils/decorators';
import EventInstanceList from './';

storiesOf('Event instance list', module)
  .addDecorator(pad)
  .addDecorator(background)
  .addDecorator(constrainWidth)
  .add('base case', () => (
    <EventInstanceList
      instanceList={[
        {
          id: 1,
          date: "Jan 1 7:30pm",
          isAvailable: true
        },
        {
          id: 2,
          date: "Jan 2 2:30pm",
          isAvailable: false
        },
        {
          id: 3,
          date: "Jan 2 7:30pm",
          isAvailable: true
        },
        {
          id: 4,
          date: "Jan 3 7:30pm",
          isAvailable: true
        },
      ]}
    />
  ))
  .add('no events', () => (
    <EventInstanceList
      instanceList={[]}
    />
  ));
