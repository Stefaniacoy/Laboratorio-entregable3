// Paso 2: Función para realizar la operación
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

// Paso 4 y 5: Bucle para realizar múltiples operaciones
let operacion = "";

while (operacion !== "salir") {
    operacion = prompt('¿Qué operación deseas realizar? (suma, resta, multiplicacion, division) o escriba "salir" para terminar:');
    
    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    let input1 = prompt("Ingrese el primer número:");
    let input2 = prompt("Ingrese el segundo número:");
        
    // Validar si la operación es válida
    if (
        operacion === "suma" ||
        operacion === "resta" ||
        operacion === "multiplicacion" ||
        operacion === "division"
    ) {
        let num1 = parseFloat(input1);
        let num2 = parseFloat(input2);

        let resultado = realizarOperacion(num1, num2, operacion);

        alert("El resultado es: " + resultado);
        console.log("El resultado es: " + resultado);
    } else {
        alert("Operación no válida. Intente de nuevo.");
        console.log("Operación no válida. Intente de nuevo.");
    }
}