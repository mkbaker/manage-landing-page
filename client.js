console.log('js');


$('document').ready(onReady);

let carousel; 

function onReady() {
    console.log('hello jquery');
    carousel = $(".testimonial-card");
    carousel.itemslide();
}
// var carousel;
// $(document).ready(function() {
//   carousel = $(".card");
//   carousel.itemslide();
// });
