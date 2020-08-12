// Write your code here:


const sortYears = (arr) => {
  return arr.reverse(arr.sort());
}

const sortYearsVar2 = (arr) => {
  const checkYears = (a,b) => {
    return b - a;
    }
  
  return arr.sort(checkYears);
}




// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
console.log(sortYearsVar2(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

