// Training JS #25: methods of arrayObject---reverse() and sort()

function sortIt(arr){
  var res = [...arr];
	res.sort((a, b) => {
		let n = arr.filter(x => x === a).length;
		let m = arr.filter(x => x === b).length;
		if (m == n) return b - a;
		return n - m;
	})
	return res;
  
}