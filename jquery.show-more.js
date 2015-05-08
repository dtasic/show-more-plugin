(function ( $ ) {
		
    $.fn.showMore = function (options) {
        
        "use strict";
        
        this.each(function(){
            
            var $this = $(this);
            var auto = parseInt($this.innerHeight())/2;
            var settings = $.extend({
                minheight: auto,
                buttontxtmore: "show more",
                buttontxtless: "show less",
                buttoncss: "showmore-button",
                animationspeed: auto       
            }, options );        
            
            var fullheight = $this.innerHeight();
          
            $this.wrap( "<div id='showmore-"+$this.attr('id')+"' data-showmore style='max-width:"+$this.css('width')+";'></div>" );
            $this.css('min-height', settings.minheight).css('max-height', settings.minheight).css('overflow', 'hidden');
            
            var showMoreButton = $("<div />", {
                id: "showmore-button-"+$this.attr('id'),
                "class": settings.buttoncss,
                click: function() {
                    
                    if ($this.css('max-height') != 'none') {
                        $this.css('height', settings.minheight).css('max-height', '').animate({height:fullheight}, settings.animationspeed, function () { showMoreButton.text(settings.buttontxtless); });
                    } else {
                        $this.animate({height:settings.minheight}, settings.animationspeed, function () { showMoreButton.text(settings.buttontxtmore); $this.css('max-height', settings.minheight); });
                    }
                },
                text: settings.buttontxtmore
            });
            
            $this.after(showMoreButton);
            
        });
        
        return this;
        
    };

}(jQuery));
