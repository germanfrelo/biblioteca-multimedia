import { format, isSameDay } from "date-fns";

/**
 * Checks if the input date value and the JavaScript Date object represent the same day.
 * The input date value is a string representing the date entered in an <input> of type "date",
 * formatted as `yyyy-mm-dd` based on the user's browser locale.
 *
 * @param {string} inputDate - The parsed (actual) value from the `<input>` of `type="date"`.
 * @param {Date} dateObject - The JavaScript Date object to compare with the input date.
 * @returns {boolean} Returns `true` if the input date and the date object represent the same day, otherwise `false`.
 */
export function isEqualInputDateAndDate(inputDate, dateObject) {
	// Format the date object to ensure consistent formatting for comparison
	const formattedDateObject = format(dateObject, "yyyy-MM-dd");

	// Check if the input date and the formatted date object represent the same day
	return isSameDay(inputDate, formattedDateObject);
}
