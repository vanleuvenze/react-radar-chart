import React from 'react';
import PropTypes from 'prop-types';

const Label =({alignment, className, coordinates, text}) => (
	<text
		className={className}
		x={coordinates[0]}
		y={coordinates[1]}
		textAnchor={alignment}
		>
		{text}
	</text>
);


Label.propTypes = {
	alignment: PropTypes.string,
	className: PropTypes.string,
	coordinates: PropTypes.array,
	text: PropTypes.string
};

export default Label;
