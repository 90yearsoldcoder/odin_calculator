let disply_string = "";
let cur_string = "";

//add listenners
/*
document.querySelectorAll(".btn").forEach((element) => {
  element.addEventListener("click", clickButton);
});
*/
//Number input listenner
document.querySelectorAll(".number").forEach((element) => {
  element.addEventListener("click", addNumberListener);
});
document.querySelectorAll(".self_operation").forEach((element) => {
  element.addEventListener("click", selfOperationListener);
});
document.querySelectorAll(".operation").forEach((element) => {
  element.addEventListener("click", OperationLisener);
});

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
  let match = str.match(/(-?\d+(?:\.\d+)?)\s*([\+\-\×\÷])\s*(-?\d+(?:\.\d+)?)/);
  let a, b, op;
  if (match) {
    a = parseFloat(match[1]);
    b = parseFloat(match[3]);
    op = match[2];
  } else {
    return "Invalid!";
  }
  //console.log(a, b, op);
  return [a, b, op];
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return "Error: Invalid operation";
  }
}

function clickButton(e) {
  console.log(e.target.value);
}

function updateCurString() {
  document.getElementById("curNumber").textContent = cur_string;
}
function updateDisplayString() {
  document.getElementById("displayNumber").textContent = disply_string;
}

function addNumberListener(e) {
  if (cur_string.length > 8) return;
  cur_string += e.target.value;
  //console.log(cur_string);
  updateCurString();
}

//handle +/-, AC, DEL, .
function selfOperationListener(e) {
  let op_type = e.target.value;
  let newStr;
  //console.log(op_type);
  switch (op_type) {
    case "clear":
      newStr = "";
      disply_string = "";
      break;
    case "del":
      newStr = cur_string.substring(0, cur_string.length - 1);
      break;
    case "plus/minus":
      if (cur_string.startsWith("-"))
        newStr = cur_string.substring(1, cur_string.length);
      else newStr = "-" + cur_string;
      break;
    case ".":
      if (cur_string.includes(".")) newStr = cur_string;
      else newStr = cur_string + ".";
      break;
    default:
      console.log("error, Invaild operation");
      newStr = cur_string;
  }
  cur_string = newStr;
  updateCurString();
  updateDisplayString();
}

function equalOperation() {
  let full_str = disply_string + cur_string;
  let split_str = str2operation(full_str);
  if (split_str == "Invalid!") return "Invalid!";

  //calculate, if a,b,op are availble
  let ans = calculate(split_str[0], split_str[1], split_str[2]);

  disply_string = full_str;
  cur_string = "" + ans;
}

//listener, handle +, -, ×, /
function OperationLisener(e) {
  flag = equalOperation();
  let op_type = e.target.value;

  switch (op_type) {
    case "+":
      disply_string = cur_string + "+";
      updateDisplayString();
      break;
    case "-":
      disply_string = cur_string + "-";
      updateDisplayString();
      break;
    case "×":
      disply_string = cur_string + "×";
      updateDisplayString();
      break;
    case "÷":
      disply_string = cur_string + "÷";
      updateDisplayString();
      break;
    case "=":
      if (flag == "Invalid!") return;
      disply_string = disply_string + "=";
      updateDisplayString();
      disply_string = "";
      updateCurString();
      return;
  }
  updateCurString();
  cur_string = "";
}
