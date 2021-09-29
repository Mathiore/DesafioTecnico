function saqueCaixaEletronico(saque){
    cedula = 100
    contadorcedula = 0
    while (saque >= 0) {
        if (saque >= cedula){
            saque = saque - cedula
            contadorcedula += 1
        } else{
            if (contadorcedula > 0){
                console.log(contadorcedula, `Cédula de ${cedula} reais`)
            }
            if(cedula == 100){
                cedula = 50
            } else if(cedula == 50){
                cedula = 10
            } else if(cedula == 10){
                cedula = 5
            } else if(cedula == 5){
                cedula = 1
            }
            contadorcedula = 0
            if (saque == 0){
                break
            }
        }
    }
}

