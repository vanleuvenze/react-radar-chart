function getAxisCoordinates(rating, centerPoint, width, rungs, radians) {
	return [
		centerPoint + (centerPoint * Math.cos(radians)),
		centerPoint + (centerPoint * Math.sin(radians))
	];
}

function getRatingCoordinates(rating, centerPoint, width, rungs, radians) {
	return [
		centerPoint + (rating * (width / rungs) / 2) * Math.cos(radians),
		centerPoint + (rating * (width / rungs) / 2) * Math.sin(radians)
	];
}

export function getCoordinates(centerPoint, width, rungs, attributes) {
	const separation = 360 / Object.keys(attributes).length;

	return Object.keys(attributes).reduce((acc, key, i) => {
		const radians = (separation * i) * (Math.PI / 180);
		const axisCoordinates = getAxisCoordinates(attributes[key], centerPoint, width, rungs, radians);
		const ratingCoordinates = getRatingCoordinates(attributes[key], centerPoint, width, rungs, radians);


		return {
			axisCoordinates: [...acc.axisCoordinates, {coordinates: axisCoordinates, name: key}],
			outlineCoordinates: [...acc.outlineCoordinates, ratingCoordinates],
			ratingCoordinates: [...acc.ratingCoordinates, ratingCoordinates]
		}
	}, {axisCoordinates: [], outlineCoordinates: [], ratingCoordinates: []});
}
