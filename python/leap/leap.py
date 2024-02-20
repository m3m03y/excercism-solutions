"""Functions for calculating whether year is leap."""


def leap_year(year: int) -> bool:
    """
 
    :param year: int - the year to check.
    :return: bool - true if year is leap.
    """
    
    return year % 4 == 0 and not (year % 100 == 0 and year % 400 != 0)
