const produtos = [
    {nome: 'Camisa', preco: 50 },
    {nome: 'Calça', preco: 120 },
    {nome: 'Tênis', preco: 200},
    {nome: 'Boné', preco: 30},
    {nome: 'Relógio', preco: 80}
];

const maisBaratos = produtos.filter((produto) => produto.preco < 100);
const maisCaros = produtos.filter((produto) => produto.preco > 100);

console.log('Produtos com preço menor que R$100,00 reais: ');
maisBaratos.forEach((produto) => {
    console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco}`);
});
console.log('---------------------------------------------------------')
console.log('Produtos com preço maior que R$100,00 reais: ');
maisCaros.forEach((produto) => {    
    console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco}`);
});