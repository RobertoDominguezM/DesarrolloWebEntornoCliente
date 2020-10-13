function funcion(){
    var salir = 'n'
    var num = []
    while(salir == 'n'){
        num = prompt("Introduce notas separadas por comas")
        if(numero != null){
            num.push(parseInt(num))
        }
        var seguir = confirm('desea ingresar más numeros')
        if(seguir == false){
            salir = 'y'
        }
        console.log(num)
    }
    //var num = prompt("Introduce notas separadas por comas");
}