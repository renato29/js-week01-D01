function modulo(n1, n2) {
  let q2 = n1 % n2;
  if (n1 > n2 && q2 == 0 ) {
    console.log("The number 8 is bigger than 3");
    console.log("The modulo of 8%3  is 2");
  }
  else if(n1 < n2){
  console.log("The number 3 is less than 5 ");
}
  else if(n1 === n2) {
  console.log("The number 4 is equal to 4");
  }
}
// Do not remove or change this line, or the tests won't work
export { modulo };
