import React from 'react';
import styles from '../styles.css';

const Axis = ({centerPoint, coordinates, name}) => (
	<line 
		x1={centerPoint}
		y1={centerPoint}
		x2={coordinates[0]}
		y2={coordinates[1]}
		strokeWidth="2"
		stroke="black"
		/>
);

export default Axis;