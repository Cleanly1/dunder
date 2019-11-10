

// var pageHeight = 0;
// 
// function findHighestNode(nodesList) {
//   for (var i = nodesList.length - 1; i >= 0; i--) {
//     if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
//       var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
//       pageHeight = Math.max(elHeight, pageHeight);
//     }
//     if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
//   }
// }
// 
// findHighestNode(document.documentElement.childNodes);
 
const scrollDown = function(){
  window.scrollBy({
    top: 1000000,
    left: 0,
    behavior: 'smooth'
  });
  
}

const buttonClick0 = function(){
  window.document.getElementsByClassName('orderBox')[0].style.background = '#d8d5d5';
  window.document.getElementsByClassName('orderBox')[1].style.background = '#FFFFFF';
}

const buttonClick1 = function(){
  window.document.getElementsByClassName('orderBox')[1].style.background = '#d8d5d5';
  window.document.getElementsByClassName('orderBox')[0].style.background = '#FFFFFF';
}

const displayScroll = function() {
  if (scrollY > 200) {
    window.document.getElementsByClassName('scrollTop')[0].style = 'display:flex;'
  }else {
    window.document.getElementsByClassName('scrollTop')[0].style = 'display:none;'
  }
}

const scrollToTop = function() {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}



window.onscroll = displayScroll;

window.document.getElementsByClassName('scrollTop')[0].addEventListener("click", scrollToTop);

window.document.getElementsByClassName('orderBox')[0].addEventListener("click", buttonClick0);

window.document.getElementsByClassName('orderBox')[1].addEventListener("click", buttonClick1); 

window.document.getElementsByClassName('scrollDown')[0].addEventListener("click", scrollDown);