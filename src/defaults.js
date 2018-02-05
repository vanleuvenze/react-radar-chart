const defaultAxisNames = [
	'javascript',
	'react',
	'postgreSQL',
	'ruby',
	'ES6'
];

const defaultGroups = {
	First: {
		color: 'blue',
		ratings: {
			javascript: 9,
			react: 9,
			postgreSQL: 6,
			ruby: 7,
			ES6: 9
		}
	},
	Second: {
		color: 'red',
		ratings: {
			javascript: 3,
			react: 8,
			postgreSQL: 7,
			ruby: 9,
			ES6: 2
		}
	},
	Third: {
		color: 'green',
		ratings: {
			javascript: 10,
			react: 4,
			postgreSQL: 2,
			ruby: 6,
			ES6: 9
		}
	}
};

export {defaultAxisNames, defaultGroups};