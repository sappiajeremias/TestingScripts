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

    Metodos de cadenas 

        concat() : junta dos o mas cadenas y retorna una nueva
        startsWith(): devuelve true si una cadena comienza con los carateres de otra
        endsWith(): devuelve true si una cadena termina con los carateres de otra
        includes(): devuelve true si una cadena se encuentra dentro de otra
        indexOf(): devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
        lastIndexOf(): devuelve el ultimo indice del primer caracter de la cadena 
        padStart(): rellenar cadena al principio con los caracteres deseados

            EJ:
                let cadena = "abc";
                cadena.padStart(5, "x"); // "xxabc"

        padEnd(): rellenar cadena al final con los caracteres deseados
        repeat(): devuelve la misma cadena pero repetida la cantidad que se desee
        split(): divide la cadena donde se le pida

            EJ:
                let cadena = "Hola me llamo Jere";
                cadena.split(" "); // Divide la cadena en los espacios y retorna un array con todas las divisiones
                cadena[3]; // "Jere"

        substring(): crea una nueva cadena en base a dos indices

            EJ:
                let cadena = "ABCDEFG";
                cadena.substring(2, 5)); // "CDE"

        toLowerCase(): convierte la cadena a minuscula
        toUpperCase(): convierte la cadena a mayuscula
        toString(): convierte valores a strings
        trim(): elimina los espacios en blanco
        trimEnd(): elimina los espacios al final de la cadena
        trimStart(): elimina los espacios al principio de la cadena
        valueOf(): retorna el valor primitivo de un objeto string
        .length (PROPIEDAD): retorna la cantidad de caracteres de la cadena
      
    Metodos de Arrays    

        TRANSFORMADORES

            pop(): elimina el ultimo elemento del array y devuelve ese elemento
            shift(): elimina el primer elemento del array y devuelve ese elemento
            push(): agrega un elemento al final del array y devuelve la nueva cantidad de elementos 
            reverse(): invierte el orden de los elementos del array
            unshift(): agrega uno o mas elementos al principio array y devuelve la nueva longitud
            sort(): ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
            splice(): cambia el contenido de un array eliminando o agregando elementos

                EJ:
                    let numeros = [5, 2, 3, 6, 7];
                    numeros.splice(1, 3); // [5, 2]
                    numeros.splice(0, 2, "Hola"); // ["Hola", 6, 7]
                    numeros.splice(3, 0, 10, 20); // [5, 2, 3, 6, 10, 20, 7]
                    numeros.splice(-1, 0, 10, 20); // [5, 2, 3, 6, 7, 10, 20]

        ACCESORES (No modifican el array original, crean uno nuevo)

            join(): crea una cadena con los elementos de un array y separado por otra cadena

                EJ:
                    let nombres = ["Pedro", "Pepe", "Pamela"];
                    let resultado = nombres.join("...-...")
                    document.write(resultado); // "Pedro...-...Pepe...-...Pamela"

            slice(): devuelve una parte del array en otro array nuevo, con inicio y fin que no se incluye

                EJ:
                    let numeros = [5, 2, 3, 6, 7];
                    let cortado = numeros.slice(0, 3); // [5, 2, 3]

        DE REPETICION 

            filter(): crea un nuevo array con los elementos que cumplen la condicion

                EJ:
                    let numeros = [5, 2, 3, 6, 7];
                    let resultado = numeros.filter((nums) => {
                        if (nums <= 4) {
                            document.write(nums + "</br>")
                        }
                    }) // 2, 3

            forEach(): ejecuta la funcion indicada como en filter pero no crea un nuevo arreglo

                EJ:
                    let numeros = [5, 2, 3, 6, 7];
                    let resultado = []
                    numeros.forEach((nums) => {
                        if (nums <= 4) {
                            resultado.push(nums);
                        }
                    }) // 2, 3

    Objeto Math

        sqrt(): raiz cuadrada
        cbrt(): raiz cubica
        max(): devuelve el mayor de cero o mas numeros
        min(): devuelve el numero menor
        random(): devuelve un numero aleatorio entre 0 y 1
        round(): devuelve el valor redondeado al entero mas cercano
        floor(): devuelve el entero redondeado para abajo
        fround(): devuelve la representacion flotante de precision simple mas cercana
        trunc(): devuelve la parte entera del numero x, elimina los digitos fraccionarios

// Historia de Cofla capitulo 4

//Fin historia de Cofla capitulo 4

    Console (console.funcion())
    
        FUNCIONES DE REGISTRO
            assert(): aparece error en la consola si es falso
            clear(): limpia la consola
            error(): muestra un mensaje de error
            info(): muestra un mensaje informativo
            log(): muestra un mensaje
            table(): toma un argumento, que debe ser un array o un objeto y lo muestra como una tabla con sus indices
            warn(): muestra un mensaje de advertencia
            dir(): muestra una lista interactiva con las propiedades de un objeto
        FUNCIONES DE CONTEO
            count(): registra el numero de veces que se llama a count()
            countReset(): resetea el contador de console.count()
        FUNCIONES DE AGRUPACION
            group(): crea un grupo en linea en el registro
            groupEnd(): remueve un grupo en linea en el registro
            gropuCollapsed(): crea un grupo en linea pero colapsado, el usuario debe expandirlo
        FUNCIONES DE TEPORIZACION
            time(): comienza un contador desde que se inicio
            timeLog(): muestra la cantidad de tiempo que paso 
            timeEnd(): finaliza el contador y muestra cuanto tardo
        Modificar estilos de texto en la consola
            console.log("%cHola", "color: red; background: black; border: 3px solid blue");

// Historia de Cofla capitulo 4

//Fin historia de Cofla capitulo 4

    DOM: Documen Object Model (Interfaz que proporciona un conjunto estandar de objetos)

    Nodo: Un nodo en el DOM es cualquier etiqueta del cuerpo, incluida la misma etiqueta body
        Document: nodo raiz, todos los demas derivan de este
        Element: nodos definidos por etiquetas html
        Text: el texto dentro de un nodo element
        Attribute: los atributos de las etiquetas(informacion asociada a un nodo Element)
        Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype, etc.

    Metodos de seleccion de elementos (document.metodo())
        getElementById(): selecciona un elemento por ID
        getElementsByTagName(): selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
        querySelector(): devuelve el primer elemento que coincida con el grupo especificado de sectores
        querySelectorAll(): devuelve todos los elementos que ocincidan con el grupo especificado de selectores

        EJ:
            parrafo = document.getElementById("parrafo");
            textos = document.getElementsByTagName("p"); // Devuelve la coleccion como una lista de objetos, se pueden acceder a ellos como si fueran un array
            textosEstilos = document.querySelector(".claseEstilos"); // Funciona con clases con un . y con ids con un #
            seleccionTextos = document.querySelectorAll("#parrafo"); // Devuelve la coleccion que coincida con la clase o el id, se pueden acceder a ellos como si fueran un array
            document.write(parrafo); // [object HTMLParagraphElement]
            document.write(textos); // [object HTMLCollection]
            document.write(textosEstilos); // [object HTMLParagraphElement]
            document.write(seleccionTextos); // [object NodeList]
    
    Metodos para definir, obtener y eliminar atributos
        setAttribute(): modifica el valor de un atributo
        getAttribute(): obtiene el valor de un atributo
        removeAttribute(): elimina el valor de un atributo

        EJ:
            const tuNombre = document.querySelector(".tuNombre");
            tuNombre.setAttribute("type", "number"); // Cambia el tipo de input a number
            document.write("</br>" + tuNombre.getAttribute("type")); // number
            tuNombre.removeAttribute("type"); // Elimina el valor "type"
            document.write("</br>" + tuNombre.getAttribute("type")); // null, no existe y por defecto es text

    Atributos Globales

*/