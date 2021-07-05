//GLOBAL VAR
function ocultar_mostrar(){
    var btn_menu = $("#btn-menu").val();

    if(btn_menu != 0){
        $("#menu").addClass("ocultar");
        $("#btn-menu").val(0);
        
    }else{
        $("#menu").removeClass("ocultar");
        $("#btn-menu").val(1);
        
    }
}

$(document).ready(function(){

    var width = $(window).width();
    $("#section-aboutme").hide();

    if(width <= 992){
        $("#menu-movil-icon").on("click",function(){
            
            ocultar_mostrar();
            
        });
    }

    $("#home").on("click",function(){
        $("#section-aboutme").hide();
        $("#section-home").show(300);
            ocultar_mostrar();
    });

    $("#aboutme").on("click",function(){
        $("#section-home").hide();
        $("#section-aboutme").show(300);
        ocultar_mostrar();
    });
});

