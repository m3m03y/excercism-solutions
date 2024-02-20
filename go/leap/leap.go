// Package leap contains function for calculating whether year is leap.
package leap

// IsLeapYear calculates whether year is leap.
func IsLeapYear(year int) bool {
	return ((year % 100 != 0) || (year % 400 == 0)) && (year % 4 == 0)
}
