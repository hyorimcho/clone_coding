const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

/* search 창을 누르면 통합검색이라는 문구가 뜬다 */
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

/*focus 되었을 때 생긴 통합검색을 focus 아닐 시에 해제하는 기능*/
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

/*window는 우리가 보고 있는 화면 그 자체, 브라우저 창*/
window.addEventListener('scroll', function(){}
  
)