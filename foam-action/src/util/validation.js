export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  if (value !== null && value !== undefined) {
    return typeof value === "string" ? value.trim() !== "" : Array.isArray(value) ? value.length > 0 : true;
  } else {
    return false;
  }
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  return value === otherValue;
}
