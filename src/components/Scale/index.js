import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const classNameMap = {
	vertical: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
	horizontal: ['right-top', 'right-bottom', 'left-top', 'left-bottom']
};

function capitalize(string) {
	return [string[0].toUpperCase(), ...string.slice(1)].join('');
}

function dashToCamel(string) {
	const strings = string.split('-');
	return capitalize(strings[0]) + capitalize(strings[1]);
}

function getScaleClassName(alignment) {
	return styles[`scale${dashToCamel(alignment)}`];
}

function getLabelClassName(alignment) {
	return styles[`label${dashToCamel(alignment)}`];
}

function getScaleDegreeClassName(alignment) {
	const className = Object.keys(classNameMap).filter(k => classNameMap[k].indexOf(alignment) > -1)[0];
	return styles[`scaleDegree${capitalize(className)}`];
}

function getDegreeStyle(alignment, rungs, i) {
	const borderOrientation = alignment.split('-');
	const spacingDirection = borderOrientation[0] === 'top' || borderOrientation[0] === 'bottom' ? 'width' : 'height';

	return {
		[spacingDirection]: `${(100 / rungs)}%`,
		[borderOrientation[1]]: `${(100 / rungs) * i}%`,
	};
}

function getDisplayNumber(rungs, i) {
	return i === 1 || i === rungs ? i : null;
}

function getWrapperClassName(alignment) {
	return styles[`scaleWrapper${dashToCamel(alignment)}`]
}

const Scale = ({alignment, rungs}) => (
	<div className={styles.scaleContainer}>
	<div className={getWrapperClassName(alignment)}>
		<div className={getLabelClassName(alignment)}>
			{[0, rungs].map((label, i) => <span key={i} className={styles.label}>{label}</span>)}
		</div>
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
	</div>
);

Scale.propTypes = {
	alignment: PropTypes.string,
	rungs: PropTypes.number
};

export default Scale;
