$("document").ready(function(){var o=/^[a-zA-Z ]+$/;$.validator.addMethod("validname",function(e,r){return this.optional(r)||o.test(e)});var a=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;$.validator.addMethod("validemail",function(e,r){return this.optional(r)||a.test(e)}),$("#contactForm").validate({rules:{name:{required:!0,validname:!0,minlength:4},email:{required:!0,validemail:!0},phone:{required:!0,minlength:8},message:{required:!0,minlength:4}},messages:{name:{required:"Por favor introduzca su nombre",validname:"El nombre debe contener solo alfabetos y espacio",minlength:"Tu nombre es demasiado corto"},email:{required:"Por favor, introduzca la dirección de correo electrónico",validemail:"Ingrese una dirección de correo electrónico válida"},phone:{required:"Por favor intoruzca su numero de telefono",minlength:"El numero telefono debe contener minimo 8 digitos"},message:{required:"Por favor intoruzca un mensaje",minlength:"El mensaje debe de ser mayor que 4 caracteres"}},errorPlacement:function(e,r){$(r).closest(".form-group").find(".help-block").html(e.html())},highlight:function(e){$(e).closest(".form-control").removeClass("has-success").addClass("has-error")},unhighlight:function(e,r,o){$(e).closest(".form-control").removeClass("has-error").addClass("has-success"),$(e).closest(".form-group").find(".help-block").html("")},submitHandler:function(e){e.submit(),alert("gracias por escribirnos")}})});