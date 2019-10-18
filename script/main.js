// stop fucking right click in my site 

jQuery(document).ready(function(){
    jQuery(function() {
          jQuery(this).bind("contextmenu", function(event) {
              event.preventDefault();
          });
      });
      $("img").mousedown(function(e){
        e.preventDefault()
   });
  });