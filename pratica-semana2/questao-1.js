const prompt = require("prompt-sync")();

string = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
dayName = new Array(
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado"
);
now = new Date();

let result = "";

let placa = prompt("Digite a placa de seu veículo: ");

for (let i = 1; i < placa.length; i++) {
  if (
    string.indexOf(placa[i].endsWith("1")) &&
    placa[i].endsWith("2") &&
    dayName[now.getDay()] === "segunda"
  ) {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (
    placa[i].endsWith("3") &&
    placa[i].endsWith("4") &&
    dayName[now.getDay()] === "terça"
  ) {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (
    placa[i].endsWith("5") &&
    placa[i].endsWith("6") &&
    dayName[now.getDay()] === "quarta"
  ) {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (
    placa[i].endsWith("7") &&
    placa[i].endsWith("8") &&
    dayName[now.getDay()] === "quinta"
  ) {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (
    placa[i].endsWith("9") &&
    placa[i].endsWith("0") &&
    dayName[now.getDay()] === "sexta"
  ) {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (placa[i] && dayName[now.getDay()] === "sabado") {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else if (placa[i] && dayName[now.getDay()] === "domingo") {
    result = "Seu veículo está autorizado para circular na Cidade de São Paulo";
  } else {
    result =
      "Seu veículo está proibido de circular na Cidade de São Paulo";
  }
}

console.log(result);
