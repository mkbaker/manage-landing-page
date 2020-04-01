console.log('js');


$('document').ready(onReady);

let carousel; 

function onReady() {
    console.log('hello jquery');
    carousel = $(".testimonial-list");
    carousel.itemslide({
      disable_autowidth: true
    });
    
}
// var carousel;
// $(document).ready(function() {
//   carousel = $(".card");
//   carousel.itemslide();
// });
