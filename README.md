# ShowMore.js #

Small Jquery plugin to add Show More button to any div. 

### What is this repository for? ###

* Small Jquery plugin to add Show More button to any div.
* 1.0

### How do I get set up? ###

* add jquery.show-more.js to your page
* usage: $("#your-element").showmore();
* Dependencies: jquery

### Properties ###

* minheight (default: auto - half of original div size)
* buttontxtmore (default: 'show more')
* buttontxtless (default: 'show less')
* buttoncss (default is empty. add your custom CSS class name to style button)
* animationspeed (default: auto - half of original div size converted in ms)

example of options:

$("#your-element").showmore({
  minheight: 150, // measured in px
  buttontxtmore: 'show me more content',
  buttontxtless: 'show me less content',
  buttoncss: 'my-custom-css',
  animationspeed: 1500
});

### Who do I talk to? ###

* dtasic@gmail.com
