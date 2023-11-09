function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function str2operation(str) {
  let match = str.match(/(-?\d+(?:\.\d+)?)\s*([\+\-\*\/])\s*(-?\d+(?:\.\d+)?)/);
  let a, b, op;
  if (match) {
    a = parseFloat(match[1]);
    b = parseFloat(match[3]);
    op = match[2];
  } else {
    return "Invalid!";
  }
  console.log(a);
  console.log(b);
  console.log(op);
}

st = " 10.1 * 21.05";
str2operation(st);
