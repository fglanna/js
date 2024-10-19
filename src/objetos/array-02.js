const frutas = ['maçã', 'banana', 'laranja', 'tomate']; 
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
console.log(comida);

const index = comida.indexOf('tomate');
if (index !== -1) {
    comida.splice(index, 1);

}
comida.sort();
console.log(comida);