import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const repositionRules = {
	1: (x, y) => ({adjustedCoordinates: [x, y - 8], alignment: 'start'}),
	2: (x, y) => ({adjustedCoordinates: [x - 8, y], alignment: 'end'}),
	3: (x, y) => ({adjustedCoordinates: [x - 8, y + 8], alignment: 'end'}),
	4: (x, y) => ({adjustedCoordinates: [x, y + 8], alignment: 'start'})
};

function isBetween (target, lowerBound, higherBound) {
	return target >= lowerBound && target <= higherBound;
}

function getQuadrant (angle) {
	return [[0, 90], [90, 180], [180, 270], [270, 360]].reduce((acc, range, i) => (
		isBetween(angle, ...range) ? i + 1 : acc
	), null);

}

function getTextPosition(angle, coordinates) {
	const quadrant = getQuadrant(angle);
	console.log('getting for', angle, quadrant);
	return repositionRules[quadrant](...coordinates);
}


const Labels =({coordinateGroup, chartWidth}) => (
	coordinateGroup.map(({coordinates, name}, i) => {
		const angle = 360 - ((360 / coordinateGroup.length) * i);
		const {adjustedCoordinates, alignment} = getTextPosition(angle, coordinates);

		return (
			<text
				key={`axis-label-${i}`}
				x={adjustedCoordinates[0]}
				y={adjustedCoordinates[1]}
				textAnchor={alignment}
				>
				{name}
			</text>
		);
	}
));


Labels.propTypes = {
	coordinateGroup: PropTypes.array,
	chartWidth: PropTypes.number
};

export default Labels;
