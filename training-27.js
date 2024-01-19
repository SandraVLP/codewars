// Training JS #27: methods of arrayObject---filter()

function countGrade(scores){
   let res={};
  res["S"]=scores.filter( x => x===100).length;
  res["A"]=scores.filter( x => x<100 && x>=90).length;
  res["B"]=scores.filter( x => x<90  && x>=80).length;
  res["C"]=scores.filter( x => x<80  && x>=60).length;
  res["D"]=scores.filter( x => x<60  && x>=0 ).length;
  res["X"]=scores.filter( x => x===-1).length;
  return res;
  
}