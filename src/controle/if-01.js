let chave = true
let corajoso = true

if (chave && corajoso) {
    console.log('O herói usa a chave e abre o baú! Tesouro encontrado!')
if (!chave && corajoso)
    console.log('O herói tenta abrir o baú com as próprias mãos mas! Sem sucesso, mas foi uma tentativa valente.')
if (chave && !corajoso)
    console.log('O herói tem a chave mas fica com medo de abrir o baú. vai que tem uma maldição lá dentro.')
if (!chave && !corajoso)
    console.log('O herói não tem a chave e também não tem coragem...Melhor deixar o baú pra lá.')

// MORAL DA HISTORIA, Mesmo sem 'else', o herói sempre encontra um caminho (ou não)!

} 