export default function Validation(input){
    var altura_min = Number(input.altura_min)
    var altura_max = Number(input.altura_max)
    var peso_min = Number(input.peso_min)
    var peso_max = Number(input.peso_max)
    var años_vida = Number(input.años_vida)
    const errors={}
    if(input.nombre.length<5){
        errors.nombre = "The name must have a minimum of 5 characters."
    }

    if(!input.altura_min || !input.altura_max){
        errors.altura= 'You need to enter the height range.'
    }
    
    if(typeof(altura_min)!=='number' || typeof(altura_max)!=='number'){
        errors.altura = 'The height range must be a number'
    }

    if(altura_min <= 0 || altura_max <= 0 ){
        errors.altura = 'The height must be greater than zero'
    }

    if(!input.peso_min || !input.peso_max){
        errors.peso= 'You need to enter the weight range.'
    }
    
    if(typeof(peso_min)!=='number' || typeof(peso_max)!=='number'){
        errors.peso = 'The weight range must be a number'
    }

    if(peso_min <= 0 || peso_max <= 0 ){
        errors.peso = 'The weight must be greater than zero'
    }

    if(typeof(años_vida)!=='number'){
        errors.añosVida= 'The life span must be a number';
    }

    if(años_vida <= 0){
        errors.añosVida= 'The life span must be greater than zero';
    }

    if(input.temperamento.length == 0){
        errors.temperamento= 'You must to choose at least one temperament'
    }

    return errors;
}