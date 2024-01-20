
//Validate credit card expiry date

function checkExpiryValid (date) {
    let [month, year] = date.replace(" ","").replace("-","/").split("/").map(Number);
  year = year + (year<100 ? 2000 : 0);
  
  let now = new Date();
  let monthNow = now.getMonth()+1;
  let yearNow = now.getFullYear();
  
  return yearNow<year || (yearNow==year && monthNow<=month)
}