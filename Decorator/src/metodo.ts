// Decorator de método
// Só é chamado quando o nosso método for chamado em algum local.

import { verificaPessoa } from "./decorators/verificaPessoa";

// método levado para o arquivo verifica pessoa

class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  @verificaPessoa(20)
  cadastrarPessoa() {
    console.log(`Bem vindo ${this.nome}`);
  }
}

const pessoa1 = new Pessoa("Régis");

pessoa1.cadastrarPessoa();
