$(document).ready(function(){
  $("#sticked-navigation").sticky({topSpacing:120});
  $(".doc-container").scrollNav({
    headlineText: 'Table of Contents',
    insertTarget: ".doc-navigation"
  })

  $(window).on('scroll', function(e){
    if($(window).scrollTop() > 100){
      $(".navbar").addClass("small");
    } else {
      $(".navbar").removeClass("small");
    }
  })
});
