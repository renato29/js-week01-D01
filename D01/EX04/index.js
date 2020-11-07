function modulo(n1, n2) {
  let q2 = n1 % n2;
  if (n1 > n2 && q2 == 0) {
    console.log("The ${n1} is bigger than ${n2}");
    console.log("The modulo of ${n1}/${n2} is equal to ${q2}");}
  else if(n1 < n2)
  {
  console.log("The ${n1} is smaller than ${n2}");
}
  else if(n1 === n2) {
  console.log("The ${n1} is equals to  ${n2}");
  }
}
// Do not remove or change this line, or the tests won't work
export { modulo };
