// document.lastScrollPosition = 0;
// document.lastCentered = 0;
// document.onWayTo = null;

// document.addEventListener('scroll', () => {
//   //window.pageY 현재의 스크롤 위치,
//   const direction =
//     window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up'; //100px - 50px = 50 > 0 , 그럼 우리는 스크롤을 내림
//   const sections = [...document.querySelectorAll('section')];

//   if (document.onWayTo === null) {
//     const destIndex =
//       direction === 'up'
//         ? document.lastCentered - 1
//         : document.lastCentered + 1;

//     if (destIndex >= 0 && destIndex < sections.length) {
//       document.onWayTo = destIndex;

//       window.scroll(0, sections[destIndex].offsetTop);
//     }
//   }

//   sections.forEach((section, index) => {
//     if (window.pageYOffset === section.offsetTop) {
//       document.lastCentered = index;
//       section.className = 'active';
//       if (document.onWayTo === index) {
//         document.onWayTo = null;
//       }
//     } else {
//       section.className = '';
//     }
//   });
//   //스크롤을 할 때마다 현재의 위치를 lastScrollPosition에 저장
//   document.lastScrollPosition = window.pageYOffset;
// });

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
  const direction =
    window.scrollY - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = document.querySelectorAll('section');

  if (document.onWayTo === null) {
    const destI =
      direction === 'up'
        ? document.lastCentered - 1
        : document.lastCentered + 1;
    if (destI >= 0 && destI < sections.length) {
      document.onWayTo = destI;
      console.log(document.onWayTo);
      window.scroll(0, sections[destI].offsetTop);
    }
  }

  sections.forEach((section, i) => {
    if (window.scrollY === section.offsetTop) {
      document.lastCentered = i;
      section.className = 'active';

      if (document.onWayTo === i) {
        document.onWayTo = null;
      }
    } else {
      section.className = '';
    }
  });
  document.lastScrollPosition = window.scrollY;
});
