/*===========================
  1) Find Max-height 
 2) For add class increment in each list item 
 3)  For Accordian 
 4) Find Tabs 
 5) For Scroll Top
 6)  For image Slider
7) Make div Clickable
8)

=============================================================== */





//  1) For find max-height
jQuery(function($){
    var mxheight=0;
$('.nav ul').each(function(){
    var h=$(this).height(); 
    if((h>mxheight)){
      mxheight=h;}
    })
$('.nav ul').height(mxheight);

});

// 2) For add class increment in each list item
jQuery(function(){
$('.nav li').addClass(function( index ){
    return "item-" + index;
    })
});
//  3) For Accordian 

jQuery(function(){
             jQuery('.a-accordian h4:first').addClass('current');
             jQuery('.a-accordian .a-description:not(:first)').hide();
 	jQuery('.a-accordian h4').click(function(){
                    if(jQuery(this).next('.a-description').css('display') != 'block'){
                                jQuery('.a-accordian h4').removeClass('current');  
                                jQuery(this).addClass('current');            
	              jQuery('.a-description').slideUp();
	             jQuery(this).next('.a-description').slideDown();
                       }
                });      
});

// 4) For Tabs

jQuery(function(){    
    $('.tab-contents .tab-content:not(:first)').hide();
    $('.tabs li').click(function(event){
        var id=$(event.target).index();
        $('.tabs li.active').removeClass('active');
        $(event.target).addClass('active');
        $('.tab-contents .tab-content').hide().eq(id).slideDown('slow');
    })
    
});

//  5) For Scroll Top

jQuery(function(){    
     $(window).scroll(function(){
        if ($(this).scrollTop() >100) {
          $('a.top-page').fadeIn();} 
       else {$('a.top-page').fadeOut();}
             })
 $("a.top-page").click(function() {
  $("html, body").animate({scrollTop: 0}, "slow");
  return false;
 });
});

// 6)  For image Slider
jQuery(function(){    
var i=0;
var len=$('.slider li').length;
len=len-1;

setInterval(function(){
    if(i==len){
           $('.slider li').eq(i).fadeIn(500);
           i=-1;
      }    
  $('.slider li').fadeOut(500);
     $('.slider li').eq(i+1).fadeIn(500);
    i++;  
}, 2000);


$('.next').click(function(){
      if(i==len){
           $('.slider li').eq(i).fadeIn(500);
           i=-1;
      }     
    $('.slider li').fadeOut(500);
    $('.slider li').eq(i+1).fadeIn(500);
    i++;
})

$('.prev').click(function(){
if(i==-len){
      $('.slider li').eq(i).fadeIn(500);
      i=1;
}
i--;
 $('.slider li').fadeOut(500);
    $('.slider li').eq(i).fadeIn(500);
})


});

// 7) For Make div clickable
jQuery(function(){   
$(".myBox").click(function(){
     window.location=$(this).find("a").attr("href"); 
  return false;
});
});

// 8) For checkbox background
jQuery(function(){   
       $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
            $('.check-wrapper').addClass('active');
            }
           else if($(this).is(":not(:checked)")){
                $('.check-wrapper').removeClass('active');
           }
        });
$('input[type="radio"]').click(function(){
    $('.radio-wrapper').toggleClass('active');
})

// 8) For image Resize


var winWidth=$(window).width();
var nheight= winWidth/1.1;
var n2height= winWidth/1.5;
var n3height= winWidth/2.2;


    if ($(window).width() <=1024) {
       $('.banner img').height(n3height);    
    }     
    if ($(window).width() <768) {
       $('.banner img').height(n2height);    
    } 
     if ($(window).width() <=480) {
       $('.banner img').height(nheight);    
    }

    
$(window).resize(function() {
      if ($(window).width() <=1024) {
       $('.banner img').height(n3height);    
    }     
    if ($(window).width() <768) {
       $('.banner img').height(n2height);    
    } 
     if ($(window).width() <=480) {
       $('.banner img').height(nheight);    
    }
    })
    

$(window).resize(function(){
       if ($(window).width() <=1024) {
     alert(3)  ;
    }     
    if ($(window).width() <768) {
    alert(2)  ;   
    } 
     if ($(window).width() <=480) {
           alert(1)  ;    
    }
});


});



