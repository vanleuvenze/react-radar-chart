import React from 'react';
import styles from '../styles.css';

const Rating = ({coordinates}) => (
	<circle 
		cx={coordinates[0]} 
		cy={coordinates[1]} 
		r="2" 
		stroke="black" 
		strokeWidth="4" 
		fill="none"
		/>
);

export default Rating;