import React from 'react';
import PropTypes from 'prop-types';

import {Axes, Labels, Outline, Ratings, Rungs, Scale} from './components';
import {getCoordinates} from './helpers';

import styles from './styles';

const defaultAttributes = {
	javascript: 9,
	react: 5,
	postgreSQL: 6,
	ruby: 7,
	ES6: 7,
	aaaaaa: 4,
	bbbbbb: 3,
	ddddddd: 3,
	eeeee: 3
};

const RadarChart = ({attributes, scaleAlign, classNames, rungs, width}) => {
	const centerPoint = (width / 2);
	const {axisCoordinates, outlineCoordinates, ratingCoordinates} = getCoordinates(centerPoint, width, rungs, attributes);

	return (
		<div className={styles.wrapper}>
			<div className={styles.svgContainer}>
				<Scale alignment={scaleAlign} rungs={rungs}/>
				<svg className={styles.svgParent} viewBox={`0 0 500 500`}>
					<Rungs chartWidth={width} centerPoint={centerPoint} numRungs={rungs}/>
					<Axes centerPoint={centerPoint} coordinateGroup={axisCoordinates}/>
					<Ratings coordinateGroup={ratingCoordinates}/>
					<Outline coordinateGroup={outlineCoordinates}/>
					<Labels coordinateGroup={axisCoordinates} chartWidth={width}/>
				</svg>
			</div>
		</div>
	);
}

RadarChart.propTypes = {
	attributes: PropTypes.object,
	classNames: PropTypes.shape({
		axis: PropTypes.string,
		container: PropTypes.string,
		label: PropTypes.string,
		outline: PropTypes.string,
		rating: PropTypes.string,
		rung: PropTypes.string
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
	width: PropTypes.number
};

RadarChart.defaultProps = {
	attributes: defaultAttributes,
	rungs: 10,
	scaleAlign: 'bottom-left',
	width: 500
};

export default RadarChart;


