$(document).ready(function(){	
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 800) ? 1 :
           (window.innerWidth < 1300) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $(document).ready(function(){	
    $('.flexslider-reviews').flexslider({
      animation: "slide",
      animationLoop: false,
      easing: "swing",
      animationSpeed: 750,
      slideshowSpeed: 4500,
      controlNav: false,
      slideshow: false,
      itemWidth: 360,
      itemMargin: 30,
      minItems: getGridSize(), // use function to pull in initial value
			maxItems: getGridSize(), // use function to pull in initial value
			controlsContainer: $(".custom-controls-container-results"),
      customDirectionNav: $(".custom-navigation-results a")
    });
  });
  
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
  
}());

