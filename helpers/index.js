export function getAxisCoordinates(axes, centerPoint) {
	const separation = 360 / axes.length;

	return axes.map((name, i) => {
		const radians = (separation * i) * (Math.PI / 180);

		return {
			coordinates: [
				centerPoint + (centerPoint * Math.cos(radians)),
				centerPoint + (centerPoint * Math.sin(radians))
				],
			name
		};
	});
}

export function getOutlineCoordinates(ratings, centerPoint, width, rungs) {
	const separation = 360 / Object.keys(ratings).length;

	return ratings.map((rating, i) => {
		const radians = (separation * i) * (Math.PI / 180);

		return [
			centerPoint + (rating * (width / rungs) / 2) * Math.cos(radians),
			centerPoint + (rating * (width / rungs) / 2) * Math.sin(radians)
		];
	});
}

// helpers for repositioning axis labels based on quadrant
const repositionRules = {
	1: (x, y) => ({adjustedCoordinates: [x, y - 8], alignment: 'start'}),
	2: (x, y) => ({adjustedCoordinates: [x - 8, y], alignment: 'end'}),
	3: (x, y) => ({adjustedCoordinates: [x - 8, y + 8], alignment: 'end'}),
	4: (x, y) => ({adjustedCoordinates: [x + 8, y + 8], alignment: 'start'})
};

function getAngle(axes, index) {
	return 360 - ((360 / axes) * i);
}

function getQuadrant (angle) {
	return [[0, 90], [90, 180], [180, 270], [270, 360]].reduce((acc, range, i) => (
		isBetween(angle, ...range) ? i + 1 : acc
	), null);
}

function isBetween (target, lowerBound, higherBound) {
	return target >= lowerBound && target <= higherBound;
}

export function getAxisLabelPosition(angle, coordinates) {
	const quadrant = getQuadrant(angle);
	return repositionRules[quadrant](...coordinates);
}
