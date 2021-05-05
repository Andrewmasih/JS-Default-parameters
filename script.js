/* example below is of a default pararmeter by adding the = sign to the parenthesis of a function */
function multiply (a, b = 100) {

  return a*b;
  
}

console.log (multiply (2,2));
console.log (multiply (2));

/*use when need to be sure that some a parameter will not remain undefined if have to be sure that parameter has to have a specif value if no values are passed, you should use the default parameters:  */