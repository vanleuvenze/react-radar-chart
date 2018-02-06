import React from 'react';
import PropTypes from 'prop-types';

const Axes = ({className, coordinateGroup, centerPoint}) => (
	coordinateGroup.map(({coordinates}, i) => (
		<line
			key={`axis-${i}`}
			className={className}
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
	className: PropTypes.string,
	coordinateGroup: PropTypes.array,
};

export default Axes;
