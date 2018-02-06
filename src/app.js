import React from 'react';
import {render} from 'react-dom';
import RadarChart from './index';

import {defaultAxisNames, defaultGroups} from '../defaults';

const root = document.createElement('div');
root.setAttribute('style', "width: 80%; margin: 40px auto;");

document.body.appendChild(root);

render(<RadarChart axisNames={defaultAxisNames} groups={defaultGroups}/>, root);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    const NewApp = require('./index.js').default;
    render(<NewApp axisNames={defaultAxisNames} groups={defaultGroups}/>, root);
  });
}
