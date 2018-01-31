import React from 'react';
import PropTypes from 'prop-types';
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

Rating.propTypes = {
	coordinates: PropTypes.array
};

export default Rating;