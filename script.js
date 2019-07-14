function checkScroll(){
    var startY = $('.navbar').height() * 0.5; 

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}