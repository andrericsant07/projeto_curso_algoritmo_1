/* 
passou := falso
escreval ("Digite o nome do aluno:)
leia (nome)
escreval ("Digite a nota 01 do aluno:")
leia (nota1)
escreval ("Digite a nota 02 do aluno:")
leia (nota2)
media := (nota1 + nota2) / 2

    se media >= 50 entao
        passou := verdadeiro
    fimse

    se ( passou ) && ( media >= 5 || media <= 7 ) entao
        escreval ("Aprovado:", nome)
    senao
        escreval ("Reprovado", nome)
    fimse
*/

    var nome, nota1, nota2, passou;

    passou = false;

    nome = prompt ("Digite o nome do aluno:")
    nota1 = prompt ("Digite a nota 01 do aluno")
    nota2 = prompt ("Digite a nota 02 do aluno")

    media = (parseInt(nota1) + parseInt(nota2)) / 2;

    if(media >= 5)
        passou = true;
/*negação if (!passou)
conjunção if(passou && media >=7)
disjunção if (passou || media >=7)
disjunção exclusiva if (passou && (media >=5 && media <=9))
*/
    if(passou)
        alert("Aprovado:" + nome)
    else
        alert("Reprovado:" + nome)