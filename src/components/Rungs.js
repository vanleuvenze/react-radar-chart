import React from 'react';
import PropTypes from 'prop-types';

const Rungs = ({className, centerPoint, chartWidth, numRungs}) => (
	Array.from({length: numRungs + 1}).map((n, i) => (
		<circle
			key={`rung-${i}`}
			className={className}
			cx={centerPoint}
			cy={centerPoint}
			r={i * (chartWidth / numRungs) / 2}
			stroke="black"
			strokeWidth="1"
			fill="none"
			/>
	))
);

Rungs.propTypes = {
	centerPoint: PropTypes.number,
	chartWidth: PropTypes.number,
	className: PropTypes.string,
	numRungs: PropTypes.number
};

export default Rungs;
