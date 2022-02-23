/* 
    const = Constante
    let = Variable de bloque
    var = Variable comun, mejor usar let

    Ej:
        let numero = 15;
        const iva = 21;

    alert(): Alerta mostrada en pantalla
        alert("Hola bienvenido a la pagina");

    prompt: Ingreso de datos por el usuario
        let nombre = prompt("Decime tu nombre");
    
    document.write: Un print en la pagina, no como alerta
        document.write("Hola papa");
        let frase = "" + numero + iva;
        document.write(frase);

    Concatenacion
        - Doble comillas para que tome todo como string y concatene en vez de sumar
        - .concat(): funcion para concatenar dos strings
        - Backticks y ${}:
            let nombre = "Jere";
            let saludo = `Hola ${nombre}, como estas?`;



//Historia de roberto, capitulo 1:


let cofla = prompt("Por favor ingrese el dinero de Cofla: ");
let roberto = prompt("Luego, ingrese el dinero de Roberto: ");
let pedro = prompt("Ingrese el dinero de Pedro: ");

if (cofla >= 0.6 && cofla < 1) {
    alert("Cofla puede comprar helado de agua.");
    alert("Y te sobran: " + (cofla - 0.6));
} else if (cofla >= 1 && cofla < 1.6) {
    alert("Cofla puede comprar helado de crema.");
    alert("Y te sobran: " + (cofla - 1));
} else if (cofla >= 1.6 && cofla < 1.7) {
    alert("Cofla puede comprar helado dos bochas.");
    alert("Y te sobran: " + (cofla - 1.6));
} else if (cofla >= 1.7) {
    alert("Cofla puede comprar 1/4 de helado.");
    alert("Y te sobran: " + (cofla - 1.7));
} else {
    alert("Cofla no se puede comprar nada.");
}

if (roberto >= 0.6 && roberto < 1) {
    alert("Roberto puede comprar helado de agua.");
    alert("Y te sobran: " + (roberto - 0.6));
} else if (roberto >= 1 && roberto < 1.6) {
    alert("Roberto puede comprar helado de crema.");
    alert("Y te sobran: " + (roberto - 1));
} else if (roberto >= 1.6 && roberto < 1.7) {
    alert("Roberto puede comprar helado dos bochas.");
    alert("Y te sobran: " + (roberto - 1.6));
} else if (roberto >= 1.7) {
    alert("Roberto puede comprar 1/4 de helado.");
    alert("Y te sobran: " + (roberto - 1.7));
} else {
    alert("Roberto no se puede comprar nada.");
}

if (pedro >= 0.6 && pedro < 1) {
    alert("Pedro puede comprar helado de agua.");
    alert("Y te sobran: " + (pedro - 0.6));
} else if (pedro >= 1 && pedro < 1.6) {
    alert("Pedro puede comprar helado de crema.");
    alert("Y te sobran: " + (pedro - 1));
} else if (pedro >= 1.6 && pedro < 1.7) {
    alert("Pedro puede comprar helado dos bochas.");
    alert("Y te sobran: " + (pedro - 1.6));
} else if (pedro >= 1.7) {
    alert("Pedro puede comprar 1/4 de helado.");
    alert("Y te sobran: " + (pedro - 1.7));
} else {
    alert("Pedro no se puede comprar nada.");
}

//Fin historia Cofla: primer capitulo

    Arrays: Arreglos, conjuntos de elementos dentro de una variable
        - let arreglo = ["Jere", 15, true];
        - Para acceder a sus posiciones, de 0 en adelante:
            document.write(arreglo[0]);
    Arrays asociativos: los elementos estan en posiciones dadas por un string y no por un entero
        - let pc = {
            procesador: "AMD Ryzen 5", 
            ram: 16,
            grafica: "Geforce GTX 1650"
        };
        Para acceder a los elementos por sus etiquetas:
            document.write(pc["ram"]);
        let frase = `El procesador de mi pc es: ${pc["procesador"]}.<br>Su memoria ram es de: ${pc["ram"]}.<br>Y su grafica es: ${pc["grafica"]}<br>`;

*/