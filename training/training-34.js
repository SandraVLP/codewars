
//Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume,n){
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
  
}