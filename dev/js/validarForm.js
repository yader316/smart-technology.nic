$('document').ready(function()
{    
   // name validation
    var nameregex = /^[a-zA-Z ]+$/;
   
   $.validator.addMethod("validname", function( value, element ) {
       return this.optional( element ) || nameregex.test( value );
   }); 
   
   // valid email pattern
   var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
   $.validator.addMethod("validemail", function( value, element ) {
       return this.optional( element ) || eregex.test( value );
   });
   
   $("#contactForm").validate({
     
    rules:
    {
      name: {
      required: true,
      validname: true,
      minlength: 4
      },
      email: {
      required: true,
      validemail: true
      },
      phone: {
      required: true,
      minlength: 8
      },
      message: {
        required: true,
        minlength: 4
      },
    },
    messages:
    {
      name: {
        required: "Por favor introduzca su nombre",
        validname: "El nombre debe contener solo alfabetos y espacio",
        minlength: "Tu nombre es demasiado corto"
       },
      email: {
        required: "Por favor, introduzca la dirección de correo electrónico",
        validemail: "Ingrese una dirección de correo electrónico válida"
      },
      phone:{
        required: "Por favor intoruzca su numero de telefono",
        minlength: "El numero telefono debe contener minimo 8 digitos"
      },
      message:{
        required: "Por favor intoruzca un mensaje",
        minlength: "El mensaje debe de ser mayor que 4 caracteres"
      },
    },
     errorPlacement : function(error, element) {
     $(element).closest('.form-group').find('.help-block').html(error.html());
     },
     highlight : function(element) {
     $(element).closest('.form-control').removeClass('has-success').addClass('has-error');
     },
     unhighlight: function(element, errorClass, validClass) {
     $(element).closest('.form-control').removeClass('has-error').addClass('has-success');
     $(element).closest('.form-group').find('.help-block').html('');
     },
     
     submitHandler: function(form) {
      form.submit();
      alert('gracias por escribirnos');
    }
  }); 
})