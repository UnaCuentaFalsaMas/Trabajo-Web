$("#formulario").validate({

    rules: {
        nombre: {
          required: true,
          rangelength: [1, 30],
          letras: true,
        },
        apellido: {
            required: true,
            rangelength: [1, 30],
            letras: true,
        },
        usuario: {
            required: true,
            espacios: false,
            rangelength: [15, 30],
            
        },
        mail: {
          required: true,
          email: true
        },
        password: {
          required: true,
          alphanumeric: true
        },
        password2:{
          required: true,
          equalTo: "#password"
        },
        edad:{
          required: true,
          min:1
        },
        altura:{
          required: true,
          min: 50
        },
        peso:{
          required: true,
          min: 2
        },

      },
      messages:{
          nombre: {
              required: "Campo Vacio",
              rangelength: "Excede el limite de caracteres (30)"
          },
          apellido: {
            required: "Campo Vacio",
            rangelength: "Excede el limite de caracteres (30)"
          },
          usuario: {
            required: "Campo Vacio",
            rangelength: "Caracteres entre 15 y 30 Porfavor!"
          },
          mail: {
            required: "Campo Vacio",
            email: "Email Invalido!"
          },
          password: {
            required: "Campo Vacio",
            
          },
          password2:{
            required: "Campo Vacio",
            equalTo: "Las contraseñas no son iguales"
          },
          edad:{
            required: "Campo Vacio",
            min: "Ingrese una edad valida!"
          },
          altura:{
            required: "Campo Vacio",
            min: "Ingrese una altura valida!"
          },
          peso:{
            required: "Campo Vacio",
            min: "Ingrese un peso en KG valido!"
          },
      },

    submitHandler: function(form) {
      form.submit();
      alert("Registro Correcto")
    }
   });

   jQuery.validator.addMethod("letras", function(value, element) {
    return /^[a-zA-Z\'\-\sáéíóúñÑÁÉÍÓÚüÜ]+$/.test(value);
  }, "Solo letras");

   jQuery.validator.addMethod("espacios", function(value, element) {
    return /[" "]/.test(value);
  }, "Sin espacios");

  jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return /^\w+$/i.test(value);
}, "Letras, numeros, y simbolos solamente");