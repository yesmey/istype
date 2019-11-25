export default function isArray(input) {
	return input instanceof Array || (typeof input === "object" && input.constructor === Array);
}
