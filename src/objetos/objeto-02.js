const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: {
        nome: 'J.R.R. Tolkien',
        idade: 81,
    },
    generos: ['Fantasia', 'Aventura', 'Ficção'],
    publicado: true,
    anopuclicação: 1954,
    generoPrincipal: function() {
        return this.generos[0];
    }
    
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor.nome}`);
console.log(`Publicado: ${livro.publicado ? 'SIM' : 'NÃO'}`);

if (livro.publicado) {
    console.log(`Ano de Publicação: ${livro.anopuclicação}`)
    console.log(`Generos: ${livro.generos.join(', ')}`);
}
console.log(`Gênero Principal: ${livro.generoPrincipal()}` );
console.log(JSON.stringify(livro));
console.log(JSON.stringify(livro, null, 4));
