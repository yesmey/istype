export default function isString(input) {
	return input != null && input.constructor === String;
}