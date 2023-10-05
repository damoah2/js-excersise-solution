function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return console.log("Leap year.");
  } else {
      return console.log("Not leap year.");
  } 
}

leapYear(2010);
