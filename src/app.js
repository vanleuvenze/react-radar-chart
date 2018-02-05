import React from 'react'
import { render } from 'react-dom'
import RadarChart from './index.js';
import styles from './styles.css';

const root = document.createElement('div');
root.className = styles.root;

document.body.appendChild(root);

render(<RadarChart/>, root);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    const NewApp = require('./index.js').default;
    render(<NewApp/>, root);
  });
}