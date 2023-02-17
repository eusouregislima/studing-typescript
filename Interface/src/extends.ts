// suponde que temos um jogo e esse jogo pode ter uma dlc que são arquivos extras baixáveis - Expansões

interface GameProps {
  readonly id: string;
  name: string;
  description: string;
  plataform: string[];
}

const left4dead: GameProps = {
  id: "1",
  name: "Lef 4 Dead 2",
  description: "Jogo de ação",
  plataform: ["ps5", "pc"],
};

console.log(left4dead);

// Na interface abaixo, DLC terá tudo da GameProps, mais o que eu adicionar
// ao inserir o gamerigin foi para mostrar que posso adicionar uma propriedade e dizer que
// essa nova propriedade vai seguir uma interface já existente. No caso a GameProps.
interface DLC extends GameProps {
  gameOrigin: GameProps;
  newContent: string[];
}

const left4deadDLC: DLC = {
  id: "11",
  name: "News Maps",
  description: "Four news maps for to play online",
  plataform: ["ps5", "pc", "xboxone"],
  newContent: ["Mode Coop", "More five hours of game", "Medals"],
  gameOrigin: left4dead,
};

console.log(left4deadDLC);
