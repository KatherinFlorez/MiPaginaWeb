let suma
        let resta
        let multiplicacion
        let division
    
        //Declaración de función para realizar operaciones
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
                return division = "INEXISTENTE"
            }else{
                division = num1 / num2
                return division
            }
        }else{
            return "ERRONEA"
        } 
        } 

        let accion = prompt("Ingrese la operacion que desea realizar o escriba 'salir' para terminar el programa")

        while(accion !== "salir"){
            let x = parseFloat(prompt("Ingrese el PRIMER número"))
            let y = parseFloat(prompt("Ingrese el SEGUNDO número"))
            resultado = realizarOperacion(x,y,accion)
            console.log("El resultado de la operación",accion,"de",x,"y",y,"es -> ",resultado)
            accion = prompt("Diga la siguiente operación a realizar o escriba 'salir' para terminar el programa") 
        }
        console.log("El programa se detuvo satisfactoriamente. Hasta Pronto!!")