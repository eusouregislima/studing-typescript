//private não pode ser acessado ou modificado fora classe que foi criado

class Conta {
  private limite: number = 450;

  private aumentarLimite(quantidade: number) {
    if (quantidade < 1000) {
      this.limite = quantidade;
      console.log(`Agora o limite é ${this.limite}`);
    } else {
      console.log(`Limite reprovado com sucesso`);
    }
  }

  //criando também um protegido que também não acessa de fora
  protected solicitarLimite(quantidade: number) {
    return this.aumentarLimite(quantidade);
  }

  solicitarLimiteApp(
    estaAutenticado: boolean,
    quantidade: number
  ): void | boolean {
    if (estaAutenticado) {
      this.aumentarLimite(quantidade);
    } else {
      return false;
    }
  }
}

//Criando uma classe filha
class BancoAfiliado extends Conta {
  limiteAfiliado() {
    //o aumentarLimite é privado não vai ser acessado daqui
    // return this.aumentarLimite(3000)
    return this.solicitarLimite(900);
  }
}

//agora o fulano abriu uma nova conta
const fulano = new Conta();

// fulano.limite = 900 || fulano.aumentarLimite()
// Daqui de fora não é possível acessar o limite e nem o aumentar limite
// Essa regra de negócio é conhecida e acessível somente dentro da classe Conta

// fulano.solicitarLimite() -> Protected, não acessível aqui fora
fulano.solicitarLimiteApp(true, 750);

console.log(fulano);

const beltrano = new BancoAfiliado();

beltrano.limiteAfiliado();

console.log(beltrano);
