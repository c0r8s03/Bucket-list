("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px'});

  
  $(function(){
    
    var myimg1 = "<img src='images/Nerpa.jpg'>";
    var myimg = "<img src='images/Omul.jpg'>";
    
      $('.icon').popover({content:myimg, html:'true', placement:'left'}); 
      $('#icon1').popover({
          content:myimg1,
          html:'true',
          placement:'left'}); 
    
  });
  
