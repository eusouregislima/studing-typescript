"use strict";
//Generics
/*
Permite criar estruturas que serão adaptáveis a vários tipos de dados.
(Ajudando a reaproveitar melhor nosso codigo e deixá-lo mais flexível)

Podemos usar os generics
Funções | interfaces | type | classes

*/
//inserindo o generic para o caso de permitir receber mais de um tipo de dado
//Antes do parênteses da função, inserir o sinal de menor e maior como no exemplo
//Somente colocando o T conforme o exemplo abaixo, ele ostra que o dado é do tipo unknow
// que não é o que quero
// Então, lá na chamada da função, antes dos parênteses eu defino o tipo dentro do menor maior
/*
Definições: alguns padrões
S => State
T => Type
k => Key
V => Value
E => Element - Como um elemento html
*/
//Colocando um nivel de sergurança para aceitar somente number ou string
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados("15");
repo1.setDados(15);
console.log(repo1.getDados());
//final
