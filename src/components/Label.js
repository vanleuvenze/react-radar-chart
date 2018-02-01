import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const repositionRules = {
	1: (coordinates, chartWidth) => ({left: coordinates[0], bottom: chartWidth - coordinates[1]}),
	2: (coordinates, chartWidth) => ({right: chartWidth - coordinates[0], bottom: chartWidth - coordinates[1]}),
	3: (coordinates, chartWidth) => ({right: chartWidth - coordinates[0], top: coordinates[1]}),
	4: (coordinates, chartWidth) => ({left: coordinates[0], top: coordinates[1]})
};

function isBetween (target, lowerBound, higherBound) {
	return target >= lowerBound && target <= higherBound;
}

function getQuadrant (angle) {
	return [[0, 90], [9, 180], [180, 270], [270, 360]].reduce((acc, range, i) => (
		isBetween(angle, ...range) ? i + 1 : acc
	), null);

}

function setStyle(coordinates, angle, chartWidth) {
	const quadrant = getQuadrant(angle);
	return repositionRules[quadrant](coordinates, chartWidth) || {};
}


const Label =({coordinates, name, angle, chartWidth}) => (
	<span className={styles.label} style={setStyle(coordinates, angle, chartWidth)}>
		{name}
	</span>
);


Label.propTypes = {
	angle: PropTypes.number,
	coordinates: PropTypes.array,
	name: PropTypes.string,
	chartWidth: PropTypes.number
};

export default Label;
