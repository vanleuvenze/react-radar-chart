import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';


function dashToCamel(string) {
	const strings = string.split('-');
	return strings[0][0].toUpperCase() + strings[0].slice(1) + strings[1][0].toUpperCase() + strings[1].slice(1);
}

function getScaleClassName(alignment) {
	return styles[`scale${dashToCamel(alignment)}`];
}

function getScaleDegreeClassName(alignment) {
	return styles[`scaleDegree${dashToCamel(alignment)}`];

}

function getDegreeStyle(alignment, rungs, i) {
	const borderOrientation = alignment.split('-');
	const spacingDirection = borderOrientation[0] === 'top' || borderOrientation[0] === 'bottom' ? 'width' : 'height';

	return {
		[spacingDirection]: `${(100 / rungs)}%`,
		[borderOrientation[1]]: `${(100 / rungs) * i}%`,
	};
}

const Scale = ({alignment, rungs}) => (
	<div className={styles.scaleContainer}>
		<div className={getScaleClassName(alignment)}>
			{Array.from({length: rungs}).map((u, i) => (
				<div
					key={`scale-degree-${i}`}
					className={getScaleDegreeClassName(alignment)}
					style={getDegreeStyle(alignment, rungs, i)}>
				</div>
			))}

		</div>
	</div>
);

Scale.propTypes = {

};

export default Scale;
