/* 1. Checando se pode acessar uma área *
Condições:
maiorIdade
temAssinatura

let maiorIdade = true   // a pessoa tem 18 anos
let temAssinatura = true   //  a pessoa tem assinatura

let podeAcessar = (maiorIdade == true) &&
(temAssinatura == true)
console.log("Você pode acessar uma área exclusiva?",
podeAcessar)

let maiorIdade2 = true  // a pessoa tem 18 anos ou mais?
let temDocumentoVálido = true  // a pessoa tem documento válido?

let podeComprarBebidas = (maiorIdade2 == true) &&
(temDocumentoVálido == true)
console.log("Pode comprar?", podeComprarBebidas)


let valorCompra = 60   // valor total da compra
let clienteVip = true  // a pessoa é cliente VIP?
let podeUsarCupom = (valorCompra > 100)  || (clienteVIP == true)

console.log(" Pode usar cupom? ",podeUsarCupom)

4: Verificando se pode estacionar em uma vaga especial
verificar se a pessoa é idosa ou possui deficiência 
let pessoaIdosa = false // a pessoa é idosa?
let pessoaComDeficiencia = true // a pessoa tem deficiência?
let podeEstacionar = (pessoaIdosa == true) || (pessoaComDeficiencia == true)
console.log( "A pessoa pode estacionar? ", podeEstacionar)

let controleVideoGame = true // a pessoa tem controle de videogame?
let consoleConectadoTv = false // a pessoa tem console conectado na TV?
let podeJogarJogo = (controleVideoGame = true) || (consoleConectadoTv = true)
console.log( " A pessoa pode jogar um jogo de video game? ", podeJogarJogo)

let estarLogado = true // a pessoa está logado?
let permissãoAdmin = true // a pessoa tem permissão de administrador?
let temAcessoAreaRestrita = (estarLogado = true) && (permissãoAdmin = true)
console.log(" A pessoa tem acesso a área restrita? ", temAcessoAreaRestrita)
/*
*/
let maior18anos = true // a pessoa tem mais de 18 anos?
let autorizaçãoPais = false // a pessoa tem autorização dos pais?
let podeAssistir = (maior18anos = true) || (autorizaçãoPais = true)
console.log ( " A pessoa tem permissão para assistir o filme? ", podeAssistir)
 








