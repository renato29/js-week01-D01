function modulo(n1, n2) {

  if (n1 > n2 && n1 % n2 !== 0) {
    let q2 = n1 % n2;
    console.log(`The number ${n1} is bigger than ${n2}`);
    console.log(`The modulo of ${n1} % ${n2} is ${q2}`);
  }
  else if (n1 > n2) {
    console.log(`The number ${n1} is bigger than ${n2}`);
  }

  else if (n1 < n2) {
    console.log(`The number ${n1} is less than ${n2}`);
  }
  else if (n1 === n2) {
    console.log(`The number ${n1} is equal to ${n2}`);
  }
}
// Do not remove or change this line, or the tests won't work
export { modulo };
