// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){
var first=str.indexOf(c),last=str.lastIndexOf(c);
var length=last-first;

return str.includes(c) ? length:  str.indexOf(c);
  
}