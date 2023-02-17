export function verificaPessoa(idade: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // console.log("Target", target);
    // console.log("Key", key);
    // console.log("Descriptor", descriptor);

    const metodoOriginal = descriptor.value; // Salvando nosso método original

    // nessa demonstração ele sobrescreveu o método, ignirando totalmente o console.log bem vindo
    // Meio inútil, mas possível de se fazer

    // sobrescrevendo o metodo (reescrevendo)
    descriptor.value = function () {
      if (idade < 18) {
        console.log("Menor de idade");
      } else {
        console.log("Maior de idade");
        return metodoOriginal.apply(this); // a forma de trazer de volta o que está dentro do método - retornando
      }
    };
  };
}
