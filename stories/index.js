import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import EventInstanceItem from '../components/EventInstanceItem';
import EventInstanceList from '../components/EventInstanceList';

/************************************************/
/* Decorators */
/************************************************/
const constrainWidth = story => (
  <div style={{width: '420px'}}>
    {story()}
  </div>
);
const background = story => (
  <div style={{background: '#EEEEEE'}}>
    {story()}
  </div>
);
const pad = story => (
  <div style={{padding: '30px'}}>
    {story()}
  </div>
);


/************************************************/
/* Stories */
/************************************************/

storiesOf('Atoms/Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Event instance item', module)
  .addDecorator(constrainWidth)
  .add('base case', () => (
    <EventInstanceItem
      date="Jan 1 7:30pm"
      isAvailable={true}
    />
  ));

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
