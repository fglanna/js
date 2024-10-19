const pessoa = Object.freeze( {  // não pode ser modificado - estado congelado
    nome: 'Flavio',
    idade: 62,
    cidade: "Belo Horizonte",

});

console.log(`Olá, meu nome é ${pessoa.nome}! Tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}.`);

pessoa.nome = 'Maria';
console.log(`Nome: ${pessoa.nome}`)
console.log(pessoa)