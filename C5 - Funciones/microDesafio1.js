const calcularMonto=(tipoVehiculo,diasAlquiler,sillaBebe)=>{
    let resultado=0;
    switch(tipoVehiculo){
        case "Compacto":
            resultado = 14000 * diasAlquiler;
            break;
        case "Mediano":
            resultado = 17000 * diasAlquiler;
            break;
        case "Camioneta":
            resultado =28000 * diasAlquiler;
            break;
    }
    if(sillaBebe == true){
        resultado += 1200 * diasAlquiler;
    }
    return resultado;
    
}


console.log("Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días "+
"utilizados,sin silla de bebé, el monto total a pagar es de $"+calcularMonto("Compacto",3,false));