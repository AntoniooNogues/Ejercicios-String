"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var ejercicio4_component_1 = require("./ejercicio4.component");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var app = new ejercicio4_component_1.Ejercicio4Component();
function showMenu() {
    console.log("\n=== Men\u00FA ===");
    console.log("1. Buscar palabra en la lista");
    console.log("2. A\u00F1adir palabra a la lista (sin duplicados)");
    console.log("3. Ordenar lista alfab\u00E9ticamente");
    console.log("4. Mostrar lista actual");
    console.log("5. Salir");
    console.log("=================");
}
function handleOption(option) {
    switch (option) {
        case '1':
            rl.question('Introduce la palabra que deseas buscar: ', function (palabra) {
                var result = app.buscarPalabra(app.listaPalabras, palabra);
                console.log(result);
                mainMenu();
            });
            break;
        case '2':
            rl.question('Introduce la palabra que deseas añadir: ', function (palabra) {
                var result = app.addPalabraNoDuplicada(app.listaPalabras, palabra);
                console.log(result);
                mainMenu();
            });
            break;
        case '3':
            var sortedList = app.ordernarAlfabeticamente(app.listaPalabras);
            console.log('Lista ordenada alfabéticamente:', sortedList);
            mainMenu();
            break;
        case '4':
            console.log('Lista actual:', app.listaPalabras);
            mainMenu();
            break;
        case '5':
            console.log('¡Adiós!');
            rl.close();
            break;
        default:
            console.log('Opción no válida. Por favor, selecciona una opción del menú.');
            mainMenu();
            break;
    }
}
function mainMenu() {
    showMenu();
    rl.question('Selecciona una opción: ', function (option) {
        handleOption(option);
    });
}
// Iniciar el menú
mainMenu();
