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
        input_telefono:{
            required:true,
            digits:true,
            rangelength: [9, 9]
        }
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
            rangelength: "Excede el limite de caracteres (30)"
          },
          input_telefono:{
              required: "Ingresa un telefono",
              digits:"Solo Numeros",
              rangelength: "9 digitos Porfavor"

          }
      },

    submitHandler: function(form) {
      form.submit();
      alert("Registro Correcto")
    }
   });

   jQuery.validator.addMethod("letras", function(value, element) {
    return /[a-z," ",A-Z]/.test(value);
  }, "Solo letras");

   jQuery.validator.addMethod("espacios", function(value, element) {
    return /[" "]/.test(value);
  }, "Sin espacios");
