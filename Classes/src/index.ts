// Trabalhando em módulos
// Aqui quero buscar o meu arquivo que conecta com o banco de dados

//Aqui fazendo importações do tipo export
import { connection, statusConnection } from "./database/connection";
import status, { resetarDados } from "./database/aplicativo";

function acessarSistema() {
  connection({ ip: "192.169.54.22", name: "MySQL" });
}

acessarSistema();

statusConnection();

status();

resetarDados();
