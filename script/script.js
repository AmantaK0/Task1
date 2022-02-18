$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $("#navigation").css("background" , "#000");
        }

        else{
            $("#navigation").css("background" , "#fff");  	
        }
  });
});