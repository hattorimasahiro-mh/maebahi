$(function() {
  


    $('.top_img img').fadeIn(2000);
    $('header').delay(2000).fadeIn(2000);
     
    
    
    
    // スクロール⬇️
    
    $('.topp').click(function(){
      $('html, body').animate({
        'scrollTop':0
      
     },'500');
    });

    

    $('header a').click(function(){

      var id = $(this).attr('href');
      var position = $(id).offset().top - 110; 
      console.log(position);           
      $('html, body').animate({            
       'scrollTop': position             
           }, 500);
    });
   
    
  });
