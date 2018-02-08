import React from 'react';
import PropTypes from 'prop-types';

const repositionRules = {
	1: (x, y) => ({adjustedCoordinates: [x, y - 8], alignment: 'start'}),
	2: (x, y) => ({adjustedCoordinates: [x - 8, y], alignment: 'end'}),
	3: (x, y) => ({adjustedCoordinates: [x - 8, y + 8], alignment: 'end'}),
	4: (x, y) => ({adjustedCoordinates: [x + 8, y + 8], alignment: 'start'})
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
	return repositionRules[quadrant](...coordinates);
}

const Labels =({chartWidth, className, coordinateGroup}) => (
	<g>
		{coordinateGroup.map(({coordinates, name}, i) => {
			const angle = 360 - ((360 / coordinateGroup.length) * i);
			const {adjustedCoordinates, alignment} = getTextPosition(angle, coordinates);

			return (
				<text
					key={`axis-label-${i}`}
					className={className}
					x={adjustedCoordinates[0]}
					y={adjustedCoordinates[1]}
					textAnchor={alignment}
					>
					{name}
				</text>
			)
		})}
	</g>
);


Labels.propTypes = {
	chartWidth: PropTypes.number,
	className: PropTypes.string,
	coordinateGroup: PropTypes.array
};

export default Labels;
