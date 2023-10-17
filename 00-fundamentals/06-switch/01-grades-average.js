// Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:

// Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
// Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
// Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
// Si saca 4.1 y hasta 5.0 ( 'Excelente' )

// 01 Prompt for 3 grades within a 0 to 5 range, including decimal numbers, to calculate their average and show the appropriate message

let grades = parseFloat(prompt("Type 3 grades separated with commas: "));
let gradesList = grades.split(",");
let average = (gradesList[0] + gradesList[1] + gradesList[2]) / gradesList.length;

switch(average) {
    case 1:
}