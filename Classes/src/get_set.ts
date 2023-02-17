class Game {
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  //Metodo GET = Para pegar o valor ao invés de acessar diretamente a propriedade
  get getServidorIP() {
    console.log("==Método GET==");
    return this.servidor;
  }

  //Método SET = Para passar ou alterar algum atributo
  set setServidorIP(novoIP: string) {
    if (this.servidor === novoIP) {
      throw new Error("O novo Ip deve ser diferente do antigo");
    }
    this.servidor = novoIP;
  }
}

const GTA5 = new Game("192 168 5 10");

try {
  GTA5.setServidorIP = "192 168 5 10";
} catch (error) {
  console.log(error.message);
}

console.log(GTA5.getServidorIP);
