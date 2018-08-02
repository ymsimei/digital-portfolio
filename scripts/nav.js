addRemoveOpaqueClass()
$(window).scroll(function () {
  addRemoveOpaqueClass()
});

function checkScroll() {
  let scrollPosition = $(this).scrollTop();
  return scrollPosition;
}

function addRemoveOpaqueClass() {
  if (checkScroll() > 10) {
   $('nav').addClass('opaque');
  }
  if (checkScroll() < 10) {
   $('nav').removeClass('opaque');
  }
}
