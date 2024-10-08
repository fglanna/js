function somarTodos(...numeros) {
    let total = 0
    
    for (let n of numeros) {
        total += n
    }
    
    return total
}

console.log(somarTodos(1, 2, 3, 4, 5)) // Imprime: 15
console.log(somarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55

// ARROW function
let subtrair = (a, b ) => {
    return a - b

}

// Outra forma
let multiplicar = (a, b) => a * b // quando se tem apenas um elemento
console.log(multiplicar(10, 2))