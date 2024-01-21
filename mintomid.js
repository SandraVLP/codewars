//Minutes to Midnight

function minutesToMidnight(d){
  let d2 = new Date(new Date(d).setDate( d.getDate() +1 )).setHours(0,0,0,0);
  
  let last = Math.round( (d2-d) / (1000*60) )
  
  return last + " minute" + (last===1  ? "" : "s")
}