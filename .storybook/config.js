import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const req = require.context('../components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
