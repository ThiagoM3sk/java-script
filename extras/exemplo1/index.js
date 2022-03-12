/* defines a years dataset */
const years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004];

/* defining the isLeapYear predicate */
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

/* finds a leap year in the years data set */
const leapYear = years.find(isLeapYear)

if(leapYear !== undefined) {

    console.log(`The year ${leapYear} is a leap year.`);

} else {

    console.log("No leap year found in the dataset.");

}