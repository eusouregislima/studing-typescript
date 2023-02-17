"use strict";
// Herdando de uma classe pai -> quando temos uma classe que herda de outra classe
// quando preencho como a forma abaixo do use, significa que o dado é público,
//todos podem ver, todos pode editar e tals. Seria como escrever como colocoquei apenas no name
// a mesma coisa para uma função
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
//supor que essa classe admin tb é um usuário
class Admin extends User {
    constructor(name, email, cargo, nivel) {
        //chamando o construtor da classe pai
        super(name, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const user1 = new Admin("Régis", "teste@teste.com", "techLeader", 3);
console.log(user1);
// Prosseguindo para a aula de ENCAPSULAMENTO
/*
-> 4 modificadores
1. Public - exemplo na linha 9
2. Private - pode ser acessado e modificado apenas pela classe que o criou
3. Protected - Um pouco mais maleável - Pode ser modificado na classe que criou, na classe filha, na classe que está herdando
4. readonly - Colocado apenas em atributos
*/
class NewUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class NewAdmin extends NewUser {
    constructor(name, email, cargo, nivel) {
        //chamando o construtor da classe pai
        super(name, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    //como o método é publico ele pode ser acessado por qualquer um
    mudarCargo() {
        console.log("alterando cargo");
    }
}
const user2 = new NewAdmin("Régis Lima", "teste@gmail.com", "Developer", 7);
//como o atributo é publico ele pode ser modificado por qualquer um
user2.cargo = "Editor";
user2.mudarCargo();
console.log(user2);
/* Vendo agora o Protected: Atributos e métodos protegidos podem ser acessados ou alterados
 por meio da classe em que foram criados e por meio das classes que foram filhas ( que extende a classe pai) */
//PROTECTED
class NewUserProtected {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class NewAdminProtected extends NewUserProtected {
    constructor(id, name, email, cargo, nivel) {
        super(id, name, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("alterando cargo");
        console.log("Id =", this.id);
    }
    mudarNome(name) {
        console.log("alterando nome para", name);
    }
    acessarMudarNome() {
        this.mudarNome("Nome mudado");
    }
}
const user3 = new NewAdminProtected(77, "Régis Lima", "teste@gmail.com", "Developer", 7);
// console.log(user3);
user3.mudarCargo();
// Como está protected, não posso usar fora da classe
/* user3.mudarNome() */
user3.acessarMudarNome();
