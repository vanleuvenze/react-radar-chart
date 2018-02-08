import React from 'react';
import PropTypes from 'prop-types';

const Rung = ({className, centerPoint, radius}) => (
	<circle
		className={className}
		cx={centerPoint}
		cy={centerPoint}
		r={radius}
		stroke="black"
		strokeWidth="1"
		fill="none"
		/>
);

Rung.propTypes = {
	centerPoint: PropTypes.number,
	className: PropTypes.string,
	radius: PropTypes.number
};

export default Rung;
