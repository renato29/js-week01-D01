function moduloEx6(n1, n2) {
  let finalcase;
  const output = document.getElementById('output');
  if (n1 > n2 && n1 % n2 !== 0) {
    let q2 = n1 % n2;

    finalcase = `The number ${n1} is bigger than ${n2}. But the modulo of ${n1} % ${n2} is ${q2}`;

  }
  else if (n1 > n2) {

    finalcase = `The number ${n1} is bigger than ${n2}`;
  }

  else if (n1 < n2) {

    finalcase = `The number ${n1} is less than ${n2}`
  }
  else if (n1 === n2) {
    finalcase = `The number ${n1} is equal to ${n2}`;

  }

output.innerHTML = finalcase

}
moduloEx6(2, 2);

  