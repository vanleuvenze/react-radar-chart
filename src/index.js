import React from 'react';
import {getCoordinates} from './helpers';
import styles from './styles';
import {Axis, Outline, Rating, Rung} from './components';
	
const defaultAttributes = {javascript: 9, other: 5, another: 6, anotdsher: 7, andsher: 7};


function plotRungs(radii, centerPoint) {
	return radii.map((r, i) => <Rung key={i} radius={r} centerPoint={centerPoint}/>)
}

function plotAxes(axisCoordinates, centerPoint) {
	return axisCoordinates.map(({coordinates, name}, i) => <Axis key={i} centerPoint={centerPoint} coordinates={coordinates} name={name}/>)
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
					{plotRatings(ratingCoordinates)}
					<Outline coordinates={outlineCoordinates}/>
				</svg>
			</div>
		</div>
	);
}

export default RadarChart;
