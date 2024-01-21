// Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr){
    const arr0=[];
  for (let i=0;i<=arr.length;i+=3){
    arr0.push(arr.slice(i,i+3))
    }
    return arr0.map(v=>v.reduce((a,b)=>a+b,0)).slice(0,-1)
  
}