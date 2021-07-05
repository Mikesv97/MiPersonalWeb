//GLOBAL VAR






$(document).ready(function(){

    var width = $(window).width();
    


    if(width <= 992){
        $("#menu-movil-icon").on("click",function(){
            var btn_menu = $("#btn-menu").val();

            if(btn_menu != 0){
                $("#menu").addClass("ocultar");
                $("#btn-menu").val(0);
                
            }else{
                $("#menu").removeClass("ocultar");
                $("#btn-menu").val(1);
                
            }


            
        });
    }
});

