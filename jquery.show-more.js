(function ( $ ) {
		
    $.fn.showMore = function () {

        var $buttonmore = 'pokaži više';
        var $buttonless = 'pokaži manje';
        var $this = $(this);

        // build show-more button 
        var $showMoreButton = $("<div />", {
            id: "more-less-button",
            "class": "more-less-button",
            click: function() {

                $this = $(this);

                var fullheight = $this.prev().children().css('height');
                var animationspeed = $this.prev().children().css('height');
                var compressedheight = $this.prev().css('min-height');

                if ($this.text() == $buttonmore){
                    $this.prev().css('height', compressedheight).toggleClass('nomaxheight');
                    $this.prev().animate({height:fullheight}, animationspeed, function () {
                        $this.text($buttonless);
                    });
                } else {
                    $this.prev().animate({height:compressedheight}, animationspeed, function () { 
                        $this.prev().toggleClass('nomaxheight');
                        $this.text($buttonmore); 
                    });
                }

            },
            text: $buttonmore
        });

        // add button after content DIV inside .show-more wrapper. proverava posebno za svaki show-more da li ima cekiranih polja. Ako ima postavlja visinu na maksimalnu (ignorise button div). Ako je content prazan, skida .show-more i dodaje poruku u content;

        $this.append($showMoreButton);

        if ($this.children().children().height() < parseInt($this.children().css('min-height'))) {
            $this.children().children().css('min-height', '0');
            $this.children().remove("#more-less-button");
            $this.removeClass('show-more');
        };
        if ($this.children().children().text().trim().length == 0) { 
            $this.removeClass('show-more').html('no content'); 
        };
        if ($this.find(":checkbox:checked").length !== 0) { 
            $this.children().not("[class='more-less-button']").css('height', $this.children().children().height()).toggleClass('nomaxheight');
            $this.find(".more-less-button").text($buttonless);
        };

    };

}(jQuery));