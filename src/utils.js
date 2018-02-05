
function capitalize(string) {
	return [string[0].toUpperCase(), ...string.slice(1)].join('');
}

function dashToCamel(string) {
	const strings = string.split('-');
	return capitalize(strings[0]) + capitalize(strings[1]);
}

export {capitalize, dashToCamel};