// Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado= 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");


const perimetroCuadrado = (lado) => lado * 4;
//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm `);

const areaCuadrado = (lado) => lado * lado;
//console.log(`El area del cuadrado es: ${areaCuadrado} cm²`);
console.groupEnd();

// Código del triángulo
console.group("Triángulos")

// const ladoTrinagulo1 = 6;
// const ladoTrinagulo2 = 6;
// const baseTriangulo= 4;

//console.log(`Los lados de mi triangulo miden : ${ladoTrinagulo1} cm, ${ladoTrinagulo2} cm, ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo " + alturaTriangulo + "cm");

const perimetroTriangulo = (ladoTrinagulo1,ladoTrinagulo2, baseTriangulo) => ladoTrinagulo1 + ladoTrinagulo2 + baseTriangulo;
//console.log(`El perimetro del triángulo es: ${perimetroTriangulo} cm `);

const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo) /2;
//console.log(`El area del triángulo es: ${areaTrinagulo} cm²`);

console.groupEnd();

// Código círculo

console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es ${radioCirculo} cm`);

// Diámetro

const diametroCirculo = (radio) => radio *2;
//console.log(`El díametro del círculo es ${diametroCirculo} cm`);

//PI

const PI = Math.PI;
console.log(`PI es: ${PI} cm`);

// Circunferencia

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
//console.log(`El perimetro del círculo es ${perimetroCirculo} cm`);


//Área

const areaCirculo = (radio) => (radio * radio) * PI;
// console.log(`El área del círculo es ${areaCirculo} cm²`);


console.groupEnd();

// Aquí interactuamos cobn el HTML 

//Cuadrado HTML

const calcularPerimetroCuadrado = () =>{

    const input = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);

} ;

const calcularAreaCuadrado = () =>{

    const input = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(input);
    alert(area);

};
// Triángulo HTML

const calcularPerimetroTriangulo = () =>{
    
    const lado1 = parseInt(document.getElementById("InputLado1").value);
    const lado2 = parseInt(document.getElementById("InputLado2").value);
    const base = parseInt(document.getElementById("InputBase").value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

};
const calcularAreaTriangulo = () =>{
    
 
    const base = document.getElementById("InputBase").value;
    const altura = document.getElementById("InputAltura").value;
    const area = areaTriangulo(base,altura);
    alert(area);
};

//Círculo HTML

const calcularPerimetroCirculo = () =>{

    const radio = document.getElementById("InputRadio").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
};
const calcularAreaCirculo = () =>{

    const radio = document.getElementById("InputRadio").value;
    const area = areaCirculo(radio);
    alert(area);
};

//h=sqrt(pow(a, 2)-pow(b/2, 2))