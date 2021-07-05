//GLOBAL VAR






$(document).ready(function(){
    var width = $(window).width();   
    
    if(width <= 100){
        $("#event-menu").hide();
        var accion = $("#btn-menu").val();

        $("#btn-menu").on("click", function(){
            if(accion=="desplegar"){
                $("#event-menu").slideDown(250, function(){
                    accion = "contraer";
                });
            }else{
                $("#event-menu").slideUp(250, function(){
                    accion = "desplegar";
                });
            }

        }); 
    }
});

