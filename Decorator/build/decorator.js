"use strict";
/*
DECORATORS
Class
Props
Métodos
Parâmetros ( Bem pouco usado)
Getters / setters (Bem pouco usado)


Como criamos um decorator (É uma função na prática)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// O primeiro parametro que a função recebe é o target, que a documentação manda tipar como any
//target vai receber o construtor da nossa classe
// Exemplo comentado
// function logInfo(target: any) {
//   console.log("Sistema está online");
// }
//aqui um exemplo de como relacionar um decorator a essa classe
//Não preciso instanciar para esse decorator ser chamado
//Padrão factory (Fábrica) | Função que vai retornar a criação do decorator
// Isso é um desigm patterns
/*

function logInfo(mensagem: string) {
  return (target: any) => {
    console.log(`${mensagem}, ${target}`);
  };
}

@logInfo("Servidor está rodando")
class Sistema {}

*/
// =================================== Praticando =================================
function setIpServidor(newIp) {
    return (target) => {
        // o target é o construtor da nossa classe
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = newIp;
            }
        };
    };
}
// aqui quer dizer que dentro do meu construtor eu tenho um ip que vai receber o Ip de baixo
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.168.50.30")
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
