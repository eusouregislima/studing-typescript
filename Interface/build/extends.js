"use strict";
// suponde que temos um jogo e esse jogo pode ter uma dlc que são arquivos extras baixáveis - Expansões
const left4dead = {
    id: "1",
    name: "Lef 4 Dead 2",
    description: "Jogo de ação",
    plataform: ["ps5", "pc"],
};
console.log(left4dead);
const left4deadDLC = {
    id: "11",
    name: "News Maps",
    description: "Four news maps for to play online",
    plataform: ["ps5", "pc", "xboxone"],
    newContent: ["Mode Coop", "More five hours of game", "Medals"],
    gameOrigin: left4dead,
};
console.log(left4deadDLC);
