export function operate(numberOne, numberTwo, operation) {
  const one = Number(numberOne || "0");
  const two = Number(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return `${one + two}`;
  }
  if (operation === "-") {
    return `${one - two}`;
  }
  if (operation === "x") {
    return `${one * two}`;
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return `${one / two}`;
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}

