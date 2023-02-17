"use strict";
function signup(email, password, name) {
    let data = { email, password, name };
    console.log(data);
}
signup("teste@teste.com", "123456", "Régis");
function signin(email, password, name = "Aluno", age) {
    let data = { email, password, name, age };
    console.log(data);
}
signin("teste@teste.com", "123456", "teste", 28);
function signupStore(name, email, status = false) {
    console.log("Status Atual: ", status);
    return status;
}
signupStore("BK", "bktest@teste.com", true);
