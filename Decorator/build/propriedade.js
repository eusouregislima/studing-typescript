"use strict";
//Decorators em uma propriedade
// Pode fazer validações
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validaNome(tamanho) {
    // target é o construtor da nossa classe
    // key é a nossa propriedade
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value === "") {
                console.log("Você não pode deixar em branco");
            }
            else if (value.length < tamanho) {
                console.log(`Utilize ao menos ${tamanho} caracteres`);
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Jogo {
    constructor(nome, titulo) {
        this.nome = nome;
        this.titulo = titulo;
    }
}
__decorate([
    validaNome(8)
], Jogo.prototype, "nome", void 0);
__decorate([
    validaNome(14)
], Jogo.prototype, "titulo", void 0);
const jogo1 = new Jogo("Red", "A volta dosque não foram");
// Estando desse jeito, caso o usuário mande sem nome nenhum, ou um nome com 3 letras será aceito
// mas não é isso que quero
console.log(jogo1.nome);
console.log(jogo1.titulo);
