
//Moving Zeros To The End

function moveZeros(arr) {
  return [
    ... arr.filter(x => x!==0),
    ... arr.filter(x => x===0)
  ]
}