const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Informe o primeiro número: "));
let n2 = parseFloat(prompt("Informe o segundo número: "));

try {
  if (n2 === 0) {
    throw new Error("Não é possível divisão por zero");
  } else {
    console.log(n1 / n2);
  }
} catch (e) {
  console.log(e.message);
}
