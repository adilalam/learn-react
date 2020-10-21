// window.addEventListener('scroll', this.handleScroll, false);

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll, false);
//   }

//   handleScroll = () => {
//     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
//     const body = document.body;
//     const html = document.documentElement;
//     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//     const windowBottom = windowHeight + window.pageYOffset;
//     if (windowBottom >= docHeight) {
//       // call an api
//       console.log('bottom reached')
//       
//     }
//     // else {
//     //   console.log('not at bottom')
//     // }
// }