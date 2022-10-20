const openMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop active';
  document.querySelector('aside').className = 'active';
};
const closeMenu = () => {
  document.querySelector('.backdrop').className = 'backdrop';
  document.querySelector('aside').className = '';
};
document.getElementById('menuBtn').addEventListener('click', (e) => {
  // we dont trigger the link, re-direction
  e.preventDefault();
  openMenu();
});
document.querySelector('.close').addEventListener('click', () => {
  closeMenu();
});
document.querySelector('.backdrop').addEventListener('click', () => {
  closeMenu();
});
