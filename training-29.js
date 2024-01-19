// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr){
 return[].concat(...arr).sort( (x,y) => y-x ).join(">");
  
}