(function( $ ){
  $.fn.cssHolo = function( options ) {
  
	var mouseX, mouseY, moveX, moveY;
	var base = this;
	var settings = { 
		'skew': 10,
		'centerX': $(document.body).width()/2,
		'centerY': $(document.body).height()/2, 
		'invert': true,
		'container': document
	}
	if (options) {
		$.extend(settings, options);
	}

	var holoObjects = [];
	var loop = 0;
		
	base.each( function() {
		var zIndex = (!$(this).css('z-index') || $(this).css('z-index') == 'auto') ? 10 : $(this).css('z-index');
		//if no z-index assigned, it gets a default of 10
		
		holoObjects[loop++] = {
			'initX': parseInt( $(this).css('left') ),
			'initY': parseInt( $(this).css('top') ),
			'level': zIndex/10
		}
	});
	
	$(settings.container).mousemove(function(e){
	    mouseX = e.pageX;
		mouseY = e.pageY;
	 	moveX = (mouseX - parseInt(settings.centerX)) * settings.skew/300;
		moveY = (mouseY - parseInt(settings.centerY)) * settings.skew/300; 
		
		if (settings.invert == false) { moveX *= -1; moveY *= -1; }
		
		var num = 0;
		return base.each( function() {
			var thisMoveX = moveX * holoObjects[num].level;
			var thisMoveY = moveY * holoObjects[num].level;				
			$(this).css( { 'left': holoObjects[num].initX - thisMoveX, 'top': holoObjects[num].initY - thisMoveY } );
			num++;
		});
	 });
  };
})( jQuery );