import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set the theme here
import '../themes/cool.css';

const req = require.context('../components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
