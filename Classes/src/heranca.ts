// Herdando de uma classe pai -> quando temos uma classe que herda de outra classe

// quando preencho como a forma abaixo do use, significa que o dado é público,
//todos podem ver, todos pode editar e tals. Seria como escrever como colocoquei apenas no name

// a mesma coisa para uma função

class User {
  public name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

//supor que essa classe admin tb é um usuário
class Admin extends User {
  cargo: string;
  nivel: number;

  constructor(name: string, email: string, cargo: string, nivel: number) {
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
  //como os dados são públicos eles podem ser acessados e modificados
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class NewAdmin extends NewUser {
  //como os dados são públicos eles podem ser acessados e modificados
  public cargo: string;
  public nivel: number;

  constructor(name: string, email: string, cargo: string, nivel: number) {
    //chamando o construtor da classe pai
    super(name, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  //como o método é publico ele pode ser acessado por qualquer um
  public mudarCargo(): void {
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
  protected id: number; // sendo protected, posso chamar na classe pai(NewUserProtected)
  //ou nas classes filhas que extendem o NewUserProtected, como a NewAdminProtected
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class NewAdminProtected extends NewUserProtected {
  //como os dados são públicos eles podem ser acessados e modificados
  public cargo: string;
  public nivel: number;

  constructor(
    id: number,
    name: string,
    email: string,
    cargo: string,
    nivel: number
  ) {
    super(id, name, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  mudarCargo(): void {
    console.log("alterando cargo");
    console.log("Id =", this.id);
  }

  protected mudarNome(name: string): void {
    console.log("alterando nome para", name);
  }

  acessarMudarNome(): void {
    this.mudarNome("Nome mudado");
  }
}

const user3 = new NewAdminProtected(
  77,
  "Régis Lima",
  "teste@gmail.com",
  "Developer",
  7
);

// console.log(user3);
user3.mudarCargo();

// Como está protected, não posso usar fora da classe
/* user3.mudarNome() */
user3.acessarMudarNome();
