
 var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".swiperSmall", {
    navigation: {
      nextEl: ".slide-button-next",
      prevEl: ".slide-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 44,
  });