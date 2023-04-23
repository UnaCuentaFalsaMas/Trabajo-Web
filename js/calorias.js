//validación

$("#validacion").validate({
    rules: {
        genero:{
            required:true,
        },
        edad:{
            required:true,
            digits:true,
            range: [1, 130]
        },
        altura:{
            required:true,
            digits:true,
            range: [20, 300]
        },
        peso:{
            required:true,
            number:true,
        },
        actividad:{
            required:true,
        }
    },
    messages:{
        genero:{
            required:"Seleccione una opción",
        },
        edad:{
            required: "Ingresa tu edad",
            digits:"Solo puede escribir numeros",
            range: "Debe ser una edad real (1-130 años)"
        },
        altura:{
            required: "Ingresa tu altura (cm)",
            digits:"Solo puede escribir numeros positivos",
            range: "Debe ser una altura real (20-300 cm)"
        },
        peso:{
            required: "Ingresa tu peso (kg)",
            Number:"Solo puede escribir numeros positivos",
        },
        actividad:{
            required:"Seleccione una opción",
        }
    },

    submitHandler: function(form) {
        alert("Cálculo realizado");

        var genero = document.getElementById('genero').value;
        var edad = document.getElementById('edad').value;
        var altura = document.getElementById('altura').value;
        var peso = document.getElementById('peso').value;
        var actividad = document.getElementById('actividad').value;

        if(genero == 'masculino') {
            contCaloriasM(edad, altura, peso, actividad);
        } else {
            contCaloriasF(edad, altura, peso, actividad);
        }
        
        console.log(altura);
        console.log(peso);
        console.log(edad);
        console.log(genero);
        console.log(actividad);
    }
    
});

//cálculo

function contCaloriasM(edad, altura, peso, actividad){
    var calorias = (66+(13.7*peso)+(5*altura)-(6.8*edad))*actividad;
    console.log(calorias);
    document.getElementById('resultado').textContent = calorias;
}

function contCaloriasF(edad, altura, peso, actividad){
    var calorias = (665+(9.6*peso)+(1.8*altura)-(4.7*edad))*actividad;
    console.log(calorias);
    document.getElementById('resultado').textContent = calorias;
}
