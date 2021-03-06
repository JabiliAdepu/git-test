$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $('#loginModalBtn').click(function(){
       $('#loginModal').modal('show');
    });
    
    $('#reserveModalBtn').click(function(){
        $('#reserveModal').modal('show');
    });

    $('#lxbtn').click(function(){
        modalClose('#loginModal');
    });
    $('#lcbtn').click(function(){
        modalClose('#loginModal');
    });
    $('#rxbtn').click(function(){
        modalClose('#reserveModal');
    });
    $('#rcbtn').click(function(){
        modalClose('#reserveModal');
    });

});
function modalClose(modalname){
    if(typeof(modalname) === 'string')
        $(modalname).modal('hide');
}