import React from 'react';
import PropTypes from 'prop-types';
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

Rung.propTypes = {
	radius: PropTypes.number,
	index: PropTypes.number,
	centerPoint: PropTypes.number
};

export default Rung;