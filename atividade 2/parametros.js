function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

nomeIdade("Jose", 18)

console.log(nomeIdade(40, "Gabriel"))
console.log(nomeIdade("Gabriel", 40))

function soma (num1, num2) {
 return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1 ) {
    return num1 * num2;
}

console.log(soma(2))

console.log(multiplica(soma(4, 5)))


