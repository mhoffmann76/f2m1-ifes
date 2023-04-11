


const fs = require("fs");

fs.readFile("./dados.json", "utf-8", (err, data) => {
  const json = JSON.parse(data);
  json.usuarios.map((usuario) => {
    let user = `Nome: ${usuario.nome}
Endereço: ${usuario.endereco}
Nacionalidade: ${usuario.nacionalidade}
Idade: ${usuario.idade}
Sexo: ${usuario.sexo}`

    console.log("----------------------------------------------------------------")

    console.log(user)
  });
});
