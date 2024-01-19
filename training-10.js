// Training JS #10: loop statement --for

function pickIt(arr){
    var odd=[],even=[];
     for (var i=0;i<arr.length;i++){
      if (arr[i] % 2){
        odd.push(arr[i])
      } else {
        even.push(arr[i])
      }
    }
    
    
    return [odd,even];
  }