function calcular(num1, num2, operador) {
  switch (operador) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;

    return res;
}

}

const num1 = 5
const num2 = 10
const operador = "/"

console.log(calcular(num1, num2, num3))
