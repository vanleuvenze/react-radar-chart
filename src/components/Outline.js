import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

const Outline = ({coordinateGroup}) => (
	coordinateGroup.map((coordinates, index) => {
		const next = index === coordinateGroup.length - 1 ? coordinateGroup[0] : coordinateGroup[index + 1];
		return (
			<line
				key={`outline-point-${index}`}
				x1={coordinates[0]}
				y1={coordinates[1]}
				x2={next[0]}
				y2={next[1]}
				strokeWidth="2"
				stroke="black"
				/>
		);
	})
);

Outline.propTypes = {
	coordinateGroup: PropTypes.array
};

export default Outline;