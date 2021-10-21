function consultar() {

    $.ajax (
               {
                        url          : 'http://129.151.117.142:8080/api/planetas',
                        type         : 'GET',
                        dataType     : 'json',
                        success      :  function(json){
                                        
                                            $("#idDivConsulta").empty();
                                            $("#idDivConsulta").append("<table>");
                                            $("#idDivConsulta").append("<caption>Tabla de Planetas</caption>");
                                            $("#idDivConsulta").append("<tr><th>Elemento</th><th>Descripción</th></tr>");
                                            for (i=0; i < json.length; i++){
                                                $("#idDivConsulta").append("<tr>");
                                                $("#idDivConsulta").append("<td>" + json[i].codigoP + "</td>");
                                                $("#idDivConsulta").append("<td>" + json[i].nombreP + "</td>");
                                                $("#idDivConsulta").append("</tr>");
                                            }
                                            $("#idDivConsulta").append("</table>");

                                            console.log(json)
                                        },
                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}


function consultarId() {

    var codigo =$("#idCodigo").val();

    $.ajax (
                {

                    url          : 'http://129.151.117.142:8080/api/planetas/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        
                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption>Tabla de Planetas</caption>");
                                        $("#idDivConsulta").append("<tr><th>Elemento</th><th>Descripción</th></tr>");
                                        for (i=0; i < json.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json[i].codigoP + "</td>");
                                            $("#idDivConsulta").append("<td>" + json[i].nombreP + "</td>");
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");

                                        console.log(json)
                                    },
                    error        :   function(xhr,status){
                                        console.log(xhr)
                                    }


                }
            );


}