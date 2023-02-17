"use strict";
//Para cada função que eu abrisse, precisaria tipar os itens que ela receberia
function access(uuid, name) {
    console.log(`ID: ${uuid} - Seja bem vindo ${name}`);
}
function logUser(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
access(123, "Régis");
access("55", "Usuário 5");
function access2(uuid, name) {
    console.log(`ID: ${uuid} - Seja bem vindo ${name}`);
}
function logUser2(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
logUser2("123");
function purshaseItem(currency) {
    console.log("Comprando com a moeda", currency);
}
purshaseItem("BTC");
