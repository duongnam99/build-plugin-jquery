$(function( $ ) { 
$.fn.inner_float = function(options) { // <=> window.jQuery.prototype.inner_float = function(){options};
      var defaults = {
        top: "10px" 
      }
      
      // overwritten/Merge
      var set = $.extend(true, defaults, options);
      console.log(set);
      // remove text: "px" (replace by a space !!!)
      var distance_child_to_top = set.top.replace('px','');

      //convert string to number
      distance_child_to_top = Number(distance_child_to_top);

      // var state = 'under';
      var child_offset_top = $(this).offset().top;
      // console.log($(this));
      var parent_offset_top = $(this).parent().offset().top;

      var child_width = $(this).width(); // css fix bug: "child" change width when moving     

      var parent_height = $(this).parent().height();

      var child_height = $(this).height();
      // GET A POINT THAT BOTTOM OF CHILD AND PARENT MEET EACH OTHER
      var out = parent_offset_top + parent_height - child_height - distance_child_to_top;
      var child_frozen = parent_height - child_height ; // top of child to top of parent , parent position: relative
      console.log(child_frozen);
      // ASSIGN "this" to "child" variable and put it in window scroll function
      var child = $(this);
      $(window).scroll(function(event) {

        var window_position = $(window).scrollTop() 
        // check to take "child" back to default position
        if(distance_child_to_top <= parent_offset_top){
            if(window_position < (child_offset_top - distance_child_to_top)){
               child.css({
                    'position': '',
                    'top': '',
                    'width': String(child_width)+'px'
                });

            }else if(window_position >= (child_offset_top - distance_child_to_top) && window_position < out){
               child.css({
                    'position': 'fixed',
                    'top': set.top,
                    'width': String(child_width)+'px'
                });
            }
        }else if(distance_child_to_top >= parent_offset_top){
          if(window_position == 0){
              child.css({
                'position': '',
                'top': '',
                'width': String(child_width)+'px'
               });
          }else if(window_position > 0 && window_position < out){
             child.css({
                  'position': 'fixed',
                  'top': set.top,
                  'width': String(child_width)+'px'
              });
           }
        } 

        if(window_position >= out){
            child.parent().css('position','relative');
            child.css({
                'position': 'absolute',
                'top': String(child_frozen) +'px',  
                'width': String(child_width)+'px'
            });
        }

      });
    }
}( jQuery ));

$(function() { 
    
    
    //call 
    $('#almost-show').inner_float({
    	top: "10px"
	});
});