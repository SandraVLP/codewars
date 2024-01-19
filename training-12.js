
//Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
  let res = [];
    for (var key in obj){
    if(key.length == 5) {
      res.push(key)
    }
     if(obj[key].length == 5) {
      res.push(obj[key])
    }
  }
  return res
}