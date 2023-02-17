"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Automóvel ligado com sucesso");
    }
    desligar() {
        console.log("Desligando automóvel");
    }
}
class Especificacoes {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
//nesse exemplo temos a Classe carro que precisa dos métodos da classe Automóvel
//e também da Especificações. Porém não dá para usar o extends para duas de uma vez.
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacoes]);
const gol = new Carro("gol bola");
gol.ligar();
gol.descricao = "Carro popular, não compre";
console.log(gol);
gol.desligar();
