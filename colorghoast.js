//Color Ghost

var Ghost = function() {
 let colors = ["white","yellow","purple","red"];
  this.color = colors[ ~~(colors.length * Math.random())]
};