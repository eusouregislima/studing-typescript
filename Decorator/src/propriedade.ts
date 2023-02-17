//Decorators em uma propriedade
// Pode fazer validações

function validaNome(tamanho: number) {
  // target é o construtor da nossa classe
  // key é a nossa propriedade

  return (target: any, key: string) => {
    let valor = target[key];

    const getter = () => valor;

    const setter = (value: string) => {
      if (value === "") {
        console.log("Você não pode deixar em branco");
      } else if (value.length < tamanho) {
        console.log(`Utilize ao menos ${tamanho} caracteres`);
      } else {
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
  @validaNome(8)
  nome: string;

  @validaNome(14)
  titulo: string;

  constructor(nome: string, titulo: string) {
    this.nome = nome;
    this.titulo = titulo;
  }
}
const jogo1 = new Jogo("Red", "A volta dosque não foram");
// Estando desse jeito, caso o usuário mande sem nome nenhum, ou um nome com 3 letras será aceito
// mas não é isso que quero

console.log(jogo1.nome);
console.log(jogo1.titulo);
