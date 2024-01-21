// Training JS #9: loop statement --while and do..while
function padIt(str,n){
    //Initialize two variables sum and num
   while (n>0) {   //Determine the expression in brackets, while true, 
       if(n%2) {               //run the code block one time, while false, break the loop
     str="*" + str;      //Each time num will be added to the current value of sum
                 }      //It can be simplified as:  sum+=num
     else {
          str=str +"*";
     }       //Each time the value of num increases by 1
     n--                  //It can be simplified as:  num++
   }
   return str;      
 }