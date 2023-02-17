"use strict";
class People {
    constructor(name, age) {
        // Colocando o readonly todos aqui dentro podem acessar, mas não podem alterar
        this.id = "123";
        this.name = name;
        this.age = age;
    }
    mostraId() {
        console.log("Id =", this.id);
    }
}
// com o readonly eu não posso criar métodos
const lu = new People("Pessoa teste", 50);
lu.mostraId();
console.log("Id da lu", lu.id);
console.log(lu);
// Coisas que não quero que aconteça
// Do jeito que está eu consigo alterar o id de fora da classe
// Caso coloque o private, ainda seria possível alterar com um método dentro da classe
