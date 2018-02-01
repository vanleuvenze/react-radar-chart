import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Ratings = ({coordinateGroup}) => (
	coordinateGroup.map((coordinates, i) =>
		<circle
			key={`rating-${i}`}
			cx={coordinates[0]}
			cy={coordinates[1]}
			r="2"
			stroke="black"
			strokeWidth="4"
			fill="none"
			/>
	)
);

Ratings.propTypes = {
	coordinateGroup: PropTypes.array
};

export default Ratings;