import React from 'react';
import PropTypes from 'prop-types';

import {Axis, Key, Label, Outline, Rung, Scale} from './components/';
import {getAxisCoordinates, getOutlineCoordinates, getAxisLabelPosition} from '../helpers';
// import array from 'array.from';
import styles from './styles/main.css';

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
		);
	});
}

function getLabels(className, coordinateGroup) {
	return coordinateGroup.map(({coordinates, name}, i) => {
		const angle = 360 - ((360 / coordinateGroup.length) * i);
		const {adjustedCoordinates, alignment} = getAxisLabelPosition(angle, coordinates);

		return (
			<Label
				key={`axis-label-${i}`}
				className={className}
				alignment={alignment}
				coordinates={adjustedCoordinates}
				text={name}
				/>
		);
	})
}

function getRungs(className, rungs, centerPoint, width) {
	return Array.from({length: rungs + 1}).map((n, i) => {
		const radius = i * (width / rungs) / 2;

		return (
			<Rung
				key={`rung-${i}`}
				className={className}
				centerPoint={centerPoint}
				radius={radius}
				/>
		);
	});
}

function getAxes(className, axisCoordinates, centerPoint) {
	return axisCoordinates.map(({coordinates}, i) => {

		return (
			<Axis
				key={`axis-${i}`}
				className={className}
				centerPoint={centerPoint}
				coordinates={coordinates}
				/>
		);
	});
}

const RadarChart = ({axisNames, classNames, groups, rungs, scaleAlign, scaleColor, scaleRenderer}) => {
	const width = 500;
	const centerPoint = (width / 2);
	const axisCoordinates = getAxisCoordinates(axisNames, centerPoint);

	return (
		<div className={`${styles.container} ${classNames.container}`}>
			<div className={`${styles.wrapper} ${classNames.wrapper}`}>
				{scaleRenderer({alignment: scaleAlign, className: classNames.scale, rungs, color: scaleColor})}
				<svg className={`${styles.svgParent} ${classNames.svgParent}`} viewBox={`0 0 500 500`}>
					{getRungs(classNames.rung, rungs, centerPoint, width)}
					{getAxes(classNames.axis, axisCoordinates, centerPoint)}
					{getLabels(classNames.label, axisCoordinates)}
					{getOutlines(classNames.outline, groups, axisNames, centerPoint, width, rungs)}
				</svg>
			</div>
			<Key className={classNames.key} groups={groups}/>
		</div>
	);
};

RadarChart.propTypes = {
	axisNames: PropTypes.arrayOf(PropTypes.string),
	classNames: PropTypes.shape({
		axis: PropTypes.string,
		container: PropTypes.string,
		key: PropTypes.string,
		label: PropTypes.string,
		outline: PropTypes.string,
		rung: PropTypes.string,
		scale: PropTypes.string,
		svgParent: PropTypes.string,
		wrapper: PropTypes.string
	}),
	groups: PropTypes.objectOf(PropTypes.shape({
		color: PropTypes.string,
		ratings: PropTypes.object
	})),
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
	scaleRenderer: PropTypes.func
};

RadarChart.defaultProps = {
	axisNames: [],
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
	groups: {},
	rungs: 10,
	scaleAlign: 'bottom-right',
	scaleColor: 'black',
	scaleRenderer: props => <Scale {...props}/>
};

export default RadarChart;
