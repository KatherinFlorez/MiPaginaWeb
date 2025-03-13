let suma
let resta
let multiplicacion
let division
    
    function realizarOperacion(num1,num2,operacion) {
    if(operacion === "suma"){
        suma = num1 + num2
        return suma

    }else if(operacion === "resta"){
        resta = num1 - num2
        return resta

    }else if(operacion === "multiplicacion"){
        multiplicacion = num1 * num2
        return multiplicacion

    }else if(operacion === "division"){
        if(num2 === 0){
            return division = "NO EXISTE"
        }else{
            division = num1 / num2
            return division
        }
    }else{
        console.log("Error!!! Esa opción no existe")
    }   
    } 

    let accion = prompt("Ingrese la operacion que desea realizar o escriba 'salir' para terminar el programa")

    while(accion !== "salir"){
        let x = parseFloat(prompt("Ingrese el PRIMER número"))
        let y = parseFloat(prompt("Ingrese el SEGUNDO número"))
        resultado = realizarOperacion(x,y,accion)  //Llamado de la funcion
        console.log("El resultado de la ",accion," de ",x," y ",y," es -> ",resultado)
        accion = prompt("Desea realizar otra operacion o Escriba 'salir' para terminar el programa")
    }
    console.log("El programa se detuvo satisfactoriamente. Hasta Pronto!!")