(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 7600) ? 1 :
           (window.innerWidth < 15600) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $(document).ready(function(){	
    $('.flexslider-home').flexslider({
      animation: "slide",
      easing: "swing",
      direction: "vertical",
      animationSpeed: 1200,
      slideshowSpeed: 2800,
      controlNav: false,
      directionNav: false,
      pauseOnHover: false,
      touch: false,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
  
    });
  });
  
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());

