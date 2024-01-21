// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

function blackAndWhite(arr){
    if (!Array.isArray(arr)) return "It's a fake array";
  if (arr.indexOf(5)>=0 && arr.indexOf(13)>=0) return "It's a black array";
  return "It's a white array"; 
  
}