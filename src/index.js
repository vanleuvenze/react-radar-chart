import React from 'react';
import PropTypes from 'prop-types';

import {Axis, Label, Outline, Rating, Rung} from './components';
import {getCoordinates} from './helpers';

import styles from './styles';

const defaultAttributes = {javascript: 9, react: 5, postgreSQL: 6, ruby: 7, ES6: 7};


function plotRungs(radii, centerPoint) {
	return radii.map((r, i) => <Rung key={i} radius={r} centerPoint={centerPoint}/>)
}

function plotAxes(axisCoordinates, centerPoint) {
	return axisCoordinates.map(({coordinates}, i) => <Axis key={i} centerPoint={centerPoint} coordinates={coordinates}/>)
}

function plotAxisLabel(axisCoordinates) {
	return axisCoordinates.map(({coordinates, name}, i) => <Label key={i} coordinates={coordinates} name={name}/>)
}

function plotRatings(ratingCoordinates) {
	return ratingCoordinates.map((coordinates, i) => <Rating key={i} coordinates={coordinates}/>)
}

const RadarChart = ({rungs=10, width=500, attributes=defaultAttributes}) => {
	const radii = Array.from({length: 11}).map((n, i) => i * (width / rungs) / 2);
	const centerPoint = (width / 2);
	const {axisCoordinates, outlineCoordinates,ratingCoordinates} = getCoordinates(centerPoint, width, rungs, attributes);

	return (
		<div className={styles.container}>
			<div className={styles.svgContainer}>
				<svg width="500" height="500" viewBox={`0 0 500 500`}>
					{plotRungs(radii, centerPoint)}
					{plotAxes(axisCoordinates, centerPoint)}
					{plotAxisLabel(axisCoordinates)}
					{plotRatings(ratingCoordinates)}
					<Outline coordinates={outlineCoordinates}/>
				</svg>
			</div>
		</div>
	);
}

RadarChart.propTypes = {
	attributes: PropTypes.object,
	rungs: PropTypes.number,
	width: PropTypes.width
};

RadarChart.defaultProps = {
	attributes: defaultAttributes,
	rungs: 10,
	width: 500
};

export default RadarChart;


