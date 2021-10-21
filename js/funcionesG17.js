function consultar() {
    $.ajax (  {

                    url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                    type         : 'GET',
                    dataType     : 'json',
                    // Version 1
                    // success      :  function(json){
                    //                                     $("#idDivConsulta").empty();
                    //                                     for (i=0; i < json.items.length; i++){
                    //                                         $("#idDivConsulta").append(json.items[i].nombre + " - ");
                    //                                     }

                    //                              },

                    success      :  function(json){

                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption>Tabla de Planetas</caption>");
                                        $("#idDivConsulta").append("<tr><th>Elemento</th><th>Descripción</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].codigo + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].nombre + "</td>");
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");

                                        console.log(json)
                                    },

                    error       :   function(xhr,status){
                                                    alert('Operacion no satisfactoria,'+ xhr.status );
                                    }


              }
           );

}

function insertar() {

    var planeta;
    planeta = {codigo:300 ,nombre:'MERCURIO'};

    $.ajax (
        {

            url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
            type         : 'POST',
            data         :  planeta,

            success      :  function(response){
                               console.log(response);
                            },
            error        :  function(xhr,status){
                               console.log( xhr);
                            }


        }
    );

}

function borrar() {
    var planeta;

    planeta      = {codigo : 300};
    datosEnvio   = JSON.stringify(planeta);

    $.ajax (
        {

            url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}

function actualizar() {

    planeta      = {codigo : 14, nombre: 'Yxxxxx PLANETA'};
    datosEnvio   = JSON.stringify(planeta);


    $.ajax (
                {

                    url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );

}

function consultarId() {

    var codigo =$("#idCodigo").val();

    $.ajax (
                {

                    url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        $("#idConsulta").empty();
                                        for (i=0; i < json.items.length; i++){
                                            $("#idConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                                        }
                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        console.log(json)
                                    },



                }
            );


}