
do{
    nota=prompt("ingrese una nota")

    if(Number(nota)<3){

        alert("nota una mierda");
    } else{

        if(Number(nota)<5){

        alert("deficiente");
    } else{  
    if(Number(nota)<6){

        alert("suficiente");

    }else{  
        
        if(Number(nota)<7){

        alert("bien")

    }else{

        if(Number(nota)<9){

        alert("sobresaliente");


    }else{
        
        if(Number(nota)<10){

        alert("muy sobresaliente");

    }

    
    if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
        alert("Introduce un numero valido");
    }
}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);


