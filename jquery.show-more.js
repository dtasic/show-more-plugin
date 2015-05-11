(function ( $ ) {
    
    /*
    Plugin: ShowMore
    author: dtasic@gmail.com
    */
    
    $.fn.showMore = function (options) {
        
        "use strict";
        
        this.each(function(){
            
            var element = $(this);
            var auto = parseInt(element.innerHeight())/2;
            var settings = $.extend({
                minheight: auto,
                buttontxtmore: "show more",
                buttontxtless: "show less",
                buttoncss: "showmore-button",
                animationspeed: auto       
            }, options );        
            
            var fullheight = element.innerHeight();
          
            element.wrap( "<div id='showmore-"+element.attr('id')+"' data-showmore style='max-width:"+element.css('width')+";'></div>" );
            element.css('min-height', settings.minheight).css('max-height', settings.minheight).css('overflow', 'hidden');
            
            var showMoreButton = $("<div />", {
                id: "showmore-button-"+element.attr('id'),
                "class": settings.buttoncss,
                click: function() {
                    
                    if (element.css('max-height') != 'none') {
                        element.css('height', settings.minheight).css('max-height', '').animate({height:fullheight}, settings.animationspeed, function () { showMoreButton.text(settings.buttontxtless); });
                    } else {
                        element.animate({height:settings.minheight}, settings.animationspeed, function () { showMoreButton.text(settings.buttontxtmore); element.css('max-height', settings.minheight); });
                    }
                },
                text: settings.buttontxtmore
            });
            
            element.after(showMoreButton);
            
        });
        
        return this;
        
    };

}(jQuery));
