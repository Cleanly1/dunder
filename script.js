

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

const buttonClick = function(){
  window.document.getElementsByClassName('orderBox')[0].style.background = '#d8d5d5';
  window.document.getElementsByClassName('orderBox')[1].style.background = '#FFFFFF';
}

const buttonClick2 = function(){
  window.document.getElementsByClassName('orderBox')[1].style.background = '#d8d5d5';
  window.document.getElementsByClassName('orderBox')[0].style.background = '#FFFFFF';
}


window.document.getElementsByClassName('orderBox')[0].addEventListener("click", buttonClick);

window.document.getElementsByClassName('orderBox')[1].addEventListener("click", buttonClick2);


window.document.getElementsByClassName('scrollDown')[0].addEventListener("click", scrollDown);