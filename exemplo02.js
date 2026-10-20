let semana1 = Number(prompt("Digite o valor da primeira semana: "));    
let semana2 = Number(prompt("Digite o valor da segunda semana: "));
let semana3 = Number(prompt("Digite o valor da terceira semana: "));
let semana4 = Number(prompt("Digite o valor da quarta semana: "));

let media = (semana1 + semana2 + semana3 + semana4) / 4

console.log("semana 1: " + semana1)
console.log("semana 2: " + semana2)
console.log("semana 3: " + semana3)
console.log("semana 4: " + semana4)
console.log("média: " + media.toFixed(2))
