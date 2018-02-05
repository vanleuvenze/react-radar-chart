import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

function getCoordinatePoints(className, coordinateGroup, color) {
	return coordinateGroup.map((coordinates, index) => (
		<circle
			key={`rating-${index}`}
			className={className}
			cx={coordinates[0]}
			cy={coordinates[1]}
			r="1"
			stroke={color}
			strokeWidth="4"
			fill="none"
			/>
	))
}

function getPolylinePoints(coordinateGroup) {
	return [...coordinateGroup, coordinateGroup[0]].map(group => group.join(',')).join(' ');
}

const Outline = ({className, color, coordinateGroup}) => (
	[
		getCoordinatePoints(className, coordinateGroup, color),
		<polyline
			key={'outline'}
			fill={color}
			stroke={color}
			fillOpacity="0.3"
			points={getPolylinePoints(coordinateGroup)}
			/>
	]
);

Outline.propTypes = {
	className: PropTypes.string,
	coordinateGroup: PropTypes.array
};

export default Outline;