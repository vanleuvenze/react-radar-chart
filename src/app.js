import React from 'react'
import { render } from 'react-dom'
import RadarChart from './index.js';
import styles from './styles.css';

import {defaultAxisNames, defaultGroups} from './defaults';

const root = document.createElement('div');
root.className = styles.root;

document.body.appendChild(root);

render(<RadarChart axisNames={defaultAxisNames} groups={defaultGroups}/>, root);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    const NewApp = require('./index.js').default;
    render(<NewApp axisNames={defaultAxisNames} groups={defaultGroups}/>, root);
  });
}