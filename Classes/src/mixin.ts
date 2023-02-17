import { applyMixins } from "./mixin/applyMixin";

class Automovel {
  ligar(): void {
    console.log("Automóvel ligado com sucesso");
  }

  desligar(): void {
    console.log("Desligando automóvel");
  }
}

class Especificacoes {
  descricao: string;

  constructor(descricao: string) {
    this.descricao = descricao;
  }
}

//nesse exemplo temos a Classe carro que precisa dos métodos da classe Automóvel
//e também da Especificações. Porém não dá para usar o extends para duas de uma vez.

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacoes {}

applyMixins(Carro, [Automovel, Especificacoes]);

const gol = new Carro("gol bola");

gol.ligar();

gol.descricao = "Carro popular, não compre";

console.log(gol);

gol.desligar();
