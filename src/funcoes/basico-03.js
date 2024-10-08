function maiorNumero(a, b) {
    return a > b ? a : b;
    // ou return (a > b)? a : b;
}

console.log(maiorNumero(59, 20)); // Output: 59

function parOuImpar(numero) {
    return numero % 2 === 0? 'Par' : 'Ímpar';

}

console.log(parOuImpar(10)); // Output Par
console.log(parOuImpar(5)); // Output: imPar
