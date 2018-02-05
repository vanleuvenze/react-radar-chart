import React from 'react';
import PropTypes from 'prop-types';

import {Axes, Key, Labels, Outline, Rungs, Scale} from './components';
import {getAxisCoordinates, getOutlineCoordinates} from './helpers';

import styles from './styles';

const defaultAxisNames = ['javascript', 'react', 'postgreSQL', 'ruby', 'ES6', 'rails', 'snails', 'tails', 'bails'];

const defaultGroups = {
	zack: {
		color: 'blue',
		ratings: {
			javascript: 9,
			react: 9,
			postgreSQL: 6,
			ruby: 7,
			ES6: 9,
			rails: 5,
			tails: 6,
			snails: 8,
			bails: 9
		}
	},
	jillrey: {
		color: 'green',
		ratings: {
			javascript: 3,
			react: 8,
			postgreSQL: 7,
			ruby: 9,
			ES6: 2,
			rails: 3,
			tails: 3,
			snails: 7,
			bails: 9
		}
	},
	ralpha: {
		color: 'red',
		ratings: {
			javascript: 2,
			react: 2,
			postgreSQL: 2,
			ruby: 2,
			ES6: 9,
			rails: 2,
			tails: 7,
			snails: 9,
			bails: 0
		}
	}
};

const defaultColorSchemes = {
	1: {},
	2: {},
	3: {}
};

function getOutlines(className, groups, axisNames, centerPoint, width, rungs) {
	return Object.keys(groups).map((key, i) => {
		const ratings = axisNames.map(axis => groups[key]['ratings'][axis]);

		return (
			<Outline
				key={`outline-${i}`}
				className={className}
				coordinateGroup={getOutlineCoordinates(ratings, centerPoint, width, rungs)}
				color={groups[key].color}
				/>
		)
	});
}

const RadarChart = ({axisNames, classNames, groups, rungs, scaleAlign, scaleColor, scaleRenderer, width}) => {
	const centerPoint = (width / 2);
	const axisCoordinates = getAxisCoordinates(axisNames, centerPoint);

	return (
		<div className={`${styles.wrapper} ${classNames.wrapper} ${styles.defaultScheme1}`}>
			<div className={`${styles.container} ${classNames.container}`}>
				{scaleRenderer({alignment: scaleAlign, className: classNames.scale, rungs, color: scaleColor})}
				<svg className={`${styles.svgParent} ${classNames.svgParent}`} viewBox={`0 0 500 500`}>
					<Rungs className={classNames.rung} chartWidth={width} centerPoint={centerPoint} numRungs={rungs}/>
					<Axes className={classNames.axis} centerPoint={centerPoint} coordinateGroup={axisCoordinates}/>
					<Labels className={classNames.label} coordinateGroup={axisCoordinates} chartWidth={width}/>
					{getOutlines(classNames.outline, groups, axisNames, centerPoint, width, rungs)}
				</svg>
			</div>
			<Key className={classNames.key} groups={groups}/>
		</div>
	);
}

RadarChart.propTypes = {
	attributes: PropTypes.object,
	classNames: PropTypes.shape({
		axis: PropTypes.string,
		container: PropTypes.string,
		key: PropTypes.string,
		label: PropTypes.string,
		outline: PropTypes.string,
		rating: PropTypes.string,
		rung: PropTypes.string,
		scale: PropTypes.string,
		svgParent: PropTypes.string,
		wrapper: PropTypes.string
	}),
	rungs: PropTypes.number,
	scaleAlign: PropTypes.oneOf([
		'top-left',
		'top-right',
		'right-top',
		'right-bottom',
		'bottom-left',
		'bottom-right',
		'left-top',
		'left-bottom',
	]),
	scaleRenderer: PropTypes.func,
	width: PropTypes.number
};

RadarChart.defaultProps = {
	axisNames: defaultAxisNames,
	classNames: {
		axis: '',
		container: '',
		key: '',
		label: '',
		outline: '',
		rating: '',
		rung: '',
		scale: '',
		svgParent: '',
		wrapper: ''
	},
	groups: defaultGroups,
	rungs: 10,
	scaleAlign: 'top-left',
	scaleColor: 'black',
	scaleRenderer: props => <Scale {...props}/>,
	width: 500
};

export default RadarChart;
