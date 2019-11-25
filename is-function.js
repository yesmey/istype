export default function isFunction(input) {
	return input instanceof Function || (typeof input === "object" && input.constructor === Function);
}
