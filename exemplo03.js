let mes1 = Number(prompt("Digite o valor do primeiro mês: "));
let mes2 = Number(prompt("Digite o valor do segundo mês: "));
let mes3 = Number(prompt("Digite o valor do terceiro mês: "));
let mes4 = Number(prompt("Digite o valor do quarto mês: ")); 

let media = (mes1 + mes2 + mes3 + mes4) / 4

console.log("mês 1: " + mes1)
console.log("mês 2: " + mes2)
console.log("mês 3: " + mes3)
console.log("mês 4: " + mes4)
console.log("média: " + media + "kwh")

if (media <= 150) {
    console.log("meta atingida consumo dentro do limite")

} else {
    console.log("meta não atingida consumo acima do limite")
}