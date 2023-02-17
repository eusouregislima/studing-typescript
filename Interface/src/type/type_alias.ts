//Para cada função que eu abrisse, precisaria tipar os itens que ela receberia

function access(uuid: string | number | null, name: string): void {
  console.log(`ID: ${uuid} - Seja bem vindo ${name}`);
}

function logUser(uuid: string | number | null): void {
  console.log(`Conta referente ao UUID: ${uuid}`);
}

access(123, "Régis");

access("55", "Usuário 5");

//Agora vamos ver o que o type alias pode fazer
type Uuid = number | string | null;

function access2(uuid: Uuid, name: string): void {
  console.log(`ID: ${uuid} - Seja bem vindo ${name}`);
}

function logUser2(uuid: Uuid): void {
  console.log(`Conta referente ao UUID: ${uuid}`);
}

logUser2("123");

// Outra demonstração de uso

type Currencys = "BRL" | "USD" | "EUR" | "GBP" | "BTC";

function purshaseItem(currency: Currencys) {
  console.log("Comprando com a moeda", currency);
}

purshaseItem("BTC");
