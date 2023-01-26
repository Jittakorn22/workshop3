function onNextButtonClicked() { }

function onPreviousButtonClicked() { }

$(function () {
  showNavigation(arrow_prev, arrow_next);
  animationHandle();
  gameHandle();
});

function animationHandle() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: 10,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  gsap.fromTo($(".text--gold"), 0.6, { opacity: 0, left: -50 }, { opacity: 1, left: 0 });
}
function gameHandle() {
  $(".drag").draggable(
    {
      revert: true,
      cursor: "move",
      containment: "document",
     
    }
  );
  $(".section__box").droppable(
    {
      accept: ".drag",
      drop:$(this),
    }
  );
}
