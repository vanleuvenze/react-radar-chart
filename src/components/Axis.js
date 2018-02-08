import React from 'react';
import PropTypes from 'prop-types';

const Axis = ({className, centerPoint, coordinates}) => (
	<line
		className={className}
		x1={centerPoint}
		y1={centerPoint}
		x2={coordinates[0]}
		y2={coordinates[1]}
		strokeWidth="2"
		stroke="black"
		/>
);

Axis.propTypes = {
	centerPoint: PropTypes.number,
	className: PropTypes.string,
	coordinates: PropTypes.array,
};

export default Axis;
