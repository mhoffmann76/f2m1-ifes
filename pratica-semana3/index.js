const prompt = require("prompt-sync")();
const fsPromises = require("fs").promises;


async function lerCarros() {
  try {
    const dados = await fsPromises.readFile("cadastro.json");
    return JSON.parse(dados);
  } catch (erro) {
    console.log("Falha na leitura de dados");
  }
}

function listarCarros(dados) {
  dados.map((car) => {
    let carro = ` index: ${car.id} | Placa: ${car.placa} | Nome: ${car.nome} | Fabricante: ${car.montadora}`;
    console.log(
      "------------------------------------------------------------------------------------------------"
    );
    console.log(carro);
  });
}

async function cadastrarCarros() {
  try {

    let dados = await fsPromises.readFile("./cadastro.json");
    dados = JSON.parse(dados);
  

    let carros = {
      id: gerarId(),
     
      placa: prompt("Informe a placa: ").toUpperCase(),
      nome: prompt("Informe o nome do carro: ").toUpperCase(),
      montadora: prompt("Informe o nome da montadora: ").toUpperCase(),
    };

    dados.push(carros);
    let jsonDados = JSON.stringify(dados);

    await fsPromises.writeFile("./cadastro.json", jsonDados);
  } catch (erro) {
    console.log(erro);
  }
  return " Veiculo cadastrado com sucesso";
}


function gerarId() {
  return Math.floor(Math.random() * 10000) + 1;
 
  return ++ id;
}
async function main() {
  do {
    console.log("Sistema de Cadastro de Veiculos");
    console.log("1 - Listar Veiculos: ");
    console.log("2 - Cadastrar Veiculos: ");
    console.log("3 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
      console.log("\n\nListando Veiculos...\n");
      const carros = await lerCarros();
      listarCarros(carros);
    } else if (opcao == 2) {
      const cadCar = await cadastrarCarros();
      console.log(cadCar);
     
    } else {
      console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
  } while (opcao != 3);
}

main();
