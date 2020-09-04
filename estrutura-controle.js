   var nome, nota1, nota2;

   nome = prompt ("Digite o nome do aluno:")
   nota1 = prompt ("Digite a nota 01 do aluno:")
   nota2 = prompt ("Digite a nota 02 do alunio:")

   media = (parseInt(nota1) + parseInt(nota2)) / 2

   if(media >= 5)
        alert ("Aprovado!" + nome)
   else
        alert ("Reprovado" + nome)
