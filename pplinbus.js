//Number of People in the Bus

var number = function(busStops){
  return busStops.reduce( (sum,el) => sum+el[0]-el[1] , 0)
}