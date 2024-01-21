
//Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n){
  var [a,b] = n.toString().split(".")
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n)
  
}