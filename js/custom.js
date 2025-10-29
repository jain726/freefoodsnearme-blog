document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelector('.swiper');
  if (el) {
    new Swiper('.swiper', {
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      autoplay: { delay: 3000 },
    });
  }
});