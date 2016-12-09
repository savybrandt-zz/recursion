// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var doc = document.body;

  function getClass(doc, results, className){
    var children = doc.childNodes
    for (var i = 0; i < children.length; i++){
        var classes = children[i].classList;
        if (classes && classes.contains(className)) {
            results.push(children[i]);
        }
        if (children[i].childNodes[0]){
            getClass(children[i], results, className);
        }
    }
  }
  getClass(document, results, className);
  return results;
};