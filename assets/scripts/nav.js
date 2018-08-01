if ($(this).scrollTop() > 10) {
  $('nav').addClass('mini');
}
if ($(this).scrollTop() < 10) {
  $('nav').removeClass('mini');
}
$(function() {
  $(window).scroll(function () {
   if ($(this).scrollTop() > 10) {
     $('nav').addClass('mini');
   }
   if ($(this).scrollTop() < 10) {
     $('nav').removeClass('mini');
   }
  });
});
