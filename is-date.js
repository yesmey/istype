export default function isDate(input) {
    return input != null && input.constructor === Date;
}