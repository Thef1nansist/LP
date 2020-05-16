
$(document).ready(function () {
    //Задания к 8 лабе
    $("#firstTask").click(function () {
        $("#firstTask").css("color" , "red");
    } )

    $("#secondTask").click(function () {
        $("#secondTask").css("font-size" , "30px");
    })

    $("#pictr").click(function () {
        $("[src='picture.jpg']").attr("src" , "picture2.jpg");
    })

    $("#textChImg").click(function () {
        $("#textChImg").html('<img src ="picture.jpg" width = "100px" height = "100px"/>');
    })

    $("#pictr").mouseover(function () {
        $("#pictr").attr("width", 200).attr("height", 200);
    })
    $("#pictr").mouseout(function () {
        $("#pictr").attr("width", 300).attr("height", 300);
    })

    $("p").dblclick(function(){
        $("p").css("border","solid 2px");
    })

    $( init );
    function init() {
      $('#makeMeDraggable').draggable();
    }

    $("#thr").ready(function(){
        $("#but1").click(function(){
        $("#thr").animate({marginLeft:100},1000);
        $("#thr").animate({marginLeft:120},1000);
        $("#thr").animate({marginLeft:140},1000);
        $("#thr").animate({marginLeft:160},1000);
        $("#thr").animate({marginLeft:180},1000);
        });
       });
    
       $("#thr").ready(function(){
        $("#but2").click(function(){
        $("#thr").animate({marginLeft:100},700);
        $("#thr").animate({marginTop:140},700);
        $("#thr").animate({marginLeft:150,marginTop:-3},700);
        $("#thr").animate({marginLeft:200,marginTop:140},700); 
        $("#thr").animate({marginLeft:250,marginTop:-3},700);
        $("#thr").animate({marginLeft:0},1000);
        });
       });
       
    
        
})