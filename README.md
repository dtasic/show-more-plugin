# ShowMore.js #

Small Jquery plugin to add Show More button to any div. 

### What is this repository for? ###

* Small Jquery plugin to add Show More button to any div.
* 1.0

### How do I get set up? ###

* add jquery.show-more.js to your page
* usage: $("#your-element").showmore();
* Dependencies: jquery 1.6.4 or higher. CSS class named 'showmore-button' or include showmore-default.css

### Properties ###

* minheight (by default it is half of original div size)
* buttontxtmore (default: 'show more')
* buttontxtless (default: 'show less')
* buttoncss (default is css class named "showmore-button", or you can add your custom CSS class name)
* animationspeed (by default it is half of original div size converted in ms)

example of options:

```
$("#your-element").showmore({
  minheight: 150, // measured in px
  buttontxtmore: 'show me more content',
  buttontxtless: 'show me less content',
  buttoncss: 'my-button-css',
  animationspeed: 1500
});
```

### Demo ###

https://jsfiddle.net/8eyevhmb/25/

### Who do I talk to? ###

* dtasic@gmail.com