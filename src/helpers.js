function getAxisCoordinates(axes, centerPoint) {
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

function getOutlineCoordinates(ratings, centerPoint, width, rungs) {
	const separation = 360 / Object.keys(ratings).length;

	return ratings.map((rating, i) => {
		const radians = (separation * i) * (Math.PI / 180);

		return [
			centerPoint + (rating * (width / rungs) / 2) * Math.cos(radians),
			centerPoint + (rating * (width / rungs) / 2) * Math.sin(radians)
		];
	});
}

export {getAxisCoordinates, getOutlineCoordinates};
