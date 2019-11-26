export default function isNumber(input) {
    return input != null && input.constructor === Number;
}