let totalAPagar = (tipoHamburguesa, jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla)=>{
    let precioBase = 0;
    switch(tipoHamburguesa){
        case "carne":
            precioBase = 1800;
            break;
        case "pollo":
            precioBase = 1500;
            break;
        case "vegetariana":
            precioBase = 1200;
            break;
    }
    jamon == true ? precioBase += 30 : precioBase +=0;
    queso == true ? precioBase += 25 : precioBase +=0;
    salsaTomate == true ? precioBase += 5 : precioBase +=0;
    mayonesa == true ? precioBase += 5 : precioBase +=0;
    mostaza == true ? precioBase += 5 : precioBase +=0;
    tomate == true ? precioBase += 15 : precioBase +=0;
    lechuga == true ? precioBase += 10 : precioBase +=0;
    cebolla == true ? precioBase += 10 : precioBase +=0;

    return precioBase;
}

let mensaje = (nombre,apellido,tipoHamburguesa, jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla,callback)=>{
    return "Estimado " +nombre+" "+apellido+", el monto total a pagar es de: $"+totalAPagar(tipoHamburguesa, jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla);
}

console.log(mensaje("Daniel","Fuentes","carne",true,true,true,true,true,true,true,true));