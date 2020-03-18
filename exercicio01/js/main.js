var nameOld, nameNew, ageOld, ageNew, result

nameOld = prompt('Informe o nome do mais velho');
ageOld = prompt('Informe a idade do mais velho');
nameNew = prompt('Informe o nome do mais novo');
ageNew = prompt('Informe a idade do mais novo');

result = ageOld - ageNew;

alert('O mais velho(a) é ' + nameOld + ' e sua idade é ' + ageOld + ' anos');
alert('O mais novo(a) é ' + nameNew + ' e sua idade é ' + ageNew + ' anos');
alert('Diferença entre as idades: ' + result + ' anos');