//parâmetros de função

//                //2   //2 
// function soma (num1, num2) {
//     return num1 + num2;
// }

// console.log (soma (2, 2))
// console.log (soma (245, 20))
// console.log (soma (-500, 60))

// parâmetro x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Daniel"))

function soma (num1, num2) {
    return num1 + num2;
}

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))