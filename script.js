

var pageHeight = 0;

function findHighestNode(nodesList) {
  for (var i = nodesList.length - 1; i >= 0; i--) {
    if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
      var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
      pageHeight = Math.max(elHeight, pageHeight);
    }
    if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
  }
}

findHighestNode(document.documentElement.childNodes);
 
const scrollDown = function(){
  window.scrollTo({
    top: pageHeight,
    left: 0,
    behavior: 'smooth'
  });
  
}


window.document.getElementsByClassName('scrollDown')[0].addEventListener("click", scrollDown);