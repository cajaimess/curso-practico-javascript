//HELPERS
function esPar(numerito){

    return (numerito % 2 === 0);
}

let calcularMediaAritmetica= (lista)=>{

    const sumaLista = lista.reduce(
    
        (valorAcumulado = 0, nuevoElemento)=>{
    
        return valorAcumulado + nuevoElemento;
    
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
    
    }

//CALCILADORA DE MEDIANA
    const medianaSalario= (lista) =>{

        const mitad = parseInt(lista.length / 2);
    
        if (esPar(lista.length)) {
            
            const personitaMitad1 = lista[mitad - 1 ];
            const personitaMitad2 = lista[mitad];
    
            const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
            return mediana
            
        }else{
    
            const personitaMitad = lista[mitad];
            return personitaMitad;
    
        }
    }

//MEDIANA GENERAL
const salariosCol = colombia.map(

(personita) =>{

    return personita.salary;

}

);


const salariosColSorted = salariosCol.sort(

    (salaryA, salaryB) =>{

    return salaryA- salaryB;
        
    }

);


const medianaGeneralCol = medianaSalario(salariosColSorted);

// MEDIANA TOP 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
    )
const medianaTop10CoL= medianaSalario(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10CoL,

});




