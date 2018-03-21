import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import EventInstanceItem from '../components/EventInstanceItem';
import EventInstanceList from '../components/EventInstanceList';

storiesOf('Atoms/Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Event instance item', module)
  .add('plain', () => (
    <EventInstanceItem
      date="Jan 1 7:30pm"
      isAvailable={true}
    />
  ));

storiesOf('Event instance list', module)
  .add('plain', () => (
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
