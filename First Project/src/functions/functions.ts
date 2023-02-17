// nesse caso a minha função não retorna nada, fica tipo void por default

function login(username: string) {
  console.log("Bem vindo", username);
}

login("Régis");

//posso escrever assim
function login2(username: string): void {
  let message = "Bem vindo " + username;
  console.log(message);
}
login2("programador");
// se eu tentar retornar vai me dar erro pq coloquei void, dizendo que não retornaria nada

//Agora tipando que essa função vai retornar um boolean

function login3(username: string | number): boolean | string {
  let message = "Bem vindo " + username;
  console.log(message);
  return true;
}
const returnFunction = login3("sujeitoprogramador");

console.log(returnFunction);
// Nesse caso eu precio retornar um boolean ou uma string

let n1: number = 10;
let n2: string = "25";
let n3: number = 25;

function sum(valor1: number, valor2: number): number {
  let sum = valor1 + valor2;
  return sum;
}

//ao tentar somar n1 com n2 não foi possível pq n2 é uma string, e esperava 2 números.
console.log(sum(n1, n3));

// outro caso

let n4: number = 10;
let n5: number = 25;

function sum2(valor3: number, valor4: number): string {
  let sum2 = valor3 + valor4;
  if (sum2 > 20) {
    return "SOMA MAIOR QUE 20";
  } else {
    return "SOMA MENOR QUE 20";
  }
}

console.log(sum2(n4, n5));
