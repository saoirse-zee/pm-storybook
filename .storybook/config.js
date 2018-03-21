import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
