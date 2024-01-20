
//Password Check - Binary to String

function decodePass( passArr, bin ){
  const pass = bin.split(' ').map(v=>String.fromCharCode(parseInt(v,2))).join('')
  return passArr.includes(pass)?pass:false
}