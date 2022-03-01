// Algo muito comum para quem trabalha com desenvolvimento de software é a comparação de valores entre variáveis ou objetos para executar ou um comportamento, ou outro. O resultado dessas comparações são dois: true ou false (verdadeiro ou falso).

// Para testar nossos conhecimentos nos operadores de comparação do JavaScript, observe as variáveis abaixo:


a = []
b = 20
c = true 
d = ''

// primeira alternativa
if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// segunda alternativa

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// terceira alternativa
if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

// quarta alternativa
if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}