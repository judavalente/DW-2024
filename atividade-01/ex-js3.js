function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return 'none';
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return 'Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

// Exemplo de uso da função
const lado1 = 5;
const lado2 = 5;
const lado3 = 5;

const resultado = tipoTriangulo(lado1, lado2, lado3);
