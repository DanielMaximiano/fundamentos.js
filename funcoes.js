// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// primeiro momento a gente.. 1) declara a função
                      // string
function imprimeTexto (texto) {
    console.log(texto)
}

// segundo momento a gente...  2) executa a função (1 ou + vezes)
// como a gente executa a função? Chamando ela pelo nome! (imprimeTexto)

imprimeTexto(soma());
// imprimeTexto("outro texto");

// três formas de escrever funções

function soma() {
    //outros codigo
    //vários console.log tudo antes da linha do return, se não, não serão executados.
    return 2 + 2;
}

// console.log(soma ())

