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



//Historia de Cofla, capitulo 1:


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

    Repetitivas: funciones que ejecutan un bloque varias veces mientras se cumpla una condicion
        while: se ejecuta 0 o mas veces
            - while (condicion) {
                bloqueDeInstrucciones;
            }
        do while: se ejecuta al menos una vez
            - do {
                bloqueDeInstrucciones;
            } while (condicion)
        break: finaliza la repetitiva de manera forzada
        for: repite el bloque de instrucciones mientras que se cumpla la condicion con la variable numerica
            - for (let i = 0; i <= 5; i++) {
                bloqueDeInstrucciones;
            }
        continue: finaliza el bloque de instrucciones por ese unica iteracion
            - for (let i = 0; i < 5; i++){
                if (i == 2){
                    continue;
                }
                document.write(i);
            }
        for in: devuelve la posicion de los elementos en un arreglo
        for of: devuelve el contenido en las posiciones de un arreglo
            - let animales = ["Perro", "Gato", "Pez"];
            - for (animal in animales){
                document.write(animal);  // 0, 1, 2
                document.write(animales[animal]);  // Perro, Gato, Pez
            }
            - for (animal of animales){
                document.write(animal);  // Perro, Gato, Pez
            }
        label: etiqueta que se le puede dar a los bucles
            - let animales1 = ["Perro", "Gato", "Pez"];
            - let animales2 = ["Pajaro", animales1, "Gallina"];
            - forAnimales:
                for (animal in animales2){
                    if (animal == 1){
                        for(animal of animales1){
                            document.write(animal);
                            break forAnimales;
                        }
                    } else {
                        document.write(animal);
                    }
                }

    Funciones: 
        function: palabra reservada para crear una funcion
            - function saludar (){
                respuesta = prompt("Hola, como fue tu dia?");
                if (respuesta == "Bien"){
                    alert("Que bueno!")
                } else {
                    alert ("Una pena")
                }
            }
            - saludar();
            - saludar();
        return: retorno que devuelve la funcion
        parametros: valores que van a tomar las variables dentro de esa funcion
            - function suma (num1, num2) {
                let res = num1 + num2;
                return res;
            }
            - let resultado = suma(25, 45);
        funciones flecha: una manera "resumida" de crear una funcion
            - const/let nombreFuncion = (parametros) => {
                bloqueDeInstrucciones
            }
 
// Historia de Cofla capitulo 2:
    Crear una solucion para la entrada de una fiesta: chequear que el cliente sea mayor a 18 años, y chequeando el tiempo, a partir de las 2 pasa gratis el primer cliente
        let gratis = false;
        const chequearCliente = (hora) => {
            let edad = prompt("Cual es tu edad?");
            if (edad >= 18) {
                if ((hora >= 2) && (hora < 7) && !(gratis)){
                    alert("Felicidades, podes pasar gratis!");
                    gratis = true;
                } else {
                    alert("Podes pasar pero tenes que pagar.");
                }
            } else {
                alert("Sos menor de edad, no podes pasar.");
            }
        }
        chequearCliente(12);
        chequearCliente(1);
        chequearCliente(2.3);
        chequearCliente(2.6);
        chequearCliente(5);
        chequearCliente(7);
// Fin historia de Cofla capitulo 2.

    console.log : salida de datos pero en la consola, no se muestra en pantalla.
    POO (Programacion orientada a objetos):
        - clase: es la plantilla del objeto
        - objeto: son el resultado de la plantilla creada por la clase
        - atributos: propiedades o caracteristicas del objeto
        - metodo: son las acciones o cosas que puede hacer ese objetos
        - constructor: funcion obligatoria de la clase
        EJ:
            class animal {
                constructor(especie, edad, peso) {
                    this.especie = especie;
                    this.edad = edad;
                    this.peso = peso;
                    this.informacion = `Soy ${this.especie}, tengo ${this.edad} y peso ${this.peso}`;
                }
                verInfo() {
                    document.write(this.informacion);
                }
            }
            const perro = new animal("perro", 15, 25);
            console.log(perro);
            perro.verInfo();
    encapsulamiento: privar de ciertos datos al usuario, datos que no son importantes para el.
    polimorfismo: como un objeto se comporta ante un metodo dependiendo a sus propiedades.
    herencia: una clase que toma las propiedades de una clase pero tiene algunas adicionales
    metodos estaticos: metodo que no necesita que se cree el objeto. Se usa la palabra reservada static.
    metodos accesores: metodos set y get que permiten darle valor(set) y devolver el mismo(get). No son funciones por lo cual no se acceden con () al final. 
    EJ class animal: 
            class Perro extends Animal {
                constructor(especie, edad, peso, raza) {
                    super(especie, edad, peso);
                    this.raza = null;
                }
                static ladrar() {
                    alert(`Wow!`);
                }
                set setRaza(newRaza) {
                    this.raza = newRaza;
                }
                get getRaza() {
                    return this.raza;
                }
            }

//Historia de Cofla capitulo 3:
    Mostrar 3 celulares distintos que puedan prender, reiniciar, apagar, tomar fotos y grabar.
        class Celular {
            constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
                this.color = color;
                this.peso = peso;
                this.resolucionPantalla = resolucionPantalla;
                this.resolucionCamara = resolucionCamara;
                this.memoriaRam = memoriaRam;
                this.encendido = false;
            }
            presionarBotonEncendido() {
                if (this.encendido) {
                    alert("Celular apagado.");
                    this.encendido = false;
                } else {
                    alert("Celular encendido.");
                    this.encendido = true;
                }
            }
            reiniciarCelular() {
                if (this.encendido) {
                    alert("El celular se esta reiniciando.");
                } else {
                    alert("El celular esta apagado.");
                }
            }
            tomarFoto() {
                alert(`Sonria! Foto tomada con resolucion de ${this.resolucionCamara} Mpx!`);
            }
            grabarVideo() {
                alert(`Grabando video con resolucion de ${this.resolucionCamara} Mpx!`);
            }
            informacion() {
                return `
                Color: <b>${this.color}</b><br>
                Peso: <b>${this.peso}</b><br>
                Resolución de pantalla: <b>${this.resolucionPantalla}</b><br>
                Resolución de cámara: <b>${this.resolucionCamara} Mpx</b><br>
                Memoria RAM: <b>${this.memoriaRam}</b><br>`
            }
        }

        class CelularAltaGama extends Celular {
            constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
                super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam);
                this.resolucionCamaraExtra = resolucionCamara;
            }
            grabarVideoLento() {
                alert(`Grabando video lento con cámaras de ${this.resolucionCamaraExtra} Mpx`);
            }
            reconocimientoFacial() {
                alert(`Realizando reconocimiento facial.`);
                alert(`Reconocimiento facial completado.`)
            }
            informacionAltaGama() {
                return this.informacion() + `Resolucion de cámara extra: <b>${this.resolucionCamaraExtra} Mpx</b><br>`
            }
        }

        iphone = new Celular("Rojo", 750, "4K", 50, "4GB");
        moto = new Celular("Negro", 500, "1980x1024", 60, "6GB");
        samsung = new CelularAltaGama("Blanco", 600, "8K", 100, "8GB");

        document.write(`
        ${iphone.informacion()}<br>
        ${moto.informacion()}<br>
        ${samsung.informacionAltaGama()}<br>`);

        iphone.tomarFoto();
        moto.grabarVideo();
        samsung.presionarBotonEncendido();
        samsung.reiniciarCelular();
        samsung.presionarBotonEncendido();
        samsung.reconocimientoFacial();
        
//Fin historia de Cofla capitulo 3


*/