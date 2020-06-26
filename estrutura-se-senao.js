/*valor01, valor02, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
//   escreva("A proposta desse programa é calcular dois valores baseado na operaçao de sua escolha")
   escreva("Digite o primeiro valor:")
   leia(valor01)
   escreva("Escolha a operação, ex.:(+,-,*,/):")
   leia(operacao)
   escreva("Digite o segundo valor:")
   leia(valor02)
   
   se operacao = " + " entao
      resultado := valor01 + valor02
   senao
      se operacao = " - " entao
         resultado := valor01 - valor02
      senao
         se operacao = " * " entao
            resultado := valor01 * valor02
         senao
            se operacao = " / " entao
               resultado := valor01 / valor02
            fimse
         fimse
      fimse
   fimse
   escreva("Resultado do calculo é" , resultado 
   */
function acaoBotao() {
   var valor01, valor02, operacao, resultado

   valor01 = prompt ("Digite o primeiro valor: ")
   operacao = prompt ("Digite a operação: (ex.:+,-,*,/) ")
   valor02 = prompt ("Digite o segundo valor")

    if(operacao == "+"){
        resultado = parseInt(valor01) + parseInt(valor02)
    }else if(operacao == "-" ){
        resultado = parseInt(valor01) - parseInt(valor02)
    }else if(operacao == "*"){
        resultado = parseInt(valor01) * parseInt(valor02)
    }else if(operacao == "/"){
        resultado = parseInt(valor01) / parseInt(valor02)
    }
    document.getElementById("paragrafo").innerText = resultado
} 
