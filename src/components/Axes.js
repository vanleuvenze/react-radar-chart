import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Axes = ({coordinateGroup, centerPoint}) => (
	coordinateGroup.map(({coordinates}, i) => (
		<line
			key={`axis-${i}`}
			x1={centerPoint}
			y1={centerPoint}
			x2={coordinates[0]}
			y2={coordinates[1]}
			strokeWidth="2"
			stroke="black"
			/>
	))
);


Axes.propTypes = {
	centerPoint: PropTypes.number,
	coordinateGroup: PropTypes.array,
};

export default Axes;
