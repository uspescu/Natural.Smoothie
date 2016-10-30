var main = function(){
  
  $(window).scroll(function(){
    $(".title").css("opacity", 1.5 -      $(window).scrollTop() / 250);
 $(".col-md-12").css("opacity", 1 -      $(window).scrollTop() / 250);   
 $(".first-text").css("opacity", 3 -      $(window).scrollTop() / 335);
  });
  
  
  $('.menu-btn').click(function() {
  $('.hidden-blend').hide();
  $('.hidden-more').hide();
  $('.hidden-menu').toggle(200);
  });
  
  $('.blend-btn').click(function() {
  $('.hidden-menu').hide();
  $('.hidden-more').hide();
  $('.hidden-blend').toggle(200); 
    
  });
  
  $('.more-btn').click(function() {
  $('.hidden-menu').hide();
  $('.hidden-blend').hide();
  $('.hidden-more').toggle(200);
  
    
  });
  
  $('.fa, .fa-bars').click(function(){
                           
 });
  /*OPEN MENU*/
  $('.fa, .fa-bars').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 600);

    $('body').animate({
      left: "413px"
    }, 600);
  });

  /* PUSH BACK */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-413px"
    }, 600);

    $('body').animate({
      left: "0px"
    }, 600);
  });

$('.organic-button').click(function(){

  $('.close-button').show(600)
  $('.hidden-products-organic').slideDown(600)
  $('.hidden-products-classic').slideUp(800)
  $('.hidden-products-crush').slideUp(800)
})


$('.close-button').click(function(){
  $('.close-button').hide(400)
  $('.hidden-products-organic').slideUp(600)
  })



$('.classic-button').click(function(){

  $('.close-button').show(600)
  $('.hidden-products-classic').slideDown(600)
  $('.hidden-products-crush').slideUp(800)
  $('.hidden-products-organic').slideUp(800)  
})


$('.close-button').click(function(){
  $('.close-button').hide(400)
  $('.hidden-products-classic').slideUp(600)
  })



$('.crushed-button').click(function(){

  $('.close-button').show(600)
  $('.hidden-products-crush').slideDown(600)
  $('.hidden-products-classic').slideUp(200)
  $('.hidden-products-organic').slideUp(200) 
})

$('.close-button').click(function(){
  $('.close-button').hide(400)
  $('.hidden-products-crush').slideUp(600)
  })


$('.buttonf').click(function(){
  $('.img-2').show()
})



};

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

  
  
});

var availFlowers01 = document.getElementsByClassName('left-list')[0].getElementsByTagName("li")[0];

  availFlowers01.addEventListener("mouseover", function(event) {
    if ((event.relatedTarget, availFlowers01))
      (document.getElementsByClassName("responsive")[0].src = "http://3148_balajirajasthan.limetray.com/assets/user_images/content_images/original/Ab2+1459237077.jpg") ;
  });

var availFlowers02 = document.getElementsByClassName('left-list')[0].getElementsByTagName("li")[1];

  availFlowers02.addEventListener("mouseover", function(event) {
    if ((event.relatedTarget, availFlowers02))
      (document.getElementsByClassName("responsive")[0].src = "http://3148_balajirajasthan.limetray.com/assets/user_images/content_images/original/Ab3+1459237060.jpg") ;
  });
  
var  availFlowersOut = document.getElementsByClassName('left-list')[0] || document.getElementsByClassName('right-list')[0]
  
  availFlowersOut.addEventListener("mouseout", function(event) {
    if ((event.relatedTarget, availFlowersOut))
      (document.getElementsByClassName("responsive")[0].src = "https://s22.postimg.org/60v2brjgx/oie_transparent_1.png") ;
  });





$(document).ready(main);