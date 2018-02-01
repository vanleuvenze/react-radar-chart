import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Rungs = ({centerPoint, chartWidth, numRungs}) => (
	Array.from({length: numRungs + 1}).map((n, i) => (
		<circle
			key={`rung-${i}`}
			className={styles.rung}
			cx={centerPoint}
			cy={centerPoint}
			r={i * (chartWidth / numRungs) / 2}
			stroke="red"
			strokeWidth="2"
			fill="none"
			/>
	))
);

Rungs.propTypes = {
	centerPoint: PropTypes.number,
	chartWidth: PropTypes.number,
	numRungs: PropTypes.number
};

export default Rungs;