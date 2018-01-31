import React from 'react';
import styles from '../styles.css';

const Rung = ({radius, index, centerPoint}) => (
	<circle 
		key={`circle-${index}`} 
		className={styles.rung} 
		cx={centerPoint} 
		cy={centerPoint} 
		r={radius} 
		stroke="red" 
		strokeWidth="2" 
		fill="none"
		/>
);

export default Rung