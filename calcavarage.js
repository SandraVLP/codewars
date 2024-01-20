//Calculate average

function findAverage(array) {
return array.reduce( (sum,x) => sum+x , 0)  / (array.length ||1) ;
}