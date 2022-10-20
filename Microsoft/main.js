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

const thisYear = document.querySelector('.this-year');
//new Date()의 객체의 getFullYear()를 활용해 동적으로 가져온 년도 데이터를 thisYear에 추가한다.
thisYear.textContent = new Date().getFullYear();
