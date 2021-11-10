$(document).ready(function () {
    console.log('el documento esta listo');


    $("#btn_entrar").click(function () {
        var correos = ["carlitos10beltran@hotmail.com", "cbeltranp1@ucentral.edu.co", "dibujante1@proyecformas.edu.co",];
        var password = ["madara123", "2164", "proyecformas"];
        var email = $("#usuario").val();
        var contras = $("#contrasena").val();
        if ((email == correos[0]) || (email == correos[1]) || (email == correos[2])) {

            if ((contras == password[0]) || (contras == password[1]) || (contras == password[2])) {
                $("#mensaje_bienvenida").show();
                $("#mensaje_incorrecto").hide();
            }
        }
        else {
            $("#mensaje_incorrecto").show();
            $("#mensaje_bienvenida").hide();

        }
        email = $("#usuario").val("");
         contras = $("#contrasena").val("");



    })
    $("#btn_signup").click(function () {
        var signedup_mails = "carlitos10beltran@hotmail.com";
        var password = "madara123";/* "cbeltranp1@ucentral.edu.co", "dibujante1@proyecformas.com"]*/
        var nombre_completo = $("#fullname").val();
        var crear_correo = $("#crear_correo").val();
        var username = $("#nombre_usuario").val();
        var made_password = $("#crear_contrasena").val();
        if (crear_correo != signedup_mails) {
            $("#registro_success").show();
            $("#usuario_registrado").hide();
        }
        else {
            $("#usuario_registrado").show();
            $("#registro_success").hide();
        }
        nombre_completo = $("#fullname").val("");
        crear_correo = $("#crear_correo").val("");
         username = $("#nombre_usuario").val("");
         made_password = $("#crear_contrasena").val("");
        
         $("#btn_registro").click(function () {
        
            var p=$("#nameusuario").val();
            if (p.lenght<1) {
                
            }
            $("#dato_faltante").show();
            $("#dato_faltante").show();
    
            
            
        })
    

    })


    $("#subseccion_login").hide();
    $("#subseccion_registro").hide();

    $("#btn_login").click(function () {
        $("#subseccion_login").show();
        $("#subseccion_registro").hide();
    })

    $("#btn_registro").click(function () {
        $("#subseccion_registro").show();
        $("#subseccion_login").hide();
    })



   

})










