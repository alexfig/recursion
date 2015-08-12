// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var root = document.body;
  var elements = [];
  
  var getElementsByClassNameHelper = function(element){
    if (element.classList.contains(className)) elements.push(element);

    if (element.hasChildNodes()) {
      var children = element.children;
      for (var i = 0; i < children.length; i++) {
        getElementsByClassNameHelper(children[i]);
      }
    }
  };
   getElementsByClassNameHelper(root);
   return elements;
};
