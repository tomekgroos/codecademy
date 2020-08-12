// Write your function here:

const howOld = (age, year) => {
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  

  let bornYear = actualYear - age

  let calculatedAge = year - bornYear 
  
  let pastAge = bornYear - year

  if (bornYear < year) {
    return `You will be ${calculatedAge} in the year 
    ${year}`
  } else if (bornYear > year) {
    return `The year ${year} was ${pastAge} years before you were born`
  } else if (year < currentYear && year > bornYear){
    return `You were ${calculatedAge} in the year ${year}`
  }

  console.log(currentYear);
}




// Once your function is written, write function calls to test your code!

/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

/*const howOld = (age, year) => {
// The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
// It is totally ok if your function used the current year directly!
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(31, 1772))*/