function retornarUmaFuncao() {
    return function () {
        console.log("Hello World!");
    };
}

const souUmaFuncao = retornarUmaFuncao()

souUmaFuncao()

retornarUmaFuncao()()