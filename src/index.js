
let nomeProduto1        = prompt("Qual é o produto?")
let quantidadeProduto1  = Number(prompt("Quantas unidades?"))
let varloUnidadeProduto1 = Number(prompt("Quanto custa a unidade?"))
let custoProduto1       = quantidadeProduto1 * varloUnidadeProduto1

console.log(`Produto: ${nomeProduto1} Quantidade: ${quantidadeProduto1} ToTal: ${custoProduto1} `)


let vinho        = "vinho"
let quantidadeProduto2  = Number(prompt("Quantas unidades de vinho?"))
let varloUnidadeProduto2 = Number(prompt("Quanto custa a unidade?"))
let custoVinho       = quantidadeProduto2 * varloUnidadeProduto2

console.log(`Produto: ${vinho} Quantidade: ${quantidadeProduto2} ToTal: ${custoVinho }`)


let nomeProduto3        = prompt("Qual é o produto?")
let quantidadeProduto3  = Number(prompt("Quantas unidades?"))
let varloUnidadeProduto3 = Number(prompt("Quanto custa a unidade?"))
let custoProduto3       = quantidadeProduto3 * varloUnidadeProduto3

console.log(`Produto: ${nomeProduto3} Quantidade: ${quantidadeProduto3} ToTal: ${custoProduto3} `)


let nomeProduto4       = prompt("Qual é o produto?")
let quantidadeProduto4  = Number(prompt("Quantas unidades?"))
let varloUnidadeProduto4 = Number(prompt("Quanto custa a unidade?"))
let custoProduto4       = quantidadeProduto4 * varloUnidadeProduto4

console.log(`Produto: ${nomeProduto4} Quantidade: ${quantidadeProduto4} ToTal: ${custoProduto4} `)


let nomeProduto5        = prompt("Qual é o produto?")
let quantidadeProduto5  = Number(prompt("Quantas unidades?"))
let varloUnidadeProduto5 = Number(prompt("Quanto custa a unidade?"))
let custoProduto5       = quantidadeProduto5 * varloUnidadeProduto5

console.log(`Produto: ${nomeProduto5} Quantidade: ${quantidadeProduto5} ToTal: ${custoProduto5} `)

let totalCompraSemVinho = (Number(custoProduto1) + Number(custoProduto3) + Number(custoProduto4) + Number(custoProduto5)) / 2
let totalCompra = Number(custoProduto1) + Number(custoVinho) + Number(custoProduto3) + Number(custoProduto4) + Number(custoProduto5)
let totalCompraInd = Number(totalCompra / 2)

console.log(`Total da compra: ${totalCompra}`)

if (totalCompra % 2 == 0){
    
    console.log(`DEU NÚMERO PAR!!!`)
    console.log(`Você não terá que pagar a metade do vinho q seu amigo comprou.`)
    console.log(`Você terá que pagar: ${totalCompraSemVinho}`)
    alert(`Você não terá que pagar a metade do vinho q seu amigo comprou, então Você terá que pagar: ${totalCompraSemVinho}`)
    

} else{

    console.log(`DEU NÚMERO IMPAR!!!`)
    console.log(`Você terá que pagar a metade do vinho q seu amigo comprou.`)
    console.log(`Você terá que pagar: ${totalCompraSemVinho} + ${custoVinho} do vinho. totalizando: ${totalCompraInd}`)
    alert(`Você terá que pagar: ${totalCompraSemVinho} + ${custoVinho} do vinho. totalizando: ${totalCompraInd}`)

}



