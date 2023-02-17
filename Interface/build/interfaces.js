"use strict";
// let store: object
// agora ele não deixa eu passar nada diferente do convencionado
const BurgerK = {
    name: "BK",
    address: "Rua X",
    status: true,
};
console.log(BurgerK);
//aplicando a interface em argumentos de função
// coloco o objeto no argumento
function newStore({ name, address, status }) {
    console.log(`Loja ${name} criada com sucesso`);
    console.log(`Endereço da loja ${address} criada com sucesso`);
    console.log(`Status da loja ${status} criada com sucesso`);
    console.log("=====================================");
}
//passo o objeto na chamada da função
newStore({ name: "Bee", address: "Rua X", status: true });
newStore({ name: "Boo", address: "Rua Y", status: false });
