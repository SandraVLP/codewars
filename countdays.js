
//Count the days!

function countDays(d){
   let d_0 = new Date(d).setHours(0,0,0,0)
  let now_0 = new Date().setHours(0,0,0,0)
  
  let daysLeft = Math.round( (d - Date.now()) / (24*3600*1000) )

  if (daysLeft < 0 ) return "The day is in the past!";
  if (daysLeft == 0) return "Today is the day!";
  
  return daysLeft + " days";
}