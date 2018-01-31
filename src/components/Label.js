import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Label = ({coordinates, name}) => {
	console.log('name for', name, coordinates);

	// it would be nice to have some logic here that made the label situate differently

	return (
		<span x={coordinates[0]} y={coordinates[1]} fontFamily="Verdana" fontSize="35">
			{name}
		</span>
	);
}


Label.propTypes = {
	coordinates: PropTypes.array,
	name: PropTypes.string
};

export default Label;
