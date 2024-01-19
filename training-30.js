//Training JS #30: methods of arrayObject---reduce() and reduceRight()

function tailAndHead(arr){
  let arr1=[];
  for (i=0; i<arr.length-1; i++){
    arr1.push(   arr[i]%10  + parseInt(arr[i+1].toString()[0])   )
  }

  return arr1.reduce( (a,b) => a*b );
  
}