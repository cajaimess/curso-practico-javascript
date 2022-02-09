
let calcularMediaAritmetica= (lista)=>{

    const sumaLista = lista.reduce(
    
        (valorAcumulado = 0, nuevoElemento)=>{
    
        return valorAcumulado + nuevoElemento;
    
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
    
    }
    
    
    
    
    let esPar = (numerito)=>{
        if (numerito % 2 === 0) {
            return true;
        }else{
            
            return false;
        }
        
    }
    
let calcularmediana = (lista)=>{
    lista.sort();
     console.log(lista)
    const mitadLista = parseInt(lista.length/2);

    let mediana;

if (esPar(lista.length)) {

const elemento1= lista[mitadLista];
const elemento2 = lista[mitadLista -1];

const promedioElementos= calcularMediaAritmetica([
    elemento1,
    elemento2 
])
 mediana= promedioElementos;
    
}else{

    mediana = lista[mitadLista];
}

return mediana;

}


