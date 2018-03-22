import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { pad, background, constrainWidth } from '../../storybook-utils/decorators';
import Sidebar from './';
import EventInstanceList from '../EventInstanceList';

const instanceList = [
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
]

storiesOf('Sidebar', module)
  .addDecorator(pad)
  .add('with event instances', () => (
    <Sidebar
      header="L'Orfeo"
      subHeader="May 24 - August 7"
    >
      <EventInstanceList instanceList={instanceList} />
    </Sidebar>
  ))
  .add('no content', () => (
    <Sidebar />
  ));
