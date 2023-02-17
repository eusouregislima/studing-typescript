"use strict";
function login(username) {
    console.log("Bem vindo", username);
}
login("Régis");
function login2(username) {
    let message = "Bem vindo " + username;
    console.log(message);
}
login2("programador");
function login3(username) {
    let message = "Bem vindo " + username;
    console.log(message);
    return true;
}
const returnFunction = login3("sujeitoprogramador");
console.log(returnFunction);
let n1 = 10;
let n2 = "25";
let n3 = 25;
function sum(valor1, valor2) {
    let sum = valor1 + valor2;
    return sum;
}
console.log(sum(n1, n3));
let n4 = 10;
let n5 = 25;
function sum2(valor3, valor4) {
    let sum2 = valor3 + valor4;
    if (sum2 > 20) {
        return "SOMA MAIOR QUE 20";
    }
    else {
        return "SOMA MENOR QUE 20";
    }
}
console.log(sum2(n4, n5));
