//GLOBAL VAR
var mouseleave1= true;
var mouseleave2= true;
var click1=0;

const pagina = new fullpage('#fullpage',{
    
});

//DOCUMENT READY JQUERY
$(document).ready(function(){
    //OCULTANDO DIVS TEXTO SOBRE MI
    $("#estudios").hide();
    $("#objpro").hide();

//ABIENDO CV EN PESTAÑA NUEVA BTN VER CURRICULUM
    $("#btn-header").on("click",function(){
        $("#btn-header").attr("href","CV/CVSistemas.pdf");
        $("#btn-header").attr("download","CVSistemasDouglasMéndez");
    });//FINAL BTN VER CURRICULUM


///////////////////////////////////////////////////////////////////////////////////////////////////
/*EVENTOS MOUSE LEAVE DE BOTONES SOBRE MI*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ACCEDIENDO MEDIANTE CLASE
$(".btn-acord").on("mouseleave",function(){

    $("#btn-estudios").css("transition","0.6s");
    $("#btn-objpro").css("transition","0.6s");

   });//FIN BTN MOUSE LEAVE BOTONES SOBRE MI


//////////////////////////////////////////////////////////////////////////////////////////////////////
/*EVENTOS CLICK BOTONES*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//CLICK BOTON SOBRE MI ----> MIS ESTUDIOS
$("#btn-estudios").on("click",function(e){
    
    e.stopPropagation();
    var icon= $("#img-btn-icon").attr("src");
    var icon2= $("#img-btn-icon-2").attr("src");

    if(icon =="IMG/expandir-icon.png"){
        $("#estudios").slideDown(250,function(){
            $("#img-btn-icon").css("transform","rotate(360deg)");
            $("#img-btn-icon").css("transition","1s ease");
            $("#img-btn-icon").attr("src","IMG/contraer-icon.png");
           
            
        });
    }else{
        $("#estudios").slideUp(250,function(){
            $("#img-btn-icon").css("transform","rotate(-360deg)");
            $("#img-btn-icon").css("transition","0.3s ease");
            $("#img-btn-icon").attr("src","IMG/expandir-icon.png");

        });
    }

    if(icon2=="IMG/contraer-icon.png"){
        $("#objpro").slideUp(250,function(){
            $("#img-btn-icon-2").css("transform","rotate(-360deg)");
            $("#img-btn-icon-2").css("transition","0.3s ease");
            $("#img-btn-icon-2").attr("src","IMG/expandir-icon.png");
        });
    }

});//FIN CLICK BOTON SOBRE MI ----> MIS ESTUDIOS

//CLICK BOTON SOBRE MI ----> OBJ PRO
$("#btn-objpro").on("click",function(e){

    e.stopPropagation();

    var icon= $("#img-btn-icon").attr("src");
    var icon2= $("#img-btn-icon-2").attr("src");



    if(icon2 =="IMG/expandir-icon.png"){
        $("#objpro").slideDown(250,function(){
            $("#img-btn-icon-2").css("transform","rotate(360deg)");
            $("#img-btn-icon-2").css("transition","1s ease");
            $("#img-btn-icon-2").attr("src","IMG/contraer-icon.png");
            
        });
    }else{
        $("#objpro").slideUp(250,function(){
            $("#img-btn-icon-2").css("transform","rotate(-360deg)");
            $("#img-btn-icon-2").css("transition","0.3s ease");
            $("#img-btn-icon-2").attr("src","IMG/expandir-icon.png");
        });
    }

    if(icon=="IMG/contraer-icon.png"){
        $("#estudios").slideUp(250,function(){
            $("#img-btn-icon").css("transform","rotate(-360deg)");
            $("#img-btn-icon").css("transition","0.3s ease");
            $("#img-btn-icon").attr("src","IMG/expandir-icon.png");
        });
    }

});//FIN CLICK BOTON SOBRE MI ----> OBJ PRO

//CLICK FUERA DE ALGUN DIV O CONTENEDOR
$("body").click(function(){

    //OCULTANDO DIVS TEXTO SOBRE MI
    $("#objpro").slideUp(250,function(){
        $("#img-btn-icon-2").css("transform","rotate(-360deg)");
        $("#img-btn-icon-2").css("transition","0.3s ease");
        $("#img-btn-icon-2").attr("src","IMG/expandir-icon.png");
    });

    $("#estudios").slideUp(250,function(){
        $("#img-btn-icon").css("transform","rotate(-360deg)");
        $("#img-btn-icon").css("transition","0.3s ease");
        $("#img-btn-icon").attr("src","IMG/expandir-icon.png");
    });
});//CLICK FUERA DE ALGUN DIV O CONTENEDOR

//TABS FUERA DE ALGUN DIV O CONTENEDOR
$("body").on('keydown',  function(e) { 
    var keyCode = e.keyCode || e.which; 
    
    if (keyCode == 9) {

    //OCULTANDO DIVS TEXTO SOBRE MI AL TABS
    $("#objpro").slideUp(250,function(){
        $("#img-btn-icon-2").css("transform","rotate(-360deg)");
        $("#img-btn-icon-2").css("transition","0.3s ease");
        $("#img-btn-icon-2").attr("src","IMG/expandir-icon.png");
    });

    $("#estudios").slideUp(250,function(){
        $("#img-btn-icon").css("transform","rotate(-360deg)");
        $("#img-btn-icon").css("transition","0.3s ease");
        $("#img-btn-icon").attr("src","IMG/expandir-icon.png");
    });

} });//FIN TABS FUERA DE ALGUN DIV O CONTENEDOR


}//FINAL FUNCION MAIN DOCUMENT
);//FINAL DE DOCUMENT READY


