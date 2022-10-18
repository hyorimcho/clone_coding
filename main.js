// // new Swiper(선택자, 옵션)
// new Swiper(".main_image .swiper-container", {
//   loop: true,
//   slidesPerView: 1, //한번에 보여줄 슬라이드 개수
//   pagination: {
//     el: ".main_image .swiper-pagination", //페이지 번호 요소 선택자
//     clickable: true, //사용자의 페이지 번호 요소 제어 선택자
//   },
//   navigation: {
//     prevEl: ".main_image .swiper-prev",
//     nextEl: ".main_image .swiper-next",
//   },
// });

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const moveTopBtn = document.querySelector('.move_top');
const btnVisible = () => {
  // if (window.scrollY > 500) {
  //   moveTopBtn.style.display = 'block';
  // } else {
  //   moveTopBtn.style.display = 'none';
  // }
  window.scrollY > 500
    ? (moveTopBtn.style.display = 'block')
    : (moveTopBtn.style.display = 'none');
};
document.addEventListener('scroll', btnVisible);
const moveTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
moveTopBtn.addEventListener('click', moveTop);
